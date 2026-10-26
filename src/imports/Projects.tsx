import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import ProjectCard from "../app/components/ProjectCard";
import Reveal from "../app/components/Reveal";
import SectionHeading from "../app/components/SectionHeading";
import { projects } from "../app/data/portfolio";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="site-shell">
      <Header />
      <main className="site-main page-main">
        <motion.section
          className="page-intro"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Work / 2025 — present</p>
          <h1>Things I’ve built.</h1>
          <p>
            Projects I’ve designed, built and deployed. Spanning full-stack web platforms, 24/7 Telegram bots &amp;
            mini apps, and AI-assisted tools.
          </p>
        </motion.section>

        <section className="section-block page-projects-section">
          <Reveal>
            <SectionHeading
              eyebrow="All projects"
              title={<>Recent <em>builds.</em></>}
              description="Real systems solving real problems: automating on-demand delivery, answering questions from documents, or managing library operations."
            />
          </Reveal>
          <div className="project-grid project-grid-all">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} featured={index === 0} />
            ))}
          </div>
        </section>

        <Reveal className="working-style">
          <div className="working-style-lead">
            <p className="eyebrow">How I work</p>
            <h2>How I approach a new project.</h2>
          </div>
          <div className="working-style-list">
            <article>
              <span>01</span>
              <div>
                <h3>Understand the workflow first</h3>
                <p>Who uses it, what they need to get done, and where things go wrong. I map that out before building any screens.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Keep the backend clean</h3>
                <p>Clear data models, predictable REST endpoints and proper auth, so adding a feature doesn’t break an old one.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Ship early, then improve</h3>
                <p>Deploy as soon as it works, test it on real phones and laptops, and fix what people actually run into.</p>
              </div>
            </article>
          </div>
        </Reveal>

        <Reveal>
          <section className="project-availability">
            <CheckCircle2 size={24} aria-hidden="true" />
            <div>
              <p className="eyebrow">Open to work</p>
              <h2>Looking for a full-stack developer?</h2>
            </div>
            <Link to="/contacts" className="text-link">Get in touch <ArrowRight size={16} aria-hidden="true" /></Link>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
