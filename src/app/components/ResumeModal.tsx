import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink, FileText, X, Check } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    setDownloaded(true);
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Kanzedin_Akmel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="resume-modal-portal">
          <motion.div
            className="resume-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            className="resume-modal-dialog"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Resume Preview"
          >
            {/* Header bar */}
            <div className="resume-modal-header">
              <div className="resume-modal-fileinfo">
                <span className="resume-modal-icon">
                  <FileText size={18} />
                </span>
                <div>
                  <h3 className="resume-modal-title">Kanzedin_Akmel_Resume.pdf</h3>
                  <span className="resume-modal-subtitle">Full-stack developer · PDF</span>
                </div>
              </div>

              <div className="resume-modal-actions">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-action-btn secondary"
                  title="Open the PDF in a new tab"
                >
                  <ExternalLink size={15} />
                  <span>Open in tab</span>
                </a>

                <button
                  type="button"
                  onClick={handleDownload}
                  className="resume-action-btn primary"
                  title="Download the PDF"
                >
                  {downloaded ? <Check size={15} /> : <Download size={15} />}
                  <span>{downloaded ? "Downloaded" : "Download"}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="resume-modal-close"
                  aria-label="Close resume preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* In-Browser PDF Frame */}
            <div className="resume-modal-content">
              <object
                data="/Resume.pdf#view=FitH"
                type="application/pdf"
                className="resume-pdf-frame"
              >
                <iframe
                  src="/Resume.pdf#view=FitH"
                  className="resume-pdf-frame"
                  title="Kanzedin Akmel Resume"
                >
                  <div className="resume-fallback-notice">
                    <p>Your browser can’t show the PDF here.</p>
                    <a
                      href="/Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-primary"
                    >
                      Open the PDF
                    </a>
                  </div>
                </iframe>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
