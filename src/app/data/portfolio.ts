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
  image?: string;
};

export const projects: PortfolioProject[] = [
  {
    id: "rag-chatbot",
    number: "01",
    category: "AI · Full-stack",
    title: "AI RAG Document Chatbot",
    summary:
      "A chatbot that answers questions from uploaded PDFs. It finds the relevant passages with vector search and hands them to an LLM, so every answer comes from the source material.",
    outcome: "Includes JWT login, PDF ingestion, and chat history stored in MongoDB.",
    stack: ["Python", "Flask", "LLM", "Vector search", "MongoDB"],
    live: "https://cse-dev.vercel.app/",
    tone: "violet",
    image: "/projects/rag.jpg",
  },
  {
    id: "werabe-delivery-bot",
    number: "02",
    category: "Telegram Bot · Automation",
    title: "Werabe Delivery Bot",
    summary:
      "A 24/7 on-demand delivery bot built on Telegram. Automatically calculates delivery prices, captures customer GPS pins, and saves precise drop-off locations.",
    outcome:
      "Built with Python and the Telegram Bot API to run non-stop, handling order routing without manual dispatch.",
    stack: ["Python", "Telegram Bot API", "Geolocation", "Automation"],
    live: "https://t.me/Worabewbot",
    tone: "amber",
    image: "/projects/delivery.jpg",
  },
  {
    id: "library-system",
    number: "03",
    category: "Full-stack · Team project",
    title: "Library Management System",
    summary:
      "A library platform with three roles (superadmin, admin and user) for browsing, borrowing and managing books.",
    outcome:
      "Built with a five-person team at the ASTUMSJ bootcamp. It cut manual data handling by about 60%.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    live: "https://library-management-system-frontend-phi.vercel.app/",
    tone: "cyan",
    image: "/projects/library.jpg",
  },
  {
    id: "python-games",
    number: "04",
    category: "Python · Practice",
    title: "Python Mini Projects",
    summary:
      "Small command-line games and utilities I wrote to practise core Python: loops, data structures, state and user input.",
    outcome: "Each one is small on purpose, so I could focus on breaking a problem down before writing code.",
    stack: ["Python", "Algorithms", "CLI"],
    code: "https://github.com/Kanzu11/Phyton",
    tone: "violet",
    image: "/projects/python.jpg",
  },
];

export const skills = [
  {
    label: "Web development",
    items: ["React", "JavaScript", "Node.js", "Express", "HTML & CSS"],
  },
  {
    label: "Telegram bots & mini apps",
    items: ["Telegram Bot API", "Telegram Mini Apps", "Python", "Automation", "REST APIs"],
  },
  {
    label: "Data & systems",
    items: ["MongoDB", "RAG & Vector Search", "LLM APIs", "C++", "Circuit design"],
  },
];

export const contactLinks = {
  email: "kanzedinakmel0@gmail.com",
  phone: "+251994152120",
  linkedin: "https://linkedin.com/in/kanzedin-akmel-78128328b",
  github: "https://github.com/Kanzu11",
};
