import { useState } from 'react';
import Starfield from '../components/Starfield.jsx';
import VideoFrame from '../components/VideoFrame.jsx';
import QuestionBand from '../components/QuestionBand.jsx';
import AnswerPill from '../components/AnswerPill.jsx';
import {
  CANDIDATES,
  DEMO_QUESTION,
  DEMO_VISIBLE_ANSWER,
  DEMO_SEPT_QUESTION,
  DEMO_SEPT_ITEMS,
} from '../data/demo.js';

const SCENES = [
  { id: 'generale', label: 'Vue générale' },
  { id: 'question', label: 'Question individuelle' },
  { id: 'sept', label: 'Sept propositions' },
  { id: 'duel', label: 'Duel' },
];

/* Badge « Duel » étoilé (charte §10) */
function DuelBadge() {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24 drop-shadow-[0_0_24px_rgba(255,194,46,.55)] sm:h-28 sm:w-28" role="img" aria-label="Badge Duel">
      <defs>
        <linearGradient id="star-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="45%" stopColor="#FFC42E" />
          <stop offset="100%" stopColor="#B8791B" />
        </linearGradient>
        <linearGradient id="star-inner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8E1420" />
          <stop offset="100%" stopColor="#4A0410" />
        </linearGradient>
      </defs>
      <polygon points="60,4 76,38 114,40 84,64 95,101 60,80 25,101 36,64 6,40 44,38" fill="url(#star-gold)" stroke="#FFF3B0" strokeWidth="2" strokeLinejoin="round" />
      <polygon points="60,22 72,46 99,48 77,66 85,92 60,77 35,92 43,66 21,48 48,46" fill="url(#star-inner)" opacity="0.9" />
      <text x="60" y="70" textAnchor="middle" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="21" fill="#FFE9C2">Duel</text>
    </svg>
  );
}

/* Chronomètre circulaire du duel (charte §10 — bande orange radiée absente ici ; minuterie) */
function DuelTimer() {
  const R = 52;
  const C = 2 * Math.PI * R;
  return (
    <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32" role="timer" aria-label="Chronomètre 00:30">
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="7" />
        <circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke="#F4F8FF"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * 0.35}
          opacity="0.95"
        />
      </svg>
      <span className="font-montserrat text-2xl font-extrabold tracking-wider text-allum sm:text-4xl">00:30</span>
    </div>
  );
}

export default function Diffusion() {
  const [scene, setScene] = useState('generale');
  const duel = scene === 'duel';

  return (
    <main
      className={`relative h-screen w-screen overflow-hidden text-allum ${
        duel ? 'bg-scene-duel' : 'bg-scene-blue'
      }`}
    >
      <Starfield mode={duel ? 'duel' : 'blue'} density={duel ? 170 : 150} />
      <div className="vignette" aria-hidden="true" />

      {/* --- Chrome haut : badge EN DIRECT / badge Duel + wordmark --- */}
      {!duel ? (
        <div className="absolute left-4 top-3 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 py-1 pl-2 pr-4 backdrop-blur-sm sm:left-6 sm:top-4">
          <span className="h-2.5 w-2.5 animate-liveDot rounded-full bg-rouge shadow-[0_0_10px_rgba(230,54,70,.95)]" aria-hidden="true" />
          <span className="font-montserrat text-[10px] font-extrabold uppercase tracking-[0.3em] text-allum/90 sm:text-[11px]">En direct</span>
          <span className="font-oswald text-sm font-semibold tracking-[0.25em] text-cyanclair sm:text-base">JEU</span>
        </div>
      ) : (
        <>
          <div className="absolute left-3 top-3 z-20 sm:left-6 sm:top-5">
            <DuelBadge />
          </div>
          <div className="absolute right-4 top-5 z-20 font-oswald text-xl font-semibold tracking-[0.4em] text-[#FFD9A0]/90 sm:text-2xl">
            JEU
          </div>
          <div className="absolute left-1/2 top-3 z-20 -translate-x-1/2 sm:top-4">
            <DuelTimer />
          </div>
        </>
      )}

      {/* --- Sélecteur de scènes de DÉMO (outil OBS/preview — hors habillage spectateurs) --- */}
      <div className="absolute right-3 top-3 z-30 flex items-center gap-1 rounded-full border border-white/15 bg-black/55 p-1 backdrop-blur-md sm:right-4 sm:top-4">
        <span className="hidden px-2 text-[9px] font-bold uppercase tracking-[0.25em] text-grisbleu sm:inline">
          Démo
        </span>
        {SCENES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setScene(s.id)}
            aria-pressed={scene === s.id}
            className={`rounded-full px-2 py-1 font-montserrat text-[10px] font-semibold transition-colors sm:text-[11px] ${
              scene === s.id ? 'bg-cyan text-nuit' : 'text-allum/80 hover:text-white'
            }`}
          >
            {s.label}
          </button>
        ))}
        <a
          href="#/"
          title="Retour à l'accueil"
          aria-label="Retour à l'accueil"
          className="rounded-full px-2 py-1 font-montserrat text-[11px] text-grisbleu hover:text-white"
        >
          ⌂
        </a>
      </div>

      {/* --- Scène : la question DOMINE (haut), les cadres emplissent le centre --- */}

      {scene === 'generale' && (
        <div className="relative z-10 flex h-full flex-col pt-14 sm:pt-16">
          {/* Question — grande, en haut */}
          <div className="shrink-0">
            <QuestionBand placement="top">{DEMO_QUESTION}</QuestionBand>
            <div className="neon-line mx-auto mt-2 w-3/4 max-w-4xl sm:mt-3" aria-hidden="true" />
          </div>

          {/* Cadres — grands, centrés, halo derrière */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center gap-[2%] px-[1.5%] pb-5">
            <div aria-hidden="true" className="frame-backdrop left-[12%] right-[12%] top-[8%] h-[78%]" />
            <VideoFrame
              label="PRÉSENTATEUR"
              variant="presenter"
              lives={2}
              heartsSize={26}
              className="relative"
              innerClass="h-[42vh] lg:h-[48vh] aspect-[4/5]"
              labelClassName="text-sm sm:text-base px-5 py-1 sm:px-6"
            />
            {CANDIDATES.map((c) => (
              <VideoFrame
                key={c.id}
                label={c.name}
                variant="candidate"
                hue={c.hue}
                lives={c.lives}
                heartsSize={26}
                className="relative"
                innerClass="h-[38vh] lg:h-[44vh] aspect-[4/5]"
                labelClassName="text-xs sm:text-sm px-4 py-1 sm:px-5"
              />
            ))}
          </div>
        </div>
      )}

      {scene === 'question' && (
        <div className="relative z-10 flex h-full flex-col pt-14 sm:pt-16">
          <div className="shrink-0">
            <QuestionBand placement="top">{DEMO_QUESTION}</QuestionBand>
            <div className="neon-line mx-auto mt-2 w-3/4 max-w-4xl" aria-hidden="true" />
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center gap-[3%] px-[3%] pb-3">
            <div aria-hidden="true" className="frame-backdrop left-[18%] right-[18%] top-[10%] h-[70%]" />
            <VideoFrame label="PRÉSENTATEUR" variant="presenter" lives={2} showLives={false} innerClass="h-[38vh] lg:h-[44vh] aspect-[16/10]" className="relative" labelClassName="text-sm sm:text-base px-6 py-1" />
            <VideoFrame label="CANDIDAT" variant="candidate" hue={CANDIDATES[0].hue} lives={2} showLives={false} innerClass="h-[38vh] lg:h-[44vh] aspect-[16/10]" className="relative" labelClassName="text-sm sm:text-base px-6 py-1" />
          </div>
          <div className="flex shrink-0 items-stretch justify-center gap-[2.5%] px-6 pb-5 pt-1">
            <AnswerPill state="neutral" className="w-[36%] max-w-[560px] py-4 text-base sm:py-5 sm:text-2xl">
              {DEMO_VISIBLE_ANSWER}
            </AnswerPill>
            <AnswerPill state="selected" masked className="w-[36%] max-w-[560px] py-4 text-base sm:py-5 sm:text-2xl">
              masquée
            </AnswerPill>
          </div>
        </div>
      )}

      {scene === 'sept' && (
        <div className="relative z-10 flex h-full flex-col pt-14 sm:pt-16">
          <div className="shrink-0">
            <QuestionBand placement="top">{DEMO_SEPT_QUESTION}</QuestionBand>
            <div className="neon-line mx-auto mt-2 w-3/4 max-w-4xl" aria-hidden="true" />
          </div>
          <div className="relative flex min-h-0 flex-1">
            <div aria-hidden="true" className="frame-backdrop left-[55%] right-[4%] top-[8%] h-[80%]" />
            <ol className="relative flex w-[48%] min-w-0 flex-col justify-center gap-2 overflow-y-auto px-[3%] py-3 sm:gap-3">
              {DEMO_SEPT_ITEMS.map((item) => {
                const state =
                  item.state === 'validated' ? 'correct' : item.state === 'selected' ? 'selected' : 'neutral';
                return (
                  <li key={item.n} className="flex items-center gap-2 sm:gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan/70 bg-panneau2 font-montserrat text-[12px] font-extrabold text-cyanclair shadow-[0_0_10px_rgba(53,224,248,.35)] sm:h-11 sm:w-11 sm:text-base">
                      #{item.n}
                    </span>
                    <AnswerPill state={state} className="min-w-0 flex-1 justify-start px-3 py-2 text-[11px] sm:px-5 sm:py-3 sm:text-base">
                      <span className="truncate">{item.text}</span>
                    </AnswerPill>
                  </li>
                );
              })}
            </ol>
            <div className="relative flex min-w-0 flex-1 items-center justify-center px-[2%]">
              <VideoFrame label="CANDIDAT" variant="candidate" hue={CANDIDATES[0].hue} lives={2} showLives={false} innerClass="h-[46vh] lg:h-[54vh] aspect-[5/6]" className="relative" labelClassName="text-sm sm:text-base px-6 py-1.5" />
            </div>
          </div>
        </div>
      )}

      {scene === 'duel' && (
        <div className="relative z-10 flex h-full flex-col pt-[7.5rem] sm:pt-32">
          <div className="shrink-0">
            <QuestionBand placement="top" duel>{DEMO_QUESTION}</QuestionBand>
            <div className="neon-line-or mx-auto mt-2 w-3/4 max-w-4xl" aria-hidden="true" />
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center gap-[6%] px-[5%] pb-5">
            <div aria-hidden="true" className="frame-backdrop left-[22%] right-[22%] top-[4%] h-[88%]" style={{ background: 'radial-gradient(ellipse at center, rgba(255,150,60,.28), transparent 68%)' }} />
            <VideoFrame label="CANDIDAT A" variant="candidate" hue={CANDIDATES[0].hue} duel showLives={false} innerClass="h-[42vh] lg:h-[50vh] aspect-[3/4]" className="relative" labelClassName="text-sm sm:text-base px-6 py-1.5" />
            <VideoFrame label="CANDIDAT B" variant="candidate" hue={CANDIDATES[1].hue} duel showLives={false} innerClass="h-[42vh] lg:h-[50vh] aspect-[3/4]" className="relative" labelClassName="text-sm sm:text-base px-6 py-1.5" />
          </div>
        </div>
      )}
    </main>
  );
}
