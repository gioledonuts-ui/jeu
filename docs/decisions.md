# Registre des décisions

> Source de vérité du statut de chaque élément du projet.
> Statuts : **Confirmé · Direction retenue · À approfondir · À vérifier techniquement · Abandonné.**
> Toute entrée doit être datée et référencée à la décision de l'utilisateur.

## Dés elections

| # | Élément | Statut | Source | Notes |
|---|---|---|---|---|
| D-01 | Identité graphique — direction générale (palette, typographies, formes, matériaux, mécanique 3 étapes, deux habillages, cohérence 3 interfaces) | **Direction retenue** | Utilisateur, appréciation maquettes (2026-11-22) | Maquettes `docs/maquettes/01–09` validées pour la direction ; détails à confirmer (symbolème des vies, position de la bande, maillage du duel) |
| D-02 | Format des Skills — Markdown + front matter dans `skills/` | **Confirmé** | Utilisateur, validation (2026-11-22) | `skills/README.md`, `skills/_template.md`, deux Skills conçus (`project-analysis`, `visual-identity`) |
| D-03 | Documentation dans le dépôt (`docs/`) | **Confirmé** | Utilisateur, validation (2026-11-22) | Source de vérité ; Google Docs éventuellement en livrable |
| D-04 | Vercel — `jeu` est le projet officiel ; `jeugionny` à retirer | **Confirmé** : retrait exécuté (2026-11-22) | Utilisateur (2026-11-22) | `jeugionny` supprimé de Vercel — `jeu` (`prj_SU9pxZb50uIxZDPAlri9I6N9We7Z`) est le projet officiel |
| D-05 | Architecture technique — stack | **Confirmé** : Vite + React + Tailwind CSS | Utilisateur (2026-11-22) | Base de données / temps réel / auth : à approfondir séparément |
| D-06 | Règles du jeu — vies, éliminations, épreuves, enchaînements | **À approfondir** | Brief | Non entièrement spécifié — ne jamais compléter par supposition |
| D-07 | Mécanique exacte de la finale (2 finalistes, chronomètre) | **À approfondir** | Brief | Uniquement principe connu ; détail à définir avec l'IA 1 |

## 2026-11-22 — Mission 1 pour IA 3

| # | Élément | Statut | Source | Notes |
|---|---|---|---|---|
| D-08 | Prompts de travail — format et calibration (auto-suffisance, listes à relire, skills à consulter) | **Direction retenue** | Utilisateur (2026-11-22) | `prompts/README.md` ; première mission consignée dans `prompts/01-premiere-mission.md` |
| D-09 | IA 3 — aucune Pull Request sur GitHub ; déploiement Vercel à chaque session | **Confirmé** | Utilisateur (2026-11-22) | Contraintes opérationnelles ajoutées dans `prompts/01-premiere-mission.md` |
| D-10 | Prompt de départ pour IA 3 — format autonome (conversation neuve) | **Confirmé** : préparé et consigné | Utilisateur (2026-11-22) | `prompts/demarche-ia3.md` |

## À noter

- D-01 et D-02 marquent des décisions de direction : elles ne deviennent « Confirmé » que sur
  confirmation explicite après accord.
- Si une décision est remplacée ou abandonnée, ajouter une nouvelle ligne — ne pas effacer.
