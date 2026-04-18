/// <reference path="../custom.d.ts" />
import { Link } from "react-router";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import heroImg from "../assets/f4d7792241ade353515843fc44bf4f33ac8d48cd.png";
import { motion } from "framer-motion";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#282c33] text-white font-['Fira_Code'] flex flex-col">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto px-4 w-full flex flex-col gap-24 pt-12 overflow-hidden">
        {/* Hero */}
        <motion.section 
           initial="hidden" animate="visible" variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
           }}
           className="flex flex-col md:flex-row items-center gap-12 mt-12 w-full">
           <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Kanzedin Akmel is a <span className="text-[#c778dd]">Full-Stack MERN Developer</span>
              </h1>
              <p className="text-[#abb2bf] text-lg leading-relaxed">
                Building RESTful APIs and AI-integrated web applications. Passionate about backend systems, authentication, and intelligent chatbot development based in Adama, Ethiopia.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-max">
                <Link to="/contacts" className="text-white border border-[#c778dd] px-6 py-2 hover:bg-[#c778dd]/20 transition-colors inline-block">
                  Contact me !!
                </Link>
              </motion.div>
           </motion.div>
           <motion.div variants={fadeUp} className="flex-1 w-full justify-center flex relative">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
                 className="w-64 h-64 border-b border-[#c778dd] flex items-end justify-center relative">
                  <div className="absolute top-8 left-0 opacity-50 z-0 text-[#abb2bf] text-6xl">
                    <svg width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="155" height="155" fill={`url(#pattern)`} />
                      <defs>
                        <pattern id="pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="2" fill="#c778dd" />
                        </pattern>
                      </defs>
                    </svg>
                  </div>
                  <motion.img 
                     whileHover={{ 
                         scaleX: [1, 1.08, 0.95, 1.05, 1], 
                         scaleY: [1, 0.92, 1.05, 0.95, 1], 
                         rotate: [0, -3, 3, -1, 0],
                         transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                     }}
                     src={heroImg} 
                     alt="Kanzedin Akmel" 
                     className="z-10 w-full max-w-[250px] h-auto object-contain border-b border-[#c778dd] cursor-pointer" 
                  />
              </motion.div>
           </motion.div>
        </motion.section>

        {/* Quote */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="mx-auto bg-[#282c33] border border-[#abb2bf]/30 p-6 relative w-11/12 md:max-w-2xl text-center">
          <span className="absolute -top-4 md:-top-5 left-4 md:left-6 bg-[#282c33] px-2 text-[#abb2bf] text-4xl">"</span>
          <p className="text-lg md:text-xl font-medium tracking-wide">With great power comes great electricity bill</p>
          <span className="absolute -bottom-6 right-4 md:right-6 bg-[#282c33] px-2 text-[#abb2bf] text-4xl">"</span>
        </motion.section>

        {/* Projects Preview */}
        <motion.section 
           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
           className="flex flex-col gap-8 mt-12 w-full">
           <div className="flex justify-between items-center bg-[#282c33]">
             <h2 className="text-3xl flex items-center gap-2"><span className="text-[#c778dd]">#</span>projects<span className="h-[1px] bg-[#c778dd] w-32 md:w-64 inline-block ml-4"></span></h2>
             <Link to="/projects" className="text-white hover:text-[#c778dd] transition-colors whitespace-nowrap">View all ~~&gt;</Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Project 1 */}
             <motion.div whileHover={{ y: -5 }} className="border border-[#abb2bf]/30 flex flex-col hover:border-[#c778dd] transition-colors cursor-default bg-[#282c33]">
               <div className="h-40 bg-[#c778dd]/10 border-b border-[#abb2bf]/30 flex items-center justify-center overflow-hidden">
                 <motion.span whileHover={{ scale: 1.1, rotate: 5 }} className="text-5xl text-[#c778dd] inline-block">📚</motion.span>
               </div>
               <div className="p-2 border-b border-[#abb2bf]/30 text-[#abb2bf] text-sm">
                 React Express Node.js MongoDB
               </div>
               <div className="p-4 flex flex-col gap-4 flex-grow">
                 <h3 className="text-2xl font-medium">Library System</h3>
                 <p className="text-[#abb2bf]">Role-based access platform improving security and scalability.</p>
                 <div className="mt-auto flex gap-4 pt-4">
                    <span className="border border-[#c778dd] px-4 py-1 hover:bg-[#c778dd]/20 cursor-pointer transition-colors">Live ~&gt;</span>
                 </div>
               </div>
             </motion.div>

             {/* Project 2 */}
             <motion.div whileHover={{ y: -5 }} className="border border-[#abb2bf]/30 flex flex-col hover:border-[#c778dd] transition-colors cursor-default bg-[#282c33]">
               <div className="h-40 bg-[#c778dd]/10 border-b border-[#abb2bf]/30 flex items-center justify-center overflow-hidden">
                 <motion.span whileHover={{ scale: 1.1, rotate: -5 }} className="text-5xl text-[#c778dd] inline-block">🤖</motion.span>
               </div>
               <div className="p-2 border-b border-[#abb2bf]/30 text-[#abb2bf] text-sm">
                 Python Flask JWT LLM MongoDB
               </div>
               <div className="p-4 flex flex-col gap-4 flex-grow">
                 <h3 className="text-2xl font-medium">AI Web Chatbot</h3>
                 <p className="text-[#abb2bf]">Full-stack AI chatbot with vector search and PDF knowledge retrieval.</p>
                 <div className="mt-auto flex gap-4 pt-4">
                    <span className="border border-[#c778dd] px-4 py-1 hover:bg-[#c778dd]/20 cursor-pointer transition-colors">Live ~&gt;</span>
                 </div>
               </div>
             </motion.div>
             
             {/* Project 3 */}
             <motion.div whileHover={{ y: -5 }} className="border border-[#abb2bf]/30 flex flex-col hover:border-[#c778dd] transition-colors cursor-default bg-[#282c33]">
               <div className="h-40 bg-[#c778dd]/10 border-b border-[#abb2bf]/30 flex items-center justify-center overflow-hidden">
                 <motion.span whileHover={{ scale: 1.1, rotate: 10 }} className="text-5xl text-[#c778dd] inline-block">🐍</motion.span>
               </div>
               <div className="p-2 border-b border-[#abb2bf]/30 text-[#abb2bf] text-sm">
                 Python
               </div>
               <div className="p-4 flex flex-col gap-4 flex-grow">
                 <h3 className="text-2xl font-medium">Python Games</h3>
                 <p className="text-[#abb2bf]">Rock-Paper-Scissors, Tip Calculator and Treasure Game algorithms.</p>
                 <div className="mt-auto flex gap-4 pt-4">
                    <span className="border border-[#abb2bf] px-4 py-1 text-[#abb2bf] hover:bg-[#abb2bf]/20 cursor-pointer transition-colors">Code &gt;=</span>
                 </div>
               </div>
             </motion.div>
           </div>
        </motion.section>

        {/* Skills Preview */}
        <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="flex flex-col gap-8 mt-12 w-full">
            <h2 className="text-3xl flex items-center gap-2"><span className="text-[#c778dd]">#</span>skills<span className="h-[1px] bg-[#c778dd] w-32 md:w-64 inline-block ml-4"></span></h2>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full items-center">
                <motion.div 
                     initial={{ opacity: 0, rotate: -90 }} whileInView={{ opacity: 0.6, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
                     className="flex-1 items-center justify-center hidden lg:flex p-12">
                     <svg width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="155" height="155" fill={`url(#pattern2)`} />
                      <defs>
                        <pattern id="pattern2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
                        </pattern>
                      </defs>
                    </svg>
                </motion.div>
                <div className="flex-[2] flex flex-wrap gap-4 items-start w-full">
                    <motion.div whileHover={{ scale: 1.05 }} className="border border-[#abb2bf]/30 flex flex-col w-full md:w-[48%] lg:w-48 bg-[#282c33] z-10 transition-colors hover:border-[#c778dd]">
                        <div className="p-2 border-b border-[#abb2bf]/30 font-medium text-white">Languages</div>
                        <div className="p-2 text-[#abb2bf]">Python JavaScript React C++ Java HTML5 CSS3</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="border border-[#abb2bf]/30 flex flex-col w-full md:w-[48%] lg:w-48 bg-[#282c33] z-10 transition-colors hover:border-[#c778dd]">
                        <div className="p-2 border-b border-[#abb2bf]/30 font-medium text-white">Databases</div>
                        <div className="p-2 text-[#abb2bf]">MongoDB</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="border border-[#abb2bf]/30 flex flex-col w-full md:w-[48%] lg:w-48 bg-[#282c33] z-10 transition-colors hover:border-[#c778dd]">
                        <div className="p-2 border-b border-[#abb2bf]/30 font-medium text-white">Frameworks</div>
                        <div className="p-2 text-[#abb2bf]">Node.js Express.js</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="border border-[#abb2bf]/30 flex flex-col w-full md:w-[48%] lg:w-56 bg-[#282c33] z-10 transition-colors hover:border-[#c778dd]">
                        <div className="p-2 border-b border-[#abb2bf]/30 font-medium text-white">Other / Hardware</div>
                        <div className="p-2 text-[#abb2bf]">Electronics Engineering, Circuit Design</div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}