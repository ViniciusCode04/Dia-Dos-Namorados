import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

const letterText = [
  `Júlia Sodré, amor de toda a minha alma, você verdadeiramente me ensinou do que se trata o amor, me ensinou a ter respeito em diversos sentidos que antigamente eu não via, me ensinou a tomar decisões melhores em diferentes aspectos da minha vida, a superar os desafios que antes de você eu achava impossível, mas hoje vejo que ao teu lado, eu tenho o poder, a capacidade de superar qualquer barreira ou obstáculo, ainda mais quando são aqueles que tentam atingir o nosso relacionamento. Eu nunca vou deixar que ninguém te desrespeite, não importa quem seja.`,
  `Você, sem dúvida nenhuma, é perfeita em todos os seus detalhes. É impressionante parar para analisar cada um deles — são incontáveis. Talvez eu ainda não tenha descoberto todos, mas eu dedico a minha vida a encontrá-los. Eu dedico a minha vida ao ser deslumbrante que você é. Para mim, tu és um anjo do mais alto escalão, da mais alta patente, espalhando paz em todo o seu caminho. Seu sorriso transmite luz, segurança e um significado tão intenso que nem a palavra perfeição é capaz de descrevê-lo. Até porque, como eu descreveria um ser indescritível?`,
  `Seus olhos brilham mais do que qualquer estrela, qualquer supernova. São mais densos do que o maior buraco negro já encontrado. Você é verdadeiramente divina em todos os sentidos. Eu amo amar você, e sempre amarei.`,
  `Desejo a você um incrível Dia dos Namorados, e espero que eu tenha conseguido torná-lo mais especial. É só o começo, meu amor, de uma grande história escrita nos planos do destino.`,
];

// Floating dust particles SVG
function MagicDust({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 10 }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: '50%',
                y: '40%',
                scale: 0,
              }}
              animate={{
                opacity: [0, 0.9, 0],
                x: `${40 + Math.random() * 20}%`,
                y: `${Math.random() * 80}%`,
                scale: [0, Math.random() * 1.2 + 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 1.5,
                delay: Math.random() * 1.2,
                ease: 'easeOut',
              }}
              style={{
                position: 'absolute',
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                borderRadius: '50%',
                background: i % 3 === 0 ? '#c9a96e' : i % 3 === 1 ? '#c0392b' : '#fff',
                boxShadow: `0 0 ${Math.random() * 6 + 2}px currentColor`,
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

export default function EnvelopeLetter() {
  const [phase, setPhase] = useState('idle'); // idle | opening | open | reading
  const { ref, inView } = useReveal(0.2);

  const handleOpen = () => {
    if (phase !== 'idle') return;
    setPhase('opening');
    setTimeout(() => setPhase('open'), 2200);
  };

  const handleRead = () => setPhase('reading');

  return (
    <section style={{
      position: 'relative', zIndex: 1, padding: '8rem 2rem',
      background: '#180808', overflow: 'hidden',
    }}>
      {/* BG texture */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: `repeating-linear-gradient(0deg, #c9a96e 0px, #c9a96e 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(90deg, #c9a96e 0px, #c9a96e 1px, transparent 1px, transparent 60px)`,
      }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <p className="section-label" style={{ display: 'block', marginBottom: '1rem' }}>✦ uma carta para você ✦</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#fff',
        }}>
          Carta para <em style={{ color: '#c0392b', fontStyle: 'italic' }}>Júlia</em>
        </h2>
      </motion.div>

      {/* ENVELOPE */}
      <AnimatePresence mode="wait">
        {phase !== 'reading' && (
          <motion.div
            key="envelope-scene"
            style={{
              position: 'relative', maxWidth: '480px', margin: '0 auto',
              cursor: phase === 'idle' ? 'pointer' : 'default',
            }}
            onClick={handleOpen}
          >
            <MagicDust active={phase === 'opening' || phase === 'open'} />

            {/* Envelope body */}
            <motion.div
              animate={phase === 'opening' ? { y: [0, -8, 0], rotate: [0, -1, 1, 0] } : {}}
              transition={{ duration: 0.6, repeat: phase === 'opening' ? 3 : 0 }}
              style={{
                background: 'linear-gradient(135deg, #2a1010 0%, #1a0808 50%, #2a1010 100%)',
                border: '1px solid rgba(201,169,110,0.4)',
                borderRadius: '2px',
                padding: 0, position: 'relative', overflow: 'visible',
                boxShadow: phase === 'idle'
                  ? '0 20px 80px rgba(139,26,26,0.3)'
                  : '0 30px 120px rgba(139,26,26,0.6), 0 0 60px rgba(201,169,110,0.2)',
                transition: 'box-shadow 0.5s',
              }}
            >
              {/* Envelope flap - SVG based */}
              <div style={{ position: 'relative', width: '100%', paddingBottom: '66%' }}>
                <svg
                  viewBox="0 0 480 320"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Envelope base */}
                  <rect x="0" y="0" width="480" height="320" fill="#1a0808" />
                  {/* Side triangles */}
                  <polygon points="0,0 0,320 200,160" fill="#221010" />
                  <polygon points="480,0 480,320 280,160" fill="#221010" />
                  {/* Bottom triangle */}
                  <polygon points="0,320 480,320 240,160" fill="#2a1212" />
                  {/* Border lines */}
                  <rect x="0" y="0" width="480" height="320" fill="none" stroke="rgba(201,169,110,0.35)" strokeWidth="1" />
                  {/* Center decoration */}
                  <text x="240" y="185" textAnchor="middle" fontSize="28" fill="rgba(201,169,110,0.6)" fontFamily="serif">✦</text>
                  {/* Wax seal */}
                  <circle cx="240" cy="162" r="26" fill="#8B1A1A" />
                  <circle cx="240" cy="162" r="22" fill="#6B0F0F" />
                  <text x="240" y="169" textAnchor="middle" fontSize="18" fill="#c9a96e" fontFamily="serif">♥</text>
                </svg>

                {/* TOP FLAP - animates open */}
                <motion.div
                  style={{
                    position: 'absolute', top: 0, left: 0, width: '100%',
                    transformOrigin: 'top center',
                    zIndex: 5,
                  }}
                  animate={
                    phase === 'opening' ? { rotateX: [0, -160] } :
                    phase === 'open' ? { rotateX: -160 } : { rotateX: 0 }
                  }
                  transition={phase === 'opening' ? { duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] } : {}}
                  initial={{ rotateX: 0 }}
                >
                  <svg
                    viewBox="0 0 480 165"
                    style={{ display: 'block', width: '100%' }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Flap triangle */}
                    <polygon points="0,0 480,0 240,155" fill="#2a1212" />
                    <polygon points="0,0 480,0 240,155" fill="none" stroke="rgba(201,169,110,0.3)" strokeWidth="1" />
                    {/* Flap shine */}
                    <polygon points="0,0 200,0 100,60" fill="rgba(201,169,110,0.05)" />
                  </svg>
                </motion.div>

                {/* Letter peeking out */}
                <AnimatePresence>
                  {(phase === 'opening' || phase === 'open') && (
                    <motion.div
                      initial={{ y: '0%', opacity: 0 }}
                      animate={{ y: '-40%', opacity: 1 }}
                      transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        position: 'absolute', top: '5%', left: '8%', right: '8%',
                        background: 'linear-gradient(160deg, #f5e6c8 0%, #e8d5a3 40%, #f0ddb0 100%)',
                        borderRadius: '1px', padding: '1rem',
                        zIndex: 4, boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
                        fontFamily: "'Cormorant Garamond', serif",
                        color: '#3a1a08', fontSize: '0.75rem', lineHeight: 1.7,
                        overflow: 'hidden',
                      }}
                    >
                      {/* Parchment lines */}
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} style={{
                          height: '1px', background: 'rgba(101,67,33,0.12)',
                          margin: '0.55rem 0',
                        }} />
                      ))}
                      <div style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', fontSize: '0.8rem', opacity: 0.3 }}>✦</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hover prompt */}
              {phase === 'idle' && (
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    textAlign: 'center', padding: '1.2rem',
                    fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                    fontSize: '0.95rem', color: '#c9a96e',
                  }}
                >
                  clique para abrir ✦
                </motion.p>
              )}

              {phase === 'open' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  style={{ textAlign: 'center', padding: '1.2rem' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.04, borderColor: '#c9a96e', color: '#c9a96e' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={e => { e.stopPropagation(); handleRead(); }}
                    style={{
                      fontFamily: "'Jost', sans-serif", fontWeight: 300,
                      fontSize: '0.78rem', letterSpacing: '0.3em',
                      textTransform: 'uppercase', color: '#c0392b',
                      border: '1px solid rgba(192,57,43,0.5)',
                      padding: '0.75rem 2rem', cursor: 'pointer',
                      background: 'transparent', transition: 'all 0.3s',
                    }}
                  >
                    ler a carta ✦
                  </motion.button>
                </motion.div>
              )}
            </motion.div>

            {phase === 'idle' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  textAlign: 'center', marginTop: '1.5rem',
                  fontFamily: "'Jost', sans-serif", fontWeight: 200,
                  fontSize: '0.72rem', letterSpacing: '0.3em',
                  color: 'rgba(201,169,110,0.5)', textTransform: 'uppercase',
                }}
              >
                uma carta escrita do fundo do coração
              </motion.p>
            )}
          </motion.div>
        )}

        {/* LETTER READING VIEW */}
        {phase === 'reading' && (
          <motion.div
            key="letter-reading"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              maxWidth: '680px', margin: '0 auto', position: 'relative',
            }}
          >
            {/* Parchment paper */}
            <div style={{
              background: 'linear-gradient(160deg, #f5e6c8 0%, #e8d5a3 30%, #f0ddb0 60%, #e5d49e 100%)',
              padding: 'clamp(2rem, 5vw, 4rem)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(101,67,33,0.3), inset 0 0 60px rgba(101,67,33,0.08)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Aged paper texture lines */}
              {Array.from({ length: 22 }).map((_, i) => (
                <div key={i} style={{
                  position: 'absolute', left: 0, right: 0,
                  top: `${(i + 1) * 4.5}%`, height: '1px',
                  background: 'rgba(101,67,33,0.1)',
                }}/>
              ))}
              {/* Left margin line */}
              <div style={{
                position: 'absolute', left: 'clamp(2.5rem, 6vw, 4.5rem)', top: 0, bottom: 0,
                width: '1px', background: 'rgba(192,57,43,0.2)',
              }} />
              {/* Aged corners */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '60px', height: '60px',
                background: 'linear-gradient(225deg, rgba(101,67,33,0.15) 0%, transparent 60%)',
              }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0,
                width: '50px', height: '50px',
                background: 'linear-gradient(45deg, rgba(101,67,33,0.12) 0%, transparent 60%)',
              }} />

              {/* Header deco */}
              <div style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative' }}>
                <p style={{
                  fontFamily: "'UnifrakturMaguntia', cursive",
                  fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                  color: '#3a1a08', letterSpacing: '0.1em',
                }}>
                  Júlia Sodré
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'center', marginTop: '0.5rem' }}>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(101,67,33,0.3)' }} />
                  <span style={{ color: '#8B1A1A', fontSize: '0.9rem' }}>♥</span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(101,67,33,0.3)' }} />
                </div>
              </div>

              {/* Letter body */}
              {letterText.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.25, ease: 'easeOut' }}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1rem, 2vw, 1.12rem)',
                    lineHeight: 2, color: '#2a1008',
                    marginBottom: '1.8rem',
                    textIndent: '2em',
                    position: 'relative', zIndex: 1,
                  }}
                >
                  {para}
                </motion.p>
              ))}

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{ textAlign: 'right', marginTop: '2.5rem', position: 'relative', zIndex: 1 }}
              >
                <div style={{ height: '1px', background: 'rgba(101,67,33,0.2)', marginBottom: '1rem' }} />
                <p style={{
                  fontFamily: "'UnifrakturMaguntia', cursive",
                  fontSize: '1.5rem', color: '#3a1a08', letterSpacing: '0.05em',
                }}>
                  Com todo o meu amor
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontSize: '0.85rem', color: '#8B4513', marginTop: '0.3rem',
                  letterSpacing: '0.1em',
                }}>
                  12 de junho de 2026 ♥
                </p>
              </motion.div>

              {/* Wax seal decoration */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.8, duration: 0.6, ease: 'backOut' }}
                style={{
                  position: 'absolute', bottom: '2rem', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, #a02020, #6B0F0F)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(107,15,15,0.5)',
                  fontSize: '1.4rem',
                }}
              >
                ♥
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
