import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Download, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";

const navigation = [
  { label: "Work", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contacts" },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isCurrent = (path: string) => location.pathname === path;

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link to="/" className="brand" aria-label="Kanzedin Akmel home">
            <span className="brand-mark" aria-hidden="true">KA</span>
            <span>Kanzedin Akmel</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link to="/" className={`nav-link ${isCurrent("/") ? "is-active" : ""}`}>
              Home
              {isCurrent("/") ? <motion.span className="nav-indicator" layoutId="nav-indicator" /> : null}
            </Link>
            {navigation.map((item) => (
              <Link key={item.path} to={item.path} className={`nav-link ${isCurrent(item.path) ? "is-active" : ""}`}>
                {item.label}
                {isCurrent(item.path) ? <motion.span className="nav-indicator" layoutId="nav-indicator" /> : null}
              </Link>
            ))}
            <a href="/Resume.pdf" download="Kanzedin_Akmel_Resume.pdf" className="resume-link">
              <Download size={15} aria-hidden="true" />
              Resume
            </a>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              id="mobile-navigation"
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/" className={isCurrent("/") ? "is-active" : ""}>Home</Link>
              {navigation.map((item) => (
                <Link key={item.path} to={item.path} className={isCurrent(item.path) ? "is-active" : ""}>
                  {item.label}
                </Link>
              ))}
              <a href="/Resume.pdf" download="Kanzedin_Akmel_Resume.pdf" className="mobile-resume-link">
                <Download size={15} aria-hidden="true" />
                Download resume
              </a>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
    </>
  );
}
