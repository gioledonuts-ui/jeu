# jeu

**Une émission de jeu en direct sur Twitch** — animée par l'animateur, jusqu'à quatre candidats,
30 à 40 minutes, diffusion idéalement hebdomadaire, récompense financière possible.
Conçue pour un habillage graphique propre, avec **trois interfaces distinctes**.

> Statut : **squelette initial** (Mission 1 de l'IA 3 — initialisation + squelette des interfaces).
> Règles du jeu : **à approfondir** — aucun détail n'est inventé ici.

## Les trois interfaces

| Route | Interface | Destinataire | Densité |
|---|---|---|---|
| `#/diffusion` | **Diffusion** | Spectateurs (OBS / navigateur) | Élevée — spectacle |
| `#/admin` | **Administrateur** | Animateur | Compacte (chat Twitch visible) |
| `#/participant` | **Participant** | Candidats | Épurée (peu de commandes) |
| `#/` | Accueil — choix des trois vues | — | — |

Stack confirmée : **Vite + React + Tailwind CSS** — déploiement **Vercel** (projet officiel `jeu`).
Décision **D-05** (`docs/decisions.md`).

## Démarrer

```bash
npm install
npm run dev       # développement (Vite, http://localhost:5173)
npm run build     # build de production → dist/
npm run preview   # aperçu du build (http://localhost:4173)
npm run test:smoke # test de rendu (SSR) des trois interfaces + accueil
```

## État des interfaces (squelette)

Ce dépôt contient un **squelette statique** : la structure, l'habillage et la mécanique
visuelle des réponses sont en place ; **aucune donnée en temps réel n'est encore branchée**
(le temps réel, les comptes QG, Twitch, les caméras et les scènes automatisées restent à approfondir —
`docs/architecture-technique.md`).

| Interface | État | Contenu du squelette |
|---|---|---|
| Diffusion | squelette statique | 4 scènes de démonstration commutables : vue générale · question individuelle · sept propositions · duel (habillage rouge). Cadres cyan lumineux, bande de question, pilules de réponses, cœurs (symbolème proposé). |
| Administrateur | squelette statique | Candidats (sélection locale), mécanique en trois temps cliquable (sélection orange → révélation → verdict), stepper 1·2·3, liste des scènes (maquette 08), zone chat Twitch (non connectée), chronomètre d'affichage. |
| Participant | squelette statique | Cadres présentateur + candidats, bande de question (lecture seule), boutons micro / caméra (états locaux). |

**Limites assumées :** contenu de démonstration (question et réponses des maquettes, noms de
candidats), silhouettes illustratives — pas de photos de profil, pas d'audio/vidéo réel, pas
de logique de jeu (vies/éliminations/épreuves au-delà des états visuels). Les règles (D-06,
D-07) et l'architecture (temps réel, comptes, invitations) restent **à approfondir** : rien
n'est inventé.

## Identité graphique

**Direction artistique VALIDÉE par l'utilisateur** (2026-11-22, appréciation des maquettes) —
détails encore à confirmer (symbolème des vies, emplacement de la bande de question, maillage
du duel, ordre des habillages). Référence : [`docs/identite-graphique.md`](docs/identite-graphique.md)
(direction générale **D-01**) et maquettes [`docs/maquettes/`](docs/maquettes/) (`01`–`09`,
propositions).

Le squelette applique : palette bleu dominant + cyan (habillage classique) et habillage rouge
(duel), typographies **Oswald** (questions / titres) et **Montserrat** (texte), pilules de
réponse, bande horizontale de question translucide, cadres vidéo à bordure cyan lumineuse,
cœurs pour les vies (vert 2 · orange 1 · rouge critique), **trois états de réponse distincts**
(orange provisoire → révélée toujours orange → verdict vert/rouge — maquettes
`01`–`04`), jamais fusionnés.

## Documentation

La source de vérité vit dans [`docs/`](docs/) (décisions **D-01 → D-10** dans
[`docs/decisions.md`](docs/decisions.md)) :

| Document | Contenu |
|---|---|
| [`AGENTS.md`](AGENTS.md) | Instructions permanentes (méthode, trois couches, règles de comportement) |
| [`docs/README.md`](docs/README.md) | Index de la documentation |
| [`docs/00-brief-projet.md`](docs/00-brief-projet.md) | Cahier des charges initial (défini vs à approfondir) |
| [`docs/vision.md`](docs/vision.md) | Vision générale |
| [`docs/regles-du-jeu.md`](docs/regles-du-jeu.md) | Règles du jeu — **à approfondir** |
| [`docs/identite-graphique.md`](docs/identite-graphique.md) | Charte graphique (statut VALIDÉE) |
| [`docs/architecture-technique.md`](docs/architecture-technique.md) | Architecture — gabarit, **à approfondir** |
| [`docs/decisions.md`](docs/decisions.md) | Registre des décisions (D-01 → D-10) |
| [`docs/historique.md`](docs/historique.md) | Journal des modifications |
| [`docs/maquettes/`](docs/maquettes/) | Maquettes `01`–`09` (propositions) |
| [`skills/`](skills/) · [`prompts/`](prompts/) | Méthode de travail de l'IA · prompts de mission |

## Contraintes du projet

- **Pas de Pull Request GitHub** — le travail se fait directement sur la branche de travail ;
  déploiement Vercel à chaque session (**D-09**).
- Les règles et enchaînements non définis restent à approfondir — **ne pas compléter par
  supposition** (`AGENTS.md` §4).
- L'identité est une **direction validée**, pas un gel définitif des détails (**D-01**).

Code source : <https://github.com/gioledonuts-ui/jeu>
