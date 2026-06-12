import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

export default function Final() {
  const { ref, inView } = useReveal(0.2);

  return (
    <section style={{
      position: 'relative', zIndex: 1,
      minHeight: '85vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '6rem 2rem', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('/imgs/fireworks.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center 40%',
        filter: 'brightness(0.22) saturate(1.6)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(139,26,26,0.2) 0%, rgba(13,5,5,0.7) 100%)',
      }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontWeight: 300, fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          color: '#f5d0d8', marginBottom: '1.5rem', letterSpacing: '0.05em',
        }}>
          12 de junho de 2026 · Dia dos Namorados
        </p>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: 'clamp(3rem, 9vw, 7rem)', color: '#fff',
          lineHeight: 1.05, marginBottom: '1.5rem',
        }}>
          Eu amo<br />
          você,{' '}
          <em style={{ color: '#c0392b', fontStyle: 'italic' }}>Júlia</em>
        </h2>

        <motion.div
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.6 }}
          style={{ fontSize: '1.8rem', letterSpacing: '0.4em', color: '#c0392b', marginTop: '0.5rem' }}
        >
          ♥ ♥ ♥
        </motion.div>

        <p style={{
          fontFamily: "'Jost', sans-serif", fontWeight: 200,
          fontSize: '0.75rem', letterSpacing: '0.4em',
          color: '#c9a96e', textTransform: 'uppercase', marginTop: '2.5rem',
        }}>
          858 dias · e a vida toda pela frente
        </p>
      </motion.div>
    </section>
  );
}
