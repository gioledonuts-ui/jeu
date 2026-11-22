# Mission 1 — Initialisation et mise en place du projet

> **Conversation :** IA 3 — DÉVELOPPEMENT (conversation neuve). Tu es l'IA 3, pas l'IA 2.
> Tout travail se fait dans ce dépôt ; tu n'édites rien en dehors de `docs/` et du code du projet
> (il n'existe pas encore de code — c'est TON rôle de l'initier).

## Rôle

Tu es l'IA 3, l'IA chargée de développer l'application web. Ton rôle est **de réaliser**, pas
**décider**. Toute info manquante ou règle non tranchée : **signaler et t'arrêter**, ne pas
inventer.

## À relire en premier (dans cet ordre)

1. `AGENTS.md` — instructions permanentes (méthode, règles, trois couches) ;
2. `docs/README.md` — index de la documentation ;
3. `docs/decisions.md` — registre des décisions (D-01 → D-07) ;
4. `docs/historique.md` — historique des décisions ;
5. `docs/vision.md` — vision ;
6. `docs/00-brief-projet.md` — brief fidèle, éléments définis vs à approfondir ;
7. `docs/regles-du-jeu.md` — règles du jeu (rien inventé) ;
8. `docs/identite-graphique.md` — direction artistique (VALIDÉE — couleurs, typographies,
    mécanique des réponses) ;
9. `docs/architecture-technique.md` — gabarit (aucun détail contraint) ;
10. `skills/README.md` — format et inventaire des Skills ;
11. `skills/project-analysis.md` — analyse avant travail ;
12. `skills/visual-identity.md` — identité (3 états de réponses, couleurs, maquettes).

Si un fichier cité ci-dessus manque à l'exécution, **signaler au plutôt de l'assumer**.

## Skills à consulter

- `project-analysis` — avant tout travail, lire les documents ci-dessus ;
- `visual-identity` — toute question d'interface, d'habillage, de couleur ou de mise en page.

## Décisions à respecter

- D-02 / D-03 — Skills en Markdown dans `skills/` ; documentation dans `docs/` (Confirmé) ;
- D-04 — `jeu` est le projet Vercel officiel ; `jeugionny` à retirer (pas ta décision — ne
  pas supprimer de projet Vercel sans validation explicite de l'utilisateur) ;
- D-01 — identité VALIDÉE (direction générale) — à conserver ;

**Ne jamais faire autrement :** ne pas inventer un stack, une bibliothèque, une règle de jeu ou
un paramètre de mise en page non documenté. Pour toute info manquante → signaler.

## Contraintes opérationnelles (non négociables)

- **Ne jamais créer de Pull Request** sur GitHub (ni `gh pr create`, ni merger). Travail et
  validation se font directement sur la branche de travail ; le push se fait sur `origin` de
  la branche active ;
- **Déployer sur Vercel à chaque session** — après chaque commit/push, créer un déploiement
  (Vercel) et signaler le résultat au détenteur de la mission ;
- **Attention :** les extensions de travail (ex: doc, readme, landing) accompagnent ce prompt
  — ajouter un commit + push.

## Tâche

1. **Scaffolder** le dépôt :
   - utiliser la stack confirmée (Vite + React + Tailwind CSS — voir Stack ci-dessous) ;
   - créer `README.md` (présentation du projet, lien vers les documents, état des
     interfaces et de l'identité) ;
   - créer le squelette des trois interfaces (diffusion · administrateur · participant) en
     page statique ou en application simple, en respectant l'identité validée (palette,
     typographies, cadres, bande de question).
2. **Conserver** les trois couches et ne pas dupliquer les règles.
3. **Documenter** les modifications et actualiser `docs/historique.md`.
4. **Tester** l'interface (rendu visuel des trois interfaces).
5. **Déployer** sur Vercel et signaler l'URL.

## Stack (confirmée par IA 1)

- **Vite + React + Tailwind CSS** — Vercel pour le déploiement.
- Ne pas introduire une autre stack sans validation explicite.

## Conditions de fin

- Le dépôt contient un README et un squelette des trois interfaces ;
- Chaque interface respecte l'identité validée (palette, cadres cyan, bande de question, pilules) ;
- Les documents restent cohérents (le README n'invente aucune règle) ;
- Le déploiement Vercel est signalé avec l'URL et le statut ;
- Le rapport est rédigé à la fin.
