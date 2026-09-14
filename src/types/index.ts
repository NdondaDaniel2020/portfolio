export interface Project {
  id: string;
  name: string;
  description: {
    pt: string;
    en: string;
  };
  category: 'systems' | 'web' | 'backend' | 'data' | 'tools';
  featured: boolean;
  pinned: boolean;
  stars?: number;
  forks?: number;
  language: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  visualType?: 'chart' | 'code' | 'terminal' | 'stats';
  codeSnippet?: string;
  updatedAt?: string;
}

export interface Article {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  summary: {
    pt: string;
    en: string;
  };
  url: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: {
    pt: string;
    en: string;
  };
  skills: {
    name: string;
    level: string;
  }[];
}

export interface EngineeringStats {
  totalCommitsYear: number;
  year: number;
  totalRepos: number;
  productionSystems: number;
  mainLanguagesCount: number;
  mainLanguages: string[];
  lastUpdated: string;
}
