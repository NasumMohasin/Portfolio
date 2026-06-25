import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Video, Share2, Compass, Cpu, Palette } from 'lucide-react';

const skills = [
  {
    title: 'Graphic Design',
    desc: 'Crafting brand identities, brochures, posters, and flyers with balanced layouts.',
    icon: Palette,
    color: 'from-neon-blue to-cyan-500',
    glow: 'rgba(0, 240, 255, 0.15)',
  },
  {
    title: 'Mobile Video Editing',
    desc: 'Creating high-energy vertical reels, vlogs, and commercials directly on mobile platforms.',
    icon: Video,
    color: 'from-neon-purple to-indigo-600',
    glow: 'rgba(189, 0, 255, 0.15)',
  },
  {
    title: 'Social Media Design',
    desc: 'Optimizing post engagement with scroll-stopping grid tiles, carousels, and stories.',
    icon: Share2,
    color: 'from-neon-pink to-rose-600',
    glow: 'rgba(255, 0, 122, 0.15)',
  },
  {
    title: 'Poster Design',
    desc: 'High-concept movie, event, and advertising posters with dramatic grading and compositions.',
    icon: PenTool,
    color: 'from-amber-400 to-orange-500',
    glow: 'rgba(251, 191, 36, 0.15)',
  },
  {
    title: 'AI Design Tools',
    desc: 'Integrating Midjourney, Leonardo, and Photoshop Generative Fill for advanced visual assets.',
    icon: Cpu,
    color: 'from-emerald-400 to-teal-500',
    glow: 'rgba(52, 211, 153, 0.15)',
  },
];

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-80 h-80 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-neon-purple" />
            <span className="font-display font-medium text-xs tracking-wider text-slate-300">
              Who I Am
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Crafting the Next-Gen Digital Aesthetics
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            I am a multi-disciplinary creator specialized in graphic design, high-tempo video production, and social branding. Based in Anantapur, I collaborate globally to turn flat media into immersive digital stories.
          </motion.p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Creative Vision &amp; Practical Execution
            </h3>
            
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
              Design is more than just colors on a page—it's how a brand speaks to its audience. Over the years, I've developed a workflow that merges standard design philosophy with bleeding-edge AI generation.
            </p>
            
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
              When it comes to video editing, my focus is mobile workflows—crafting ultra-fast cuts, kinetic typography, and audio transitions optimized specifically for Reels, YouTube Shorts, and TikTok.
            </p>

            {/* Quick Stats list */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl glass-panel border-white/5">
                <span className="font-display font-bold text-lg text-neon-blue">India</span>
                <p className="font-sans text-xs text-slate-400 mt-1 uppercase tracking-wider">Base Location</p>
              </div>
              <div className="p-4 rounded-xl glass-panel border-white/5">
                <span className="font-display font-bold text-lg text-neon-purple">24/7</span>
                <p className="font-sans text-xs text-slate-400 mt-1 uppercase tracking-wider">Online Collaboration</p>
              </div>
            </div>
          </motion.div>

          {/* Right Skills Grid Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{
                  boxShadow: `0 10px 30px -15px ${skill.glow}`,
                }}
                className="p-5 rounded-2xl glass-panel glass-panel-hover border-white/5 flex flex-col items-start text-left relative overflow-hidden group"
              >
                {/* Visual Glow Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                {/* Glowing Icon Wrapper */}
                <div className={`p-3 rounded-xl bg-gradient-to-tr ${skill.color} bg-opacity-10 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>
                  <skill.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h4 className="font-display font-bold text-base text-white mb-2">
                  {skill.title}
                </h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
