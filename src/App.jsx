import React, { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg text-slate-100 antialiased selection:bg-neon-purple/30 selection:text-neon-blue">
      {/* Interactive Particle Background covering the whole screen */}
      <ParticleBackground />

      {/* Global Neon Ambient Glows */}
      <div className="pointer-events-none fixed -top-[40%] -left-[20%] z-0 h-[80%] w-[60%] rounded-full bg-gradient-to-br from-neon-blue/15 to-transparent blur-[150px]" />
      <div className="pointer-events-none fixed -bottom-[30%] -right-[10%] z-0 h-[70%] w-[50%] rounded-full bg-gradient-to-tl from-neon-purple/15 to-transparent blur-[150px]" />

      {loading ? (
        <Loader />
      ) : (
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            <About />
            <Portfolio />
            <Services />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
