/**
 * Bande horizontale de question — docs/identite-graphique.md §4 et §7.
 * Translucide (bleu nuit), bordure cyan fine (ou or/corail pour le duel, §10),
 * texte blanc gras en Oswald. L'emplacement haut/bas n'est pas tranché (§14.7) :
 * le squelette suit la maquette 07 (bande en bas).
 */
export default function QuestionBand({ children, duel = false, className = '' }) {
  return (
    <div className={`question-band ${duel ? 'question-band-duel' : ''} w-full ${className}`}>
      <p
        className={`mx-auto max-w-6xl px-6 py-3 text-center font-oswald font-semibold uppercase leading-tight tracking-wide text-allum sm:py-4 ${
          duel ? 'text-glow-or' : 'text-glow'
        } text-lg sm:text-2xl lg:text-[2rem]`}
      >
        {children}
      </p>
    </div>
  );
}
