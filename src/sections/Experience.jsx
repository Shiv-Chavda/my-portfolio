import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title title-gradient">Experience</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        <motion.div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Flutter Developer Intern</h3>
              <p style={{ color: 'var(--accent-color)', fontWeight: '500' }}>Debound • Remote</p>
            </div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
              Dec 2025 – Present
            </span>
          </div>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Developed multiple admin and management modules for the Rodic Infra Management platform, a large-scale construction management system used by government infrastructure agencies across India.</li>
            <li>Implemented core modules including finance management, bill verification workflows, project creation, and closure systems.</li>
            <li>Designed multi-level approval workflows for contractor bill verification, enabling structured review cycles.</li>
            <li>Collaborated with the engineering team to extend the Flutter-based web platform with reusable UI components.</li>
          </ul>
        </motion.div>

        <motion.div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Flutter Developer Intern</h3>
              <p style={{ color: 'var(--accent-color)', fontWeight: '500' }}>Etycia Global Private Limited • Remote</p>
            </div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
              May 2025 – Jul 2025
            </span>
          </div>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
