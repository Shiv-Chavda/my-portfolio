import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set width to full window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*{}[];:|';
    const charArray = characters.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Create drops
    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
    
    const draw = () => {
      // Semi-transparent black/blue background creates fade effect
      ctx.fillStyle = 'rgba(5, 5, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        // Randomly choose between cyan and purple
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.5)' : 'rgba(157, 78, 221, 0.5)'; 
        
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 50);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        opacity: 0.6
      }} 
    />
  );
};

export default MatrixRain;
