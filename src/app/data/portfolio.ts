export type ProjectTone = "violet" | "cyan" | "amber";

export type PortfolioProject = {
  id: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  outcome: string;
  stack: string[];
  live?: string;
  code?: string;
  tone: ProjectTone;
};

export const projects: PortfolioProject[] = [
  {
    id: "rag-chatbot",
    number: "01",
    category: "AI knowledge systems",
    title: "Contextual AI Assistant",
    summary:
      "A full-stack RAG chatbot that turns document collections into useful, grounded conversations.",
    outcome:
      "JWT auth, PDF ingestion, vector search, and response grounding in one focused product flow.",
    stack: ["Python", "Flask", "LLM", "Vector search", "MongoDB"],
    live: "https://cse-dev.vercel.app/",
    tone: "violet",
  },
  {
    id: "library-system",
    number: "02",
    category: "Operations platform",
    title: "Library Management System",
    summary:
      "A role-based platform for browsing, borrowing, and administrating a growing collection.",
    outcome:
      "Built to replace manual handling with clear workflows for superadmins, admins, and users.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    live: "https://library-management-system-frontend-phi.vercel.app/",
    tone: "cyan",
  },
  {
    id: "python-games",
    number: "03",
    category: "Programming foundations",
    title: "Python Mini Projects",
    summary:
      "A collection of small, deliberately scoped command-line projects built to sharpen core logic.",
    outcome:
      "Explores algorithms, state, and user interaction through games and practical utilities.",
    stack: ["Python", "Algorithms", "CLI"],
    code: "https://github.com/Kanzu11/Phyton",
    tone: "amber",
  },
];

export const skills = [
  {
    label: "Build",
    items: ["React", "JavaScript", "HTML/CSS", "Node.js", "Express"],
  },
  {
    label: "Data & intelligence",
    items: ["MongoDB", "Python", "RAG", "Vector search", "LLM integration"],
  },
  {
    label: "Systems thinking",
    items: ["REST APIs", "JWT auth", "Circuit design", "Electronics engineering"],
  },
];

export const contactLinks = {
  email: "kanzedinakmel0@gmail.com",
  phone: "+251994152120",
  linkedin: "https://linkedin.com/in/kanzedin-akmel-78128328b",
  github: "https://github.com/Kanzu11",
};
