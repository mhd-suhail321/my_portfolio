import React from 'react';
import { motion } from 'framer-motion';
import Spotlight from './components/ui/Spotlight';
import Navbar from './components/layout/Navbar';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import SkillsSection from './components/sections/SkillsSection';
import RevealOnScroll from './components/ui/RevealOnScroll'; 
import Footer from './components/layout/Footer';
import ProfessionalProfile from './components/ui/ProfessionalProfile'; // <--- 1. IMPORT NEW COMPONENT
import { FileText } from 'lucide-react';

function App() {
  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden">
      
      {/* 1. Global Tools */}
      <Spotlight />
      <Navbar /> 

      {/* 2. SECTION: HERO */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-10">
        
        {/* --- A. BADGE --- */}
        <div className="mb-12 z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-300 mx-auto">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for hire
          </div>
        </div>

        {/* --- B. MAIN CONTENT --- */}
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center z-10">
          
          {/* === ITEM 1: TEXT & NAME (Appears First/Top) === */}
          <div className="space-y-8 text-left">
            
            {/* HEADLINE */}
            <div>
              <p className="font-medium tracking-wide text-lg mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Hello, I am
              </p>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                <span style={{ color: '#ffffff' }}>Mohamed Suhail Afreeth</span>
              </h1>
            </div>

            {/* JOB TITLES */}
            <div className="text-xl md:text-2xl font-bold flex flex-wrap gap-2 items-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Java Developer
              </span>
              <span className="text-white">|</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Fullstack Web Developer
              </span>
              <span className="text-white">|</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Data Engineer
              </span>
            </div>

            {/* Download Resume Button */}
            <div className="pt-2">
              <a 
                href="/resume.pdf" 
                download="Suhail_Resume.pdf"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-bold text-black transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]"
              >
                <span className="mr-2">Download Resume</span>
                <FileText className="transition-transform group-hover:-translate-y-1" size={20} />
              </a>
            </div>
          </div>

          {/* === ITEM 2: PHOTO (Appears Second/Bottom) === */}
          <motion.div 
            className="flex justify-center md:justify-end perspective-1000"
            // Floating Animation
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
             {/* 2. REPLACED WITH PROFESSIONAL PROFILE */}
             <ProfessionalProfile />
          </motion.div>

        </div>
      </section>

      {/* 3. SECTION: ABOUT */}
      <section id="about" className="py-20 px-6 bg-zinc-900/30">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold mb-6">
               <span className="text-white">About </span>
               <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                 Me
               </span>
             </h2>
             
             <p className="text-gray-300 text-lg leading-relaxed">
               I am a skilled <strong>Java Developer</strong> capable of building scalable 
               <strong> Full Stack</strong> projects from scratch. Additionally, I bring expertise as a 
               <strong> Data Engineer</strong>, allowing me to design efficient data pipelines and 
               robust backend architectures.
             </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 4. SECTION: SKILLS */}
      <RevealOnScroll>
        <SkillsSection />
      </RevealOnScroll>

      {/* 5. SECTION: PROJECTS */}
      <RevealOnScroll>
        <ProjectsSection />
      </RevealOnScroll>

      {/* 6. SECTION: CONTACT */}
      <RevealOnScroll>
        <ContactSection />
      </RevealOnScroll>
      
      {/* 7. FOOTER */}
      <Footer /> 

    </div>
  );
}

export default App;