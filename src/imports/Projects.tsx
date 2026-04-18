import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import { motion } from "framer-motion";

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#282c33] text-white font-['Fira_Code'] flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto px-4 w-full flex flex-col gap-12 pt-12">
        {/* Page Title */}
        <motion.section initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold"><span className="text-[#c778dd]">/</span>projects</h1>
          <p className="text-[#abb2bf]">List of my projects</p>
        </motion.section>

        {/* Complete Apps Section */}
        <motion.section 
           initial="hidden" animate="visible" variants={containerVariants}
           className="flex flex-col gap-8 w-full mt-8">
           <motion.h2 variants={fadeUp} className="text-3xl"><span className="text-[#c778dd]">#</span>complete-apps</motion.h2>
           <motion.div variants={containerVariants} className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-6">
             
             {/* Project 1 */}
             <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="border border-[#abb2bf]/30 flex flex-col hover:border-[#c778dd] transition-colors cursor-default bg-[#282c33]">
               <div className="h-48 bg-[#c778dd]/10 border-b border-[#abb2bf]/30 flex items-center justify-center overflow-hidden">
                 <motion.span whileHover={{ scale: 1.1, rotate: -5 }} className="text-6xl text-[#c778dd] inline-block">🤖</motion.span>
               </div>
               <div className="p-2 border-b border-[#abb2bf]/30 text-[#abb2bf] text-sm leading-relaxed">
                 Python Flask JWT LLM MongoDB Vector Search RAG
               </div>
               <div className="p-4 flex flex-col gap-4 flex-grow">
                 <h3 className="text-2xl font-medium">AI-Powered RAG Chatbot</h3>
                 <p className="text-[#abb2bf] text-sm">
                   Developed a full-stack AI chatbot with JWT auth, PDF-based retrieval, and LLM responses. Processed 50+ documents utilizing vector search, reducing hallucinated responses.
                 </p>
                 <div className="mt-auto flex gap-4 pt-4">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-[#c778dd] px-4 py-1 hover:bg-[#c778dd]/20 transition-colors">Live ~&gt;</motion.button>
                 </div>
               </div>
             </motion.div>

             {/* Project 2 */}
             <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="border border-[#abb2bf]/30 flex flex-col hover:border-[#c778dd] transition-colors cursor-default bg-[#282c33]">
               <div className="h-48 bg-[#c778dd]/10 border-b border-[#abb2bf]/30 flex items-center justify-center overflow-hidden">
                 <motion.span whileHover={{ scale: 1.1, rotate: 5 }} className="text-6xl text-[#c778dd] inline-block">📚</motion.span>
               </div>
               <div className="p-2 border-b border-[#abb2bf]/30 text-[#abb2bf] text-sm leading-relaxed">
                 React Node.js Express MongoDB Vercel
               </div>
               <div className="p-4 flex flex-col gap-4 flex-grow">
                 <h3 className="text-2xl font-medium">Library Management System</h3>
                 <p className="text-[#abb2bf] text-sm">
                   Developed a role-based access platform (Superadmin, Admin, User) optimizing operations. Reduced manual handling by 60% with full CRUD API automation.
                 </p>
                 <div className="mt-auto flex gap-4 pt-4">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-[#c778dd] px-4 py-1 hover:bg-[#c778dd]/20 transition-colors">Live ~&gt;</motion.button>
                 </div>
               </div>
             </motion.div>

           </motion.div>
        </motion.section>

        {/* Small Projects Preview */}
        <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
            className="flex flex-col gap-8 mt-12 w-full mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl"><span className="text-[#c778dd]">#</span>small-projects</motion.h2>
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 
                 {/* Project 3 */}
                 <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="border border-[#abb2bf]/30 flex flex-col hover:border-[#c778dd] transition-colors cursor-default bg-[#282c33]">
                   <div className="p-2 border-b border-[#abb2bf]/30 text-[#abb2bf] text-sm leading-relaxed">
                     Python Algorithms
                   </div>
                   <div className="p-4 flex flex-col gap-4 flex-grow">
                     <h3 className="text-2xl font-medium">Python CLI Games</h3>
                     <p className="text-[#abb2bf] text-sm">
                       Engineered 5+ Python applications including Rock-Paper-Scissors, Tip Calculator, and Treasure Game, boosting logic.
                     </p>
                     <div className="mt-auto flex gap-4 pt-4">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-[#abb2bf] px-4 py-1 text-[#abb2bf] hover:bg-[#abb2bf]/20 transition-colors">Code &gt;=</motion.button>
                     </div>
                   </div>
                 </motion.div>

            </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}