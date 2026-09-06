import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Code2, Database, MapPin, Network } from "lucide-react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import ProjectCard from "../app/components/ProjectCard";
import Reveal from "../app/components/Reveal";
import SectionHeading from "../app/components/SectionHeading";
import { projects, skills } from "../app/data/portfolio";

const headline = ["I build digital", "systems that feel", "clear and dependable."];
const toolbelt = ["React", "Node.js", "Python", "MongoDB", "REST APIs", "RAG systems"];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

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
              Open to full-stack opportunities
            </motion.div>

            <h1 className="hero-title" aria-label="I build digital systems that feel clear and dependable.">
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
              I’m Kanzedin Akmel, a full-stack developer and ECE student in Adama, Ethiopia. I turn complex
              requirements into thoughtful web applications, APIs, and AI-assisted tools.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, delay: shouldReduceMotion ? 0 : 0.66 }}
            >
              <Link to="/projects" className="button button-primary">
                Explore selected work <ArrowDownRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/contacts" className="button button-quiet">Let’s work together</Link>
            </motion.div>

            <motion.div
              className="hero-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, delay: shouldReduceMotion ? 0 : 0.84 }}
            >
              <MapPin size={16} aria-hidden="true" />
              Based in Adama · Available remotely
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94, y: shouldReduceMotion ? 0 : 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            aria-label="A visual representation of systems, APIs, and connected applications"
            role="img"
          >
            <div className="hero-visual-grid" />
            <motion.div
              className="hero-orbit hero-orbit-one"
              animate={shouldReduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="hero-orbit hero-orbit-two"
              animate={shouldReduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="system-window"
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="window-topbar">
                <span /> <span /> <span />
                <p>system.status</p>
              </div>
              <div className="window-body">
                <p className="window-label">CURRENT FOCUS</p>
                <p className="window-title">Useful interfaces.<br />Solid infrastructure.</p>
                <div className="signal-rows" aria-hidden="true">
                  <i /><i /><i /><i /><i /><i /><i /><i />
                </div>
                <div className="window-footer">
                  <span><Code2 size={15} /> build</span>
                  <span><Network size={15} /> connect</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="floating-card floating-card-data"
              animate={shouldReduceMotion ? undefined : { y: [0, 10, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 6.7, repeat: Infinity, ease: "easeInOut" }}
            >
              <Database size={19} aria-hidden="true" />
              <div><strong>Data</strong><span>structured</span></div>
            </motion.div>
            <motion.div
              className="floating-card floating-card-ship"
              animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="mini-status" /><div><strong>Ship</strong><span>with care</span></div>
            </motion.div>
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
              title={<>Built around <em>real</em> use cases.</>}
              description="A small selection of products where application logic, reliability, and a clear user flow meet."
              action={<Link className="text-link all-work-link" to="/projects">See all work <ArrowRight size={16} aria-hidden="true" /></Link>}
            />
          </Reveal>
          <div className="project-grid project-grid-home">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard project={project} featured={index === 0} key={project.id} />
            ))}
          </div>
        </section>

        <Reveal className="proof-strip">
          <div>
            <strong>50+</strong>
            <span>documents processed in a RAG workflow</span>
          </div>
          <div>
            <strong>60%</strong>
            <span>less manual handling for library operations</span>
          </div>
          <div>
            <strong>MERN + Python</strong>
            <span>a practical, full-stack toolkit</span>
          </div>
        </Reveal>

        <section className="section-block capability-section">
          <Reveal className="capability-copy">
            <p className="eyebrow">02 / Capability</p>
            <h2>From interface to infrastructure.</h2>
            <p className="section-description">
              My background in electrical and computer engineering keeps me close to the details: how things connect,
              where they fail, and what makes a system easier to trust.
            </p>
            <Link className="text-link" to="/about">More about my approach <ArrowRight size={16} aria-hidden="true" /></Link>
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
              <p className="eyebrow">Have a project in mind?</p>
              <h2>Let’s make the next useful thing.</h2>
            </div>
            <Link to="/contacts" className="button button-light">
              Start a conversation <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
