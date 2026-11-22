import Starfield from '../components/Starfield.jsx';

const INTERFACES = [
  {
    href: '#/diffusion',
    title: 'DIFFUSION',
    route: '#/diffusion',
    density: 'Élevée — spectacle',
    description: 'Image des spectateurs (OBS / navigateur) : cadres lumineux, question, réponses, vies, duel.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="4.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 21h6M12 17.5V21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: '#/admin',
    title: 'ADMINISTRATEUR',
    route: '#/admin',
    density: 'Compacte — chat Twitch visible',
    description: "Pilotage de l'animateur : candidats, vies, mécanique de réponse en trois temps, scènes, chronomètres.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M4 7h9M17 7h3M4 17h3M11 17h9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="15" cy="7" r="2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="9" cy="17" r="2" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    href: '#/participant',
    title: 'PARTICIPANT',
    route: '#/participant',
    density: 'Épurée — peu de commandes',
    description: 'Pour les candidats : présentateur, autres candidats, question, micro / caméra. Rien de plus.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5 20c1-4.4 3.6-6.8 7-6.8s6 2.4 7 6.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

const STEPS = [
  { n: '1', label: 'Sélection provisoire', tone: 'pill-orange', note: 'orange' },
  { n: '2', label: 'Révélation — toujours orange', tone: 'pill-orange', note: 'orange' },
  { n: '3', label: 'Verdict : correcte ou incorrecte', tone: 'pill-green', note: 'ou rouge' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-scene-blue text-allum">
      <Starfield mode="blue" density={170} />
      <div className="vignette" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-5 pb-8 pt-12 text-center sm:pt-16">
        <span className="rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1 text-[9px] font-bold uppercase tracking-[0.3em] text-cyanclair sm:text-[10px]">
          Squelette — Mission 1 · Identité validée (direction)
        </span>

        {/* Wordmark */}
        <div className="mt-6 flex items-center gap-4 sm:gap-6">
          <svg viewBox="0 0 64 64" className="h-12 w-12 sm:h-16 sm:w-16" aria-hidden="true">
            <path fill="#FFC42E" d="M32 4l7.3 17.2 18.7 1.4-13.9 12.1 4.6 17.9L32 48.4 15.3 52.6l4.6-17.9-13.9-12.1 18.7-1.4z" />
          </svg>
          <h1
            className="font-oswald text-[5.5rem] font-bold leading-none tracking-[0.14em] text-transparent sm:text-[8.5rem]"
            style={{
              backgroundImage: 'linear-gradient(180deg,#FFFFFF 8%,#7FF0FF 45%,#35E0F8 75%,#1B3DD1 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              textShadow: '0 0 60px rgba(53,224,248,.35)',
            }}
          >
            JEU
          </h1>
        </div>
        <p className="mt-2 font-montserrat text-base font-semibold text-allum/95 sm:text-xl">
          Une émission de jeu <span className="text-cyanclair">en direct sur Twitch</span>.
        </p>
        <p className="mt-1 max-w-xl text-xs text-grisbleu sm:text-sm">
          Quatre candidats, deux vies, une identité commune aux trois interfaces — diffusion, administrateur, participant.
        </p>

        {/* Trois interfaces */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
          {INTERFACES.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="card-interface group flex flex-col items-center gap-3 rounded-2xl border border-cyan/25 bg-profond/70 p-5 text-center backdrop-blur-sm focus-visible:outline-2 sm:p-6"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan/40 bg-cyan/10 text-cyan transition-colors group-hover:text-cyanclair">
                {item.icon}
              </span>
              <span className="font-oswald text-xl font-semibold tracking-[0.14em] text-allum">{item.title}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyanclair/80">{item.density}</span>
              <span className="text-xs leading-snug text-grisbleu">{item.description}</span>
              <span className="mt-auto flex items-center gap-2 font-mono text-[11px] font-semibold text-cyan/90 transition-colors group-hover:text-cyanclair">
                {item.route}
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" aria-hidden="true">
                  <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Mécanique des réponses — trois temps (brief §5) */}
        <div className="mt-10 flex w-full flex-col items-center gap-2 rounded-2xl border border-white/10 bg-nuit/60 px-4 py-4 backdrop-blur-sm sm:mt-12">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-grisbleu sm:text-[10px]">
            La mécanique des réponses — trois temps
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {STEPS.map((s, i) => (
              <div key={s.n} className="flex items-center gap-2 sm:gap-3">
                <span className={`pill ${s.tone} px-3 py-1.5 text-[10px] sm:text-xs`}>
                  <span className="mr-1 font-oswald">{s.n} ·</span>
                  {s.label}
                </span>
                {i < STEPS.length - 1 && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-grisbleu" fill="none" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p className="text-[9px] text-grisbleu/70">La sélection orange provisoire n'est jamais confondue avec le verdict — brief §5.</p>
        </div>

        {/* Pied */}
        <footer className="mt-8 flex flex-col items-center gap-1 text-[9px] text-grisbleu/80 sm:text-[10px]">
          <p>Stack confirmée : Vite + React + Tailwind CSS (D-05) · Déploiement Vercel — projet « jeu » (D-04)</p>
          <p>Règles du jeu : à approfondir (D-06, D-07) · Identité : direction artistique VALIDÉE, détails à confirmer (D-01)</p>
          <a className="mt-1 font-semibold text-cyan/90 underline-offset-2 hover:underline" href="https://github.com/gioledonuts-ui/jeu" rel="noreferrer">
            Code source — github.com/gioledonuts-ui/jeu
          </a>
        </footer>
      </div>
    </main>
  );
}
