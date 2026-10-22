import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Cpu, MapPin, Terminal } from "lucide-react";
import { useResumeModal } from "../context/ResumeModalContext";

export default function HeroProfileCard() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { openResume } = useResumeModal();
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid mouse reaction
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // Dynamic light glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="hero-profile-container">
      <motion.div
        ref={cardRef}
        className="hero-profile-3d-card"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Dynamic Specular Glass Glare with warm subtle tone */}
        <motion.div
          className="hero-profile-glare"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx} ${gy}, rgba(255, 255, 255, 0.2) 0%, rgba(240, 163, 91, 0.1) 40%, transparent 70%)`
            ),
          }}
        />

        {/* Ambient Warm Halo behind card */}
        <div className="hero-profile-halo" />

        {/* Card Frame Content */}
        <div className="hero-profile-inner">
          {/* Top Status Bar - ASTU 28 removed */}
          <div className="hero-profile-topbar">
            <div className="hero-profile-status">
              <span className="hero-pulse-dot" />
              <span className="hero-status-text">ECE &amp; Full-Stack</span>
            </div>
          </div>

          {/* Photo Container */}
          <div className="hero-profile-image-wrap">
            <img
              src="/profile.jpg"
              alt="Kanzedin Akmel"
              className="hero-profile-img"
              loading="eager"
            />
            <div className="hero-profile-vignette" />

            {/* In-photo Badge Overlay - Fullstack Web Developer */}
            <div className="hero-profile-overlay-badge">
              <span className="badge-name">Kanzedin Akmel</span>
              <span className="badge-title">Fullstack Web Developer</span>
            </div>
          </div>

          {/* Card Footer Details */}
          <div className="hero-profile-details">
            <div className="hero-meta-row">
              <div className="hero-meta-item">
                <MapPin size={13} />
                <span>Adama, Ethiopia</span>
              </div>
              <div className="hero-meta-item">
                <Cpu size={13} />
                <span>Electronics &amp; Comm.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Floating Tech Badges - placed in FRONT of the photo with high elevation */}
        <motion.div
          className="floating-chip chip-left"
          style={{
            transform: "translateZ(85px)",
            zIndex: 60,
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Terminal size={14} className="chip-icon" />
          <span>Python · Flask · RAG</span>
        </motion.div>

        <motion.div
          className="floating-chip chip-right"
          style={{
            transform: "translateZ(95px)",
            zIndex: 60,
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <Code2 size={14} className="chip-icon" />
          <span>React · TypeScript · Node</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
