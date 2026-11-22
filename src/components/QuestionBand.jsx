/**
 * Bande horizontale de question — docs/identite-graphique.md §4 et §7.
 * Translucide, bordure cyan fine (ou or/corail pour le duel, §10), texte blanc
 * gras en Oswald. L'emplacement haut/bas n'est pas tranché (§14.7) : le squelette
 * utilisait la maquette 07 (bande en bas) ; suite au retour utilisateur ("question
 * illisible en bas d'un bandeau étroit"), la variante `placement="top"` affiche une
 * bande large et lumineuse en haut (cf. maquette 01 : la question occupe le tiers
 * inférieur mais en très grand ; ici, grand et haut pour la lisibilité OBS).
 */
export default function QuestionBand({
  children,
  duel = false,
  className = '',
  placement = 'top', // 'top' | 'bottom' (legacy)
}) {
  if (placement === 'bottom') {    return (
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
  return (
    <div className={`w-full px-4 sm:px-8 ${className}`}>
      <div className={`question-band-xl ${duel ? 'question-band-duel-xl' : ''} mx-auto max-w-[104rem] px-5 py-3 sm:px-10 sm:py-5`}>
        <p
          className={`text-center font-oswald font-semibold uppercase leading-[1.05] tracking-wide text-allum ${
            duel ? 'text-glow-or' : 'text-glow'
          } text-[1.35rem] sm:text-4xl xl:text-5xl 2xl:text-[3.4rem]`}
        >
          {children}
        </p>
      </div>
    </div>
  );
}
