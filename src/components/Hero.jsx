import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Video, PenTool, Sparkles } from 'lucide-react';
import ThreeDProfileCard from './ThreeDProfileCard.jsx';
import ThreeDCanvas from './ThreeDCanvas.jsx';

function Hero() {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* 3D Canvas Background Overlay */}
      <ThreeDCanvas />

      {/* Hero Ambient Circle Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Copywriting Content */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-neon-blue animate-pulse" />
            <span className="font-display font-medium text-xs tracking-wider text-slate-300">
              Welcome to the Future of Creative Design
            </span>
          </motion.div>

          {/* Main Title Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            I Create <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
              Premium Visuals
            </span> <br />
            &amp; Cinematic Motion
          </motion.h1>

          {/* Tagline Role Selector Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed"
          >
            Hi, I'm <strong className="text-white font-semibold">Nasum Mohasin</strong>. A creative graphic designer and mobile video editor based in India. I specialize in turning ideas into high-impact social media designs, reels, and visual branding.
          </motion.p>

          {/* Call-To-Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-sans text-sm font-semibold tracking-wider uppercase hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 group"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/916305681693"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-panel text-white font-sans text-sm font-semibold tracking-wider uppercase hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              Hire Me
            </a>
          </motion.div>

          {/* Micro stats banner */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 mt-12 border-t border-white/5 pt-8 w-full max-w-md"
          >
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-white flex items-center gap-1.5">
                <PenTool className="w-4 h-4 text-neon-blue" /> 50+
              </span>
              <span className="font-sans text-xs tracking-wider text-slate-400 mt-1 uppercase">Designs Delivered</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-white flex items-center gap-1.5">
                <Video className="w-4 h-4 text-neon-purple" /> 100k+
              </span>
              <span className="font-sans text-xs tracking-wider text-slate-400 mt-1 uppercase">Reels Views</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive 3D Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <ThreeDProfileCard />
        </motion.div>
      </div>

      {/* Infinite Tagline Marquee at the very bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-[#030014]/50 backdrop-blur-sm py-4 z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-slate-400 text-xs sm:text-sm font-display uppercase tracking-[0.3em]">
              <span>Graphic Designer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span>Mobile Video Editor</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
              <span>Creative Designer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neon-pink" />
              <span>AI Content Creator</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
