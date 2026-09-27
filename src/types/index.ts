export interface ProjectMediaItem {
  type: 'image' | 'video';
  src: string;
  caption?: string;
  alt?: string;
}

export interface ProjectVideoItem {
  id: string;
  file?: string;
  title: string;
  description: string;
  category?: string;
  duration?: string;
  size_mb?: number;
  src: string;
}

export interface ProjectDetails {
  id: string;
  name: string;
  tagline: {
    pt: string;
    en: string;
  };
  category: string;
  featured: boolean;
  architecture_type?: string;
  about: {
    pt: string;
    en: string;
  };
  highlights: string[];
  technologies: string[];
  media: {
    cover: string;
    gallery: ProjectMediaItem[];
    videos?: ProjectVideoItem[];
  };
  githubUrl?: string;
  liveUrl?: string;
}

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
  hasDetails?: boolean;
  coverImage?: string;
}

export interface ArticleSnippet {
  type: 'code' | 'diagram' | 'terminal';
  filename?: string;
  content: string;
  language?: string;
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
  coverImage?: string;
  snippet?: ArticleSnippet;
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
