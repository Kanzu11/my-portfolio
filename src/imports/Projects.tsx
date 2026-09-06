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
          <p className="eyebrow">Selected work / 2024—present</p>
          <h1>Projects with a job to do.</h1>
          <p>
            I care about making the complicated parts feel simple: useful data, steady infrastructure, and interfaces
            that give people confidence.
          </p>
        </motion.section>

        <section className="section-block page-projects-section">
          <Reveal>
            <SectionHeading
              eyebrow="Case studies"
              title={<>Recent builds, <em>without the fluff.</em></>}
              description="Each project begins with a real workflow and ends with an experience that is easier to use and maintain."
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
            <h2>Focused on the parts that make software stick.</h2>
          </div>
          <div className="working-style-list">
            <article>
              <span>01</span>
              <div>
                <h3>Start with the workflow</h3>
                <p>Understand the decisions, roles, and edge cases before giving the interface a shape.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Make the system legible</h3>
                <p>Prefer clear states, useful feedback, and APIs that make the next feature easier to build.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Ship deliberately</h3>
                <p>Polish the details that affect trust, then keep the product moving with a maintainable stack.</p>
              </div>
            </article>
          </div>
        </Reveal>

        <Reveal>
          <section className="project-availability">
            <CheckCircle2 size={24} aria-hidden="true" />
            <div>
              <p className="eyebrow">Next collaboration</p>
              <h2>Available for thoughtful full-stack work.</h2>
            </div>
            <Link to="/contacts" className="text-link">Get in touch <ArrowRight size={16} aria-hidden="true" /></Link>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
