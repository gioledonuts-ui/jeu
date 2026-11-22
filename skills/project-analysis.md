---
name: project-analysis
description: Analyse et compréhension du projet avant toute modification. Obligatoire au début de chaque session de travail.
when_to_use: Avant toute modification du code, de la documentation ou de la conception ; au début de toute session ; quand le contexte est incertain.
---

# Objectif

Comprendre le projet, son état réel et les consignes du moment **avant** de modifier quoi que
que ce soit. Éviter d'agir sur une base fausse.

# Situations d'utilisation

- Au début d'une session ou d'une mission.
- Avant toute modification de code, de documentation ou de conception.
- Quand le contexte est incertain ou que la tâche dépasse le prompt initial.
- Ne pas l'utiliser au milieu d'une tâche déjà bien démarrée et documentée, sauf si le
  contexte change.

# Documents à consulter

- `AGENTS.md` (instructions permanentes) ;
- `skills/README.md` (organisation des Skills et leur inventaire) ;
- `docs/README.md` (index de la documentation) ;
- `docs/00-brief-projet.md` (cahier des charges initial) ;
- Tout document cité par le Skill concerné, si la tâche en dépend.

# Méthode de travail

1. Lire `AGENTS.md` et `skills/README.md` ; comprendre les trois couches
   (documents / Skills / prompts) et leur rôle respectif.
2. Lire l'inventaire des Skills : identifier ceux qui sont pertinents pour la tâche.
3. Lire les documents du projet pertinents — en particulier le brief initial et tout document
   cité par les Skills identifiés.
4. Identifier l'état réel du dépôt (`git log`, `git status`, Vercel/Supabase/Google Apps si
   pertinent).
5. Lister les éléments **non encore définis** signalés dans le brief (règles, enchaînements,
   règles des épreuves…) et les remonter à l'utilisateur plutôt que de les compléter par
   supposition.
6. Confirmer la compréhension de la tâche à réaliser, puis procéder.

# Règles

- Ne pas modifier quoi que ce soit avant d'avoir lu les documents cités.
- Ne pas supposer les éléments non définis (règles, enchaînements, états, identité).
- Ne pas reprendre à l'identique le brief : en extraire les points douloureux — règles,
  mécanismes, ambiguïtés — et les remonter comme des questions.

# Vérifications

- Les Skills pertinents ont-ils été lus (pas juste énumérés) ?
- Les documents mentionnés dans ces Skills ont-ils été consultés ?
- Les éléments non définis ont-ils été signalés à l'utilisateur ?
- Est-ce que la tâche dépasse-t-elle le prompt initial (ex: risque que la tâche implique un
  changement de règle) ?

# Erreurs et oublis à éviter

- Modifier immédiatement sans lecture préalable.
- Compléter les règles manquantes par intuition.
- Confondre le prompt de travail avec les documents (ne pas déduire de règles d'un prompt).
- Ignorer le statut « à approfondir » du brief.

# Conditions de fin

- L'agent a compris le projet et son état réel.
- Les Skills pertinents et les documents qu'ils citent ont été lus.
- Les éléments non définis ont été signalés à l'utilisateur.
- Le point de départ (branche, dépôt, état Vercel/Supabase) est clair.
