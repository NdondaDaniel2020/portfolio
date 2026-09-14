import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_USERNAME = 'NdondaDaniel2020';
const MEDIUM_USERNAME = 'ndondadaniel2020';

const PROJECTS_PATH = path.resolve(__dirname, '../src/data/projects.json');
const ARTICLES_PATH = path.resolve(__dirname, '../src/data/articles.json');
const STATS_PATH = path.resolve(__dirname, '../src/data/stats.json');

async function syncGithubStats() {
  console.log(`[Sync] Buscando estatísticas do GitHub para @${GITHUB_USERNAME}...`);
  try {
    const token = process.env.GITHUB_TOKEN;
    const currentYear = new Date().getFullYear();
    const fromDate = `${currentYear}-01-01T00:00:00Z`;

    // Consulta GraphQL para buscar contagem real de commits do ano
    const query = `
      query($login: String!, $from: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from) {
            totalCommitContributions
            totalContributions
          }
        }
      }
    `;

    let totalCommits = 1913; // Valor base real registrado

    if (token) {
      const gqlRes = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'User-Agent': 'ndonda-portfolio-sync',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables: { login: GITHUB_USERNAME, from: fromDate } }),
      });

      if (gqlRes.ok) {
        const gqlData: any = await gqlRes.json();
        const commits = gqlData?.data?.user?.contributionsCollection?.totalCommitContributions;
        if (typeof commits === 'number') {
          totalCommits = commits;
        }
      }
    }

    // Lê projects.json para calcular métricas dinâmicas reais
    let projects: any[] = [];
    if (fs.existsSync(PROJECTS_PATH)) {
      projects = JSON.parse(fs.readFileSync(PROJECTS_PATH, 'utf-8'));
    }

    const prodCount = projects.filter((p) => Boolean(p.liveUrl)).length;
    const languages = Array.from(
      new Set(projects.map((p) => p.language).filter((l) => l && l !== 'Code' && l !== 'Git'))
    );

    const stats = {
      totalCommitsYear: totalCommits,
      year: currentYear,
      totalRepos: projects.length,
      productionSystems: prodCount,
      mainLanguagesCount: languages.length,
      mainLanguages: languages,
      lastUpdated: new Date().toISOString().split('T')[0],
    };

    fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2), 'utf-8');
    console.log(`[Sync Success] Estatísticas salvas em stats.json (Commits ${currentYear}: ${totalCommits}, Prod: ${prodCount}, Langs: ${languages.length}).`);
  } catch (error) {
    console.error('[Sync Error] Falha ao sincronizar estatísticas do GitHub:', error);
  }
}

async function syncGithubRepos() {
  console.log(`[Sync] Buscando repositórios do GitHub para @${GITHUB_USERNAME}...`);
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      headers: {
        'User-Agent': 'ndonda-portfolio-sync',
      },
    });

    if (!res.ok) {
      console.warn(`[Sync Warning] GitHub API respondeu com status ${res.status}. Mantendo dados locais em cache.`);
      return;
    }

    const repos: any[] = await res.json();
    if (!Array.isArray(repos)) {
      console.warn('[Sync Warning] Formato de resposta do GitHub inválido. Mantendo dados locais.');
      return;
    }

    // Lê os dados existentes para preservar customizações manuais (featured, descrições bilíngues, etc.)
    let existingProjects: any[] = [];
    if (fs.existsSync(PROJECTS_PATH)) {
      try {
        existingProjects = JSON.parse(fs.readFileSync(PROJECTS_PATH, 'utf-8'));
      } catch (err) {
        console.warn('[Sync Warning] Erro ao ler projects.json existente.', err);
      }
    }

    const projectsMap = new Map<string, any>();
    existingProjects.forEach((p) => {
      projectsMap.set(p.name.toLowerCase(), p);
    });

    // Mapeia e mescla repositórios
    const updatedProjects = repos
      .filter((r) => !r.fork && !r.archived && r.name !== GITHUB_USERNAME)
      .map((r) => {
        const existing = projectsMap.get(r.name.toLowerCase());
        return {
          id: r.name.toLowerCase().replace(/[^a-z0-9_-]/g, '-'),
          name: existing?.name || r.name,
          description: {
            pt: existing?.description?.pt || r.description || 'Repositório público no GitHub.',
            en: existing?.description?.en || r.description || 'Public GitHub repository.',
          },
          category: existing?.category || 'backend',
          featured: existing ? existing.featured : false,
          pinned: existing ? existing.pinned : false,
          stars: r.stargazers_count ?? 0,
          forks: r.forks_count ?? 0,
          language: r.language || existing?.language || 'Code',
          technologies: existing?.technologies || (r.language ? [r.language] : ['Git']),
          githubUrl: r.html_url,
          liveUrl: r.homepage || existing?.liveUrl,
          visualType: existing?.visualType || 'terminal',
          updatedAt: r.updated_at ? r.updated_at.split('T')[0] : existing?.updatedAt,
        };
      });

    // Se temos repositórios válidos, mescla priorizando os featured
    if (updatedProjects.length > 0) {
      // Garante que repositórios customizados que talvez sejam privados ou manuais não sejam perdidos
      const finalProjects = [...updatedProjects];
      existingProjects.forEach((ex) => {
        if (!finalProjects.some((p) => p.id === ex.id)) {
          finalProjects.push(ex);
        }
      });

      fs.writeFileSync(PROJECTS_PATH, JSON.stringify(finalProjects, null, 2), 'utf-8');
      console.log(`[Sync Success] ${finalProjects.length} repositórios atualizados com sucesso em projects.json.`);
    }
  } catch (error) {
    console.error('[Sync Error] Falha na sincronização do GitHub:', error);
    console.log('[Sync Fallback] Os dados de projects.json permanecem intactos.');
  }
}

async function syncMediumArticles() {
  console.log(`[Sync] Buscando artigos do Medium para @${MEDIUM_USERNAME}...`);
  try {
    const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);

    if (!res.ok) {
      console.warn(`[Sync Warning] RSS to JSON respondeu com status ${res.status}. Mantendo dados locais em cache.`);
      return;
    }

    const data: any = await res.json();
    if (data.status !== 'ok' || !Array.isArray(data.items)) {
      console.warn('[Sync Warning] Feed do Medium indisponível ou sem artigos. Mantendo cache local.');
      return;
    }

    let existingArticles: any[] = [];
    if (fs.existsSync(ARTICLES_PATH)) {
      try {
        existingArticles = JSON.parse(fs.readFileSync(ARTICLES_PATH, 'utf-8'));
      } catch (err) {
        console.warn('[Sync Warning] Erro ao ler articles.json existente.', err);
      }
    }

    const articlesMap = new Map<string, any>();
    existingArticles.forEach((a) => {
      articlesMap.set(a.url, a);
    });

    const cleanSummary = (html: string) => {
      return html
        .replace(/<[^>]*>?/gm, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .slice(0, 160)
        .trim() + '...';
    };

    const extractSnippet = (contentHtml: string) => {
      // Busca blocos <pre>
      const preMatches = contentHtml.match(/<pre[^>]*>([\s\S]*?)<\/pre>/gi);
      if (!preMatches || preMatches.length === 0) return undefined;

      for (const rawPre of preMatches) {
        // Converte quebras de linha e entidades HTML
        const cleanPre = rawPre
          .replace(/<br\s*[\/]?>/gi, '\n')
          .replace(/<\/p>/gi, '\n')
          .replace(/<p[^>]*>/gi, '')
          .replace(/<[^>]+>/g, '')
          .replace(/&gt;/g, '>')
          .replace(/&lt;/g, '<')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .trim();

        if (!cleanPre || cleanPre.length < 15) continue;

        // Prioridade 1: Código Python real (funções, classes, imports)
        const isPython = /(async\s+def\s+|def\s+|class\s+|@\w+|raise\s+|import\s+)/i.test(cleanPre);
        if (isPython) {
          // Extrai até 16 linhas significativas
          const lines = cleanPre.split('\n').filter((l, idx) => idx < 18);
          let filename = 'dependencies.py';
          if (cleanPre.includes('get_current_user')) filename = 'auth_dependencies.py';
          else if (cleanPre.includes('User') || cleanPre.includes('Base')) filename = 'models.py';
          else if (cleanPre.includes('uv') || cleanPre.includes('asyncio')) filename = 'event_loop.py';

          return {
            type: 'code' as const,
            filename,
            content: lines.join('\n'),
            language: 'python',
          };
        }

        // Prioridade 2: Comandos de Terminal / Shell (uv run, pytest, alembic, docker)
        const isTerminal = /(uv\s+run|pytest|alembic\s+upgrade|docker\s+run|pip\s+install)/i.test(cleanPre);
        if (isTerminal) {
          const lines = cleanPre.split('\n').filter((l, idx) => idx < 12);
          return {
            type: 'terminal' as const,
            filename: 'bash',
            content: lines.join('\n'),
            language: 'bash',
          };
        }

        // Prioridade 3: Diagrama / Tabela ASCII (bordas ┌, │, ─, +, |)
        const isDiagram = /[┌│─┼└┤┬┴├]/.test(cleanPre) || (cleanPre.includes('|') && cleanPre.includes('---'));
        if (isDiagram) {
          const lines = cleanPre.split('\n').filter((l, idx) => idx < 14);
          return {
            type: 'diagram' as const,
            filename: 'architecture.ascii',
            content: lines.join('\n'),
            language: 'text',
          };
        }
      }

      return undefined;
    };

    const updatedArticles = data.items.map((item: any) => {
      const existing = articlesMap.get(item.link);
      const summaryText = cleanSummary(item.description || item.content || '');

      // Extrai imagem de capa do Medium (thumbnail ou primeiro <img> no conteúdo)
      const contentHtml = item.content || item.description || '';
      const imgMatch = contentHtml.match(/<img[^>]+src=["']([^"']+)["']/i);
      const coverImage = item.thumbnail || (imgMatch ? imgMatch[1] : existing?.coverImage);

      // Extrai snippet de código, diagrama ou terminal do artigo
      const snippet = extractSnippet(contentHtml) || existing?.snippet;

      return {
        id: item.guid || item.link.split('/').pop() || String(Date.now()),
        title: {
          pt: existing?.title?.pt || item.title,
          en: existing?.title?.en || item.title,
        },
        summary: {
          pt: existing?.summary?.pt || summaryText,
          en: existing?.summary?.en || summaryText,
        },
        url: item.link,
        publishedAt: item.pubDate ? item.pubDate.split(' ')[0] : '2026-08-01',
        readTime: existing?.readTime || '7 min de leitura',
        tags: item.categories && item.categories.length > 0 ? item.categories : (existing?.tags || ['Engineering']),
        featured: existing ? existing.featured : false,
        coverImage: coverImage || undefined,
        snippet: snippet || undefined,
      };
    });

    if (updatedArticles.length > 0) {
      fs.writeFileSync(ARTICLES_PATH, JSON.stringify(updatedArticles, null, 2), 'utf-8');
      console.log(`[Sync Success] ${updatedArticles.length} artigos sincronizados com sucesso em articles.json.`);
    }
  } catch (error) {
    console.error('[Sync Error] Falha na sincronização do Medium:', error);
    console.log('[Sync Fallback] Os dados de articles.json permanecem intactos.');
  }
}

async function main() {
  console.log('--- Iniciando Pipeline de Sincronização de Dados ---');
  await syncGithubRepos();
  await syncMediumArticles();
  await syncGithubStats();
  console.log('--- Pipeline de Sincronização Finalizado ---');
}

main();
