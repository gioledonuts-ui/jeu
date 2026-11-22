import Avatar from './Avatar.jsx';
import LivesHearts from './Hearts.jsx';

/**
 * Cadre vidéo — docs/identite-graphique.md §6 (bordure cyan lumineuse, halo,
 * coins arrondis) avec pastille nom (§4) et cœurs (§9). Habillage `duel` (§10) :
 * bordure or/corail + halo rouge.
 *
 * Variante « slot » = pillule de nom + cœurs + cadre (vue générale / participant).
 */
export default function VideoFrame({
  label,
  lives, // undefined pour le présentateur si l'on ne veut pas les cœurs… (charte : ancré sur chaque cadre)
  variant = 'presenter', // 'presenter' | 'candidate'
  hue,
  duel = false,
  className = '',
  frameClassName = '',
  labelClassName = '',
  heartsSize = 22,
  aspect = 'aspect-[5/6]',
  showLives = true,
  labelPosition = 'top', // 'top' (maquettes 07) | 'bottom' (maquette 09)
}) {
  const labelEl = (
    <span
      className={`pill-label text-[11px] sm:text-xs ${duel ? 'pill-label-duel' : ''} ${labelClassName}`}
    >
      {label}
    </span>
  );
  const heartsEl = showLives ? (
    <LivesHearts lives={lives ?? 2} size={heartsSize} className="-mt-0.5" />
  ) : null;

  return (
    <figure className={`flex min-w-0 flex-col items-center gap-2 ${className}`}>
      {labelPosition === 'top' && labelEl}
      {labelPosition === 'top' && heartsEl}
      {labelPosition === 'bottom' && heartsEl}
      <div
        className={`relative w-full overflow-hidden ${aspect} ${
          duel ? 'frame-duel' : 'frame-cyan'
        } ${frameClassName}`}
      >
        <Avatar variant={variant} hue={hue} className="absolute inset-0 h-full w-full" />
        {/* liseré lumineux intérieur */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[1rem] ring-1 ring-inset ring-white/25"
        />
      </div>
      {labelPosition === 'bottom' && labelEl}
    </figure>
  );
}
