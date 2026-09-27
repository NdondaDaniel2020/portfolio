import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import projectDetailsDataRaw from '../data/project-details.json';
import type { ProjectDetails, ProjectMediaItem } from '../types';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Play,
  ImageIcon,
  Layers,
  Sparkles,
  Film,
  Share2,
  Check,
} from 'lucide-react';
import { GithubIcon } from '../components/common/BrandIcons';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();

  const detailsMap = projectDetailsDataRaw as Record<string, ProjectDetails>;
  const project = id ? detailsMap[id.toLowerCase()] : undefined;

  // Monta a lista unificada de mídias para a galeria
  const allMediaItems = useMemo<ProjectMediaItem[]>(() => {
    if (!project) return [];
    const items: ProjectMediaItem[] = [];

    // Adiciona imagens da galeria
    if (project.media?.gallery && Array.isArray(project.media.gallery)) {
      items.push(...project.media.gallery);
    }

    // Adiciona vídeos à lista unificada se existirem
    if (project.media?.videos && Array.isArray(project.media.videos)) {
      project.media.videos.forEach((v) => {
        // Evita duplicar se já foi inserido na galeria
        const alreadyInGallery = items.some((it) => it.src === v.src);
        if (!alreadyInGallery) {
          items.push({
            type: 'video',
            src: v.src,
            caption: v.title,
            alt: v.description,
          });
        }
      });
    }

    // Se a capa não estiver nos itens, garante como primeira opção
    if (project.media?.cover && !items.some((it) => it.src === project.media.cover)) {
      items.unshift({
        type: 'image',
        src: project.media.cover,
        caption: project.name,
      });
    }

    return items;
  }, [project]);

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Reseta índice de mídia ao trocar de projeto
  useEffect(() => {
    setActiveMediaIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!project) {
    return (
      <main className="max-w-4xl mx-auto px-6 lg:px-12 pt-36 pb-24 text-center space-y-6">
        <div className="text-5xl font-mono text-brand-teal">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          {t.project_detail.not_found_title}
        </h1>
        <p className="text-brand-muted max-w-md mx-auto text-sm">
          {t.project_detail.not_found_desc}
        </p>
        <div className="pt-4">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-teal text-slate-950 font-bold text-xs font-mono hover:bg-emerald-300 transition-all glow-teal-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.project_detail.back_to_projects}</span>
          </Link>
        </div>
      </main>
    );
  }

  const activeMedia = allMediaItems[activeMediaIndex] || {
    type: 'image',
    src: project.media.cover,
    caption: project.name,
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-24 space-y-10 sm:space-y-12">
      {/* 1. Top Navigation Bar */}
      <div className="flex items-center justify-between border-b border-brand-border/60 pb-5">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-brand-teal transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{t.project_detail.back_to_projects}</span>
        </Link>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border hover:border-slate-500 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
          title="Copiar link do projeto"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-slate-400" />
              <span>Compartilhar</span>
            </>
          )}
        </button>
      </div>

      {/* 2. Hero Media Showcase (Referência Visual: Captura 21-44-32.png) */}
      <section className="space-y-4" aria-label="Visualizador Multimídia">
        {/* Main Display Frame */}
        <div className="w-full rounded-2xl sm:rounded-3xl bg-[#070d12] border border-brand-border/80 overflow-hidden relative shadow-2xl group flex items-center justify-center min-h-[300px] sm:min-h-[440px] md:min-h-[520px]">
          {activeMedia.type === 'video' ? (
            <div className="w-full h-full flex items-center justify-center bg-black/90">
              <video
                key={activeMedia.src}
                src={activeMedia.src}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[540px] object-contain rounded-2xl"
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black/40 p-2 sm:p-4">
              <img
                src={activeMedia.src}
                alt={activeMedia.caption || activeMedia.alt || project.name}
                className="w-full max-h-[540px] object-contain rounded-xl transition-all duration-300"
                loading="eager"
              />
            </div>
          )}

          {/* Badge de Legenda / Status na Mídia Ativa */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 max-w-[85%] bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-xs text-slate-200 flex items-center gap-2 pointer-events-none">
            {activeMedia.type === 'video' ? (
              <Film className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            ) : (
              <ImageIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            )}
            <span className="truncate">{activeMedia.caption || project.name}</span>
          </div>

          {/* Indicador de Quantidade */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[11px] font-mono text-slate-300 pointer-events-none">
            {activeMediaIndex + 1} / {allMediaItems.length}
          </div>
        </div>

        {/* 3. Thumbnail Carousel Strip */}
        {allMediaItems.length > 1 && (
          <div className="space-y-2">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-brand-border scrollbar-track-transparent">
              {allMediaItems.map((media, idx) => {
                const isActive = idx === activeMediaIndex;
                return (
                  <button
                    key={`${media.src}-${idx}`}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative shrink-0 w-28 sm:w-36 h-20 sm:h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'border-brand-teal ring-2 ring-brand-teal/40 scale-[1.02]'
                        : 'border-brand-border/70 hover:border-slate-400 opacity-75 hover:opacity-100'
                    }`}
                    title={media.caption || `Mídia ${idx + 1}`}
                  >
                    {media.type === 'video' ? (
                      <div className="w-full h-full bg-[#0d161d] flex flex-col items-center justify-center p-2 text-center relative">
                        <Play className="w-6 h-6 text-brand-teal fill-brand-teal/20" />
                        <span className="text-[10px] text-slate-300 font-mono mt-1 line-clamp-1">
                          Vídeo
                        </span>
                      </div>
                    ) : (
                      <img
                        src={media.src}
                        alt={media.caption || `Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    {media.type === 'video' && (
                      <div className="absolute top-1 left-1 p-0.5 rounded bg-black/70">
                        <Film className="w-3 h-3 text-brand-teal" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] font-mono text-slate-500 text-right">
              Clique em uma miniatura para alternar a visualização
            </p>
          </div>
        )}
      </section>

      {/* 4. Project Identity & Action Bar */}
      <section className="space-y-6 pt-2">
        <div className="space-y-3">
          {/* Architecture Badge */}
          {project.architecture_type && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-surface border border-brand-teal/40 text-brand-teal text-xs font-mono font-medium">
              <Layers className="w-3.5 h-3.5" />
              <span>{project.architecture_type}</span>
            </div>
          )}

          {/* Project Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {project.name}
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-4xl">
            {project.tagline?.[language] || project.about?.[language]}
          </p>
        </div>

        {/* Technologies Chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-brand-surface border border-brand-border text-xs font-mono text-slate-300 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons (GitHub & Live Demo) */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-brand-surface hover:bg-brand-cardHover border border-brand-border hover:border-slate-400 text-white text-xs sm:text-sm font-semibold transition-all shadow-md group"
            >
              <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-white" />
              <span>{t.project_detail.view_code}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-brand-teal hover:bg-emerald-300 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-md glow-teal-sm group"
            >
              <ExternalLink className="w-4 h-4 text-slate-950" />
              <span>{t.project_detail.view_demo}</span>
            </a>
          )}
        </div>
      </section>

      {/* 5. Deep-Dive Section: Sobre este projeto */}
      <section className="rounded-2xl sm:rounded-3xl bg-brand-card border border-brand-border/80 p-6 sm:p-8 md:p-10 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-brand-teal text-sm font-mono uppercase tracking-wider font-semibold">
          <Sparkles className="w-4 h-4" />
          <h2>{t.project_detail.about_project}</h2>
        </div>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
          {project.about?.[language]}
        </p>
      </section>

      {/* 6. Technical Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="rounded-2xl sm:rounded-3xl bg-brand-card border border-brand-border/80 p-6 sm:p-8 md:p-10 space-y-6 shadow-xl">
          <div className="flex items-center gap-2 text-brand-teal text-sm font-mono uppercase tracking-wider font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <h2>{t.project_detail.technical_highlights}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border/60 flex items-start gap-3 hover:border-brand-teal/40 transition-colors"
              >
                <span className="p-1 rounded-md bg-brand-teal/10 text-brand-teal mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. Dedicated Videos Section (se houver múltiplos vídeos cadastrados) */}
      {project.media?.videos && project.media.videos.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-brand-teal text-sm font-mono uppercase tracking-wider font-semibold">
            <Film className="w-4 h-4" />
            <h2>{t.project_detail.videos_demos}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.media.videos.map((vid, vIdx) => (
              <div
                key={vid.id || vIdx}
                className="rounded-2xl bg-brand-card border border-brand-border/80 overflow-hidden flex flex-col justify-between hover:border-brand-teal/40 transition-all p-5 space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-base">{vid.title}</h3>
                    {vid.duration && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-surface border border-brand-border text-slate-400">
                        {vid.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {vid.description}
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-brand-border/60 bg-black/60">
                  <video
                    src={vid.src}
                    controls
                    preload="metadata"
                    className="w-full max-h-[260px] object-cover"
                  >
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
export default ProjectDetailPage;
