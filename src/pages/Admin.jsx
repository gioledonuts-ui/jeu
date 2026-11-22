import { useMemo, useState } from 'react';
import LivesHearts from '../components/Hearts.jsx';
import AnswerPill from '../components/AnswerPill.jsx';
import { CANDIDATES, DEMO_QUESTION, DEMO_VISIBLE_ANSWER, DEMO_REVEALED_TEXT } from '../data/demo.js';

const SCENES = ['Vue générale', 'Intro', 'Question individuelle', 'Sept propositions', 'Duel / Survie'];

/**
 * Interface administrateur — compacte (maquette 08), pour l'animateur.
 * Démo LOCALE : la mécanique en trois temps (brief §5) est simulée dans la page,
 * aucune donnée n'est enregistrée ni diffusée (pas de temps réel — à approfondir).
 */
export default function Admin() {
  const [activeCandidate, setActiveCandidate] = useState(CANDIDATES[0].id);
  const [activeScene, setActiveScene] = useState('Question individuelle');

  // Mécanique des réponses — trois temps (docs/00-brief-projet.md §5)
  const [selection, setSelection] = useState(null); // null | 'visible' | 'hidden'
  const [revealed, setRevealed] = useState(false);
  const [verdict, setVerdict] = useState(null); // null | 'correct' | 'incorrect'

  const step = verdict ? 3 : revealed ? 2 : selection ? 1 : 0;

  const reset = () => {
    setSelection(null);
    setRevealed(false);
    setVerdict(null);
  };

  const status = useMemo(() => {
    if (verdict === 'correct') return 'Étape 3 ✓ — verdict définitif : réponse CORRECTE (vert).';
    if (verdict === 'incorrect') return 'Étape 3 ✓ — verdict définitif : réponse INCORRECTE (rouge).';
    if (revealed) return 'Étape 2 ✓ — réponse révélée, toujours ORANGE (sélection provisoire). Étape 3 : confirmer le verdict.';
    if (selection === 'hidden') return 'Étape 1 ✓ — la masquée est sélectionnée : ORANGE, toujours « ? ». Étape 2 : RÉVÉLER.';
    if (selection === 'visible') return 'Étape 1 ✓ — sélection ORANGE provisoire. Étape 2 : RÉVÉLER pour dévoiler la masquée.';
    return 'Étape 1 — cliquez la réponse choisie par le candidat (sélection ORANGE provisoire).';
  }, [selection, revealed, verdict]);

  const stepState = (index) => {
    if (index < step) return 'done';
    if (index === step) return 'current';
    return 'next';
  };

  const visiblePillState =
    selection === 'visible' ? (verdict ? verdict : 'selected') : revealed ? 'revealed' : 'neutral';
  const hiddenPillState = revealed
    ? selection === 'hidden'
      ? verdict ?? 'revealed'
      : 'revealed'
    : selection === 'hidden'
      ? 'selected'
      : 'hidden';

  return (
    <main className="min-h-screen bg-[#0B1024] text-allum">
      {/* Barre de pilotage */}
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-cyan/10 bg-[#0D1330]/90 px-4 backdrop-blur sm:px-6">
        <div className="flex items-center gap-3">
          {/* pastille-logo générique du squelette (aucun logo définitif n'est défini) */}
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
            <circle cx="16" cy="16" r="13" fill="none" stroke="#35E0F8" strokeWidth="5" strokeDasharray="58 24" strokeLinecap="round" transform="rotate(-35 16 16)" />
            <circle cx="16" cy="16" r="4.5" fill="#35E0F8" />
          </svg>
          <h1 className="font-oswald text-lg font-semibold tracking-[0.12em] text-allum sm:text-xl">
            PILOTAGE — ÉMISSION
          </h1>
          <span className="hidden rounded-full border border-or/50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.25em] text-or sm:inline">
            Squelette
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#/" className="text-[11px] font-semibold text-grisbleu transition-colors hover:text-allum">
            ← Accueil
          </a>
          <div
            className="rounded-lg border border-or/80 px-3 py-1 font-oswald text-xl font-bold leading-none text-or shadow-[0_0_16px_rgba(255,194,46,.35)] sm:text-2xl"
            role="timer"
            aria-label="Chronomètre 00:30"
          >
            00:30
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-3 p-3 sm:p-4 lg:grid-cols-[290px_minmax(0,1fr)_225px]">
        {/* --- Candidats ------------------------------------------------ */}
        <section className="panel p-3" aria-labelledby="admin-candidats">
          <h2 id="admin-candidats" className="panel-title">CANDIDATS</h2>
          <div className="mt-2 flex flex-col gap-2">
            {CANDIDATES.map((c) => {
              const active = activeCandidate === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCandidate(c.id)}
                  aria-pressed={active}
                  className={`row-candidate ${active ? '!border-cyan/60 shadow-[0_0_12px_rgba(53,224,248,.18)]' : ''}`}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-oswald text-sm font-semibold text-white"
                    style={{ background: `linear-gradient(160deg, ${c.hue[0]}, ${c.hue[1]})` }}
                    aria-hidden="true"
                  >
                    {c.name.charAt(0)}
                  </span>
                  <span className="min-w-0 flex-1 truncate font-montserrat text-sm font-bold text-allum">
                    {c.name}
                  </span>
                  <LivesHearts lives={c.lives} size={15} />
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-[10px] leading-snug text-grisbleu/80">
            Sélection locale (démo) — aucune donnée n'est diffusée ni enregistrée.
          </p>
        </section>

        {/* --- Épreuve en cours ------------------------------------------ */}
        <section className="panel flex flex-col gap-2 p-4 sm:p-5" aria-labelledby="admin-epreuve">
          <div className="flex items-center justify-between gap-2">
            <h2 id="admin-epreuve" className="panel-title">ÉPREUVE EN COURS</h2>
            <span className="rounded-full border border-cyan/40 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-cyanclair">
              Question individuelle
            </span>
          </div>

          <p className="py-1 text-center font-montserrat text-lg font-extrabold leading-snug text-allum sm:text-2xl">
            {DEMO_QUESTION}
          </p>

          {/* Les deux réponses — une visible, une masquée (brief §5) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <AnswerPill
              as="button"
              state={visiblePillState}
              onClick={() => !verdict && setSelection('visible')}
              className="w-full px-2 py-3 text-center text-[11px] leading-tight sm:text-base"
            >
              {DEMO_VISIBLE_ANSWER}
            </AnswerPill>
            <AnswerPill
              as="button"
              state={hiddenPillState}
              masked={!revealed}
              onClick={() => !verdict && setSelection('hidden')}
              className="w-full px-2 py-3 text-center text-[11px] leading-tight sm:text-base"
            >
              {revealed ? DEMO_REVEALED_TEXT : 'masquée'}
            </AnswerPill>
          </div>

          {/* Stepper 1 · Sélection — 2 · Révélation — 3 · Verdict */}
          <div className="mt-1 flex items-start justify-center gap-1 sm:gap-3" aria-hidden="true">
            {[
              { n: 1, label: 'Sélection' },
              { n: 2, label: 'Révélation' },
              { n: 3, label: 'Verdict' },
            ].map((s, i) => {
              const st = stepState(s.n);
              return (
                <div key={s.n} className="flex items-start gap-1 sm:gap-3">
                  <div className="flex w-20 flex-col items-center gap-1">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border font-oswald text-base font-bold transition-all duration-300 ${
                        st === 'current'
                          ? 'scale-110 border-orange bg-orange text-[#2B1500] shadow-[0_0_16px_rgba(255,159,28,.6)]'
                          : st === 'done'
                            ? 'border-cyan/80 text-cyanclair'
                            : 'border-white/15 text-grisbleu'
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider ${
                        st === 'current' ? 'text-or' : st === 'done' ? 'text-cyanclair/80' : 'text-grisbleu'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < 2 && <div className={`mt-4 h-px w-6 sm:w-14 ${step > s.n ? 'bg-cyan/70' : 'bg-white/15'}`} />}
                </div>
              );
            })}
          </div>

          <p className="min-h-[2.25rem] text-center text-[11px] leading-snug text-grisbleu" aria-live="polite">
            {status}
          </p>

          {/* Actions */}
          <div className="mt-auto flex min-h-[3.25rem] items-center justify-center gap-3">
            {!revealed && (
              <button
                type="button"
                disabled={!selection}
                onClick={() => setRevealed(true)}
                className="rounded-xl bg-gradient-to-b from-[#FFC35C] via-orange to-[#D97A06] px-12 py-2.5 font-oswald text-lg font-bold tracking-[0.18em] text-[#2B1500] shadow-[0_0_22px_rgba(255,159,28,.45)] transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-30"
              >
                RÉVÉLER
              </button>
            )}
            {revealed && !verdict && (
              <>
                <button
                  type="button"
                  onClick={() => setVerdict('correct')}
                  className="pill pill-green px-4 py-2.5 font-oswald text-xs tracking-[0.14em] sm:text-sm"
                >
                  VERDICT — CORRECT
                </button>
                <button
                  type="button"
                  onClick={() => setVerdict('incorrect')}
                  className="pill pill-red px-4 py-2.5 font-oswald text-xs tracking-[0.14em] sm:text-sm"
                >
                  VERDICT — INCORRECT
                </button>
              </>
            )}
            {verdict && (
              <button
                type="button"
                onClick={reset}
                className="rounded-xl border border-grisbleu/40 px-6 py-2 font-montserrat text-xs font-semibold text-grisbleu transition-colors hover:border-cyan hover:text-cyanclair"
              >
                Réinitialiser la démo
              </button>
            )}
          </div>

          <p className="text-center text-[9px] leading-snug text-grisbleu/70">
            Mécanique en trois temps : sélection ORANGE provisoire → révélation (toujours orange) → verdict VERT/ROUGE.
            Jamais simplifiée. Référence : docs/00-brief-projet.md §5 · démo locale du squelette.
          </p>
        </section>

        {/* --- Scènes + chat Twitch -------------------------------------- */}
        <div className="flex flex-col gap-3">
          <section className="panel p-3" aria-labelledby="admin-scenes">
            <h2 id="admin-scenes" className="panel-title">SCÈNES</h2>
            <div className="mt-2 flex flex-col gap-2">
              {SCENES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setActiveScene(s)}
                  aria-pressed={activeScene === s}
                  className={`scene-item ${activeScene === s ? 'is-active' : ''}`}
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true">
                    <path d="M4 5h12M4 10h12M4 15h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2.5 3.5" />
                  </svg>
                  <span className="truncate">{s}</span>
                </button>
              ))}
            </div>
            <p className="mt-2 text-[9px] text-grisbleu/70">Liste des scènes — maquette 08 (à approfondir, D-06).</p>
          </section>

          <section className="panel flex min-h-[150px] flex-1 flex-col p-3" aria-labelledby="admin-chat">
            <div className="flex items-center justify-between gap-2">
              <h2 id="admin-chat" className="panel-title">CHAT TWITCH</h2>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-grisbleu/70">brief §3</span>
            </div>
            <div className="mt-2 flex flex-1 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 p-3 text-center">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-grisbleu/70" fill="none" aria-hidden="true">
                <path d="M4 5h16v11H9l-4 4V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              <p className="text-[11px] font-semibold text-grisbleu">Zone réservée — chat Twitch compact</p>
              <p className="text-[9px] text-grisbleu/60">Non connecté dans le squelette</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="py-2 text-center text-[9px] text-grisbleu/60">
        jeu — squelette de l'interface administrateur · aucune action n'a d'effet réel (démo locale)
      </footer>
    </main>
  );
}
