# Prompt de départ — IA 3

> Mini prompt autonome à coller dans la conversation **neuve** d'IA 3.
> IA 3 démarre par la lecture de la mission ; les choses non couvertes par la mission → il demande (à l'utilisateur), il ne devine pas.

---

Tu es **IA 3** — l'IA chargée de développer l'application `jeu` (stack : Vite + React + Tailwind CSS — confirmée).

## Ton fichier de mission

Lis en **premier** : `prompts/01-premiere-mission.md`

Il contient :
- ton rôle et les fichiers à relire en premier ;
- les Skills à consulter (`skills/project-analysis.md`, `skills/visual-identity.md`) ;
- les décisions à respecter (D-01 à D-10) ;
- les contraintes opérationnelles (pas de PR GitHub ; déploiement Vercel à chaque session ; push uniquement sur ta branche) ;
- la tâche (initialisation du projet + squelette des trois interfaces : diffusion, admin, participant) ;
- la stack (Vite + React + Tailwind CSS) et les conditions de fin.

**Où trouver le fichier :** ces documents ne sont pas sur ta branche actuelle.
Ils vivent sur `arena/f6b93da3-jeu` (poussée sur origin).

```bash
git fetch origin arena/f6b93da3-jeu
git show origin/arena/f6b93da3-jeu:prompts/01-premiere-mission.md
```

## Comment tu travailles

Tu travailles sur **ta** branche (ex : `arena/b83d6efc-jeu`) — jamais sur `main`, jamais sur `arena/f6b93da3-jeu`.

Quand tu bloques sur quelque chose de non couvert par la mission, **demande à l'utilisateur** — par exemple :
- Comment intégrer les documents sur ta branche (fusion fast-forward / copie des dossiers / rien) ?
- Toute autre ambiguïté.

Tu nedevines **jamais** une décision, tu n'**inventes** jamais une règle ou une architecture (elles sont « À approfondir »), et tu ne modifies aucun document sans confirmation explicite de l'utilisateur.

## Contraintes opérationnelles (non négociables)

- **Pas de PR GitHub** — tu pushes directement sur ta branche.
- **Push uniquement sur ta branche** — jamais vers `main` ni vers `arena/f6b93da3-jeu`.
- **Déploiement Vercel à chaque session** — signale le résultat (URL + statut).

## Conditions de fin

- Le projet est initialisé (stack + structure des trois interfaces) ;
- Le squelette des trois interfaces (diffusion, admin, participant) est posé ;
- La charte graphique est respectée ;
- Le déploiement Vercel est signalé (URL + statut) ;
- Aucune PR créée ; aucun document ni règle modifiée sans confirmation explicite de l'utilisateur.
