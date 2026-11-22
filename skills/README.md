# Skills — méthode et organisation

Les **Skills** transforment une intention générale (« tu dois bien faire ») en une méthode de
travail concrète : objectifs, méthodes, règles, vérifications, erreurs à éviter, conditions de
fin. Ils ne redéfinissent pas le projet ; ils décrivent **comment l'IA travaille pour respecter**
les documents.

## Format d'un Skill

Un Skill est un fichier Markdown dans `skills/`, structuré ainsi (voir `skills/_template.md`) :

1. `name`, `description`, `when_to_use` (front matter YAML) ;
2. **Objectif** — ce que le Skill permet d'obtenir ;
3. **Situations d'utilisation** — quand l'utiliser, quand ne pas l'utiliser ;
4. **Documents à consulter** — chemins dans `docs/` ;
5. **Méthode de travail** — l'enchaînement concret des étapes ;
6. **Règles** — à respecter sans exception ;
7. **Vérifications** — contrôle avant de déclarer le travail terminé ;
8. **Erreurs et oublis à éviter** ;
9. **Conditions de fin** — ce qui doit être vrai pour considérer la tâche terminée.

Un Skill n'a pas de mémoire propre : il s'appuie sur les documents du projet. Il ne cite pas de
règle qui n'y figure pas, il renvoie vers ces documents.

## Inventaire des Skills proposés

Statuts : `à concevoir` (à créer au fur et à mesure) · `conçu` (créé) · `à valider`
(création proposée, attente du projet ou validation de l'utilisateur).

| Skill | Périmètre | Statut |
|---|---|---|
| `project-analysis` | Comprendre le projet avant toute modification | **conçu** |
| `visual-identity` | Identité graphique, interfaces, maquettes | **conçu** — contenu à valider après analyse des références |
| `ui-implementation` | Aide aux interfaces : structure, composants, responsive | à concevoir (futur) |
| `game-logic` | Règles et logique du jeu (états, vies, épreuves, mécanique des réponses) | à concevoir (futur) |
| `scenes-production` | Scènes, réalisation automatique, caméras, transitions | à concevoir (futur) |
| `realtime` | Communications en temps réel (compte, invités, états partagés) | à concevoir (futur) |
| `security-access` | Sécurité, accès (admin, candidats, invités, invitations) | à concevoir (futur) |
| `testing` | Tests fonctionnels et visuels | à concevoir (futur) |
| `debugging` | Recherche et correction des bugs | à concevoir (futur) |
| `documentation` | Documentation, rapports de modification, journal des évolutions | à concevoir (futur) |

> Ne pas tous créer d'un coup : un Skill est créé quand le projet en montre un besoin réel, et
> son contenu suit l'évolution du projet.

## Méthode de maintenance

1. **Corriger un Skill** : quand une faiblesse est identifiée, modifier le paragraphe concerné,
   vérifier la cohérence avec les autres Skills et les documents, puis documenter la modification
   dans `docs/skills-maintenance.md` (date, motif, modification).
2. **Ajouter une instruction** : si un nouveau besoin apparaît, l'ajouter dans le Skill adéquat
   et vérifier qu'elle ne contredit pas les autres.
3. **Éviter les doublons et les contradictions** : une règle n'existe qu'en un seul endroit
   (document ou Skill) et les autres renvoient vers elle. Toujours vérifier la cohérence avant
   de finir une modification.
4. **Conserver la cohérence** : toute évolution importante d'un Skill est documentée ; aucune
   modification d'un document de projet n'est faite sans mention de la raison.
5. **Garder le pont** : prompts → Skills → documents. Un prompt ne ré-énonce jamais une règle
   qui existe déjà dans un document ; il demande une tâche.

## Comment l'IA consulte les Skills

- Avant chaque tâche, lire `AGENTS.md`, identifier les Skills pertinents, les lire **en entier**,
  puis consulter les documents qu'ils citent.
- Si plusieurs Skills sont pertinents, respecter les exigences de chacun ; en cas de conflit
  entre Skill(s), signaler et demander la décision.
