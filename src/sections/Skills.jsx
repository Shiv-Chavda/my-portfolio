import { motion } from 'framer-motion';

const skillsData = {
  "Languages": ["C++", "Dart", "JavaScript / TypeScript", "Python", "SQL", "Go"],
  "Frameworks": ["Flutter", "Node.js (Express, NestJS)", "React", "Next.js", "FastAPI"],
  "Databases": ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Neo4j", "Qdrant"],
  "Tools/Others": ["Git/GitHub", "Docker", "Socket.io / WebSockets", "Postman", "Linux", "REST APIs", "RAG"]
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="section-title">Skills</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 'var(--space-2xl)' }}>
        {Object.entries(skillsData).map(([category, skills], idx) => (
          <motion.div
            key={category}
            className="editorial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: 'var(--space-md)', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}>{category}</h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
              {skills.map(skill => (
                <motion.div
                  key={skill}
                  whileHover={{ borderColor: 'var(--text-primary)', color: 'var(--bg-color)', backgroundColor: 'var(--text-primary)' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                    padding: 'var(--space-xs) var(--space-sm)',
                    background: 'transparent',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    cursor: 'default'
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default Skills;
