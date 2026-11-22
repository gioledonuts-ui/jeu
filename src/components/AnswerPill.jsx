/**
 * Pilule de réponse — docs/identite-graphique.md §7 (mécanique en trois temps) :
 *  - `idle`     : pilule neutre (bleu ambre) / variante masquée (`?`)
 *  - `selected` : sélection orange provisoire (étape 1) — si masquée, reste « ? »
 *  - `revealed` : révélée, TOUJOURS orange (étape 2)
 *  - `correct`  : verdict définitif vert (étape 3)
 *  - `incorrect`: verdict définitif rouge (étape 3)
 * Les trois états ne sont jamais fusionnés (AGENTS.md §4 ; brief §5).
 */

const CheckIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M4 12.5l5.2 5L20 6.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default function AnswerPill({
  state = 'neutral', // neutral | hidden | selected | revealed | correct | incorrect
  masked = false,
  onClick,
  className = '',
  as: Tag = 'div',
  children,
}) {
  const palette =
    state === 'selected' || state === 'revealed'
      ? 'pill-orange'
      : state === 'correct'
        ? 'pill-green'
        : state === 'incorrect'
          ? 'pill-red'
          : state === 'hidden'
            ? 'pill-hidden'
            : 'pill-neutral';

  const interactive = typeof onClick === 'function';
  const Component = interactive ? 'button' : Tag;

  const content =
    state === 'correct' ? (
      <>
        <CheckIcon className="h-5 w-5" />
        <span>{children}</span>
      </>
    ) : state === 'incorrect' ? (
      <>
        <CrossIcon className="h-5 w-5" />
        <span>{children}</span>
      </>
    ) : (
      <span className={state === 'hidden' || (masked && state === 'selected') ? 'text-3xl leading-none' : ''}>
        {masked && (state === 'neutral' || state === 'hidden' || state === 'selected') ? '?' : children}
      </span>
    );

  return (
    <Component
      type={interactive ? 'button' : undefined}
      onClick={onClick}
      aria-pressed={interactive ? state === 'selected' || state === 'revealed' : undefined}
      className={`pill ${palette} ${interactive ? 'cursor-pointer transition-transform duration-150 hover:-translate-y-0.5' : ''} ${className}`}
    >
      {content}
    </Component>
  );
}
