import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const BentoCard = ({ children, className, span = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={clsx(
        "bg-slate-800/50 border border-slate-700/50 rounded-3xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-colors overflow-hidden relative group",
        span, // Allows us to control size (col-span-2, row-span-2)
        className
      )}
    >
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10 group-hover:bg-indigo-500/20 transition-all" />
      
      {children}
    </motion.div>
  );
};

export default BentoCard;