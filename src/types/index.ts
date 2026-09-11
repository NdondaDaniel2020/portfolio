export interface Project {
  id: string;
  name: string;
  description: {
    pt: string;
    en: string;
  };
  category: 'systems' | 'web' | 'backend' | 'data' | 'tools';
  featured?: boolean;
  pinned?: boolean;
  stars?: number;
  forks?: number;
  language?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  visualType?: 'terminal' | 'chart' | 'api' | 'docker' | 'code';
  updatedAt?: string;
}

export interface Article {
  id: string;
  title: string;
  summary: {
    pt: string;
    en: string;
  } | string;
  url: string;
  publishedAt: string;
  readTime?: string;
  tags: string[];
  thumbnail?: string;
}

export interface SkillCategory {
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  skills: {
    name: string;
    level: string; // e.g., 'Avançado', 'Intermediário' ou percentual
    icon?: string;
  }[];
}
