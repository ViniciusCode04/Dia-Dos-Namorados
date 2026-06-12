import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

const durations = [0.8, 1.1, 0.65, 1.3, 0.9, 1.05, 0.72, 1.2, 0.85, 0.95, 1.15, 0.78, 1.08, 0.68, 1.25, 0.88, 1.0, 0.75];

export default function Equalize() {
  const title = useReveal();
  const { ref: barsRef, inView } = useReveal(0.3);

  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '7rem 2rem', background: '#0d0505', textAlign: 'center' }}>
      <motion.h2
        ref={title.ref}
        initial={{ opacity: 0, y: 30 }}
        animate={title.inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: '#fff', marginBottom: '0.5rem',
        }}
      >
        <em style={{ color: '#c0392b', fontStyle: 'italic' }}>Equalize</em> — Pitty
      </motion.h2>
      <p className="section-label" style={{ display: 'block', marginBottom: '3rem' }}>
        a música que equaliza tudo dentro de mim
      </p>

      <div
        ref={barsRef}
        style={{
          display: 'flex', justifyContent: 'center',
          alignItems: 'flex-end', gap: '5px', height: '90px', margin: '0 auto 2.5rem',
        }}
      >
        {durations.map((dur, i) => (
          <motion.div
            key={i}
            animate={inView ? {
              height: ['20%', `${Math.random() * 60 + 40}%`, '20%'],
            } : { height: '20%' }}
            transition={{
              duration: dur, repeat: Infinity,
              repeatType: 'mirror', ease: 'easeInOut',
              delay: i * 0.04,
            }}
            style={{
              width: '9px', background: i % 3 === 0 ? '#c9a96e' : '#8B1A1A',
              borderRadius: '2px 2px 0 0', minHeight: '6px',
            }}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          color: 'rgba(253,246,240,0.75)', maxWidth: '520px',
          margin: '0 auto', lineHeight: 1.85,
        }}
      >
        <em style={{ color: '#c0392b' }}>"Eu preciso que você me equalize,</em><br />
        que acalme o que há dentro de mim,<br />
        <em style={{ color: '#c0392b' }}>porque com você tudo faz sentido."</em>
      </motion.p>
    </section>
  );
}
