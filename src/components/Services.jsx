import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Image, Film, Heart, Play, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Poster Design',
    desc: 'High-concept movie posters, event banners, and commercial advertising materials featuring dynamic composite lighting and professional grade color corrections.',
    icon: Image,
    color: 'neon-blue',
    features: ['High-resolution print files', 'Advanced image manipulation', 'Custom text styles'],
  },
  {
    title: 'Social Media Posts',
    desc: 'Engagement-driven post designs, seamless multi-slide carousels, and modern feed templates tailored to maximize visibility and establish visual identity.',
    icon: Sparkles,
    color: 'neon-purple',
    features: ['Brand asset adaptation', 'Scroll-stopping grids', 'Story layouts included'],
  },
  {
    title: 'Reels Editing',
    desc: 'Kinetic typography, rapid beat cuts, and trend-focused transitions optimized specifically for Instagram Reels, YouTube Shorts, and high-impact TikTok promotions.',
    icon: Film,
    color: 'neon-pink',
    features: ['Mobile workflow assets', 'Rhythmic sound design', 'Dynamic color grading'],
  },
  {
    title: 'Wedding Invitations',
    desc: 'Elegant modern digital invite designs and custom motion graphic invitation cards/videos that capture your theme and wedding style beautifully.',
    icon: Heart,
    color: 'neon-purple',
    features: ['Custom script fonts', 'Video invite templates', 'Print & mobile web ready'],
  },
  {
    title: 'Thumbnail Design',
    desc: 'Eye-catching YouTube thumbnail kits featuring high-contrast text treatments and click-through rate (CTR) optimization concepts built to boost video traffic.',
    icon: Play,
    color: 'neon-blue',
    features: ['Extreme readability test', 'Source files delivery', 'Color-coded variations'],
  },
];

function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Dynamic ambient gradients */}
      <div className="absolute top-[30%] left-[-15%] w-96 h-96 bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-80 h-80 bg-neon-pink/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Flame className="w-3.5 h-3.5 text-neon-pink" />
            <span className="font-display font-medium text-xs tracking-wider text-slate-300">
              Creative Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            High-Impact Visual Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            I deliver targeted digital design and mobile post-production support designed to elevate your content output.
          </motion.p>
        </div>

        {/* Services Showcase Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            // Determine active color borders on hover
            const borderColors = {
              'neon-blue': 'hover:border-neon-blue/50 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.1)]',
              'neon-purple': 'hover:border-neon-purple/50 group-hover:shadow-[0_0_25px_rgba(189,0,255,0.1)]',
              'neon-pink': 'hover:border-neon-pink/50 group-hover:shadow-[0_0_25px_rgba(255,0,122,0.1)]',
            };
            const textGlow = {
              'neon-blue': 'text-neon-blue neon-text-blue',
              'neon-purple': 'text-neon-purple neon-text-purple',
              'neon-pink': 'text-neon-pink neon-text-pink',
            };

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`p-8 rounded-2xl glass-panel border-white/5 bg-dark-card flex flex-col justify-between text-left transition-all duration-500 relative group cursor-default overflow-hidden ${
                  borderColors[service.color]
                }`}
              >
                {/* Neon glow effect line on card head */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/20 transition-all duration-500" />
                
                <div>
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-display font-black text-4xl text-white/5 group-hover:text-white/10 transition-colors duration-300">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className={`font-display font-bold text-xl text-white mb-3 group-hover:text-white transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Features Bullet List */}
                <ul className="border-t border-white/5 pt-6 space-y-2.5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-[#00f0ff] transition-colors`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default Services;
