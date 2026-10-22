import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Eye, FileText, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useResumeModal } from "../context/ResumeModalContext";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contacts" },
];

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { openResume } = useResumeModal();
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isCurrent = (path: string) => location.pathname === path;

  // Liquid ripple effect when clicking
  const createLiquidRipple = (e: React.MouseEvent) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();

    setRipples((prev) => [...prev.slice(-3), { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
  };

  return (
    <>
      <header className="centered-floating-header" role="banner">
        <div
          ref={navRef}
          className="liquid-glass-dock"
          onClick={createLiquidRipple}
        >
          {/* Liquid Ripple Wave Elements */}
          <div className="liquid-ripples-container" aria-hidden="true">
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                className="liquid-ripple-wave"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                }}
              />
            ))}
          </div>

          {/* Brand Mark */}
          <Link
            to="/"
            className="dock-brand"
            aria-label="Kanzedin Akmel home"
          >
            <span className="dock-brand-name">Kanzedin Akmel</span>
          </Link>

          <span className="dock-separator desktop-only-separator" aria-hidden="true" />

          {/* Desktop Nav Links */}
          <nav className="dock-nav" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active = isCurrent(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`dock-nav-item ${active ? "is-active" : ""}`}
                >
                  {active && (
                    <motion.span
                      className="dock-active-pill"
                      layoutId="dock-active-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="dock-nav-label">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <span className="dock-separator desktop-only-separator" aria-hidden="true" />

          {/* In-Browser Resume Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              createLiquidRipple(e);
              openResume();
            }}
            className="dock-resume-btn"
            title="Preview resume in browser"
          >
            <Eye size={14} className="dock-resume-icon" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="dock-menu-toggle"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((prev) => !prev);
            }}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with Liquid Glass */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-liquid-glass-menu"
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-menu-links">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`mobile-menu-link ${isCurrent(item.path) ? "is-active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openResume();
                  }}
                  className="mobile-menu-resume-btn"
                >
                  <FileText size={15} />
                  <span>View Resume</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Top reading scroll progress indicator */}
      <motion.div
        className="scroll-progress-line"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
    </>
  );
}
