/**
 * Silhouette de personnage (présentateur / candidats) — habillage du squelette.
 * Propositions visuelles neutres ; les vraies photos de profil viendront des comptes QG
 * (docs/00-brief-projet.md §2). Aucune identité réelle n'est représentée ici.
 */
export default function Avatar({ variant = 'presenter', hue = ['#1E6E5C', '#0E3B32'], className = '' }) {
  const id = `g-${variant}-${hue[0].replace('#', '')}`;

  if (variant === 'presenter') {
    return (
      <svg viewBox="0 0 200 220" className={className} role="img" aria-label="Silhouette du présentateur">
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5b3a22" />
            <stop offset="55%" stopColor="#33200f" />
            <stop offset="100%" stopColor="#1a1007" />
          </linearGradient>
          <linearGradient id={`${id}-suit`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d4b5c" />
            <stop offset="100%" stopColor="#0e2733" />
          </linearGradient>
        </defs>
        <rect width="200" height="220" fill={`url(#${id}-bg)`} />
        <rect x="18" y="30" width="10" height="160" fill="#f7c873" opacity="0.18" />
        <rect x="172" y="30" width="10" height="160" fill="#f7c873" opacity="0.18" />
        <circle cx="100" cy="74" r="30" fill="#132028" />
        <path d="M36 220c2-52 30-78 64-78s62 26 64 78z" fill={`url(#${id}-suit)`} />
        <path d="M100 118 L84 146 L100 178 L116 146 Z" fill="#eef3fb" opacity="0.92" />
        <path d="M100 128 L92 148 L100 172 L108 148 Z" fill="#123043" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 220" className={className} role="img" aria-label="Silhouette de candidat">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={hue[0]} />
          <stop offset="100%" stopColor={hue[1]} />
        </linearGradient>
        <radialGradient id={`${id}-halo`} cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="220" fill={`url(#${id}-bg)`} />
      <rect width="200" height="220" fill={`url(#${id}-halo)`} />
      {/* brins végétaux stylisés, esprit maquettes */}
      <g opacity="0.5" fill="#f5a83d">
        <ellipse cx="46" cy="140" rx="17" ry="46" transform="rotate(28 46 140)" />
        <ellipse cx="66" cy="170" rx="15" ry="40" transform="rotate(12 66 170)" />
        <ellipse cx="156" cy="142" rx="17" ry="46" transform="rotate(-28 156 142)" />
        <ellipse cx="137" cy="172" rx="15" ry="40" transform="rotate(-12 137 172)" />
      </g>
      <circle cx="100" cy="82" r="31" fill="#0b1530" fillOpacity="0.92" />
      <path d="M38 220c3-54 30-80 62-80s59 26 62 80z" fill="#0b1530" fillOpacity="0.92" />
    </svg>
  );
}
