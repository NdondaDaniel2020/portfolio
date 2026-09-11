import fs from 'fs';
import path from 'path';

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  updated_at: string;
}

interface MediumFeedItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
}

const GITHUB_USERNAME = 'NdondaDaniel2020';
const MEDIUM_RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${GITHUB_USERNAME}`;

const PROJECTS_PATH = path.resolve(process.cwd(), 'src/data/projects.json');
const ARTICLES_PATH = path.resolve(process.cwd(), 'src/data/articles.json');

async function syncGitHub() {
  console.log('🔄 Sincronizando repositórios do GitHub...');
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
    if (!res.ok) {
      console.warn(`⚠️ Falha ao obter dados do GitHub (HTTP ${res.status}). Mantendo dados locais intactos.`);
      return;
    }

    const repos = (await res.json()) as GitHubRepo[];
    const validRepos = repos.filter((r) => !r.fork && !r.archived);

    // Carregar dados existentes para preservar categorias e traduções customizadas
    let existingProjects: any[] = [];
    if (fs.existsSync(PROJECTS_PATH)) {
      existingProjects = JSON.parse(fs.readFileSync(PROJECTS_PATH, 'utf-8'));
    }

    const mergedProjects = validRepos.map((repo) => {
      const existing = existingProjects.find((p) => p.name.toLowerCase() === repo.name.toLowerCase() || p.id === repo.name.toLowerCase());

      return {
        id: existing?.id || repo.name.toLowerCase(),
        name: existing?.name || repo.name,
        description: existing?.description || {
          pt: repo.description || 'Projeto desenvolvido por Ndonda Daniel Matondo.',
          en: repo.description || 'Project developed by Ndonda Daniel Matondo.'
        },
        category: existing?.category || (repo.language === 'C' ? 'systems' : repo.language === 'Python' ? 'backend' : 'web'),
        featured: existing?.featured ?? false,
        pinned: existing?.pinned ?? false,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || existing?.language || 'Code',
        technologies: existing?.technologies || [repo.language || 'Software'].filter(Boolean),
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || existing?.liveUrl || undefined,
        visualType: existing?.visualType || (repo.language === 'C' ? 'terminal' : 'code'),
        updatedAt: repo.updated_at
      };
    });

    // Se houver projetos manuais essenciais que não vieram da API, preservá-los
    existingProjects.forEach((p) => {
      if (!mergedProjects.some((mp) => mp.id === p.id)) {
        mergedProjects.push(p);
      }
    });

    fs.writeFileSync(PROJECTS_PATH, JSON.stringify(mergedProjects, null, 2), 'utf-8');
    console.log(`✅ ${mergedProjects.length} projetos sincronizados e gravados em ${PROJECTS_PATH}`);
  } catch (error) {
    console.error('❌ Erro inesperado durante o GitHub Sync:', error);
  }
}

async function syncMedium() {
  console.log('🔄 Sincronizando publicações do Medium...');
  try {
    const res = await fetch(MEDIUM_RSS_URL);
    if (!res.ok) {
      console.warn(`⚠️ Falha ao obter RSS do Medium (HTTP ${res.status}). Mantendo artigos locais intactos.`);
      return;
    }

    const data = await res.json();
    if (data.status !== 'ok' || !Array.isArray(data.items)) {
      console.warn('⚠️ Resposta inválida do Medium RSS. Mantendo artigos locais.');
      return;
    }

    const items = data.items as MediumFeedItem[];
    const articles = items.map((item) => {
      // Limpeza de tags HTML do resumo
      const cleanSummary = item.description.replace(/<[^>]*>?/gm, '').slice(0, 160) + '...';

      return {
        id: item.guid.split('/').pop() || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title: item.title,
        summary: cleanSummary,
        url: item.link,
        publishedAt: item.pubDate.split(' ')[0],
        readTime: '5 min de leitura',
        tags: item.categories.length > 0 ? item.categories : ['Engenharia', 'Software'],
        thumbnail: item.thumbnail || undefined
      };
    });

    if (articles.length > 0) {
      fs.writeFileSync(ARTICLES_PATH, JSON.stringify(articles, null, 2), 'utf-8');
      console.log(`✅ ${articles.length} artigos sincronizados e gravados em ${ARTICLES_PATH}`);
    }
  } catch (error) {
    console.error('❌ Erro inesperado durante o Medium Sync:', error);
  }
}

async function main() {
  console.log('🚀 Iniciando pipeline de sincronização de dados...');
  await syncGitHub();
  await syncMedium();
  console.log('🎉 Sincronização concluída com sucesso!');
}

main();
