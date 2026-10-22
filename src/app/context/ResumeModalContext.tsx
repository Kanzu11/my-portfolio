import React, { createContext, useContext, useState, ReactNode } from "react";
import ResumeModal from "../components/ResumeModal";

interface ResumeModalContextType {
  isOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
}

const ResumeModalContext = createContext<ResumeModalContextType | undefined>(undefined);

export function ResumeModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openResume = () => setIsOpen(true);
  const closeResume = () => setIsOpen(false);

  return (
    <ResumeModalContext.Provider value={{ isOpen, openResume, closeResume }}>
      {children}
      <ResumeModal isOpen={isOpen} onClose={closeResume} />
    </ResumeModalContext.Provider>
  );
}

export function useResumeModal() {
  const context = useContext(ResumeModalContext);
  if (!context) {
    throw new Error("useResumeModal must be used within a ResumeModalProvider");
  }
  return context;
}
