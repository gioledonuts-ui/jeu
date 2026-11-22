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

function DuelBadge() {
  return (
    <svg viewBox="0 0 120 120" className="h-20 w-20 sm:h-24 sm:w-24 drop-shadow-[0_0_18px_rgba(255,194,46,.45)]" role="img" aria-label="Badge Duel">
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

function DuelTimer() {
  const R = 52;
  const C = 2 * Math.PI * R;
  return (
    <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28" role="timer" aria-label="Chronomètre 00:30">
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
      <span className="font-montserrat text-2xl font-extrabold tracking-wider text-allum sm:text-3xl">00:30</span>
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

      {/* Badge haut-gauche (hors duel : pastille EN DIRECT ; duel : badge Duel) */}
      {!duel ? (
        <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 py-1 pl-2 pr-4 backdrop-blur-sm">
          <span className="h-2.5 w-2.5 animate-liveDot rounded-full bg-rouge shadow-[0_0_8px_rgba(230,54,70,.9)]" aria-hidden="true" />
          <span className="font-montserrat text-[10px] font-extrabold uppercase tracking-[0.3em] text-allum/90">En direct</span>
          <span className="font-oswald text-sm font-semibold tracking-[0.2em] text-cyanclair">JEU</span>
        </div>
      ) : (
        <div className="absolute left-3 top-2 z-20 sm:left-6 sm:top-4">
          <DuelBadge />
        </div>
      )}
      {duel && (
        <div className="absolute right-4 top-6 z-20 font-oswald text-lg font-semibold tracking-[0.35em] text-[#FFD9A0]/90 sm:text-xl">
          JEU
        </div>
      )}
      {duel && (
        <div className="absolute left-1/2 top-3 z-20 -translate-x-1/2 sm:top-4">
          <DuelTimer />
        </div>
      )}

      {/* Barre de démo (squelette) — ne fait pas partie de l'habillage OBS en production */}
      <div className="absolute right-3 top-3 z-30 flex items-center gap-1 rounded-full border border-white/15 bg-black/50 p-1 backdrop-blur-md">
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

      {/* --- Scènes ------------------------------------------------------ */}

      {scene === 'generale' && (
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex min-h-0 flex-1 items-center justify-center gap-[1.5%] px-[2%] pb-3 pt-14">
            <VideoFrame label="PRÉSENTATEUR" variant="presenter" lives={2} heartsSize={22} className="w-[19%]" aspect="aspect-[5/6]" />
            {CANDIDATES.map((c) => (
              <VideoFrame
                key={c.id}
                label={c.name}
                variant="candidate"
                hue={c.hue}
                lives={c.lives}
                heartsSize={22}
                className="w-[16%]"
                aspect="aspect-[5/6]"
              />
            ))}
          </div>
          <QuestionBand className="shrink-0">{DEMO_QUESTION}</QuestionBand>
        </div>
      )}

      {scene === 'question' && (
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex min-h-0 flex-1 items-center justify-center gap-[4%] px-[4%] pb-2 pt-14">
            <VideoFrame label="PRÉSENTATEUR" variant="presenter" lives={2} showLives={false} aspect="aspect-[16/10]" className="w-[36%] max-w-[560px]" />
            <VideoFrame label="CANDIDAT" variant="candidate" hue={CANDIDATES[0].hue} lives={2} showLives={false} aspect="aspect-[16/10]" className="w-[36%] max-w-[560px]" />
          </div>
          <QuestionBand className="shrink-0">{DEMO_QUESTION}</QuestionBand>
          <div className="flex shrink-0 items-stretch justify-center gap-[2.5%] px-6 pb-5 pt-3">
            <AnswerPill state="neutral" className="w-[36%] max-w-[520px] py-3 text-base sm:text-xl">
              {DEMO_VISIBLE_ANSWER}
            </AnswerPill>
            <AnswerPill state="selected" masked className="w-[36%] max-w-[520px] py-3 text-base sm:text-xl">
              masquée
            </AnswerPill>
          </div>
        </div>
      )}

      {scene === 'sept' && (
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex min-h-0 flex-1">
            <ol className="flex w-[46%] min-w-0 flex-col justify-center gap-1.5 overflow-y-auto px-[3%] pb-2 pt-14 sm:gap-2.5">
              {DEMO_SEPT_ITEMS.map((item) => {
                const state =
                  item.state === 'validated' ? 'correct' : item.state === 'selected' ? 'selected' : 'neutral';
                return (
                  <li key={item.n} className="flex items-center gap-1.5 sm:gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan/60 bg-panneau2 font-montserrat text-[11px] font-extrabold text-cyanclair sm:h-9 sm:w-9 sm:text-sm">
                      #{item.n}
                    </span>
                    <AnswerPill state={state} className="min-w-0 flex-1 justify-start px-3 py-1.5 text-[10px] sm:px-4 sm:py-2 sm:text-sm">
                      <span className="truncate">{item.text}</span>
                    </AnswerPill>
                  </li>
                );
              })}
            </ol>
            <div className="flex min-w-0 flex-1 items-center justify-center px-[3%] pb-2 pt-14">
              <VideoFrame label="CANDIDAT" variant="candidate" hue={CANDIDATES[0].hue} lives={2} showLives={false} aspect="aspect-[5/6]" className="w-full max-w-[300px] sm:max-w-[380px]" />
            </div>
          </div>
          <QuestionBand className="shrink-0 text-sm sm:text-lg">{DEMO_SEPT_QUESTION}</QuestionBand>
        </div>
      )}

      {scene === 'duel' && (
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex min-h-0 flex-1 items-center justify-center gap-[7%] px-[6%] pb-2 pt-24 sm:pt-28">
            <VideoFrame label="CANDIDAT A" variant="candidate" hue={CANDIDATES[0].hue} duel showLives={false} aspect="aspect-[3/4]" className="w-[30%] max-w-[330px]" labelClassName="text-xs sm:text-sm px-5 py-1" />
            <VideoFrame label="CANDIDAT B" variant="candidate" hue={CANDIDATES[1].hue} duel showLives={false} aspect="aspect-[3/4]" className="w-[30%] max-w-[330px]" labelClassName="text-xs sm:text-sm px-5 py-1" />
          </div>
          <QuestionBand duel className="shrink-0">
            {DEMO_QUESTION}
          </QuestionBand>
        </div>
      )}
    </main>
  );
}
