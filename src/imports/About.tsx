import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, CircuitBoard, GraduationCap } from "lucide-react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Reveal from "../app/components/Reveal";
import SectionHeading from "../app/components/SectionHeading";
import { skills } from "../app/data/portfolio";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

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
          <p className="eyebrow">About / Kanzedin Akmel</p>
          <h1>A systems mindset, applied to the web.</h1>
          <p>
            I’m a full-stack developer and Electrical &amp; Computer Engineering student who enjoys turning dense
            problems into clear, useful tools.
          </p>
        </motion.section>

        <section className="about-story section-block">
          <Reveal className="story-main">
            <p className="eyebrow">A little context</p>
            <h2>I like the point where software meets the real world.</h2>
            <div className="story-copy">
              <p>
                I’m based in Adama, Ethiopia, studying Electronics &amp; Communication Engineering at Adama Science and
                Technology University. That discipline has trained me to respect constraints, connections, and the
                small details that make a system reliable.
              </p>
              <p>
                In software, I focus on full-stack applications, RESTful APIs, authentication, and AI-assisted
                knowledge tools. I’m especially interested in products where good engineering makes a messy process
                calmer and more useful for the people inside it.
              </p>
            </div>
          </Reveal>

          <Reveal className="about-manifesto" delay={0.1}>
            <CircuitBoard size={26} aria-hidden="true" />
            <p>“Build the clearest path through the complexity.”</p>
            <span>Working principle</span>
          </Reveal>
        </section>

        <section className="section-block timeline-section">
          <Reveal>
            <SectionHeading
              eyebrow="Path so far"
              title={<>Learning fast. <em>Building deliberately.</em></>}
              description="A short timeline of the education and hands-on work shaping my approach."
            />
          </Reveal>
          <div className="timeline">
            <Reveal className="timeline-item" delay={0.05}>
              <div className="timeline-icon"><GraduationCap size={20} aria-hidden="true" /></div>
              <div className="timeline-date">2023 — 2028</div>
              <div className="timeline-content">
                <p className="timeline-type">Education</p>
                <h3>B.Sc. in Electronics &amp; Communication Engineering</h3>
                <p>Adama Science and Technology University · Adama, Ethiopia</p>
              </div>
            </Reveal>
            <Reveal className="timeline-item" delay={0.1}>
              <div className="timeline-icon"><BriefcaseBusiness size={20} aria-hidden="true" /></div>
              <div className="timeline-date">Hands-on bootcamp</div>
              <div className="timeline-content">
                <p className="timeline-type">Experience</p>
                <h3>Full-stack Library Management System</h3>
                <p>
                  Collaborated in a five-person team to build the React, Node.js, Express, and MongoDB application
                  from user flows through deployment.
                </p>
              </div>
            </Reveal>
            <Reveal className="timeline-item" delay={0.15}>
              <div className="timeline-icon"><CircuitBoard size={20} aria-hidden="true" /></div>
              <div className="timeline-date">Continuous learning</div>
              <div className="timeline-content">
                <p className="timeline-type">Training</p>
                <h3>Web development, data analysis &amp; programming fundamentals</h3>
                <p>Complementing an engineering foundation with practical software, data, and problem-solving skills.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-block skills-section">
          <Reveal>
            <SectionHeading
              eyebrow="Toolbox"
              title={<>The tools are only useful when the <em>thinking</em> is sound.</>}
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
              <p className="eyebrow">Looking ahead</p>
              <h2>I’m always interested in an honest technical challenge.</h2>
            </div>
            <Link to="/contacts" className="button button-light">
              Say hello <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
