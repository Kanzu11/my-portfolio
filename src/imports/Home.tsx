import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Eye, MapPin } from "lucide-react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import ProjectCard from "../app/components/ProjectCard";
import Reveal from "../app/components/Reveal";
import SectionHeading from "../app/components/SectionHeading";
import HeroProfileCard from "../app/components/HeroProfileCard";
import { useResumeModal } from "../app/context/ResumeModalContext";
import { projects, skills } from "../app/data/portfolio";

const headline = ["I build web apps,", "Telegram bots, and", "AI tools."];
const toolbelt = [
  "React",
  "Node.js",
  "Telegram Bots",
  "Telegram Mini Apps",
  "Python",
  "MongoDB",
  "REST APIs",
  "RAG",
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const { openResume } = useResumeModal();

  return (
    <div className="site-shell">
      <Header />
      <main className="site-main home-main">
        <section className="hero-section">
          <div className="hero-copy">
            <motion.div
              className="availability-pill"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="status-dot" />
              Open to full-stack roles
            </motion.div>

            <h1 className="hero-title" aria-label="I build web apps, Telegram bots, and AI tools.">
              {headline.map((line, index) => (
                <span className="hero-title-line" key={line}>
                  <motion.span
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 58, rotate: shouldReduceMotion ? 0 : 2 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.72,
                      delay: shouldReduceMotion ? 0 : 0.12 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, delay: shouldReduceMotion ? 0 : 0.56 }}
            >
              I’m Kanzedin Akmel, a full-stack developer and engineering student at ASTU in Adama, Ethiopia. Currently
              a web developer at CSEC ASTU. I build web applications, Telegram bots &amp; mini apps, and practical AI tools.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, delay: shouldReduceMotion ? 0 : 0.66 }}
            >
              <Link to="/projects" className="button button-primary">
                See my work <ArrowDownRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/contacts" className="button button-quiet">
                Get in touch
              </Link>
            </motion.div>

            <motion.div
              className="hero-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, delay: shouldReduceMotion ? 0 : 0.84 }}
            >
              <MapPin size={16} aria-hidden="true" />
              Adama, Ethiopia · GMT+3 · Open to remote work
            </motion.div>
          </div>

          <motion.div
            className="hero-profile-wrap"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94, y: shouldReduceMotion ? 0 : 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroProfileCard />
          </motion.div>
        </section>

        <section className="marquee-section" aria-label="Core technologies">
          <motion.div
            className="marquee-track"
            animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[...toolbelt, ...toolbelt].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<i /></span>
            ))}
          </motion.div>
        </section>

        <section className="section-block work-section">
          <Reveal>
            <SectionHeading
              eyebrow="01 / Selected work"
              title={<>Recent <em>projects.</em></>}
              description="AI knowledge systems, automated 24/7 Telegram bots, and full-stack web platforms built end to end."
              action={<Link className="text-link all-work-link" to="/projects">All projects <ArrowRight size={16} aria-hidden="true" /></Link>}
            />
          </Reveal>
          <div className="project-grid project-grid-home">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard project={project} featured={index === 0} key={project.id} />
            ))}
          </div>
        </section>

        <Reveal className="proof-strip">
          <div>
            <strong>24/7</strong>
            <span>automated live operations on Telegram</span>
          </div>
          <div>
            <strong>50+</strong>
            <span>documents indexed by the RAG chatbot</span>
          </div>
          <div>
            <strong>60%</strong>
            <span>less manual data handling in library platform</span>
          </div>
        </Reveal>

        <section className="section-block capability-section">
          <Reveal className="capability-copy">
            <p className="eyebrow">02 / Skills</p>
            <h2>Frontend, backend, and some hardware.</h2>
            <p className="section-description">
              Most of my work is in JavaScript and Python. Studying electronics has made me careful about how parts
              connect and where they break, and that habit carries over to APIs and databases.
            </p>
            <Link className="text-link" to="/about">More about me <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>

          <Reveal className="capability-groups" delay={0.1}>
            {skills.map((skill, index) => (
              <article className="capability-group" key={skill.label}>
                <div className="capability-number">0{index + 1}</div>
                <h3>{skill.label}</h3>
                <p>{skill.items.join(" · ")}</p>
              </article>
            ))}
          </Reveal>
        </section>

        <Reveal>
          <section className="closing-cta">
            <div>
              <p className="eyebrow">Hiring, or have a project?</p>
              <h2>Tell me what you’re building.</h2>
            </div>
            <Link to="/contacts" className="button button-light">
              Get in touch <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
