import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title title-gradient">About Me</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '3rem', alignItems: 'center' }}>

        {/* Photo Box */}
        <motion.div
          whileHover={{ scale: 1.0, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ width: '100%', height: '350px', borderRadius: '24px', background: 'var(--card-bg)', border: '2px solid rgba(192, 132, 252, 0.3)', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 15px 35px rgba(0,0,0,0.4), 0 0 20px var(--accent-glow)' }}
        >
          <img src="/profile1.jpg" alt="Shiv Chavda" style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: 'high-quality', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.querySelector('.fallback-msg').style.display = 'flex'; }} />
          <div className="fallback-msg" style={{ display: 'none', position: 'absolute', flexDirection: 'column', textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
            <span>Rename your photo to</span>
            <strong className="text-gradient">profile1.jpg</strong>
            <span>and place it in the public folder</span>
          </div>
        </motion.div>

        {/* Text Box */}
        <div className="glass-card" style={{ display: 'grid', gap: '1.5rem', height: '100%', alignContent: 'center', transition: 'all 0.3s ease' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            I am a passionate software developer currently pursuing my B.Tech in Computer Science and Engineering at IIIT Vadodara. My journey in tech is driven by an obsession with <strong style={{ color: 'var(--text-primary)' }}>building scalable architectures, integrating AI intelligently,</strong> and creating butter-smooth real-time systems.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            I specialize in cross-platform mobile development using Flutter, backend development using Node.js and Postgres, and I thrive on optimizing state management. Whether I'm tinkering with <span className="text-gradient">Graph Databases</span> or weaving <span className="text-gradient">LLM capabilities</span> into apps, I always aim to deliver top-notch interactive user experiences.
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default About;
