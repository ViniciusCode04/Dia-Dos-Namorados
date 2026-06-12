import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { useTimer } from '../hooks/useTimer';

export default function FirstDate() {
  const left = useReveal();
  const right = useReveal();
  const { totalDays } = useTimer();

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '7rem 2rem', zIndex: 1, overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('/imgs/julia_sunflowers.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.12) saturate(0.7)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(139,26,26,0.15) 0%, transparent 70%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2, maxWidth: '920px', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4.5rem',
        alignItems: 'center',
      }}
        className="firstdate-grid"
      >
        {/* Image */}
        <motion.div
          ref={left.ref}
          initial={{ opacity: 0, x: -60 }}
          animate={left.inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute', top: '-1.5rem', left: '-1.5rem',
            background: '#8B1A1A', color: '#fff',
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '0.95rem', padding: '0.55rem 1.1rem',
            zIndex: 3, whiteSpace: 'nowrap',
          }}>
            ✦ Nosso Primeiro Encontro
          </div>
          <img
            src="/imgs/julia_sunflowers.jpg"
            alt="Júlia no primeiro encontro"
            style={{
              width: '100%', aspectRatio: '3/4',
              objectFit: 'cover', objectPosition: 'center 20%',
              display: 'block',
              boxShadow: '0 0 80px rgba(139,26,26,0.5), 0 0 200px rgba(139,26,26,0.15)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            border: '1px solid rgba(201,169,110,0.25)',
            pointerEvents: 'none',
          }} />
        </motion.div>

        {/* Text */}
        <motion.div
          ref={right.ref}
          initial={{ opacity: 0, x: 60 }}
          animate={right.inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>
            04 de fevereiro de 2024
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.1,
            color: '#fff', marginBottom: '1.8rem',
          }}>
            O dia em que<br />tudo <em style={{ color: '#c0392b', fontStyle: 'italic' }}>começou</em>
          </h2>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
            fontSize: '0.95rem', lineHeight: 1.9,
            color: 'rgba(253,246,240,0.72)',
          }}>
            Cada detalhe desse dia ficou gravado na minha memória para sempre. 
            Foi quando verdadeiramente pude perceber que era com você, meu amor, 
            que eu queria passar o resto de toda a eternidade — pois você me completa 
            de um jeito que nada mais nesse mundo consegue.
          </p>
          <div style={{
            marginTop: '2.5rem', paddingTop: '2rem',
            borderTop: '1px solid rgba(139,26,26,0.3)',
            display: 'flex', alignItems: 'center', gap: '1rem',
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#c0392b', lineHeight: 1, fontWeight: 300,
            }}>
              {totalDays}
            </div>
            <div>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                fontSize: '1.1rem', color: '#f5d0d8',
              }}>
                dias juntos
              </p>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 200,
                fontSize: '0.72rem', letterSpacing: '0.2em',
                color: '#c9a96e', textTransform: 'uppercase', marginTop: '0.25rem',
              }}>
                e cada segundo conta
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .firstdate-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
