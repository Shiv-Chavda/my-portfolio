import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="section-title">Experience</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>

        <motion.div className="editorial-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic' }}>Flutter Developer Intern</h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', marginTop: 'var(--space-xs)' }}>Debound • Remote</p>
            </div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', padding: 'var(--space-xs) var(--space-sm)', background: 'transparent', border: '1px solid var(--border-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Dec 2025 – Present
            </span>
          </div>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7 }}>
            <li>Developed multiple admin and management modules for the Rodic Infra Management platform, a large-scale construction management system used by government infrastructure agencies across India.</li>
            <li>Implemented core modules including finance management, bill verification workflows, project creation, and closure systems.</li>
            <li>Designed multi-level approval workflows for contractor bill verification, enabling structured review cycles.</li>
            <li>Collaborated with the engineering team to extend the Flutter-based web platform with reusable UI components.</li>
          </ul>
        </motion.div>

        <motion.div className="editorial-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic' }}>Flutter Developer Intern</h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', marginTop: 'var(--space-xs)' }}>Etycia Global Private Limited • Remote</p>
            </div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', padding: 'var(--space-xs) var(--space-sm)', background: 'transparent', border: '1px solid var(--border-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              May 2025 – Jul 2025
            </span>
          </div>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7 }}>
            <li>Developed two cross-platform mobile apps using Flutter/Dart with a Node.js + PostgreSQL backend, optimizing state management.</li>
            <li>Engineered Urban Streets, a community-driven platform supporting real-time chat for 100+ users via WebSockets.</li>
            <li>Designed and maintained backend services using Node.js, PostgreSQL, and Redis caching. Improved data consistency and resolved 100+ production issues.</li>
            <li>Collaborated within a 4-member team to design APIs and integrate 50+ REST APIs, significantly reducing application crash rates.</li>
          </ul>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Experience;
