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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title title-gradient">Projects</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            className="glass-card project-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: idx * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '2rem', color: '#ffffff', fontWeight: 'bold', margin: '0' }}>{project.title}</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-icon-only" title="Source Code">
                  <Terminal size={20} />
                </a>
                {project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem' }} title="Live Site">
                    <ExternalLink size={20} />
                    View Live
                  </a>
                )}
              </div>
            </div>

            <p className="project-desc" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7', transition: 'color 0.3s ease' }}>
              {project.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map(t => (
                <span key={t} style={{ fontSize: '0.8rem', fontWeight: '600', padding: '0.3rem 0.8rem', background: 'rgba(192, 132, 252, 0.1)', color: 'var(--accent-alt)', borderRadius: '20px', border: '1px solid rgba(192, 132, 252, 0.2)' }}>
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
