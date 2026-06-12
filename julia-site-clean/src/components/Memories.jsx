import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

const memories = [
  { src: '/imgs/beach_sunset.jpg', caption: 'o pôr do sol mais lindo... porque você estava lá' },
  { src: '/imgs/beach_picnic.jpg', caption: 'nosso piquenique na praia ♥' },
  { src: '/imgs/fireworks.jpg', caption: 'fogos que iluminam o céu, como você ilumina minha vida' },
  { src: '/imgs/julia_sunflowers.jpg', caption: 'nosso primeiro encontro — o começo de tudo' },
  { src: '/imgs/julia_film.jpg', caption: 'cada momento ao teu lado é inesquecível' },
];

export default function Memories() {
  const title = useReveal();

  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '6rem 0 6rem 2rem' }}>
      <motion.h2
        ref={title.ref}
        initial={{ opacity: 0, y: 30 }}
        animate={title.inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          textAlign: 'center',
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#fff',
          marginBottom: '3.5rem', paddingRight: '2rem',
        }}
      >
        Nossas <em style={{ color: '#c0392b', fontStyle: 'italic' }}>memórias</em>
      </motion.h2>

      <div style={{
        display: 'flex', gap: '0.8rem',
        overflowX: 'auto', paddingBottom: '1rem', paddingRight: '2rem',
        scrollSnapType: 'x mandatory',
        msOverflowStyle: 'none', scrollbarWidth: 'thin',
      }}>
        {memories.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover="hover"
            style={{
              minWidth: '280px', height: '380px',
              position: 'relative', flexShrink: 0,
              scrollSnapAlign: 'start', overflow: 'hidden', cursor: 'pointer',
            }}
          >
            <motion.img
              src={m.src}
              alt={m.caption}
              variants={{ hover: { scale: 1.06 } }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(13,5,5,0.9), transparent)',
              padding: '2.5rem 1.2rem 1.2rem',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                fontSize: '0.98rem', color: 'rgba(253,246,240,0.9)', lineHeight: 1.4,
              }}>
                {m.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
