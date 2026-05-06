import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  // --- REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS ---
  const SERVICE_ID = "service_56nypck";
  const TEMPLATE_ID = "template_go36fgg";
  const PUBLIC_KEY = "IxrAE6bYpDKQWei3P";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setLoading(false);
        setStatus("success");
        formRef.current.reset(); // Clear form
        setTimeout(() => setStatus(null), 5000); // Reset status after 5 sec
      }, (error) => {
        setLoading(false);
        setStatus("error");
        console.error(error.text);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-indigo-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* 1. LEFT SIDE: CONTACT INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white">Let's Talk About Your Project</h3>
            <p className="text-zinc-400 leading-relaxed">
              I am actively seeking full-time opportunities and freelance collaborations. 
  Whether you need robust backend architecture, data engineering solutions, 
  or a complete full-stack application, let’s discuss how I can contribute 
  to your success.  </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-indigo-400">
                  <Mail size={20} />
                </div>
                <span>Mohamedsuhailafreeth@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-indigo-400">
                  <Phone size={20} />
                </div>
                <span>+91 9865939889</span>
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-indigo-400">
                  <MapPin size={20} />
                </div>
                <span>Erode, Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>

          {/* 2. RIGHT SIDE: CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Name</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    required 
                    placeholder="Eg.Mohamed Suhail"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Email</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    required 
                    placeholder="Eg.suhailafreeth@gmail.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  placeholder="Project Inquiry"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows={4} 
                  placeholder="Tell me about your project..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>Sending... <Loader2 className="animate-spin" size={20} /></>
                ) : status === "success" ? (
                  <>Message Sent! <CheckCircle size={20} /></>
                ) : status === "error" ? (
                  <>Failed. Try Again <XCircle size={20} /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;