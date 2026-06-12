import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

const songs = [
  { song: 'Aliança', artist: 'Tribalistas', url: 'https://open.spotify.com/search/Ali%C3%A2n%C3%A7a%20Tribalistas', special: false },
  { song: 'Infinity', artist: 'James Young', url: 'https://open.spotify.com/search/Infinity%20James%20Young', special: false },
  { song: 'Eu Não Valho Nada', artist: 'Lagum', url: 'https://open.spotify.com/search/Eu%20N%C3%A3o%20Valho%20Nada%20Lagum', special: true, note: 'eu não valho nada... mas com você eu valho tudo!' },
  { song: 'Equalize', artist: 'Pitty', url: 'https://open.spotify.com/search/Equalize%20Pitty', special: false },
];

export default function Music() {
  const title = useReveal();

  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '7rem 2rem', background: '#180808' }}>
      <motion.h2
        ref={title.ref}
        initial={{ opacity: 0, y: 30 }}
        animate={title.inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        style={{
          textAlign: 'center',
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#fff', marginBottom: '0.5rem',
        }}
      >
        As músicas que <em style={{ color: '#c0392b', fontStyle: 'italic' }}>nos definem</em>
      </motion.h2>
      <p className="section-label" style={{ textAlign: 'center', display: 'block', marginBottom: '3.5rem' }}>
        nossa trilha sonora
      </p>

      <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {songs.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: s.special ? 'rgba(201,169,110,0.06)' : 'rgba(255,255,255,0.035)',
              border: `1px solid ${s.special ? 'rgba(201,169,110,0.35)' : 'rgba(139,26,26,0.22)'}`,
              padding: '1.4rem 1.8rem',
              display: 'flex', alignItems: 'center', gap: '1.4rem',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
              background: s.special ? '#c9a96e' : '#8B1A1A',
            }} />
            <div style={{ fontSize: '1.6rem', minWidth: '2rem', textAlign: 'center' }}>
              {s.special ? '♥' : '♪'}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.25rem', color: '#fff', fontWeight: 400,
              }}>{s.song}</p>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 200,
                fontSize: '0.78rem', color: 'rgba(253,246,240,0.45)',
                letterSpacing: '0.1em', marginTop: '0.2rem',
              }}>{s.artist}</p>
              {s.note && (
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontSize: '0.88rem', color: '#c9a96e', marginTop: '0.45rem',
                }}>{s.note}</p>
              )}
            </div>
            <motion.a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ background: '#c0392b', color: '#fff', borderColor: '#c0392b' }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: "'Jost', sans-serif", fontSize: '0.72rem',
                letterSpacing: '0.22em', color: '#c0392b',
                textDecoration: 'none', textTransform: 'uppercase',
                border: '1px solid rgba(192,57,43,0.35)',
                padding: '0.45rem 1rem', whiteSpace: 'nowrap',
                display: 'inline-block',
              }}
            >
              ouvir ↗
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
