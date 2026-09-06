import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Reveal from "../app/components/Reveal";
import { contactLinks } from "../app/data/portfolio";

export default function Contacts() {
  const shouldReduceMotion = useReducedMotion();
  const hoverLift = shouldReduceMotion ? undefined : { x: 7 };

  return (
    <div className="site-shell">
      <Header />
      <main className="site-main page-main contact-main">
        <motion.section
          className="page-intro contact-intro"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Contact / Let’s talk</p>
          <h1>Good work starts with a clear conversation.</h1>
          <p>
            I’m open to full-stack opportunities, backend-focused projects, and collaborations around useful AI
            applications. If that sounds like your kind of work, get in touch.
          </p>
        </motion.section>

        <section className="contact-layout">
          <Reveal className="contact-links-panel">
            <p className="eyebrow">Choose a channel</p>
            <div className="contact-link-list">
              <motion.a href={`mailto:${contactLinks.email}`} whileHover={hoverLift} className="contact-link-card">
                <span className="contact-link-icon"><Mail size={21} aria-hidden="true" /></span>
                <span><strong>Email</strong><small>{contactLinks.email}</small></span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </motion.a>
              <motion.a href={`tel:${contactLinks.phone}`} whileHover={hoverLift} className="contact-link-card">
                <span className="contact-link-icon"><Phone size={21} aria-hidden="true" /></span>
                <span><strong>Phone</strong><small>{contactLinks.phone}</small></span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </motion.a>
              <motion.a href={contactLinks.linkedin} target="_blank" rel="noreferrer" whileHover={hoverLift} className="contact-link-card">
                <span className="contact-link-icon"><Linkedin size={21} aria-hidden="true" /></span>
                <span><strong>LinkedIn</strong><small>Connect professionally</small></span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </motion.a>
              <motion.a href={contactLinks.github} target="_blank" rel="noreferrer" whileHover={hoverLift} className="contact-link-card">
                <span className="contact-link-icon"><Github size={21} aria-hidden="true" /></span>
                <span><strong>GitHub</strong><small>See code and experiments</small></span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </motion.a>
            </div>
          </Reveal>

          <Reveal className="availability-card" delay={0.1}>
            <div className="availability-card-grid" />
            <div className="availability-card-top">
              <span className="availability-live"><i /> Available</span>
              <MapPin size={18} aria-hidden="true" />
            </div>
            <div className="availability-card-copy">
              <p className="eyebrow">Current status</p>
              <h2>Open to the next good challenge.</h2>
              <p>
                I’m based in Adama, Ethiopia and happy to collaborate remotely with teams that value thoughtful,
                well-made software.
              </p>
            </div>
            <div className="availability-card-bottom">
              <span>GMT+3</span>
              <span>Remote-friendly</span>
            </div>
          </Reveal>
        </section>

        <Reveal>
          <section className="contact-signoff">
            <p>Prefer an email?</p>
            <a href={`mailto:${contactLinks.email}`}>Write to Kanzedin <ArrowRight size={18} aria-hidden="true" /></a>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
