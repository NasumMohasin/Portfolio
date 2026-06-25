import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Eye, Layers } from 'lucide-react';

const categories = ['All', 'Branding', 'Graphics', 'Social Media', 'Posters'];

const projects = [
  {
    id: 1,
    title: 'Glowria Skincare Branding',
    category: 'Branding',
    image: 'assets/glowria_branding.png',
    behanceUrl: 'https://www.behance.net/gallery/251407111/Graphic-Design-Portfolio',
    desc: 'Full brand identity system featuring letterheads, corporate envelope, identity card, lanyards, smartphone configurations, and desktop browser mockup. Employs a premium organic forest green color scheme to represent natural toxin-free ingredients.',
  },
  {
    id: 2,
    title: 'Minimalist Logo Collection',
    category: 'Graphics',
    image: 'assets/logo_grid.png',
    behanceUrl: 'https://www.behance.net/gallery/251407111/Graphic-Design-Portfolio',
    desc: 'Grid layout detailing 12 modern corporate geometric vector logos (Avenix, Greenova, Altura, Bluevant, Carewell, Prolix, Belora, Naturox, Mystiq, Syncora, Vitacare, Finovex). Each logo showcases unique graphic geometry and typography.',
  },
  {
    id: 3,
    title: 'Revapure Logo Design',
    category: 'Graphics',
    image: 'assets/revapure_logo.png',
    behanceUrl: 'https://www.behance.net/gallery/251407111/Graphic-Design-Portfolio',
    desc: 'Sleek brand identity logo blending the letter R with a stylized leaf element. Promotes organic connection and natural wellness through minimalist vector curves and dark blue / teal accents.',
  },
  {
    id: 4,
    title: 'Glowria Logo Anatomy',
    category: 'Graphics',
    image: 'assets/glowria_anatomy.png',
    behanceUrl: 'https://www.behance.net/gallery/251407111/Graphic-Design-Portfolio',
    desc: 'Brand guidelines blueprint mapping negative spacing constraints, rounded sans-serif custom typefaces, green color psychology definitions, and leaf geometry structures representing growth and safety.',
  },
  {
    id: 5,
    title: 'Modern Product Packaging',
    category: 'Posters',
    image: 'assets/packaging_showcase.jpg',
    behanceUrl: 'https://www.behance.net/gallery/251407111/Graphic-Design-Portfolio',
    desc: 'Fidelity product rendering showcase. Covers design wraps for organic walnuts pouch (Nutrava), rose lychee sparkling water can (Fruitza), paneer tikka masala box (Masalaah), facial skincare tube (Lumora), and chocolate almond energy bar (Fuelora).',
  },
  {
    id: 6,
    title: 'Instagram Posters Grid',
    category: 'Social Media',
    image: 'assets/instagram_posters_grid.jpg',
    behanceUrl: 'https://www.behance.net/gallery/251407111/Graphic-Design-Portfolio',
    desc: 'Curated collection of 10 modern, high-engagement Instagram poster ads. Spans recruitment flyers, travel agency posts, burger ads, web banner mockups, sales promotions, real estate listings, fitness graphics, and coffee branding.',
  },
  {
    id: 7,
    title: 'Social Branding Mockup',
    category: 'Social Media',
    image: 'assets/social_media_branding_mockup.jpg',
    behanceUrl: 'https://www.behance.net/gallery/251407111/Graphic-Design-Portfolio',
    desc: 'Immersive branding presentation displaying street banners, scrolling smartphone UI layouts, and grid layouts demonstrating comprehensive social content strategies and modern corporate asset designs.',
  },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);

  // Filters projects based on selected tag
  const filteredProjects = projects.filter((project) =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const scrollAmount = direction === 'left' ? -clientWidth * 0.6 : clientWidth * 0.6;
    carouselRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="portfolio" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background neon flares */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-neon-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-80 h-80 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
            >
              <Layers className="w-3.5 h-3.5 text-neon-blue" />
              <span className="font-display font-medium text-xs tracking-wider text-slate-300">
                Selected Works
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            >
              Immersive Project Gallery
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-sm sm:text-base text-slate-400"
            >
              Click any project to inspect its layout details or view the full interactive files on Behance.
            </motion.p>
          </div>

          {/* Navigation Arrows for Carousel */}
          <div className="flex gap-3 justify-start">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-neon-blue hover:text-dark-bg hover:border-neon-blue transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-neon-purple hover:text-white hover:border-neon-purple transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 overflow-x-auto no-scrollbar justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-display font-medium text-xs tracking-wider uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple border-transparent text-white shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D-Look Horizontal Carousel Grid */}
        <motion.div
          layout
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 no-scrollbar scroll-smooth"
          style={{ perspective: 1200 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                whileHover={{
                  rotateY: index % 2 === 0 ? 3 : -3,
                  z: 10,
                }}
                className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] snap-start bg-dark-card glass-panel rounded-2xl overflow-hidden border-white/5 flex flex-col shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Cover */}
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-[#030014]/10 z-10 transition-opacity duration-300 group-hover:bg-[#030014]/40" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 z-20 text-[10px] font-display font-semibold tracking-wider uppercase bg-[#030014]/80 text-neon-blue border border-neon-blue/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                  {/* Hover Eye Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Description Grid Card Body */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  
                  <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Creative Asset</span>
                    <span className="text-neon-purple group-hover:underline flex items-center gap-1">
                      View Details <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Behance Global Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl glass-panel border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_35px_rgba(0,240,255,0.02)] relative overflow-hidden"
        >
          {/* Neon side border indicator */}
          <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-neon-blue to-neon-purple" />
          
          <div className="text-left max-w-xl">
            <h3 className="font-display font-bold text-lg text-white mb-1.5 flex items-center gap-2">
              Want to see my full portfolio book?
            </h3>
            <p className="font-sans text-sm text-slate-400">
              My most comprehensive graphic designs, social banners, and high-fidelity video projects are organized inside Behance.
            </p>
          </div>
          <a
            href="https://www.behance.net/gallery/251407111/Graphic-Design-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)] group"
          >
            Explore Behance <ExternalLink className="w-3.5 h-3.5 text-neon-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>

      {/* Project Detail Modal Backdrop */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-[#09051d] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.1)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cover Image in Modal */}
              <div className="relative h-64 sm:h-80 w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-medium transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body Info */}
              <div className="p-6 sm:p-8 text-left">
                <span className="text-[10px] font-display font-semibold tracking-wider text-neon-blue bg-neon-blue/10 border border-neon-blue/20 px-3 py-1 rounded-full uppercase">
                  {selectedProject.category}
                </span>
                
                <h3 className="font-display font-bold text-2xl text-white mt-4 mb-3">
                  {selectedProject.title}
                </h3>
                
                <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6">
                  {selectedProject.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5">
                  <a
                    href={selectedProject.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-sans text-xs font-semibold tracking-wider uppercase hover:shadow-[0_0_20px_rgba(189,0,255,0.3)] transition-all duration-300"
                  >
                    Launch on Behance
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 font-sans text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;
