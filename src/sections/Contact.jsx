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
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ marginBottom: 'var(--space-4xl)', color: 'var(--text-secondary)', fontSize: '1.25rem', textAlign: 'left', fontWeight: 300, maxWidth: '600px', lineHeight: '1.6' }}>
        Ready to start your next project or have questions about my work? Feel free to reach out through any of these channels.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-2xl)' }}>

        {/* Left Side: Contact Info */}
        <div className="editorial-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>

            {/* Email */}
            <a href="mailto:shivchavda11@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', textDecoration: 'none' }}>
              <div style={{ width: '45px', height: '45px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-primary)', flexShrink: 0, transition: 'color 0.3s ease' }}>
                <Mail size={20} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: '400', fontSize: '1.05rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', letterSpacing: '0.02em' }}>Email</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 300 }}>shivchavda11@gmail.com</span>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+919327900836" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', textDecoration: 'none' }}>
              <div style={{ width: '45px', height: '45px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-primary)', flexShrink: 0, transition: 'color 0.3s ease' }}>
                <Phone size={20} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: '400', fontSize: '1.05rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', letterSpacing: '0.02em' }}>Phone</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 300 }}>+91 93279 00836</span>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Shiv-Chavda" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', textDecoration: 'none' }}>
              <div style={{ width: '45px', height: '45px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-primary)', flexShrink: 0, transition: 'color 0.3s ease' }}>
                <Terminal size={20} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: '400', fontSize: '1.05rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', letterSpacing: '0.02em' }}>GitHub</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 300 }}>github.com/Shiv-Chavda</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/shivchavda" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', textDecoration: 'none' }}>
              <div style={{ width: '45px', height: '45px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-primary)', flexShrink: 0, transition: 'color 0.3s ease' }}>
                <Briefcase size={20} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: '400', fontSize: '1.05rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', letterSpacing: '0.02em' }}>LinkedIn</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 300 }}>linkedin.com/in/shivchavda</span>
              </div>
            </a>

          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="editorial-card" style={{ display: 'flex', flexDirection: 'column', border: 'none', padding: '0', background: 'transparent' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', height: '100%' }} onSubmit={handleSubmit}>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--space-xl)' }}>
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

            <button type="submit" className="btn-primary" disabled={status === 'submitting'} style={{
              background: status === 'success' ? '#10b981' : status === 'error' ? '#ef4444' : 'var(--text-primary)',
              color: 'var(--bg-color)',
              border: '1px solid var(--text-primary)',
              padding: '1rem',
              fontWeight: 500,
              fontSize: '0.95rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
              opacity: status === 'submitting' ? 0.7 : 1,
              marginTop: 'var(--space-md)'
            }}>
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error Sending' : 'Send Message'}
              {status !== 'submitting' && status !== 'success' && status !== 'error' && <Send size={18} />}
            </button>
          </form>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;
