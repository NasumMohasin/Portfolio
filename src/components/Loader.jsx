import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2400; // ms
    const intervalTime = 30; // ms
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(
        Math.floor((currentStep / totalSteps) * 100),
        100
      );
      setProgress(nextProgress);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030014] text-white"
      >
        {/* Glow ambient circle in background */}
        <div className="absolute w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative flex flex-col items-center max-w-xs text-center">
          {/* Animated 3D geometric outline loader */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-24 h-24 mb-8"
          >
            {/* Spinning Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
              className="absolute inset-0 border-2 border-transparent border-t-neon-blue border-r-neon-blue rounded-full"
            />
            {/* Spinning Ring 2 (reverse) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
              className="absolute inset-2 border border-transparent border-b-neon-purple border-l-neon-purple rounded-full"
            />
            {/* Inner Glowing Hexagon/Square */}
            <motion.div
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute inset-6 bg-gradient-to-tr from-neon-purple to-neon-blue rounded-lg blur-[2px] opacity-70"
            />
            <div className="absolute inset-7 bg-[#030014] rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-xl text-neon-blue">NM</span>
            </div>
          </motion.div>

          {/* User Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-2xl font-bold tracking-[0.2em] uppercase text-white mb-2"
          >
            Nasum Mohasin
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-slate-400 mb-6"
          >
            Portfolio Experience
          </motion.p>

          {/* Loading Percentage Bar */}
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
              style={{ width: `${progress}%` }}
            />
          </div>

          <motion.span
            className="font-display font-light text-sm text-neon-blue mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {progress}%
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader;
