# Instructions permanentes de travail

> Document de cadre — à lire avant toute tâche, quelle que soit sa taille.
> Il ne contient pas les règles du jeu (voir `docs/`) ni les méthodes détaillées (voir `skills/`).

## 1. Qui est ce projet

Application web d'une **émission de jeu en direct sur Twitch** : un animateur (l'utilisateur),
quatre candidats maximum, 30 à 40 minutes, diffusion hebdomadaire idéale, récompense financière
possible. Conçue pour un habillage graphique propre, avec trois interfaces distinctes :

- **Interface diffusion** : image visible par les spectateurs (OBS / navigateur).
- **Interface administrateur** : compacte, tenue par l'animateur, pour piloter l'émission.
- **Interface participant** : simple et épurée, pour les candidats.

## 2. Les trois couches de consignes

Le projet fonctionne avec trois couches distinctes — ne les confondez jamais :

| Couche | Rôle | Où vit-elle |
|---|---|---|
| **Documents du projet** | Ce que l'application doit faire (règles, architecture, fonctionnement) | `docs/` |
| **Skills** | Comment l'IA doit travailler pour respecter ces documents | `skills/` |
| **Prompts de travail** | La tâche précise demandée à un moment donné | (le message de l'utilisateur) |

- Les **Skills** ne répètent pas le cahier des charges : ils expliquent la méthode de travail,
  les vérifications, les erreurs à éviter.
- Les **prompts** ne définissent jamais de règles qui n'existent pas ailleurs ; ils demandent
  une tâche.
- Si les trois couches se contredisent, c'est le document de projet le plus récent qui prévaut ;
  signaler la contradiction à l'utilisateur.

## 3. Méthode obligatoire avant chaque tâche

1. Lire ce fichier.
2. Identifier les **Skills pertinents** pour la tâche et les consulter entièrement.
3. Consulter les **documents du projet** cités par ces Skill(s).
4. Vérifier s'il existe plusieurs Skills pertinents pour la même tâche et les respecter tous.
5. Procéder à la tâche, sans sauter d'étape ni contourner une règle dont le travail serait
   rendu « compliqué ».
6. Vérifier les **conditions de fin** du Skill concerné et les conditions de fin propres à la
   tâche.
7. Documenter ce qui a changé (voir `docs/`) et signaler toute contradiction détectée.

## 4. Règles de comportement

- **Ne pas inventer** : les règles et enchaînements non définis dans le cahier des charges
  restent à approfondir avec l'utilisateur. Ne pas compléter par supposition.
- **Ne pas simplifier les mécanismes** définis. Exemple : la première épreuve n'est pas une
  simple sélection suivie d'un verdict — c'est une mécanique en trois temps (sélection
  orange provisoire → révélation → verdict vert/rouge). Tout travail sur cette épreuve
  doit préserver cette mécanique.
- **Ne pas dupliquer** les règles : une règle vit dans un seul document (ou référencée),
  les autres documents y renvoient.
- **Ne pas modifier les documents** sans en préciser la raison ni demander validation pour
  un changement de comportement ou de règle.
- **Ne pas ignorer une règle** parce qu'elle complique le développement.
- **En cas de contradiction** entre prompts, Skills et documentation : la rapporter, ne pas
  trancher seul.

## 5. Structure du dépôt

| Chemin | Contenu |
|---|---|
| `AGENTS.md` | Ce fichier — instructions générales permanentes |
| `skills/` | Instructions spécialisées et réutilisables (voir `skills/README.md`) |
| `docs/` | Documentation du projet (règles, architecture, identité, décisions) |

## 6. Séparation des environnements (mémoire)

- **QG** (`qg2gionny`, Supabase) : le réseau social de l'utilisateur (comptes, messages,
  groupes). Ne pas en faire un support de données métier du jeu sans décision explicite.
- **Vercel** (`jeu` et `jeugionny`) : deux projets liés au dépôt — à clarifier (un seul devrait
  exister, ou distinguer préproduction/production).
- Cette mission n'inclut **pas** le déploiement ni le développement.
