import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, FileText, GraduationCap, Users } from "lucide-react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Reveal from "../app/components/Reveal";
import SectionHeading from "../app/components/SectionHeading";
import { skills } from "../app/data/portfolio";
import { useResumeModal } from "../app/context/ResumeModalContext";

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const { openResume } = useResumeModal();

  return (
    <div className="site-shell">
      <Header />
      <main className="site-main page-main about-main">
        <motion.section
          className="page-intro about-intro"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">About</p>
          <h1>Engineering student. Full-stack developer.</h1>
          <p>
            I’m Kanzedin Akmel. I study Electronics &amp; Communication Engineering at ASTU, build full-stack web
            applications, and develop automated Telegram bots and mini apps. Currently working as a web developer at CSEC ASTU.
          </p>
        </motion.section>

        <section className="about-story section-block">
          <Reveal className="story-main">
            <p className="eyebrow">Background</p>
            <h2>How I got into software.</h2>
            <div className="story-copy">
              <p>
                I’m from Adama, Ethiopia, and I’m studying at Adama Science and Technology University. Engineering
                taught me to work within constraints and to test something before trusting it. I try to bring the
                same habits to code.
              </p>
              <p>
                I got into web development through a three-week bootcamp at ASTUMSJ, where a team of five of us built
                a library management system from scratch. Since then I’ve built a RAG chatbot, a 24/7 Telegram delivery
                bot with automated geolocation pricing, completed an internship at Codveda Technologies, and currently work
                as a web developer with CSEC ASTU.
              </p>
              <p>
                I focus on the full stack: React and Node.js on the web, Python for Telegram bots and mini apps, and
                APIs and databases that keep workflows fast and dependable.
              </p>
            </div>
          </Reveal>

          <Reveal className="about-manifesto" delay={0.1}>
            <div className="about-portrait-wrap">
              <img
                src="/profile.jpg"
                alt="Portrait of Kanzedin Akmel"
                className="about-portrait-img"
              />
              <div className="about-portrait-badge">
                <span className="portrait-status-dot" />
                <span>Open to work</span>
              </div>
            </div>
            <dl className="about-facts">
              <div>
                <dt>Based in</dt>
                <dd>Adama, Ethiopia</dd>
              </div>
              <div>
                <dt>Studying</dt>
                <dd>ECE at ASTU, 2023 – 2028</dd>
              </div>
              <div>
                <dt>Currently</dt>
                <dd>Web Developer at CSEC ASTU</dd>
              </div>
              <div>
                <dt>English</dt>
                <dd>
                  <a
                    href="https://cert.efset.org/9XcoLE"
                    target="_blank"
                    rel="noreferrer"
                    className="about-fact-link"
                    title="Official EF SET Certificate | Kanzedin Akmel"
                  >
                    C1 (EF SET) <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={openResume}
              className="about-resume-cta"
            >
              <FileText size={15} aria-hidden="true" />
              View resume
            </button>
          </Reveal>
        </section>

        <section className="section-block timeline-section">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title={<>Work and <em>education.</em></>}
              description="Most recent first."
            />
          </Reveal>
          <div className="timeline">
            <Reveal className="timeline-item" delay={0.05}>
              <div className="timeline-icon"><Code2 size={20} aria-hidden="true" /></div>
              <div className="timeline-date">2026 — Present</div>
              <div className="timeline-content">
                <p className="timeline-type">Experience · Adama</p>
                <h3>Full-stack Web Developer</h3>
                <p>CSEC ASTU</p>
              </div>
            </Reveal>
            <Reveal className="timeline-item" delay={0.1}>
              <div className="timeline-icon"><BriefcaseBusiness size={20} aria-hidden="true" /></div>
              <div className="timeline-date">2026</div>
              <div className="timeline-content">
                <p className="timeline-type">Internship · Remote</p>
                <h3>Full-stack Web Development Intern</h3>
                <p>Codveda Technologies (Completed)</p>
              </div>
            </Reveal>
            <Reveal className="timeline-item" delay={0.15}>
              <div className="timeline-icon"><Users size={20} aria-hidden="true" /></div>
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <p className="timeline-type">Bootcamp · Adama</p>
                <h3>Full-stack Web Development Bootcamp, ASTUMSJ</h3>
                <p>
                  A three-week hands-on program. Built a library management system with a five-person team using
                  React, Node.js, Express and MongoDB, then deployed it on Vercel.
                </p>
              </div>
            </Reveal>
            <Reveal className="timeline-item" delay={0.2}>
              <div className="timeline-icon"><GraduationCap size={20} aria-hidden="true" /></div>
              <div className="timeline-date">2023 — 2028</div>
              <div className="timeline-content">
                <p className="timeline-type">Education</p>
                <h3>B.Sc. Electronics &amp; Communication Engineering</h3>
                <p>Adama Science and Technology University · Expected June 2028</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-block skills-section">
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title={<>What I <em>work with.</em></>}
            />
          </Reveal>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <Reveal className="skill-panel" key={skill.label} delay={index * 0.06}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{skill.label}</h3>
                <ul>
                  {skill.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="closing-cta closing-cta-quiet">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2>Have a role or a project in mind? I’d like to hear about it.</h2>
            </div>
            <Link to="/contacts" className="button button-light">
              Contact me <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
