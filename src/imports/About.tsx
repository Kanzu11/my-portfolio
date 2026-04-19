/// <reference path="../custom.d.ts" />
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import aboutImg from "../assets/54460c6b07a60652048526012507cff338176e45.png";
import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#282c33] text-white font-['Fira_Code'] flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto px-4 w-full flex flex-col gap-16 pt-12">
        {/* Page Title */}
        <motion.section initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold"><span className="text-[#c778dd]">/</span>about-me</h1>
          <p className="text-[#abb2bf]">Who am i?</p>
        </motion.section>

        {/* About Section */}
        <motion.section 
           initial="hidden" animate="visible" variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
           }}
           className="flex flex-col md:flex-row gap-12 w-full">
           <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-6 text-[#abb2bf] leading-relaxed">
              <p>Hello, I’m Kanzedin Akmel!</p>
              <p>
                I am a Full-Stack MERN Developer and an Electrical and Computer Engineering (ECE) student at Adama Science and Technology University located in Adama, Ethiopia.
              </p>
              <p>
                I specialize in building RESTful APIs and AI-integrated web applications. My passion lies in backend systems, authentication, and building intelligent chatbot applications using Retrieval-Augmented Generation (RAG).
              </p>
              <p>
                From processing extensive document knowledge bases to grounding AI responses, I always strive to blend hardware constraints and software capability into optimal solutions.
              </p>
           </motion.div>
           <motion.div variants={fadeUp} className="flex-1 flex justify-center items-center relative">
               <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={{ 
                      scaleX: [1, 1.08, 0.95, 1.05, 1], 
                      scaleY: [1, 0.92, 1.05, 0.95, 1], 
                      rotate: [0, 3, -3, 1, 0],
                      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileTap={{ 
                      scaleX: [1, 1.08, 0.95, 1.05, 1], 
                      scaleY: [1, 0.92, 1.05, 0.95, 1], 
                      rotate: [0, 3, -3, 1, 0],
                      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  src={aboutImg} alt="About Kanzedin" className="w-full max-w-[300px] h-auto object-contain border-b border-l border-[#c778dd] p-4 cursor-pointer" />
           </motion.div>
        </motion.section>

        {/* Education & Certificates */}
        <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="flex flex-col gap-8 w-full">
            <h2 className="text-3xl"><span className="text-[#c778dd]">#</span>education-and-certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div whileHover={{ y: -5 }} className="border border-[#abb2bf]/30 p-6 flex flex-col hover:border-[#c778dd] transition-colors bg-[#282c33]">
                    <h3 className="text-2xl mb-2">B.Sc. ECE</h3>
                    <p className="text-[#c778dd] font-bold mb-4">Adama Science and Technology University</p>
                    <p className="text-[#abb2bf] text-sm mb-2">2023 - 06/2028</p>
                    <p className="text-[#abb2bf]">Electronics & Communication Engineering</p>
                </motion.div>
                
                <motion.div whileHover={{ y: -5 }} className="border border-[#abb2bf]/30 p-6 flex flex-col hover:border-[#c778dd] transition-colors bg-[#282c33]">
                    <h3 className="text-2xl mb-2">Certifications</h3>
                    <ul className="text-[#abb2bf] space-y-4 list-disc pl-4 mt-2">
                        <li><strong className="text-white">Full stack web development bootcamp</strong> - Completed 3-week intensive program.</li>
                        <li><strong className="text-white">Space Science certificate</strong> - Awarded for active participation & leading high school space club.</li>
                        <li><strong className="text-white">Data analysis fundamentals</strong> - Data visualization techniques.</li>
                        <li><strong className="text-white">Fundamentals of programming</strong> - Mastered key algorithms.</li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="flex flex-col gap-8 w-full mb-12">
            <h2 className="text-3xl"><span className="text-[#c778dd]">#</span>experience</h2>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }} className="border-l-2 border-[#c778dd] pl-6 py-2 flex flex-col gap-4">
                <div>
                   <h3 className="text-2xl font-medium">Astu msj Bootcamp <span className="text-[#c778dd] text-lg">(ASTUMSJ)</span></h3>
                   <p className="text-[#abb2bf] italic">Adama</p>
                </div>
                <ul className="list-disc leading-relaxed text-[#abb2bf] pl-4 space-y-2">
                    <li>Developed a full-stack library management system using React, Node.js, Express, and MongoDB.</li>
                    <li>Implemented book browsing, borrowing, and admin management, improving workflow efficiency by 40%.</li>
                    <li>Collaborated with a 5-member team on both frontend and backend integration, ensuring smooth deployment.</li>
                </ul>
            </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}