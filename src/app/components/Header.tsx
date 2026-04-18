import { Link, useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path || (path !== "/" && currentPath.startsWith(path));

  return (
    <header className="w-full bg-[#282c33] sticky top-0 z-50 border-b border-[#abb2bf]/20">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg font-['Fira_Code']">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L16 8L8 16L0 8L8 0Z" fill="white" />
          </svg>
          Kanzedin Akmel
        </Link>
        
        <nav className="flex flex-wrap items-center gap-4 md:gap-8 mt-4 md:mt-0 font-['Fira_Code']">
          <Link to="/" className={`flex items-center gap-1 transition-colors ${isActive("/") ? "text-white font-medium" : "text-[#abb2bf] hover:text-white"}`}>
            <span className="text-[#c778dd]">#</span>home
          </Link>
          <Link to="/projects" className={`flex items-center gap-1 transition-colors ${isActive("/projects") ? "text-white font-medium" : "text-[#abb2bf] hover:text-white"}`}>
            <span className="text-[#c778dd]">#</span>works
          </Link>
          <Link to="/about" className={`flex items-center gap-1 transition-colors ${isActive("/about") ? "text-white font-medium" : "text-[#abb2bf] hover:text-white"}`}>
            <span className="text-[#c778dd]">#</span>about-me
          </Link>
          <Link to="/contacts" className={`flex items-center gap-1 transition-colors ${isActive("/contacts") ? "text-white font-medium" : "text-[#abb2bf] hover:text-white"}`}>
            <span className="text-[#c778dd]">#</span>contacts
          </Link>
          <a href="/Resume.pdf" download="Kanzedin_Akmel_Resume.pdf" className="flex items-center gap-1 text-[#abb2bf] border border-[#abb2bf] px-3 py-1 hover:text-white hover:border-white transition-colors">
            <span className="text-[#c778dd]">↓</span> resume
          </a>
        </nav>
      </div>
    </header>
  );
}
