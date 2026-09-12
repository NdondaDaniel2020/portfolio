# ⚡ Ndonda Daniel Matondo — Portfolio & Engineering Showcase

> **Full Stack & Systems Engineer** focado em arquitetura backend de alta performance, sistemas em C/C++, ecossistema Python/FastAPI e aplicações web modernas com React + TypeScript.

📫 **Email**: [ndondadaniel2020@gmail.com](mailto:ndondadaniel2020@gmail.com)  
💼 **LinkedIn**: [Ndonda Daniel Matondo](https://www.linkedin.com/in/ndonda-daniel-matondo-098370402/)  
🐙 **GitHub**: [@NdondaDaniel2020](https://github.com/NdondaDaniel2020)  
✍️ **Medium**: [@ndondadaniel2020](https://medium.com/@ndondadaniel2020)

---

## 🚀 Visão Geral do Projeto

Este repositório contém a versão moderna e reescrita do portfólio profissional de Ndonda Daniel Matondo. O projeto migrou de páginas HTML estáticas para uma **Single Page Application (SPA)** escalável, rápida e tipada, desenvolvida com **React 19, TypeScript e Vite**.

### ✨ Principais Funcionalidades

- **🎨 Design System Dark Teal & Engenharia**:
  - Estética refinada inspirada em interfaces técnicas e terminais de engenharia (`#00F2B0`, `#070B0D`, `#0E151A`).
  - Terminal interativo customizado no Hero (`arch_engine.py`) com gráfico dinâmico de throughput de requisições.
- **☀️ Suporte a Tema Claro / Escuro (Dark / Light Mode)**:
  - Alternância de tema com persistência no `localStorage` e detecção de preferência do sistema.
  - Alto contraste garantido em ambos os temas, com terminais e blocos de código preservando legibilidade técnica.
- **🌍 Internacionalização (i18n)**:
  - Alternador bilíngue completo (**Português** e **Inglês**) para navegação, descrições, métricas e projetos.
- **📁 Exibição Paginada e Busca Inteligente**:
  - Página `/projetos` com paginação compacta (`[ ← ] Página X de Y [ → ]`), cards de altura consistente com truncamento elegante (`line-clamp-4`), busca em tempo real com atalho de teclado `Ctrl + K` e filtros por stack.
- **📝 Artigos Técnicos e Publicações**:
  - Página `/artigos` com visualizador de memória em C (`memory_inspect.c`), filtros por tópicos e integração direta com o Medium.
- **🔄 Sincronização Automatizada via GitHub Actions**:
  - Script (`scripts/sync-data.ts`) e workflow que sincroniza automaticamente projetos públicos do GitHub e feeds RSS do Medium com fallback local seguro.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologias |
| :--- | :--- |
| **Frontend Core** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/) |
| **Roteamento** | [React Router v7](https://reactrouter.com/) |
| **Estilização** | [Tailwind CSS v3](https://tailwindcss.com/), PostCSS, CSS Variables |
| **Ícones** | [Lucide React](https://lucide.dev/) |
| **Qualidade & Linting** | [Oxlint](https://oxc.rs/) |
| **Deploy & Hosting** | [Vercel](https://vercel.com/) / [GitHub Pages](https://pages.github.com/) |

---

## 📂 Estrutura de Diretórios

```
portfolio/
├── .github/
│   └── workflows/
│       └── sync-and-deploy.yml    # Workflow de sincronização automática e deploy
├── public/
│   ├── curriculo/                 # Currículos em PDF (PT e EN)
│   └── ndonda.png                 # Foto de perfil
├── scripts/
│   └── sync-data.ts               # Script de sincronização com APIs GitHub e Medium
├── src/
│   ├── components/
│   │   ├── common/                # Ícones, paginação compacta, scroll to top
│   │   ├── controls/              # ThemeToggle e LangToggle
│   │   ├── layout/                # Navbar, MobileMenu e Footer
│   │   └── sections/              # Hero, TerminalCard, About, Projects, Skills, Articles, Contact
│   ├── context/                   # ThemeContext e LanguageContext
│   ├── data/                      # JSONs estáticos (projects.json, articles.json, profile.ts)
│   ├── locales/                   # Dicionários de tradução (pt.ts, en.ts)
│   ├── pages/                     # HomePage, ProjectsPage, ArticlesPage
│   ├── styles/                    # index.css e design tokens
│   ├── types/                     # Tipagens TypeScript (projects, articles, theme)
│   ├── App.tsx                    # Roteamento da aplicação
│   └── main.tsx                   # Ponto de entrada do React
├── vercel.json                    # Regras de rewrite SPA para deploy na Vercel
└── package.json
```

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior
- Gerenciador de pacotes `npm` ou `pnpm`

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/NdondaDaniel2020/portfolio.git
cd portfolio/portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
O projeto estará disponível em `http://localhost:5173`.

### Outros Comandos

- **Build de Produção**:
  ```bash
  npm run build
  ```
- **Sincronizar Dados do GitHub & Medium**:
  ```bash
  npm run sync-data
  ```
- **Linting de Código**:
  ```bash
  npm run lint
  ```
- **Pré-visualizar o Build**:
  ```bash
  npm run preview
  ```

---

## 🚢 Deploy na Vercel

O projeto está totalmente preparado para a Vercel com suporte a rotas de SPA configuradas no `vercel.json`.

1. Conecte o repositório na [Vercel](https://vercel.com).
2. Defina o **Root Directory** como `portfolio` (se aplicável) ou `./`.
3. A Vercel detectará o framework como **Vite** automaticamente:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. O deploy gerará automaticamente uma URL gratuita da Vercel (ex: `https://seu-projeto.vercel.app`).

---

## 📜 Licença

Desenvolvido por **Ndonda Daniel Matondo**. Todos os direitos reservados © 2026.
