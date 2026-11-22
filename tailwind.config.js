/** @type {import('tailwindcss').Config} */
// Palette et typographies : docs/identite-graphique.md (sections 2 et 3).
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        nuit: '#0A1030',
        profond: '#141D50',
        royal: '#2E57F6',
        ambre: '#1B3DD1',
        cyan: '#35E0F8',
        cyanclair: '#7FF0FF',
        or: '#FFC42E',
        allum: '#F4F8FF',
        grisbleu: '#9FB4D9',
        vert: '#3CE97B',
        orange: '#FF9F1C',
        rouge: '#E63646',
        duelfond: '#2B0014',
        duele: '#D92B3D',
        panneau: '#141B33',
        panneau2: '#1B2340',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        pill: '16px',
        frame: '1.25rem',
      },
      boxShadow: {
        'halo-cyan': '0 0 22px rgba(53,224,248,.4), 0 0 64px rgba(53,224,248,.18)',
        'halo-or': '0 0 26px rgba(255,194,46,.35), 0 0 70px rgba(217,43,61,.4)',
        'pill-inner': 'inset 0 2px 4px rgba(255,255,255,.45), inset 0 -4px 8px rgba(0,0,0,.35)',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '.25' },
          '50%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '.55' },
          '50%': { opacity: '1' },
        },
        duelPulse: {
          '0%, 100%': { boxShadow: '0 0 22px rgba(255,178,106,.35), 0 0 70px rgba(217,43,61,.35)' },
          '50%': { boxShadow: '0 0 40px rgba(255,178,106,.6), 0 0 120px rgba(217,43,61,.55)' },
        },
        liveDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.35', transform: 'scale(.8)' },
        },
      },
      animation: {
        twinkle: 'twinkle 2.6s ease-in-out infinite',
        'twinkle-slow': 'twinkle 4.2s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.2s ease-in-out infinite',
        duelPulse: 'duelPulse 4.5s ease-in-out infinite',
        liveDot: 'liveDot 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
