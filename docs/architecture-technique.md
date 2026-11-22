# Architecture technique

> **Statut global : À APPROFONDIR** — aucun choix technique confirmé.
> Ce document est le gabarit de ce qui sera décidé et consigné avant développement.

## Stack (VALIDÉE)

- **Vite + React + Tailwind CSS** (confirmée par IA 1, 2026-11-22).
- Vercel pour le déploiement (`jeu` — projet officiel).

## Questions à trancher avant développement

- Framework detail / runtime exact — sous réserve de cette stack ;
- Base de données et temps réel — Supabase existant (`qg2gionny`) = QG (réseau social, comptes,
  messages, posts) — **non** support métier du jeu sans décision explicite ;
- Authentification (compte QG vs invité avec code d'invitation) ;
- Hébergement / démo — Vercel (`jeu` est le projet officiel — `jeugionny` à retirer sous
  validation explicite) ;
- Auth, invitations, code de participation ;
- Caméras (WebRTC ?), détection de parole, réalisation centralisée ;
- Protocole de communication entre interfaces (diffusion / admin / participant) ;
- Tests et validation — voir `docs/tests.md` (à créer).

## Règles de cohérence à respecter

- Un seul point d'accès à la base ;
- Aucun détail à exposer sur le côté public qui ne devrait pas l'être ;
- L'identité graphique et la mécanique des réponses sont consignées dans les documents
  respectifs — ce document renvoie vers eux.

## Statuts

- Stack — **Confirmé** : Vite + React + Tailwind CSS ; Vercel — **Direction retenue** ;
- Tout le reste — **À approfondir**, à trancher avant développement, pas avant validation des documents.
