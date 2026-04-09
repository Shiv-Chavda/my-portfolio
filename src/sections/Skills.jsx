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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="section-title title-gradient">Skills</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {Object.entries(skillsData).map(([category, skills], idx) => (
          <motion.div
            key={category}
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ padding: '2rem' }}
          >
            <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>{category}</h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
              {skills.map(skill => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(192, 132, 252, 0.15)', borderColor: 'rgba(192, 132, 252, 0.4)', color: 'white' }}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'var(--text-secondary)',
                    padding: '0.5rem 1rem',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.1s ease',
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
