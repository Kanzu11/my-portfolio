import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";
import { contactLinks } from "../data/portfolio";
import { useResumeModal } from "../context/ResumeModalContext";

export default function Footer() {
  const { openResume } = useResumeModal();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-intro">
          <Link to="/" className="brand">
            <span>Kanzedin Akmel</span>
          </Link>
          <p>Full-stack developer building reliable systems for people and teams.</p>
          <a href={`mailto:${contactLinks.email}`} className="footer-email">
            {contactLinks.email} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-links">
          <p className="footer-label">Elsewhere</p>
          <a href={contactLinks.github} target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" /> GitHub
          </a>
          <a href={contactLinks.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} aria-hidden="true" /> LinkedIn
          </a>
          <a href={`mailto:${contactLinks.email}`}>
            <Mail size={17} aria-hidden="true" /> Email
          </a>
          <button
            type="button"
            onClick={openResume}
            className="footer-resume-link"
          >
            <FileText size={17} aria-hidden="true" /> View Resume
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Kanzedin Akmel</span>
        <span>Adama Science and Technology University · ECE</span>
      </div>
    </footer>
  );
}
