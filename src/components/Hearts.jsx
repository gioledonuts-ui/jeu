/**
 * Vies des candidats — docs/identite-graphique.md §2 et §9.
 * Symbolème : cœur coloré (vert = 2 vies · orange = 1 vie · rouge = 0 vie, critique).
 * Détail non définitif (D-01 — « à valider ») : c'est le symbole proposé dans la charte.
 */

const HEART_PATH =
  'M16 29C6.4 22.2 2 16.4 2 10.6 2 6.6 5.2 3.6 9.2 3.6c2.8 0 5 1.5 6.8 4.3 1.8-2.8 4-4.3 6.8-4.3 4 0 7.2 3 7.2 7 0 5.8-4.4 11.6-14 18.4z';

const COLORS = {
  full2: { fill: '#3CE97B', stroke: '#8CFFAE' },
  full1: { fill: '#FF9F1C', stroke: '#FFD27A' },
  zero: { fill: '#E63646', stroke: '#FF8A96' },
};

function Heart({ variant, size }) {
  if (variant === 'empty') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d={HEART_PATH}
          fill="rgba(16,24,56,.6)"
          stroke="#9FB4D9"
          strokeOpacity="0.75"
          strokeWidth="1.6"
        />
      </svg>
    );
  }
  const c = COLORS[variant];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      style={{ filter: `drop-shadow(0 0 5px ${c.fill}66)` }}
    >
      <path d={HEART_PATH} fill={c.fill} stroke={c.stroke} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export default function LivesHearts({ lives = 2, size = 22, className = '' }) {
  const n = Math.max(0, Math.min(2, lives));
  const variant = n === 2 ? 'full2' : n === 1 ? 'full1' : 'zero';

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${className}`}
      role="img"
      aria-label={`${n} vie${n > 1 ? 's' : ''} sur 2`}
      title={`${n}/2 vies`}
    >
      {[0, 1].map((i) => (
        <Heart key={i} variant={i < n ? variant : 'empty'} size={size} />
      ))}
    </span>
  );
}
