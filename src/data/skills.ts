import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: {
      pt: "Linguagens & Fundamentos",
      en: "Languages & Foundations"
    },
    description: {
      pt: "Programação de baixo nível, tipagem estrita e linguagens modernas para desenvolvimento ágil.",
      en: "Low-level systems programming, strict type systems, and modern scripting languages."
    },
    skills: [
      { name: "C (C99 / POSIX)", level: "Avançado" },
      { name: "Python", level: "Avançado" },
      { name: "TypeScript", level: "Avançado" },
      { name: "JavaScript (ES6+)", level: "Avançado" },
      { name: "SQL", level: "Intermediário/Avançado" },
      { name: "Bash / Shell Scripting", level: "Intermediário" }
    ]
  },
  {
    title: {
      pt: "Backend & Arquitetura",
      en: "Backend & Architecture"
    },
    description: {
      pt: "Criação de APIs de alta disponibilidade, controle de concorrência e microsserviços.",
      en: "High-availability APIs, concurrency control, and distributed microservices."
    },
    skills: [
      { name: "FastAPI", level: "Avançado" },
      { name: "Node.js / Express", level: "Intermediário" },
      { name: "PostgreSQL", level: "Intermediário/Avançado" },
      { name: "Redis", level: "Intermediário" },
      { name: "POSIX Threads & Mutex", level: "Avançado" },
      { name: "RESTful & OpenAPI", level: "Avançado" }
    ]
  },
  {
    title: {
      pt: "Frontend & Interfaces",
      en: "Frontend & Interfaces"
    },
    description: {
      pt: "Ecossistemas modernos, renderização eficiente e design visual com precisão matemática.",
      en: "Modern web ecosystems, performant rendering, and pixel-perfect design engineering."
    },
    skills: [
      { name: "React", level: "Avançado" },
      { name: "Tailwind CSS", level: "Avançado" },
      { name: "Next.js", level: "Intermediário" },
      { name: "HTML5 / Semantic Web", level: "Avançado" },
      { name: "CSS3 / Flex & Grid", level: "Avançado" },
      { name: "Vite", level: "Avançado" }
    ]
  },
  {
    title: {
      pt: "DevOps & Ferramental",
      en: "DevOps & Tooling"
    },
    description: {
      pt: "Virtualização em containers, automação de integração contínua e versionamento refinado.",
      en: "Containerization, continuous integration pipelines, and strict version control."
    },
    skills: [
      { name: "Git & GitHub", level: "Avançado" },
      { name: "Docker & Docker Compose", level: "Intermediário/Avançado" },
      { name: "GitHub Actions (CI/CD)", level: "Intermediário" },
      { name: "Linux / UNIX CLI", level: "Avançado" },
      { name: "Valgrind & GDB", level: "Avançado" },
      { name: "Makefiles", level: "Avançado" }
    ]
  }
];
