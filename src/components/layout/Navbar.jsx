import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Github, Instagram } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll to trigger the "glass" effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // SOCIAL LINKS DATA
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={18} />, 
      href: "https://www.linkedin.com/in/mohamed-suhail-afreeth-a3724a324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // <--- PLEASE UPDATE THIS
    },
    { 
      name: "GitHub", 
      icon: <Github size={18} />, 
      href: "https://github.com/mhd-suhail321" // I added your GitHub based on your projects
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={18} />, 
      href: "https://www.instagram.com/afree__th?igsh=M3E3MDI1bjc3YzZ0" // <--- PLEASE UPDATE THIS
    },
  ];

  return (
    <>
      {/* DESKTOP & TABLET TOP NAV */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div 
            className={`flex items-center justify-center relative px-6 py-3 rounded-full transition-all duration-500 ${
              scrolled 
                ? "bg-zinc-900/70 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50" 
                : "bg-transparent border border-transparent"
            }`}
          >
            
            {/* 1. CENTERED LINKS */}
            <ul className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                  >
                    {item.name}
                    {/* Hover Underline Animation */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* 2. SOCIAL ICONS (Absolute Right Position) */}
            <div className="hidden md:flex items-center gap-4 absolute right-6">
              <div className="w-px h-4 bg-zinc-700 mr-2"></div> {/* Divider */}
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* MOBILE MENU TOGGLE (Absolute Right on Mobile) */}
            <div className="absolute right-4 md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY (Full Screen) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 pt-28 px-6 md:hidden flex flex-col items-center"
          >
            {/* Nav Links */}
            <ul className="flex flex-col gap-8 text-center w-full max-w-xs">
              {navItems.map((item) => (
                <li key={item.name} className="w-full border-b border-zinc-800 pb-4">
                  <a 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Social Icons Row */}
            <div className="mt-12 flex items-center gap-8">
               {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 hover:text-white hover:border-cyan-500 hover:bg-zinc-800 transition-all"
                >
                  {React.cloneElement(social.icon, { size: 24 })}
                </a>
              ))}
            </div>

            {/* Resume Button Mobile */}
            <div className="mt-8 w-full max-w-xs">
              <a 
                  href="/resume.pdf" 
                  download="Suhail_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-zinc-100 text-black font-bold rounded-xl hover:bg-white transition-colors"
              >
                Download Resume
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;