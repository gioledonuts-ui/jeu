import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import Diffusion from './pages/Diffusion.jsx';
import Admin from './pages/Admin.jsx';
import Participant from './pages/Participant.jsx';

/**
 * Routage par ancre (hash) — adapté au déploiement statique Vercel :
 * aucun rewrite nécessaire, toutes les vues fonctionnent en lien direct
 * et depuis le preview Arena (#/diffusion, #/admin, #/participant).
 */
const ROUTES = {
  '/': Home,
  '/diffusion': Diffusion,
  '/admin': Admin,
  '/administrateur': Admin,
  '/participant': Participant,
};

function currentRoute() {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const path = raw.split('?')[0].replace(/\/+$/, '') || '/';
  return ROUTES[path] ? path : null;
}

export default function App() {
  const [route, setRoute] = useState(currentRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(currentRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const Page = route ? ROUTES[route] : null;

  if (!Page) {
    return (
      <main className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-nuit text-allum">
        <p className="font-oswald text-3xl font-semibold text-cyanclair">404</p>
        <p className="text-sm text-grisbleu">Cette vue n'existe pas.</p>
        <a href="#/" className="rounded-full border border-cyan/50 px-5 py-2 font-montserrat text-xs font-semibold text-cyanclair hover:bg-cyan/10">
          ← Retour à l'accueil
        </a>
      </main>
    );
  }

  return <Page />;
}
