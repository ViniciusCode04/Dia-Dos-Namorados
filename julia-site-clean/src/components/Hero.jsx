import { motion } from 'framer-motion';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', overflow: 'hidden', zIndex: 1,
    }}>
      {/* BG */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('/imgs/julia_sunflowers.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center 20%',
        filter: 'brightness(0.28) saturate(1.6)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(13,5,5,0.2) 0%, rgba(13,5,5,0) 35%, rgba(13,5,5,0.95) 100%)',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '2rem' }}>
        <motion.p
          {...fade(0.4)}
          style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 200,
            letterSpacing: '0.45em', fontSize: '0.72rem',
            color: '#c9a96e', textTransform: 'uppercase', marginBottom: '1.8rem',
          }}
        >
          12 de junho · Dia dos Namorados · 2026
        </motion.p>

        <motion.h1
          {...fade(0.75)}
          style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
            fontSize: 'clamp(4.5rem, 13vw, 10rem)', lineHeight: 0.9,
            color: '#fff', letterSpacing: '-0.02em',
          }}
        >
          Júlia<br />
          <em style={{ color: '#c0392b', fontStyle: 'italic' }}>Sodré</em>
        </motion.h1>

        <motion.p
          {...fade(1.05)}
          style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontWeight: 300, fontSize: 'clamp(1rem, 2.8vw, 1.45rem)',
            color: '#f5d0d8', marginTop: '1.4rem',
          }}
        >
          para a mulher que me ensinou o que é o amor
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: 'backOut' }}
          style={{ marginTop: '2.8rem', fontSize: '2rem', color: '#c0392b' }}
        >
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            style={{ display: 'inline-block' }}
          >
            ♥
          </motion.span>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)', textAlign: 'center',
          color: '#c9a96e', fontSize: '0.65rem',
          letterSpacing: '0.35em', textTransform: 'uppercase',
        }}
      >
        role para baixo
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, #c9a96e, transparent)',
            margin: '0.8rem auto 0',
          }}
        />
      </motion.div>
    </section>
  );
}
