import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="section-title">About Me</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: 'var(--space-3xl)', alignItems: 'start' }}>

        {/* Photo Box */}
        <motion.div
          initial={{ filter: 'grayscale(100%)' }}
          whileHover={{ filter: 'grayscale(0%)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '400px', borderRadius: '0', background: 'transparent', border: '1px solid var(--border-color)', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img src="/profile1.jpg" alt="Shiv Chavda" style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: 'high-quality', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.querySelector('.fallback-msg').style.display = 'flex'; }} />
          <div className="fallback-msg" style={{ display: 'none', position: 'absolute', flexDirection: 'column', textAlign: 'center', padding: 'var(--space-md)', color: 'var(--text-secondary)' }}>
            <span>Rename your photo to</span>
            <strong className="accent-text">profile1.jpg</strong>
            <span>and place it in the public folder</span>
          </div>
        </motion.div>

        {/* Text Box */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', paddingTop: 'var(--space-sm)' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: '1.8', fontWeight: 300 }}>
            I am a passionate software developer currently pursuing my B.Tech in Computer Science and Engineering at IIIT Vadodara. My journey in tech is driven by an obsession with <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>building scalable architectures, integrating AI intelligently,</strong> and creating butter-smooth real-time systems.
          </p>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: '1.8', fontWeight: 300 }}>
            I specialize in cross-platform mobile development using Flutter, backend development using Node.js and Postgres, and I thrive on optimizing state management. Whether I'm tinkering with <span className="accent-text">Graph Databases</span> or weaving <span className="accent-text">LLM capabilities</span> into apps, I always aim to deliver top-notch interactive user experiences.
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default About;
