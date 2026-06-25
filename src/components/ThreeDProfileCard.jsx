import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

function ThreeDProfileCard() {
  const cardRef = useRef(null);

  // Motion values for mouse positions
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
    damping: 20,
    stiffness: 150,
  });

  // Light flare glow position coordinates
  const flareX = useTransform(x, [-0.5, 0.5], ['100%', '0%']);
  const flareY = useTransform(y, [-0.5, 0.5], ['100%', '0%']);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center, normalized from -0.5 to 0.5
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="relative w-full max-w-[380px] h-[480px] cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full glass-panel rounded-2xl relative overflow-hidden flex flex-col p-6 shadow-[0_0_50px_rgba(0,240,255,0.05)] border-white/10 group transition-all duration-300"
      >
        {/* Dynamic Light Flare Effect */}
        <motion.div
          style={{
            top: flareY,
            left: flareX,
            transform: 'translate(-50%, -50%)',
          }}
          className="absolute w-64 h-64 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-full blur-[40px] pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity duration-300"
        />

        {/* 3D Depth Card Content Layer */}
        <div 
          className="relative z-10 flex flex-col h-full justify-between"
          style={{ transform: 'translateZ(50px)' }}
        >
          {/* Card Top: Design Badges */}
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-neon-blue px-2.5 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20">
              Active Member
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse" />
          </div>

          {/* Card Middle: Designer Graphic Display */}
          <div className="my-auto flex flex-col items-center justify-center py-6">
            <div className="relative w-40 h-40 rounded-full flex items-center justify-center p-[2px] bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-pink shadow-[0_0_30px_rgba(189,0,255,0.25)] group-hover:shadow-[0_0_40px_rgba(189,0,255,0.45)] transition-all duration-500 mb-6">
              {/* Profile Image / Creative Graphics Placeholder */}
              <div class="w-full h-full rounded-full bg-dark-bg overflow-hidden flex items-center justify-center relative">
                <img src="assets/nasum_profile.jpg" alt="Nasum Mohasin" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 via-transparent to-transparent" />
              </div>
            </div>

            <h3 className="font-display font-bold text-2xl tracking-wide text-white group-hover:text-neon-blue transition-colors duration-300">
              Nasum Mohasin
            </h3>
            <p className="font-sans text-xs tracking-wider text-slate-400 mt-1">
              Anantapur, Andhra Pradesh
            </p>
          </div>

          {/* Card Bottom: Core Skills Showcase */}
          <div className="border-t border-white/5 pt-4 flex flex-wrap gap-2 justify-center">
            <span className="text-[10px] font-medium font-display tracking-widest text-slate-300 bg-white/5 px-3 py-1 rounded-md">
              GRAPHICS
            </span>
            <span className="text-[10px] font-medium font-display tracking-widest text-slate-300 bg-white/5 px-3 py-1 rounded-md">
              REELS EDITING
            </span>
            <span className="text-[10px] font-medium font-display tracking-widest text-slate-300 bg-white/5 px-3 py-1 rounded-md">
              AI ART
            </span>
          </div>
        </div>

        {/* Dynamic Card Border Glow */}
        <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-neon-purple/50 transition-colors duration-500 pointer-events-none" />
      </motion.div>
    </div>
  );
}

export default ThreeDProfileCard;
