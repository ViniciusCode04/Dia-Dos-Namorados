import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

const songs = [
  {
    song: 'Aliança',
    artist: 'Tribalistas',
    spotifyId: '1eFlkymohjGtRnnYGabg8s',
    special: false,
  },
  {
    song: 'Infinity',
    artist: 'Jaymes Young',
    spotifyId: '1SOClUWhOi8vHZYMz3GluK',
    special: false,
  },
  {
    song: 'Eu Não Valho Nada',
    artist: 'Lagum, Cynthia Luz',
    spotifyId: '4sbgfWRiXGmeaR1vCWvBx6',
    special: true,
    note: 'eu não valho nada... mas com você eu valho tudo!',
  },
  {
    song: 'Equalize',
    artist: 'Pitty',
    spotifyId: '6MSDT7tFtd6dSdwSYZcfvJ',
    special: false,
  },
];

export default function Music() {
  const [playing, setPlaying] = useState(null);
  const title = useReveal();

  const toggle = (id) => setPlaying(prev => prev === id ? null : id);

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
        nossa trilha sonora — clique para ouvir
      </p>

      <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {songs.map((s, i) => (
          <motion.div
            key={s.spotifyId}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: s.special ? 'rgba(201,169,110,0.06)' : 'rgba(255,255,255,0.035)',
              border: `1px solid ${playing === s.spotifyId ? 'rgba(192,57,43,0.7)' : s.special ? 'rgba(201,169,110,0.35)' : 'rgba(139,26,26,0.22)'}`,
              overflow: 'hidden',
              transition: 'border-color 0.3s',
            }}
          >
            {/* Card header — clickable */}
            <motion.div
              onClick={() => toggle(s.spotifyId)}
              whileHover={{ background: 'rgba(192,57,43,0.08)' }}
              style={{
                padding: '1.3rem 1.8rem',
                display: 'flex', alignItems: 'center', gap: '1.4rem',
                cursor: 'pointer', position: 'relative',
              }}
            >
              {/* Left accent bar */}
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
                background: s.special ? '#c9a96e' : '#8B1A1A',
              }} />

              {/* Play/pause icon */}
              <motion.div
                animate={playing === s.spotifyId ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                transition={{ duration: 0.8, repeat: playing === s.spotifyId ? Infinity : 0 }}
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: playing === s.spotifyId ? '#c0392b' : 'rgba(139,26,26,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: '1rem', color: '#fff',
                  border: '1px solid rgba(192,57,43,0.4)',
                  transition: 'background 0.3s',
                }}
              >
                {playing === s.spotifyId ? '⏸' : '▶'}
              </motion.div>

              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.25rem', color: '#fff', fontWeight: 400,
                }}>
                  {s.song}
                </p>
                <p style={{
                  fontFamily: "'Jost', sans-serif", fontWeight: 200,
                  fontSize: '0.78rem', color: 'rgba(253,246,240,0.45)',
                  letterSpacing: '0.1em', marginTop: '0.2rem',
                }}>
                  {s.artist}
                </p>
                {s.note && (
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                    fontSize: '0.88rem', color: '#c9a96e', marginTop: '0.4rem',
                  }}>
                    {s.note}
                  </p>
                )}
              </div>

              {/* Animated bars when playing */}
              {playing === s.spotifyId && (
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '20px' }}>
                  {[0.5, 0.9, 0.65, 1.1, 0.75].map((dur, j) => (
                    <motion.div
                      key={j}
                      animate={{ height: ['30%', '100%', '30%'] }}
                      transition={{ duration: dur, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: j * 0.1 }}
                      style={{ width: '3px', background: '#c0392b', borderRadius: '1px', minHeight: '3px' }}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Spotify embed — expands when playing */}
            <AnimatePresence>
              {playing === s.spotifyId && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 1.2rem 1.2rem' }}>
                    <iframe
                      src={`https://open.spotify.com/embed/track/${s.spotifyId}?utm_source=generator&theme=0`}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      style={{ borderRadius: '6px', display: 'block' }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
