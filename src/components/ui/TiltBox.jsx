import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

// NOTE: Removed Sparkles import as it's no longer needed

const TiltBox = () => {
  const ref = useRef(null);

  // 1. Track Mouse Position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Smooth Physics
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  // 3. Rotation Map
  const rotateX = useTransform(ySpring, [-300, 300], [15, -15]); // Reduced rotation slightly for a cleaner look without frame
  const rotateY = useTransform(xSpring, [-300, 300], [-15, 15]);

  // 4. Glare Opacity Map
  const glareOpacity = useTransform(xSpring, [-300, 0, 300], [0.3, 0, 0.3]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * width);
    y.set(yPct * height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      // UPDATED CONTAINER CSS:
      // 1. Removed 'border border-zinc-700 bg-zinc-900' (The outer frame/bg)
      // 2. Changed rounded corners to '[20px]' for a tighter feel
      // 3. Kept a subtle hover shadow for depth
      className="relative h-96 w-72 md:h-[28rem] md:w-80 rounded-[20px] transition-all duration-200 group hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer"
    >
      
      {/* --- 3D LAYER 1: The Image (NOW FRAMELESS) --- */}
      <div
        style={{ transform: "translateZ(10px)" }} // Reduced Z-depth slightly
        // UPDATED IMAGE CSS:
        // 1. Changed 'inset-4' to 'inset-0' so image fills the whole area (removes inner frame gap)
        // 2. Removed 'bg-zinc-950 shadow-inner'
        className="absolute inset-0 rounded-[20px] overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=600&h=800&q=80"
          alt="Profile"
          // Added scale-[1.01] to ensure edges don't clip during tilt
          className="h-full w-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* --- REMOVED THE SPARKLES ICON DIV SECTION HERE --- */}

      {/* --- 3D LAYER 2: Glare Effect --- */}
      <motion.div
        style={{
          transform: "translateZ(20px)",
          opacity: glareOpacity,
          background: "linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.2) 50%, transparent 80%)"
        }}
        className="absolute inset-0 z-20 rounded-[20px] pointer-events-none"
      />
    </motion.div>
  );
};

export default TiltBox;