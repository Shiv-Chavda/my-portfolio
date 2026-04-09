import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Terminal, Briefcase, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/mwvwjnvr", {
        method: "POST",
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title title-gradient">Get In Touch</h2>
      <p style={{ marginBottom: '3.5rem', color: 'var(--text-secondary)', fontSize: '1.2rem', textAlign: 'center', margin: '0 auto 3.5rem auto', maxWidth: '600px' }}>
        Ready to start your next project or have questions about my work? Feel free to reach out through any of these channels.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>

        {/* Left Side: Contact Info */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Email */}
            <a href="mailto:shivchavda11@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #3b82f6)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexShrink: 0 }}>
                <Mail size={22} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.05rem' }}>Email</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>shivchavda11@gmail.com</span>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+919327900836" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #3b82f6)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexShrink: 0 }}>
                <Phone size={22} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.05rem' }}>Phone</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>+91 93279 00836</span>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Shiv-Chavda" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #3b82f6)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexShrink: 0 }}>
                <Terminal size={22} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.05rem' }}>GitHub</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>github.com/Shiv-Chavda</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/shivchavda" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #3b82f6)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexShrink: 0 }}>
                <Briefcase size={22} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.05rem' }}>LinkedIn</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>linkedin.com/in/shivchavda</span>
              </div>
            </a>

          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }} onSubmit={handleSubmit}>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              <div>
                <label className="form-label">Your Name</label>
                <input type="text" name="name" required className="form-input" placeholder="John Doe" disabled={status === 'submitting'} />
              </div>
              <div>
                <label className="form-label">Email Address</label>
                <input type="email" name="email" required className="form-input" placeholder="john@example.com" disabled={status === 'submitting'} />
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label className="form-label">Your Message</label>
              <textarea name="message" required className="form-textarea" style={{ flex: 1, minHeight: '150px', resize: 'vertical' }} placeholder="Tell me about your project..." disabled={status === 'submitting'}></textarea>
            </div>

            <button type="submit" disabled={status === 'submitting'} style={{
              background: status === 'success' ? '#10b981' : status === 'error' ? '#ef4444' : 'linear-gradient(135deg, #a855f7, #14b8a6)',
              color: 'white',
              border: 'none',
              padding: '1rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
              opacity: status === 'submitting' ? 0.7 : 1
            }}
              onMouseEnter={(e) => { if (status !== 'submitting') { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(168, 85, 247, 0.4)'; } }}
              onMouseLeave={(e) => { if (status !== 'submitting') { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; } }}
            >
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error Sending' : 'Send Message'}
              {status !== 'submitting' && status !== 'success' && status !== 'error' && <Send size={20} />}
            </button>
          </form>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;
