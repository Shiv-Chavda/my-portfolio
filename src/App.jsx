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
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);
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

      {/* Ambient blobs removed via CSS for stark look */}
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
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '90vh', gap: 'var(--space-3xl)' }}
        >
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: '400', margin: 0, lineHeight: '0.85', letterSpacing: '-0.05em', fontFamily: 'var(--font-display)', display: 'flex', flexDirection: 'column' }}
          >
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
                    fontSize: '1rem',
                    color: 'rgba(34, 197, 94, 0.6)',
                    fontWeight: 800,
                    letterSpacing: '0.2em'
                  }}
                >
                  NOTHING HAPPENED.
                </motion.div>
              </span>
            ) : (
              <>
                <span style={{ overflow: 'hidden', display: 'inline-flex' }}>
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    style={{ color: 'var(--text-primary)', marginLeft: '-0.05em', display: 'inline-block' }}
                  >
                    Shiv
                  </motion.span>
                </span>
                <span style={{ overflow: 'hidden', display: 'inline-flex', paddingLeft: 'clamp(2rem, 15vw, 12rem)' }}>
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="accent-text"
                    style={{ display: 'inline-block' }}
                  >
                    Chavda
                  </motion.span>
                </span>
              </>
            )}
          </motion.h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-2xl)', marginTop: 'var(--space-2xl)', borderTop: '1px solid var(--border-color)', paddingTop: 'var(--space-xl)', marginLeft: 'clamp(0px, 10vw, 200px)' }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: '1.2rem', color: 'var(--text-primary)', opacity: 0.9, fontWeight: 300, lineHeight: '1.6', margin: 0 }}
            >
              Software Engineer & Full Stack Developer.<br /><br />
              A passionate developer specializing in cross-platform mobile architectures, robust backend systems, and crafting unapologetically fast digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-primary)', opacity: 0.8, marginBottom: 'var(--space-xs)' }}>Connect</span>
                <div style={{ display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap' }}>
                  <a href="https://github.com/Shiv-Chavda" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'var(--text-primary)', borderBottom: '1px solid transparent', transition: 'border-color 0.3s', fontSize: '0.95rem' }} onMouseEnter={e => e.target.style.borderBottomColor = 'var(--text-primary)'} onMouseLeave={e => e.target.style.borderBottomColor = 'transparent'}>GitHub</a>
                  <a href="https://linkedin.com/in/shivchavda" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'var(--text-primary)', borderBottom: '1px solid transparent', transition: 'border-color 0.3s', fontSize: '0.95rem' }} onMouseEnter={e => e.target.style.borderBottomColor = 'var(--text-primary)'} onMouseLeave={e => e.target.style.borderBottomColor = 'transparent'}>LinkedIn</a>
                </div>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-primary)', opacity: 0.8, marginBottom: 'var(--space-xs)' }}>Detailed Profile</span>
                <a href="https://drive.google.com/file/d/1ua3OzQmDwjd66l5jaCZpvQEajZV9TuFH/view?usp=sharing" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--accent-color)', borderBottom: '1px solid transparent', transition: 'border-color 0.3s', fontSize: '0.95rem' }} onMouseEnter={e => e.target.style.borderBottomColor = 'var(--accent-color)'} onMouseLeave={e => e.target.style.borderBottomColor = 'transparent'}>
                  Resume <span style={{ fontFamily: 'sans-serif' }}>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <main>
          <section id="about" className="section-wrapper"><About /></section>
          <section id="experience" className="section-wrapper"><Experience /></section>
          <section id="projects" className="section-wrapper"><Projects /></section>
          <section id="skills" className="section-wrapper"><Skills /></section>
          <section id="contact" className="section-wrapper"><Contact /></section>
        </main>

        <footer style={{ padding: 'var(--space-3xl) 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', marginTop: 'var(--space-4xl)' }}>
          <p style={{ fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>© {new Date().getFullYear()} <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Shiv Chavda</strong>. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
