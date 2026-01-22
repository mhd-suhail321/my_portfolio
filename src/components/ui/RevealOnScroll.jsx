import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const RevealOnScroll = ({ children, width = "100%" }) => {
  const ref = useRef(null);
  // Trigger animation when the element is 10% visible in the viewport
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            y: 50,          // Starts 50px lower
            scale: 0.95,    // Starts slightly smaller (95%)
            filter: "blur(10px)" // Starts blurry
          },
          visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            filter: "blur(0px)" // Becomes clear
          },
        }}
        initial="hidden"
        animate={mainControls}
        // "Luxury" Easing Curve: Starts fast, lands very gently
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealOnScroll;