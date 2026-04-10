import { motion } from 'framer-motion';
import { Terminal, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'CityBrain',
    tech: ['Flutter', 'Node.js', 'FastAPI', 'Neo4j', 'PostGIS', 'Qdrant', 'RAG'],
    desc: 'An end-to-end smart city decision-support platform simulating road failures and urban infrastructure impact. Implemented hop-based failure propagation using Neo4j and spatial analysis pipelines with PostGIS. Integrated AI-powered RAG with Qdrant to semantically query urban planning regulations from PDFs.',
    github: 'https://github.com/Shiv-Chavda/citybrain',
    live: 'https://citybrain-frontend.vercel.app'
  },
  {
    id: 2,
    title: 'DoodleIt',
    tech: ['Flutter', 'Node.js', 'Socket.IO', 'MongoDB'],
    desc: 'Engineered a real-time distributed multiplayer system in Flutter and Node.js using WebSockets for 8+ concurrent players. Configured custom rooms, dynamic leaderboards, and JWT-based authentication. Optimized data flows, reducing server response latency by 40%.',
    github: 'https://github.com/Shiv-Chavda/DoodleIt',
    live: '#'
  },
  {
    id: 3,
    title: 'Jarvis',
    tech: ['Flutter', 'DeepSeek', 'Gemini', 'TTS/STT', 'Firebase'],
    desc: 'A modular AI-driven virtual assistant integrating speech recognition, text processing, and LLM APIs for sub-second responses. Enabled multimodal inputs (voice, text, image-generation) hitting 90% speech recognition accuracy. Optimized UI reducing interaction latency by 25%.',
    github: 'https://github.com/Shiv-Chavda/Jarvis',
    live: '#'
  },
  {
    id: 4,
    title: 'Movie Recommendation System',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Collaborative Filtering'],
    desc: 'Built an intelligent movie recommendation engine using collaborative filtering techniques in Python. Trained and serialized a machine learning model (model.pkl) on a curated dataset to generate personalized suggestions. Leveraged Pandas and NumPy for efficient data preprocessing and feature engineering pipelines.',
    github: 'https://github.com/Shiv-Chavda/Movie-Recommendation-System',
    live: '#'
  }
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="section-title">Projects</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            className="editorial-card project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', padding: 'var(--space-2xl)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', fontWeight: '400', margin: '0', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>{project.title}</h3>
              <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-icon-only" title="Source Code">
                  <Terminal size={20} />
                </a>
                {project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} title="Live Site">
                    <ExternalLink size={18} style={{ marginRight: '0.2rem' }} />
                    View Live
                  </a>
                )}
              </div>
            </div>

            <p className="project-desc" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)', fontSize: '1.1rem', lineHeight: '1.7', fontWeight: 300, transition: 'color 0.4s ease' }}>
              {project.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
              {project.tech.map(t => (
                <span key={t} style={{ fontSize: '0.75rem', fontWeight: '500', padding: '0.2rem 0.6rem', background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
