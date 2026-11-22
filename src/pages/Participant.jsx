import { useState } from 'react';
import Starfield from '../components/Starfield.jsx';
import VideoFrame from '../components/VideoFrame.jsx';
import QuestionBand from '../components/QuestionBand.jsx';
import { CANDIDATES, DEMO_QUESTION } from '../data/demo.js';

/**
 * Interface participant — simple et épurée (brief §3, maquette 09).
 * Seules commandes : micro et caméra (couper / réactiver).
 */
export default function Participant() {
  const [micOn, setMicOn] = useState(false); // maquette 09 : « MICR OFF » à l'ouverture
  const [camOn, setCamOn] = useState(true); //  maquette 09 : « CAM ON »

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-scene-blue text-allum">
      <Starfield mode="blue" density={130} />
      <div className="vignette" aria-hidden="true" />

      <a href="#/" className="absolute left-4 top-4 z-20 text-[11px] font-semibold text-grisbleu transition-colors hover:text-allum">
        ← Accueil
      </a>
      <span className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.25em] text-grisbleu backdrop-blur-sm">
        Squelette
      </span>

      <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-4 pb-24 pt-12 sm:gap-6 sm:pb-20">
        {/* Cadres : présentateur + candidats (cœur au-dessus, nom en dessous — maquette 09) */}
        <div className="mx-auto flex w-full max-w-4xl items-end justify-center gap-[2.5%]">
          <VideoFrame label="PRÉSENTATEUR" variant="presenter" lives={2} labelPosition="bottom" heartsSize={18} aspect="aspect-[4/5]" className="w-[17%] min-w-[72px]" />
          {CANDIDATES.map((c) => (
            <VideoFrame
              key={c.id}
              label={c.name}
              variant="candidate"
              hue={c.hue}
              lives={c.lives}
              labelPosition="bottom"
              heartsSize={18}
              aspect="aspect-[4/5]"
              className="w-[15%] min-w-[64px]"
            />
          ))}
        </div>

        {/* Question — lecture seule côté participant */}
        <QuestionBand className="mx-auto max-w-5xl">{DEMO_QUESTION}</QuestionBand>
      </div>

      {/* Commandes micro / caméra (brief §3) */}
      <button
        type="button"
        onClick={() => setMicOn((v) => !v)}
        aria-pressed={micOn}
        className={`absolute bottom-5 left-4 z-20 flex items-center gap-2 rounded-full border-2 px-5 py-2.5 font-oswald text-sm font-semibold tracking-[0.15em] transition-all sm:bottom-7 sm:left-8 ${
          micOn
            ? 'border-vert/80 bg-vert/15 text-vert shadow-[0_0_18px_rgba(60,233,123,.35)]'
            : 'border-orange/80 bg-orange/15 text-orange shadow-[0_0_18px_rgba(255,159,28,.35)]'
        }`}
      >
        {micOn ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path d="M12 15a3.5 3.5 0 0 0 3.5-3.5v-5a3.5 3.5 0 1 0-7 0v5A3.5 3.5 0 0 0 12 15zM6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path d="M9 9.5V8a3.5 3.5 0 0 1 6.6-1.7M12 15a3.5 3.5 0 0 0 3.4-2.7M12 15a3.5 3.5 0 0 1-.9-.2M6 11a6 6 0 0 0 9.4 5M18 11h-.4M12 17v4M9 21h6M4 4l16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        MICR {micOn ? 'ON' : 'OFF'}
      </button>

      <button
        type="button"
        onClick={() => setCamOn((v) => !v)}
        aria-pressed={camOn}
        className={`absolute bottom-5 right-4 z-20 flex items-center gap-2 rounded-full border-2 px-5 py-2.5 font-oswald text-sm font-semibold tracking-[0.15em] transition-all sm:bottom-7 sm:right-8 ${
          camOn
            ? 'border-vert/80 bg-vert/15 text-vert shadow-[0_0_18px_rgba(60,233,123,.35)]'
            : 'border-orange/80 bg-orange/15 text-orange shadow-[0_0_18px_rgba(255,159,28,.35)]'
        }`}
      >
        CAM {camOn ? 'ON' : 'OFF'}
        {camOn ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path d="M4 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M16 11l4.5-2.5v7L16 13" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path d="M4 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M16 11l4.5-2.5v7L16 13M3 3l18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </main>
  );
}
