import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import { motion } from "framer-motion";

export default function Contacts() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#282c33] text-white font-['Fira_Code'] flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto px-4 w-full flex flex-col gap-12 pt-12">
        {/* Page Title */}
        <motion.section initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold"><span className="text-[#c778dd]">/</span>contacts</h1>
          <p className="text-[#abb2bf]">Get in touch</p>
        </motion.section>

        {/* Contacts Info */}
        <motion.section 
           initial="hidden" animate="visible" variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
           }}
           className="flex flex-wrap lg:flex-nowrap gap-12 w-full mt-4 justify-between">
           <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex flex-col gap-6 text-[#abb2bf] text-lg leading-relaxed">
              <p>
                I'm currently looking for full-stack opportunities, especially involving back-end web development, API engineering, or AI chatbot integrations. 
              </p>
              <p>
                I am based in Adama, Ethiopia, but open to remote work. If you have any requests or questions, don't hesitate to reach out!
              </p>
           </motion.div>
           
           <motion.div variants={fadeUp} className="w-full sm:w-max border border-[#abb2bf]/30 p-6 flex flex-col gap-6 items-start self-start bg-[#282c33] z-10 hover:border-[#c778dd] transition-colors relative">
               <motion.div 
                 initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.5, duration: 0.5 }}
                 className="absolute top-0 left-0 h-[2px] bg-[#c778dd]" />
               <h3 className="text-xl font-medium text-white mb-2">Message me here</h3>
               
               <div className="flex flex-col gap-4">
                   <motion.a whileHover={{ x: 5 }} href="mailto:kanzedinakmel0@gmail.com" className="flex items-center gap-3 text-[#abb2bf] hover:text-white group">
                       <span className="text-2xl group-hover:text-[#c778dd] transition-colors">📧</span>
                       kanzedinakmel0@gmail.com
                   </motion.a>

                   <motion.a whileHover={{ x: 5 }} href="tel:+251994152120" className="flex items-center gap-3 text-[#abb2bf] hover:text-white group">
                       <span className="text-2xl group-hover:text-[#c778dd] transition-colors">📞</span>
                       +251994152120
                   </motion.a>

                   <motion.a whileHover={{ x: 5 }} href="https://linkedin.com/in/kanzedin-akmel-78128328b" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#abb2bf] hover:text-white group">
                       <span className="text-2xl group-hover:text-[#c778dd] transition-colors">💼</span>
                       linkedin.com/in/kanzedin-akmel
                   </motion.a>

                   <motion.a whileHover={{ x: 5 }} href="https://github.com/Kanzu11" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#abb2bf] hover:text-white group">
                       <span className="text-2xl group-hover:text-[#c778dd] transition-colors">👨‍💻</span>
                       github.com/Kanzu11
                   </motion.a>
               </div>
           </motion.div>
        </motion.section>

        {/* Support Section */}
        <motion.section 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="w-full flex justify-center mt-12 mb-12">
            <h2 className="text-3xl text-center"><span className="text-[#c778dd]">#</span>all-media</h2>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}