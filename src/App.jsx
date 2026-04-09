import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import About from './sections/About';
import Experience from './sections/Experience';
import { Terminal, Briefcase, FileText } from 'lucide-react';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import EasterEggs from './components/EasterEggs';

function App() {
  const { scrollYProgress } = useScroll();

  // Hero section animation: scale down and fade out as user scrolls
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const [isSantoryu, setIsSantoryu] = useState(false);

  const handleSantoryu = () => {
    setIsSantoryu(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsSantoryu(false), 6500);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <EasterEggs onSantoryu={handleSantoryu} />
      {!isSantoryu && <ParticlesBackground />}
      {isSantoryu && (
        <div className="zoro-video-bg">
          <img src="https://media.tenor.com/yNq8PTrXLdgAAAAC/zoro-roronoa-zoro.gif" alt="Zoro Background" />
          <div className="zoro-video-overlay"></div>
        </div>
      )}

      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>

      <nav className="modern-nav">
        <div className="nav-container">
          <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-logo" style={{ cursor: 'pointer' }}>
            Shiv
          </a>
          <div className="nav-links">
            <a onClick={() => scrollTo('about')} className="nav-link">About</a>
            <a onClick={() => scrollTo('experience')} className="nav-link">Experience</a>
            <a onClick={() => scrollTo('projects')} className="nav-link">Projects</a>
            <a onClick={() => scrollTo('skills')} className="nav-link">Skills</a>
            <a onClick={() => scrollTo('contact')} className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <div className="app-container">
        {/* Landing/Hero Section */}
        <motion.div
          className="hero-content"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '4.5rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.1' }}
          >
            Hi, I'm <br />
            {isSantoryu ? (
              <span className="zoro-shout" style={{ fontSize: '1.2em', position: 'relative', display: 'inline-block' }}>
                Zoro
                <div className="sword-slash"></div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  style={{
                    position: 'absolute',
                    bottom: '-1.5rem',
                    left: 0,
                    fontSize: '0.8rem',
                    color: 'rgba(34, 197, 94, 0.6)',
                    fontWeight: 800,
                    letterSpacing: '0.2em'
                  }}
                >
                  NOTHING HAPPENED.
                </motion.div>
              </span>
            ) : (
              <span className="highlight text-gradient" style={{ fontSize: '1.2em' }}>Shiv Chavda</span>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ fontSize: '1.25rem', color: '#ffffff', maxWidth: '600px', marginBottom: '2.5rem' }}
          >
            A passionate software developer specializing in cross-platform mobile development, robust backend architectures, and fast, interactive systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}
          >
            <a href="https://github.com/Shiv-Chavda" target="_blank" rel="noreferrer" className="btn-icon-only" title="GitHub">
              <Terminal size={22} />
            </a>
            <a href="https://linkedin.com/in/shivchavda" target="_blank" rel="noreferrer" className="btn-icon-only" title="LinkedIn">
              <Briefcase size={22} />
            </a>
            <a href="https://drive.google.com/file/d/1ua3OzQmDwjd66l5jaCZpvQEajZV9TuFH/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary" style={{ borderRadius: '30px' }} title="Resume">
              <FileText size={20} />
              Resume
            </a>
          </motion.div>
        </motion.div>

        <main>
          <section id="about" className="section-wrapper"><About /></section>
          <section id="experience" className="section-wrapper"><Experience /></section>
          <section id="projects" className="section-wrapper"><Projects /></section>
          <section id="skills" className="section-wrapper"><Skills /></section>
          <section id="contact" className="section-wrapper"><Contact /></section>
        </main>

        <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--card-border)', marginTop: '4rem' }}>
          <p>© {new Date().getFullYear()} <strong className="text-gradient">Shiv Chavda</strong>. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
