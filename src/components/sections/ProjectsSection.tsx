import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="space-y-10" data-purpose="featured-projects" id="projetos">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="font-mono text-xs text-brand-teal font-semibold tracking-wider font-mono-tag">
          {t.projects.tag}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Trabalho que fala por si.
        </h2>
      </div>

      {/* Projects Desktop 3-column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1: Auth (FastAPI + JWT + RBAC) */}
        <article
          className="rounded-2xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-300 p-6 flex flex-col justify-between group"
          data-purpose="project-card"
        >
          <div className="space-y-4">
            {/* Project Visual Showcase / Mock Header */}
            <div className="h-44 w-full rounded-xl bg-[#091116] border border-brand-border/70 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-brand-teal/30 transition-all font-mono text-xs">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-brand-teal flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                  Live on Vercel
                </span>
                <span className="text-slate-500">FastAPI • JWT</span>
              </div>
              {/* Mini Auth diagram */}
              <div className="space-y-1.5 text-[11px]">
                <p className="text-slate-300"><span className="text-brand-teal">POST</span> /api/v1/auth/login</p>
                <p className="text-slate-400 pl-2">→ Bearer Token [HMAC-SHA256]</p>
                <p className="text-emerald-400 pl-2">[200 OK] RBAC Verified</p>
              </div>
              <p className="text-[11px] text-slate-500">Controlo de Acessos &amp; Segurança Robusta</p>
            </div>

            {/* Title & External Link */}
            <div className="flex items-start justify-between gap-2 pt-2">
              <h3 className="text-xl font-bold text-white group-hover:text-brand-teal transition-colors">
                Auth (FastAPI Service)
              </h3>
              <a
                aria-label="Abrir Auth Live Demo"
                className="text-slate-400 hover:text-brand-teal transition-colors"
                href="https://auth-jdho56snb-ndonda-daniel-matondos-projects.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed">
              Aplicação base robusta em FastAPI implementando autenticação JWT, controlo de acessos baseado em papéis (RBAC) e melhores práticas de segurança de APIs.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-[11px] font-mono text-slate-300">Python</span>
              <span className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-[11px] font-mono text-slate-300">FastAPI</span>
              <span className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-[11px] font-mono text-slate-300">JWT</span>
              <span className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-[11px] font-mono text-slate-300">RBAC</span>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="mt-6 pt-5 border-t border-brand-border/60 flex items-center justify-between gap-3">
            <Link
              to="/projetos"
              className="w-full py-2.5 px-4 rounded-lg bg-brand-teal/15 hover:bg-brand-teal/25 text-brand-teal text-xs font-semibold text-center transition-colors border border-brand-teal/20"
            >
              Ver Detalhes
            </Link>
            <a
              aria-label="Código no GitHub"
              className="p-2.5 rounded-lg border border-brand-border hover:border-slate-500 text-slate-300 hover:text-white transition-colors"
              href="https://github.com/NdondaDaniel2020/Auth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </article>

        {/* Project 2: Webserv */}
        <article
          className="rounded-2xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-300 p-6 flex flex-col justify-between group"
          data-purpose="project-card"
        >
          <div className="space-y-4">
            {/* Project Visual Showcase / Mock Terminal */}
            <div className="h-44 w-full rounded-xl bg-[#091116] border border-brand-border/70 p-4 font-mono text-xs flex flex-col justify-between group-hover:border-brand-teal/30 transition-all">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-brand-teal">C++98 / Sockets Non-blocking</span>
                <span className="text-slate-500">epoll/kqueue</span>
              </div>
              <div className="text-slate-300 space-y-1">
                <p className="text-slate-400">$ ./webserv conf/default.conf</p>
                <p className="text-brand-teal text-[11px]">[INFO] Server listening on 0.0.0.0:8080 (multiplexing)</p>
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal inline-block"></span>
                <span>Ready for incoming HTTP client requests</span>
              </div>
            </div>

            {/* Title & External Link */}
            <div className="flex items-start justify-between gap-2 pt-2">
              <h3 className="text-xl font-bold text-white group-hover:text-brand-teal transition-colors">
                Webserv
              </h3>
              <a
                aria-label="Abrir Webserv"
                className="text-slate-400 hover:text-brand-teal transition-colors"
                href="https://github.com/NdondaDaniel2020/webserv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed">
              Servidor web HTTP desenvolvido em C++, explorando sockets, concorrência, I/O multiplexing e fundamentos profundos de infraestrutura de servidores.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-[11px] font-mono text-slate-300">C++</span>
              <span className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-[11px] font-mono text-slate-300">HTTP</span>
              <span className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-[11px] font-mono text-slate-300">Sockets</span>
              <span className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-[11px] font-mono text-slate-300">RFC 7230</span>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="mt-6 pt-5 border-t border-brand-border/60">
            <a
              className="w-full py-2.5 px-4 rounded-lg bg-brand-surface hover:bg-brand-cardHover border border-brand-border hover:border-slate-500 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              href="https://github.com/NdondaDaniel2020/webserv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Ver Repositório GitHub</span>
            </a>
          </div>
        </article>

        {/* Project 3: SalesManagement */}
        <article
          className="rounded-2xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-300 p-6 flex flex-col justify-between group"
          data-purpose="project-card"
        >
          <div className="space-y-4">
            {/* Project Visual Showcase / Mock GUI */}
            <div className="h-44 w-full rounded-xl bg-[#091116] border border-brand-border/70 p-4 font-mono text-xs flex flex-col justify-between group-hover:border-brand-teal/30 transition-all">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-brand-teal">Desktop GUI • PySide6</span>
                <span className="text-slate-500">Local SQLite Engine</span>
              </div>
              {/* Mini Stats grid */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 rounded bg-brand-surface/70 border border-brand-border/60 text-center">
                  <div className="text-[10px] text-slate-400">Vendas</div>
                  <div className="text-white font-bold text-xs">+34%</div>
                </div>
                <div className="p-2 rounded bg-brand-surface/70 border border-brand-border/60 text-center">
                  <div className="text-[10px] text-slate-400">Stock</div>
                  <div className="text-brand-teal font-bold text-xs">1.4k</div>
                </div>
                <div className="p-2 rounded bg-brand-surface/70 border border-brand-border/60 text-center">
                  <div className="text-[10px] text-slate-400">Sync</div>
                  <div className="text-emerald-400 font-bold text-xs">OK</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">Arquitetura modular &amp; relatórios em alta performance</p>
            </div>

            {/* Title & External Link */}
            <div className="flex items-start justify-between gap-2 pt-2">
              <h3 className="text-xl font-bold text-white group-hover:text-brand-teal transition-colors">
                SalesManagement
              </h3>
              <a
                aria-label="Abrir SalesManagement"
                className="text-slate-400 hover:text-brand-teal transition-colors"
                href="https://github.com/NdondaDaniel2020/SalesManagement"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed">
              Aplicação de gestão construída com arquitectura modular, emissão de relatórios automatizados e interface desktop fluida para pequenas empresas.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-[11px] font-mono text-slate-300">Python</span>
              <span className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-[11px] font-mono text-slate-300">PySide6</span>
              <span className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-[11px] font-mono text-slate-300">SQLite</span>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="mt-6 pt-5 border-t border-brand-border/60">
            <a
              className="w-full py-2.5 px-4 rounded-lg bg-brand-surface hover:bg-brand-cardHover border border-brand-border hover:border-slate-500 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              href="https://github.com/NdondaDaniel2020/SalesManagement"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Ver Repositório GitHub</span>
            </a>
          </div>
        </article>
      </div>

      {/* Botão Ver Todos os Projetos */}
      <div className="mt-10 flex justify-center">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-800 bg-gray-900/60 hover:bg-gray-800/80 hover:border-emerald-500/50 text-gray-300 hover:text-white font-medium text-sm transition-all duration-200"
        >
          <ExternalLink className="w-4 h-4 text-emerald-400" />
          <span>Ver Todos os Projetos</span>
        </Link>
      </div>
    </section>
  );
};
