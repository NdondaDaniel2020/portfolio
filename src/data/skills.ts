import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: {
      pt: "Linguagens",
      en: "Languages",
    },
    skills: [
      { name: "Python", level: "Avançado" },
      { name: "C / C++", level: "Avançado" },
      { name: "TypeScript", level: "Avançado" },
      { name: "JavaScript", level: "Avançado" },
      { name: "SQL", level: "Sólido" },
      { name: "Bash / Shell", level: "Sólido" },
    ],
  },
  {
    title: {
      pt: "Backend & APIs",
      en: "Backend & APIs",
    },
    skills: [
      { name: "FastAPI", level: "Avançado" },
      { name: "Django", level: "Sólido" },
      { name: "Node.js / Express", level: "Sólido" },
      { name: "RESTful & GraphQL", level: "Avançado" },
      { name: "WebSockets / AsyncIO", level: "Avançado" },
      { name: "Microservices Architecture", level: "Sólido" },
    ],
  },
  {
    title: {
      pt: "Frontend & UI",
      en: "Frontend & UI",
    },
    skills: [
      { name: "React", level: "Avançado" },
      { name: "Next.js", level: "Sólido" },
      { name: "Tailwind CSS", level: "Avançado" },
      { name: "PySide6 (Qt)", level: "Avançado" },
      { name: "HTML5 / CSS3 Moderno", level: "Avançado" },
      { name: "Responsive & Accessible UI", level: "Avançado" },
    ],
  },
  {
    title: {
      pt: "Bancos de Dados & DevOps",
      en: "Databases & DevOps",
    },
    skills: [
      { name: "PostgreSQL", level: "Avançado" },
      { name: "Redis", level: "Sólido" },
      { name: "SQLite", level: "Avançado" },
      { name: "Docker & Distroless", level: "Sólido" },
      { name: "Git & GitHub Actions (CI/CD)", level: "Avançado" },
      { name: "Linux / Unix Systems", level: "Avançado" },
    ],
  },
];
