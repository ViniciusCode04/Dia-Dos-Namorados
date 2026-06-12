import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

const photos = [
  { src: '/imgs/julia_selfie.jpg', phrase: 'seus olhos brilham mais do que qualquer estrela, qualquer supernova', tall: false },
  { src: '/imgs/casal_crepe.jpg', phrase: 'até comendo crepe você me rouba o coração', tall: true },
  { src: '/imgs/casal_carro.jpg', phrase: 'até nos momentos simples, ao seu lado é onde eu quero estar', tall: false },
  { src: '/imgs/julia_glasses.jpg', phrase: 'tu és um anjo do mais alto escalão, espalhando paz em todo o seu caminho', tall: false },
  { src: '/imgs/julia_mirror.jpg', phrase: 'verdadeiramente divina em todos os sentidos', tall: true },
  { src: '/imgs/julia_white.jpg', phrase: 'eu dedico a minha vida ao ser deslumbrante que você é', tall: false },
];

function GalleryItem({ photo, index, onOpen }) {
  const { ref, inView } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(photo)}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        aspectRatio: photo.tall ? '3/5' : '3/4', borderRadius: '1px',
        gridRow: photo.tall ? 'span 1' : undefined,
      }}
      whileHover="hover"
    >
      <motion.img
        src={photo.src}
        alt="Júlia"
        variants={{ hover: { scale: 1.06 } }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center top',
          display: 'block', filter: 'brightness(0.88) saturate(1.1)',
        }}
      />
      <motion.div
        variants={{
          hover: { opacity: 1 },
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(13,5,5,0.88) 0%, transparent 55%)',
          display: 'flex', alignItems: 'flex-end', padding: '1.2rem',
        }}
      >
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontSize: '1.05rem', color: '#fff', lineHeight: 1.45,
        }}>
          {photo.phrase}
        </p>
      </motion.div>
      {/* Gold border on hover */}
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        style={{
          position: 'absolute', inset: 0,
          border: '1px solid rgba(201,169,110,0.5)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const title = useReveal();
  const sub = useReveal();

  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '7rem 2rem' }}>
      <motion.h2
        ref={title.ref}
        initial={{ opacity: 0, y: 30 }}
        animate={title.inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          textAlign: 'center',
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#fff', marginBottom: '0.5rem',
        }}
      >
        Ela é assim,{' '}
        <em style={{ color: '#c0392b', fontStyle: 'italic' }}>em todo ângulo</em>
      </motion.h2>

      <motion.p
        ref={sub.ref}
        initial={{ opacity: 0 }}
        animate={sub.inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="section-label"
        style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'block' }}
      >
        porque a beleza dela não cabe em uma só foto
      </motion.p>

      <div style={{
        maxWidth: '1080px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.9rem',
      }}
        className="gallery-grid"
      >
        {photos.map((photo, i) => (
          <GalleryItem key={i} photo={photo} index={i} onOpen={setSelected} />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 100,
              background: 'rgba(5,0,0,0.96)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '2rem', cursor: 'pointer',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              style={{ textAlign: 'center', cursor: 'default', maxWidth: '560px' }}
            >
              <img
                src={selected.src}
                alt=""
                style={{
                  maxWidth: '85vw', maxHeight: '72vh',
                  objectFit: 'contain', display: 'block', margin: '0 auto',
                  boxShadow: '0 0 100px rgba(139,26,26,0.4)',
                }}
              />
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                fontSize: '1.3rem', color: '#f5d0d8',
                marginTop: '1.5rem', lineHeight: 1.6,
              }}>
                {selected.phrase}
              </p>
            </motion.div>
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'fixed', top: '1.5rem', right: '2rem',
                background: 'none', border: 'none', color: '#fff',
                fontSize: '1.8rem', cursor: 'pointer', opacity: 0.7,
              }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 700px) { .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
