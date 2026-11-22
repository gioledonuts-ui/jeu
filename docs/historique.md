# Historique des modifications

> Journal chronologique des décisions et modifications importantes (date, motif, effet).
> Tenu par IA 2 ; les décisions sont datées.
> Entrées IA 3 : initialisation du projet et squelette des interfaces (Mission 1).

## 2026-11-22 — IA 3 : Mission 1 — initialisation du projet et squelette des trois interfaces

- **Intégration des documents sources** : sur décision de l'utilisateur (réponse à la question
  posée par IA 3), fusion fast-forward de `arena/f6b93da3-jeu` dans `arena/b83d6efc-jeu` —
  aucun push sur `arena/f6b93da3-jeu`, aucun sur `main`, aucune PR ;
- **Projet initialisé** (stack confirmée — D-05) : Vite + React + Tailwind CSS, dépôt à la racine
  (`package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`,
  `src/`) ; polices Oswald + Montserrat (Google Fonts) ;
- **Squelette des trois interfaces** — statique, sans temps réel ni logique de jeu :
  - `#/diffusion` — 4 scènes de démonstration (vue générale · question individuelle · sept
    propositions · duel/habillage rouge) : cadres cyan lumineux, bande de question translucide,
    pilules de réponse, cœurs de vies (symbolème proposé, couleur selon l'état) ;
  - `#/admin` — candidats (sélection locale), mécanique en trois temps cliquable
    (orange provisoire → révélation → verdict vert/rouge — jamais fusionnée), stepper 1·2·3,
    scènes (maquette 08), zone chat Twitch (non connectée), chronomètre d'affichage ;
  - `#/participant` — présentateur + candidats, bande de question (lecture seule),
    micro/caméra (états locaux) ;
  - `#/` — accueil (choix des trois vues) et `#/*` — 404 ;
- **Traçabilité de l'identité** : tokens palette §2 et typographies §3 de
  `identite-graphique.md` repris tels quels (aucune couleur/police ajoutée) ; contenu de
  démonstration issu des maquettes `01`–`09` (question, réponses, sept propositions) ;
  silhouettes illustratives (pas de photos de profil — comptes QG à préciser) ;
- **Test** : `scripts/smoke-test.mjs` (`npm run test:smoke`) — rendu SSR des cinq vues ;
  `npm run build` OK (Vite 5). Pas de navigateur headless disponible dans la sandbox — le test
  visuel se fait via le preview Arena et le déploiement Vercel ;
- **Déploiement Vercel** : projet `jeu` (officiel — D-04) ; URL et statut signalés par IA 3
  à l'utilisateur (voir rapport de session) ;
- **Limites assumées** : aucune règle de jeu inventée (D-06, D-07) ; pas de temps réel, d'auth,
  de caméras ni d'intégration Twitch/QG (`architecture-technique.md` — à approfondir) ;
  détails d'identité à confirmer (symbolème des vies, bandeau haut/bas, maillage du duel — D-01).

## 2026-11-22 — Prompt de départ IA 3 + suppression de jeugionny

- **Prompt de départ** : `prompts/demarche-ia3.md` — mini-prompt autonome pour la conversation
  neuve de l'IA 3 (lecture de la mission 1 → déploiement Vercel) ;
- **Vercel** : `jeugionny` supprimé — `jeu` reste le seul projet officiel ;
- **Registre** : D-04 finalisé (exécuté) ; D-10 ajouté.

## 2026-11-22 — Mission 1 pour IA 3

- **Prompts de travail** : format auto-suffisant défini (`prompts/README.md`) ;
- **Mission 1** : `prompts/01-premiere-mission.md` — initialisation et mise en place du projet
  (stack à confirmer par IA 1) ; contraintes confirmées D-09 (pas de PR sur GitHub ; déployer
  Vercel à chaque session) ;
- **Registre des décisions** : D-08 et D-09 ajoutés.
- **Stack confirmée (2026-11-22)** : Vite + React + Tailwind CSS — D-05 mis à jour.

## 2026-11-22 — Socle et direction artistique

- **Socle** : `AGENTS.md`, `skills/` (`project-analysis`, `visual-identity`), `docs/`
  (`00-brief-projet.md`, `README.md`) — premier assemblage du projet ;
- **Direction artistique** : palette, typographies, formes, mécanique des réponses et maquettes
  (`identite-graphique.md`, `docs/maquettes/01–09`) — direction retenue par l'utilisateur
  (maquettes appréciées) ;
- **Registre des décisions** : `docs/decisions.md` — décisions D-01 à D-07 établies ;
- **Documents ajoutés** : `vision.md`, `regles-du-jeu.md`, `architecture-technique.md`,
  `decisions.md`.
