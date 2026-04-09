import { useEffect, useState, useRef } from 'react';

// ═══════════════════════════════════════════
//  ONE PIECE EASTER EGG OVERLAY
// ═══════════════════════════════════════════
const OnePieceOverlay = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 7000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', animation: 'opFadeIn 0.5s ease',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to top, #0d2b6b, transparent)', opacity: 0.7 }} />
      {[...Array(30)].map((_, i) => (
        <div key={i} style={{ position: 'absolute', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 4 + 1}px`, borderRadius: '50%', background: '#fff', animation: `opTwinkle ${Math.random() * 2 + 1}s ease-in-out infinite alternate`, animationDelay: `${Math.random() * 2}s` }} />
      ))}
      <div style={{ fontSize: '80px', marginBottom: '1rem', animation: 'opBounce 1s ease-in-out infinite alternate', filter: 'drop-shadow(0 0 20px #e3b923)', userSelect: 'none' }}>☠️</div>
      <div style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 8vw, 6rem)', background: 'linear-gradient(135deg, #f5d020, #e3b923, #f5a623, #e3b923, #f5d020)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', textAlign: 'center', lineHeight: 1.1, marginBottom: '0.5rem', letterSpacing: '0.05em', animation: 'opShine 3s linear infinite, opSlideDown 0.7s ease', padding: '0 1rem' }}>
        ONE PIECE IS REAL!!
      </div>
      <div style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1rem, 3vw, 1.6rem)', color: '#93c5fd', fontWeight: 700, letterSpacing: '0.2em', animation: 'opSlideUp 0.8s ease 0.3s both', marginBottom: '2.5rem', textAlign: 'center', padding: '0 1rem' }}>
        ～ THE GRAND LINE AWAITS ～
      </div>
      <div style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.7, animation: 'opSlideUp 0.8s ease 0.6s both', padding: '0 2rem' }}>
        "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean... is the Pirate King!"
        <br /><span style={{ color: '#f5d020', fontStyle: 'normal', fontWeight: 700 }}>— Monkey D. Luffy</span>
      </div>
      <div style={{ position: 'absolute', bottom: '2rem', color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', letterSpacing: '0.1em', animation: 'opFadeIn 1s ease 2s both' }}>Click anywhere to close</div>
    </div>
  );
};

// ═══════════════════════════════════════════
//  SEQUENCE: ↑ ↓ ← → Enter
// ═══════════════════════════════════════════
const SEQUENCE = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter'];

export default function EasterEggs({ onSantoryu }) {
  const [showOnePiece, setShowOnePiece] = useState(false);
  const sequenceRef = useRef([]);
  const textBufferRef = useRef('');

  // ── Konami & Text Keyword listener ──
  useEffect(() => {
    const handleKey = (e) => {
      // 1. Array sequence (Konami)
      sequenceRef.current = [...sequenceRef.current, e.key].slice(-SEQUENCE.length);
      if (sequenceRef.current.join(',') === SEQUENCE.join(',')) {
        setShowOnePiece(true);
        sequenceRef.current = [];
      }

      // 2. Text buffer (santoryu)
      if (e.key.length === 1) {
        textBufferRef.current = (textBufferRef.current + e.key.toLowerCase()).slice(-8); // 'santoryu' is 8 chars
        if (textBufferRef.current === 'santoryu') {
          if (onSantoryu) onSantoryu();
          textBufferRef.current = '';
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onSantoryu]);

  return (
    <>
      {showOnePiece && <OnePieceOverlay onClose={() => setShowOnePiece(false)} />}

      <style>{`
        @keyframes opFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes opSlideDown { from { opacity: 0; transform: translateY(-60px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes opSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes opBounce { from { transform: translateY(0) rotate(-5deg); } to { transform: translateY(-15px) rotate(5deg); } }
        @keyframes opShine { to { background-position: 200% center; } }
        @keyframes opTwinkle { from { opacity: 0.2; transform: scale(0.8); } to { opacity: 1; transform: scale(1.3); } }

        /* Zoro Santoryu Easter Egg */
        .zoro-shout {
          color: #22c55e !important;
          text-shadow: 0 0 15px rgba(34, 197, 94, 0.6);
          animation: zoroEntrance 0.3s ease-out both;
        }
        @keyframes zoroEntrance {
          0% { transform: scale(0.5); opacity: 0; }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .sword-slash {
          position: absolute;
          top: 60%;
          left: 0;
          width: 100%;
          height: 3px;
          background: #fff;
          box-shadow: 0 0 15px #22c55e, 0 0 5px #fff;
          transform: rotate(-5deg) scaleX(0);
          transform-origin: left;
          animation: zoroSlash 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          animation-delay: 0.4s;
          pointer-events: none;
          z-index: 10;
        }
        @keyframes zoroSlash {
          0% { transform: rotate(-5deg) scaleX(0); opacity: 1; }
          40% { transform: rotate(-5deg) scaleX(1); opacity: 1; }
          100% { transform: rotate(-5deg) scaleX(1); opacity: 0; }
        }

        /* Zoro Video/GIF Background */
        .zoro-video-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1;
          overflow: hidden;
          animation: opFadeIn 1s ease;
        }
        .zoro-video-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.6) contrast(1.1);
        }
        .zoro-video-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%);
        }
      `}</style>
    </>
  );
}
