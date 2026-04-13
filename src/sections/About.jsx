import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const About = () => {
  const cardRef = useRef(null);
  
  // Motion values for mouse position (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the rotation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation (degrees)
  // When mouse is at top (yPct = -0.5), rotateX should be positive to tilt top forward
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate percentage from center (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="section-title">About Me</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))', gap: 'var(--space-3xl)', alignItems: 'start' }}>

        {/* Photo Box with Artistic Assets */}
        <div 
          style={{ 
            position: 'relative', 
            width: 'fit-content', 
            margin: '0 auto var(--space-xl)',
            perspective: '1000px' // Add perspective for 3D effect
          }}
        >
          {/* Large Background Digit (Editorial Style) */}
          <div style={{ position: 'absolute', top: '-40px', left: '-40px', fontSize: '10rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', opacity: 0.05, fontWeight: 900, zIndex: 0, userSelect: 'none' }}>
            01
          </div>

          {/* Precision Technical Guides */}
          <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '40px', height: '40px', borderLeft: '0.5px solid var(--accent-color)', borderTop: '0.5px solid var(--accent-color)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', width: '40px', height: '40px', borderRight: '0.5px solid var(--accent-color)', borderBottom: '0.5px solid var(--accent-color)', zIndex: 0 }}></div>

          <motion.div
            ref={cardRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{ 
              width: '85vw', 
              maxWidth: '300px', 
              height: 'auto', 
              borderRadius: '0', 
              background: 'var(--surface-color)', 
              border: '1px solid var(--border-color)', 
              position: 'relative', 
              zIndex: 1, 
              overflow: 'hidden', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Minimalist Corner Markers */}
            <div style={{ position: 'absolute', top: '15px', left: '15px', width: '8px', height: '8px', borderLeft: '1px solid rgba(255,255,255,0.4)', borderTop: '1px solid rgba(255,255,255,0.4)', zIndex: 10 }}></div>
            <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '8px', height: '8px', borderRight: '1px solid rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.4)', zIndex: 10 }}></div>

            <img 
              src="/profile1.jpg" 
              alt="Shiv Chavda" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block', 
                imageRendering: 'high-quality', 
                WebkitBackfaceVisibility: 'hidden', 
                transform: 'translateZ(20px)' // Lift image slightly
              }} 
              onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.querySelector('.fallback-msg').style.display = 'flex'; }} 
            />

            <div className="fallback-msg" style={{ display: 'none', position: 'absolute', flexDirection: 'column', textAlign: 'center', padding: 'var(--space-md)', color: 'var(--text-secondary)' }}>
              <span>Rename your photo to</span>
              <strong className="accent-text">profile1.jpg</strong>
              <span>and place it in the public folder</span>
            </div>

            {/* Subtle Overlay Pattern */}
            <motion.div
              style={{ 
                position: 'absolute', 
                inset: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                pointerEvents: 'none', 
                opacity: 0,
                transform: 'translateZ(30px)' // Lift pattern more
              }}
              whileHover={{ opacity: 1 }}
            >
              <div style={{ height: '100%', width: '100%', backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </motion.div>
          </motion.div>
        </div>

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

