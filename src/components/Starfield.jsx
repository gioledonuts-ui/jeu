import { useEffect, useMemo } from 'react';

/**
 * Fond étoilé / particules — docs/identite-graphique.md §5
 * (étoiles blanches et or, particules cyan, scintillantes).
 * Généré de façon déterministe (graine fixe) : aucune image externe requise.
 */
function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Starfield({ mode = 'blue', density = 150 }) {
  const stars = useMemo(() => {
    const rand = mulberry32(mode === 'duel' ? 1337 : 4242);
    const list = [];
    for (let i = 0; i < density; i += 1) {
      const r = rand();
      const gold = mode === 'duel' ? r > 0.45 : r > 0.78;
      const cyanish = mode === 'blue' && r <= 0.22;
      list.push({
        id: i,
        x: rand() * 1920,
        y: rand() * 1080,
        radius: rand() * 1.9 + 0.5,
        baseOpacity: rand() * 0.55 + 0.3,
        delay: rand() * 4,
        duration: 2.2 + rand() * 3.4,
        fill: gold ? '#FFC42E' : cyanish ? '#7FF0FF' : '#F4F8FF',
      });
    }
    return list;
  }, [mode, density]);

  const sparkles = useMemo(() => {
    const rand = mulberry32(mode === 'duel' ? 9001 : 777);
    const list = [];
    const count = mode === 'duel' ? 18 : 14;
    for (let i = 0; i < count; i += 1) {
      list.push({
        id: i,
        x: rand() * 1920,
        y: rand() * 1080,
        scale: rand() * 1.15 + 0.65,
        delay: rand() * 3.5,
        fill: mode === 'duel' ? (rand() > 0.4 ? '#FFD9A0' : '#FF9F5A') : rand() > 0.35 ? '#FFC42E' : '#FFFFFF',
      });
    }
    return list;
  }, [mode]);

  const rising = useMemo(() => {
    const rand = mulberry32(mode === 'duel' ? 5150 : 2600);
    const list = [];
    const count = mode === 'duel' ? 40 : 52;
    const palette =
      mode === 'duel'
        ? ['#FFD9A0', '#FF9F5A', '#FFFFFF', '#FFC42E']
        : ['#7FF0FF', '#FFFFFF', '#FFC42E', '#35E0F8'];
    for (let i = 0; i < count; i += 1) {
      list.push({
        id: i,
        left: rand() * 100,
        size: rand() * 3.4 + 1.1,
        delay: rand() * 14,
        duration: 9 + rand() * 9,
        color: palette[Math.floor(rand() * palette.length)],
        drift: (rand() - 0.5) * 16,
      });
    }
    return list;
  }, [mode]);

  useEffect(() => () => {}, []);

  return (
    <>
      {/* Dégradé vivant — nébuleuse bleue (ou rouge pour le duel) en dérive lente */}
      <div
        aria-hidden="true"
        className={`aurora pointer-events-none absolute ${mode === 'duel' ? 'aurora-duel' : 'aurora-blue'}`}
      />
      {/* Champ de particules ascendantes (cinéma : la salle monte) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {rising.map((p) => (
          <span
            key={`rise-${p.id}`}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              boxShadow: `0 0 ${p.size * 2.4}px ${p.color}`,
              animationDelay: `-${p.delay}s`,
              animationDuration: `${p.duration}s`,
              '--drift': `${p.drift}vw`,
            }}
          />
        ))}
      </div>
      <svg
        aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      {stars.map((s) => (
        <circle
          key={s.id}
          cx={s.x}
          cy={s.y}
          r={s.radius}
          fill={s.fill}
          opacity={s.baseOpacity}
          className="animate-twinkle"
          style={{ animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s` }}
        />
      ))}
      {sparkles.map((s) => (
        <path
          key={`sp-${s.id}`}
          d="M0,-9 L1.8,-1.8 L9,0 L1.8,1.8 L0,9 L-1.8,1.8 L-9,0 L-1.8,-1.8 Z"
          transform={`translate(${s.x} ${s.y}) scale(${s.scale})`}
          fill={s.fill}
          opacity="0.9"
          className="animate-twinkle-slow"
          style={{ animationDelay: `${s.delay}s` }}
        />
      ))}
      </svg>
    </>
  );
}
