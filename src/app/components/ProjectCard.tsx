import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { PortfolioProject } from "../data/portfolio";

type ProjectCardProps = {
  project: PortfolioProject;
  featured?: boolean;
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`project-card tone-${project.tone} ${featured ? "is-featured" : ""}`}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? undefined : { y: -7 }}
    >
      <div className="project-art" aria-hidden="true">
        <div className="project-art-topline">
          <span>{project.number}</span>
          <span>CASE STUDY</span>
        </div>
        <motion.div
          className="project-art-orb"
          animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="project-art-grid" />
        <div className="project-art-copy">
          <Layers3 size={17} strokeWidth={1.7} />
          <span>{project.category}</span>
        </div>
        <div className="project-art-line project-art-line-one" />
        <div className="project-art-line project-art-line-two" />
      </div>

      <div className="project-content">
        <div className="project-copy">
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <p className="project-outcome">{project.outcome}</p>
        </div>

        <ul className="tag-list" aria-label={`${project.title} technology stack`}>
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer" className="text-link">
              Visit project <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
          {project.code ? (
            <a href={project.code} target="_blank" rel="noreferrer" className="text-link">
              View source <Github size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
