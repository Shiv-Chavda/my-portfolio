import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Mouse properties (The Rogue Wormhole)
        let mouse = { x: null, y: null };

        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        };

        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        let stars = [];
        let asteroids = [];
        const starCount = 2500;
        const asteroidCount = 40;

        const initSpace = () => {
            stars = [];
            asteroids = [];

            // Init predominantly white stars
            for (let i = 0; i < starCount; i++) {
                const orbitRadius = Math.pow(Math.random(), 2.5) * (width * 0.8) + 40;
                const angle = Math.random() * Math.PI * 2;
                const speed = (Math.random() * 0.001 + 0.0005) + (100 / Math.max(orbitRadius, 10)) * 0.0015;

                // Strictly white/silver space theme
                const colors = ['#ffffff', '#ffffff', '#ffffff', '#e2e8f0', '#f8fafc', '#bae6fd'];

                stars.push({
                    angle: angle,
                    orbitRadius: orbitRadius,
                    speed: speed,
                    tilt: 0.35 + (Math.random() * 0.2),
                    baseSize: Math.random() * 1.5 + 0.2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    x: 0,
                    y: 0,
                    isStretched: false
                });
            }

            // Init Asteroids
            for (let i = 0; i < asteroidCount; i++) {
                asteroids.push({
                    angle: Math.random() * Math.PI * 2,
                    orbitRadius: Math.random() * (width * 1.5) + 300, // Wide elliptical orbit
                    speed: (Math.random() * 0.0005 + 0.0001),
                    size: Math.random() * 6 + 3, // Variable massive sizes
                    rotation: Math.random() * Math.PI * 2,
                    spinSpeed: (Math.random() - 0.5) * 0.02,
                    tilt: 0.2 + (Math.random() * 0.5),
                    // Create random jagged points for polygon drawing
                    shapeOffsets: Array.from({ length: 7 }, () => Math.random() * 0.4 + 0.6),
                    x: 0,
                    y: 0
                });
            }
        };
        initSpace();

        let animationFrameId;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const cx = width * 0.7; // Shifted right so it doesn't overlap text
            const cy = height / 2;
            const time = Date.now();

            // --- DRAW DYNAMIC MOVING BLACK HOLE ---
            // Intense pulsing aura
            const pulse = Math.sin(time * 0.002) * 5;
            const coreRadius = 60;
            const auraRadius = 150 + pulse;

            const bhGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, auraRadius);
            bhGradient.addColorStop(0, '#000000'); // Pure void singularity center
            bhGradient.addColorStop(0.3, '#000000'); // Event Horizon boundary
            bhGradient.addColorStop(0.5, `rgba(157, 78, 221, ${0.8 + Math.sin(time * 0.005) * 0.2})`); // Throbbing Violet accretion edge
            bhGradient.addColorStop(0.8, 'rgba(20, 184, 166, 0.2)'); // Cyan glowing dust ring
            bhGradient.addColorStop(1, 'transparent');

            ctx.fillStyle = bhGradient;
            ctx.beginPath();
            ctx.arc(cx, cy, auraRadius, 0, Math.PI * 2);
            ctx.fill();




            // --- DRAW GALAXY STARS ---
            stars.forEach((star) => {
                star.angle += star.speed;
                const baseX = cx + Math.cos(star.angle) * star.orbitRadius;
                const baseY = cy + Math.sin(star.angle) * star.orbitRadius * star.tilt;

                let targetX = baseX;
                let targetY = baseY;
                star.isStretched = false;

                // Wormhole Mouse interaction for stars
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - star.x;
                    let dy = mouse.y - star.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 60) {
                        star.isStretched = true;
                        const gravityPull = (60 - distance) / 60;
                        targetX = mouse.x - (dx * 0.2);
                        targetY = mouse.y - (dy * 0.2);
                        targetX += Math.cos(time * 0.01 + star.orbitRadius) * 80 * gravityPull;
                        targetY += Math.sin(time * 0.01 + star.orbitRadius) * 80 * gravityPull;
                    }
                }

                const prevX = star.x;
                const prevY = star.y;

                if (star.x === 0 && star.y === 0) {
                    star.x = baseX;
                    star.y = baseY;
                } else {
                    star.x += (targetX - star.x) * 0.15;
                    star.y += (targetY - star.y) * 0.15;
                }

                ctx.beginPath();
                if (star.isStretched) {
                    ctx.moveTo(prevX, prevY);
                    ctx.lineTo(star.x, star.y);
                    ctx.strokeStyle = star.color;
                    ctx.lineWidth = Math.max(0.5, star.baseSize);
                    ctx.stroke();
                } else {
                    ctx.arc(star.x, star.y, Math.max(0.1, star.baseSize), 0, Math.PI * 2);
                    ctx.fillStyle = star.color;
                    ctx.fill();
                }
            });

            // --- DRAW ASTEROIDS ---
            asteroids.forEach((rock) => {
                rock.angle += rock.speed;
                rock.rotation += rock.spinSpeed;

                const baseX = cx + Math.cos(rock.angle) * rock.orbitRadius;
                const baseY = cy + Math.sin(rock.angle) * rock.orbitRadius * rock.tilt;

                let targetX = baseX;
                let targetY = baseY;

                // Mouse repels massive asteroids (Deflector Shield)
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - rock.x;
                    let dy = mouse.y - rock.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        const pushForce = (100 - distance) / 100;
                        targetX = rock.x - (dx * 0.5 * pushForce); // Pushes them aggressively away
                        targetY = rock.y - (dy * 0.5 * pushForce);
                        rock.rotation += 0.05 * pushForce; // Makes them spin wildly when hit
                    }
                }

                if (rock.x === 0 && rock.y === 0) {
                    rock.x = baseX;
                    rock.y = baseY;
                } else {
                    // Heavier physics (slower to move/return)
                    rock.x += (targetX - rock.x) * 0.04;
                    rock.y += (targetY - rock.y) * 0.04;
                }

                // Draw Jagged Asteroid Polygon
                ctx.save();
                ctx.translate(rock.x, rock.y);
                ctx.rotate(rock.rotation);
                ctx.beginPath();

                rock.shapeOffsets.forEach((offset, i) => {
                    const angle = (i / rock.shapeOffsets.length) * Math.PI * 2;
                    const r = rock.size * offset;
                    const px = Math.cos(angle) * r;
                    const py = Math.sin(angle) * r;
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                });
                ctx.closePath();

                // Asteroid coloring (Dark slate with subtle light reflection)
                ctx.fillStyle = '#1e293b';
                ctx.fill();
                ctx.lineWidth = 1.5;
                ctx.strokeStyle = '#475569';
                ctx.stroke();
                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initSpace();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default ParticlesBackground;
