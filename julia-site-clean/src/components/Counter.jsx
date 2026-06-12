import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { useTimer } from '../hooks/useTimer';
import { useRef } from 'react';

function Digit({ value, label }) {
  const prev = useRef(value);
  const changed = prev.current !== value;
  if (changed) prev.current = value;

  const str = String(value).padStart(2, '0');

  return (
    <div style={{ textAlign: 'center', minWidth: 'clamp(60px, 12vw, 100px)' }}>
      <div style={{
        position: 'relative', overflow: 'hidden',
        height: 'clamp(3.5rem, 10vw, 7rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={str}
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              lineHeight: 1,
              color: '#fff',
              display: 'block',
              position: 'absolute',
            }}
          >
            {str}
          </motion.span>
        </AnimatePresence>
      </div>
      <p style={{
        fontFamily: "'Jost', sans-serif", fontWeight: 200,
        fontSize: 'clamp(0.55rem, 1.5vw, 0.68rem)',
        letterSpacing: '0.35em', textTransform: 'uppercase',
        color: '#c9a96e', marginTop: '0.5rem',
      }}>
        {label}
      </p>
    </div>
  );
}

function Separator() {
  return (
    <motion.span
      animate={{ opacity: [1, 0.2, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(2rem, 6vw, 4rem)',
        color: '#c0392b', lineHeight: 1,
        alignSelf: 'center', paddingBottom: '1.2rem',
      }}
    >
      :
    </motion.span>
  );
}

export default function Counter() {
  const { ref, inView } = useReveal(0.2);
  const { years, months, days, hours, minutes, seconds, totalDays } = useTimer();

  return (
    <section style={{
      position: 'relative', zIndex: 1,
      padding: '7rem 2rem', background: '#180808', textAlign: 'center',
    }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-label" style={{ display: 'block', marginBottom: '1rem' }}>
          desde 04 · 02 · 2024
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', marginBottom: '0.4rem',
        }}>
          Há quanto tempo<br />
          <em style={{ color: '#c0392b', fontStyle: 'italic' }}>somos nós</em>
        </h2>
        <p style={{
          fontFamily: "'Jost', sans-serif", fontWeight: 200,
          fontSize: '0.8rem', color: 'rgba(201,169,110,0.6)',
          letterSpacing: '0.2em', marginBottom: '3.5rem',
        }}>
          {totalDays} dias no total — e contando
        </p>

        {/* Big timer */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          gap: 'clamp(0.3rem, 1.5vw, 1rem)', flexWrap: 'wrap',
          maxWidth: '900px', margin: '0 auto',
        }}>
          {years > 0 && (
            <>
              <Digit value={years} label={years === 1 ? 'ano' : 'anos'} />
              <Separator />
            </>
          )}
          {(years > 0 || months > 0) && (
            <>
              <Digit value={months} label={months === 1 ? 'mês' : 'meses'} />
              <Separator />
            </>
          )}
          <Digit value={days} label={days === 1 ? 'dia' : 'dias'} />
          <Separator />
          <Digit value={hours} label="horas" />
          <Separator />
          <Digit value={minutes} label="minutos" />
          <Separator />
          <Digit value={seconds} label="segundos" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: 'rgba(253,246,240,0.5)', marginTop: '3rem',
          }}
        >
          e cada segundo valeu a eternidade
        </motion.p>
      </motion.div>
    </section>
  );
}
