import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.35 - 0.05,
      r: Math.random() * 2.5 + 0.5,
      o: Math.random() * 0.35 + 0.05,
      type: Math.random() > 0.65 ? 'heart' : 'dot',
      flicker: Math.random() * Math.PI * 2,
    }));

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function drawHeart(x, y, size, alpha) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#8B1A1A';
      ctx.beginPath();
      ctx.moveTo(x, y + size * 0.25);
      ctx.bezierCurveTo(x, y, x - size, y, x - size, y + size * 0.5);
      ctx.bezierCurveTo(x - size, y + size * 1.1, x, y + size * 1.6, x, y + size * 1.7);
      ctx.bezierCurveTo(x, y + size * 1.6, x + size, y + size * 1.1, x + size, y + size * 0.5);
      ctx.bezierCurveTo(x + size, y, x, y, x, y + size * 0.25);
      ctx.fill();
      ctx.restore();
    }

    function frame(t) {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.flicker += 0.02;
        const flicker = Math.sin(p.flicker) * 0.15 + 0.85;
        if (p.y < -20) { p.y = H + 20; p.x = Math.random() * W; }
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.type === 'heart') {
          drawHeart(p.x, p.y, p.r * 2.5, p.o * flicker);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(192,57,43,${p.o * flicker})`;
          ctx.fill();
        }
      });
      animId = requestAnimationFrame(frame);
    }
    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }}
    />
  );
}
