export default function Footer() {
  return (
    <footer className="w-full border-t border-[#abb2bf]/20 mt-20 pb-8 pt-8 bg-[#282c33]">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center font-['Fira_Code']">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 text-white">
             <span className="font-bold flex items-center gap-2">
                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L16 8L8 16L0 8L8 0Z" fill="white" />
                 </svg>
                 Kanzedin Akmel
             </span>
             <span className="text-[#abb2bf] text-sm">kanzedinakmel0@gmail.com</span>
          </div>
          <p className="text-white">Full-stack MERN developer</p>
        </div>
        <div className="flex flex-col gap-2 mt-6 md:mt-0 text-[#abb2bf]">
          <h2 className="text-white text-xl">Media</h2>
          <div className="flex gap-4">
             <a href="https://github.com/Kanzu11" target="_blank" rel="noreferrer" className="hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89C18.5 3.32 18.5 2 18.5 2s-1.2-.4-3.5 1.2a11.5 11.5 0 0 0-6 0C6.7 1.6 5.5 2 5.5 2s0 1.32.5 2.11A5.5 5.5 0 0 0 4.5 8.5c0 5.23 3 6.42 6 6.76A4.8 4.8 0 0 0 9.5 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
             </a>
             <a href="https://linkedin.com/in/kanzedin-akmel-78128328b" target="_blank" rel="noreferrer" className="hover:text-white transition">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
          </div>
        </div>
      </div>
      <div className="text-center text-[#abb2bf] mt-8 font-['Fira_Code'] text-sm mb-4">
        © Copyright 2026. Made by Kanzedin Akmel
      </div>
    </footer>
  );
}
