import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

export default function LagumSection() {
  const [revealed, setRevealed] = useState(false);
  const { ref, inView } = useReveal(0.3);

  return (
    <section style={{
      position: 'relative', zIndex: 1, minHeight: '60vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '7rem 2rem', textAlign: 'center', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(139,26,26,0.18) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('/imgs/julia_film.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center top',
        filter: 'brightness(0.08) saturate(0.5)',
      }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 2, maxWidth: '640px' }}
      >
        <p className="section-label" style={{ marginBottom: '2rem', display: 'block', letterSpacing: '0.4em' }}>
          ✦ Lagum · Eu Não Valho Nada ✦
        </p>

        <motion.p
          animate={revealed ? { opacity: 0.2, y: -8 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontWeight: 300, fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            color: 'rgba(253,246,240,0.55)', marginBottom: '0.6rem',
          }}
        >
          Eu não valho nada...
        </motion.p>

        <AnimatePresence>
          {revealed && (
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 600,
                fontSize: 'clamp(2rem, 5.5vw, 3.6rem)',
                color: '#fff', lineHeight: 1.2, marginBottom: '1rem',
              }}
            >
              mas <em style={{ color: '#c0392b', fontStyle: 'italic' }}>com você</em> eu valho tudo!
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {revealed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 200,
                fontSize: '0.75rem', letterSpacing: '0.35em',
                color: '#c9a96e', textTransform: 'uppercase', marginTop: '1.5rem',
              }}
            >
              ✦ porque você é o que me completa ✦
            </motion.p>
          )}
        </AnimatePresence>

        {!revealed && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => setRevealed(true)}
            whileHover={{ scale: 1.05, borderColor: '#c0392b' }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginTop: '2.5rem', display: 'inline-block',
              fontFamily: "'Jost', sans-serif", fontWeight: 300,
              fontSize: '0.78rem', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: '#c0392b',
              border: '1px solid rgba(192,57,43,0.4)',
              padding: '0.75rem 2.2rem', cursor: 'pointer',
              background: 'transparent', transition: 'border-color 0.3s',
            }}
          >
            revelar ✦
          </motion.button>
        )}
      </motion.div>
    </section>
  );
}
