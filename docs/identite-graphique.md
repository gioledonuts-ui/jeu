# Direction artistique — Le jeu

> **Statut : PROPOSITION — en attente de validation.** Ni cette charte ni les maquettes associées
> ne constituent encore des décisions définitives. Rien ici ne doit être livré en tant que
> charte définitive avant validation explicite de l'utilisateur.

## 1. Analyse des références

### Capture 1 — Question à deux réponses (type « question individuelle »)

- **Arrière-plan** : bleu royal saturé en dégradé radial, étoiles blanches et or (auréolées,
  scintillantes), particules dorées en petites rafales, lumière concentrée au centre. Impression :
  fête, lumière, spectacle télévisé.
- **Cadres vidéo** : bordure cyan brillante avec halo doux, coins arrondis, séparation nette des
  zones (présentateur / participant). Les cadres sont égaux, présentateurs légèrement accentués.
- **Question** : bande horizontale sombre translucide, texte blanc en gras, centré, légèrement
  éclairé.
- **Réponses** : boutons-pilules arrondies, couleurs saturées (vert pour correct, rouge pour
  incorrect), texte blanc en gras, bordure plus claire.

### Capture 2 — Sept propositions (style « liste + zone vidéo »)

- **Arrière-plan** : bleu éclatant et joyeux (bleu saturé décliné en cyan vif), grande zone
  graphique (cartoon). Impression : énergie, légèreté.
- **Propositions** : colonne verticale de pilules arrondies, légèrement inclinées en pile, texte
  blanc en gras, bordure claire ; la proposition sélectionnée/correcte passe **or/jaune**.
- **Zone vidéo** : grande zone occupée par le présentateur/le candidat, animée.
- **Question** : bande horizontale en bas, fond translucide bleu-sombre, texte blanc en gras.

### Capture 3 — Duel (style dramatique)

- **Arrière-plan** : rouge profond scintillant (rose/carmin), étincelles blanches, fondu vers
  le rouge sombre. Impression : intensité, tension, duel.
- **Vidéo** : grande zone verticale à gauche, bordure rose/corail lumineuse, coins arrondis.
- **Cartes noms** : grille 2×2 à droite, chaque carte = photo + badge pilule (or pour le
  propriétaire, bleu pour les autres) — hiérarchie des visuels et des noms.
- **Question** : bande horizontale bleue sombre, texte blanc en gras.
- **Badge** : pastille « Duel » étoilée en haut à gauche, logo de diffusion en haut à droite.

**Ce qui nous importe (esprit à conserver) :**
- Bleu dominant, luminosité cyan, harmonie « tellement télé » ;
- Profondeur, particules dorées/cyan, étoiles lumineuses ;
- Cadres à bordure lumineuse, coins arrondis, séparation nette ;
- Question en bande horizontale ; réponses séparées ;
- Duel rouge : même charte, ambiance plus sombre et cinématique ;
- Vocabulaire pilule/arrondie, ornements dorés.

## 2. Palette de couleurs (propositions en attente de validation)

| Token | HEX | Usage |
|---|---|---|
| `bleu-nuit` | `#0A1030` | Vignettage, fond le plus sombre |
| `bleu-profond` | `#141D50` | Fond de gradient principal |
| `bleu-royal` | `#2E57F6` | Bleu dominant (fond, panneaux) |
| `bleu-ambre` | `#1B3DD1` | Bleu foncé secondaire, glass |
| `cyan` | `#35E0F8` | Bordure/lumineux des cadres |
| `cyan-clair` | `#7FF0FF` | Highlights cyan, accents fins |
| `or` | `#FFC42E` | Étoiles, ornement, sélection de proposition |
| `blanc-lumière` | `#F4F8FF` | Texte principal |
| `gris-bleu` | `#9FB4D9` | Texte secondaire, labels |
| `vert-état` | `#3CE97B` | Réponse correcte / état vert (2 vies) |
| `orange-provisoire` | `#FF9F1C` | Sélection orange, révélée orange, état orange (1 vie) |
| `rouge-état` | `#E63646` | Réponse incorrecte / état rouge critique (duel rouge) |
| `rouge-duel-fond` | `#2B0014` | Fond très sombre pour le duel |
| `rouge-duel` | `#D92B3D` | Ambiance rouge du duel / survie |

Les couleurs des états (vert/orange/rouge) doivent être **identiques** dans les trois interfaces
et dans les deux habillages (sauf variante du duel, où `rouge-duel` gouverne toute l'ambiance).

## 3. Typographies (deux au maximum)

| Police | Usage |
|---|---|
| **Oswald** (700–800, appauvri en 700) | Questions, titres, noms des candidats |
| **Montserrat** (400–700) | Réponses, sous-titres, interfaces admin/participant |

- Les maquettes utilisent des polices stylistiques approximatives ; la mise en œuvre réelle
  chargera ces polices depuis Google Fonts.
- Toute autre police est exclue. Pas de troisième faute pour décorer.

## 4. Formes, bordures, proportions et matériaux

- **Pilules et boutons** : coins très arrondis (~14–18px), effet légèrement lumineux (bordure
  plus claire + ombre intérieure).
- **Cadres vidéo** : coins arrondis (16–20px), bordure 3–4px en cyan + halo externe doux.
- **Bande de question** : translucide (bleu-nuit à ~70%), bordure cyan fine, coins arrondis de
  12px, texte en gras en Oswald.
- **Cartes noms** (duel) : coins arrondis, photo au-dessus, badge pilule coloré en dessous.
- **Profondeur** : ombres portées et halos cyan/or, sans créer de vide artificiel.
- **Vitesse** : pas de bordures trop épaisses ni de dégradés lourds qui écraseraient le contenu.

## 5. Arrière-plans et effets lumineux

- Dégradé radial `bleu-nuit` → `bleu-profond` → `bleu-royal`, avec vignettage subtil ;
- Étoiles (blanches + or) et particules lumineuses (cyan/blanc) scintillantes ;
- Reflets cyan lumineux (halos flous) derrière les zones de question ;
- Pour le **duel et la survie** : pareil, mais en dégradé `rouge-duel-fond` → `rouge-duel`,
  avec étincelles roses/blanches et vignettage rouge.

## 6. Cadres vidéo

- Format 16:9, cadres de largeurs adaptées :
  - vue admin (diffuser) : présentateur > candidats (présentateur légèrement plus grand) ;
  - vue générale : présentation 1+4 (présentateur + 4 candidats), emplacements conservés même
    si une caméra est désactivée ;
- Bordure cyan lumineuse + halo, coins arrondis ;
- Sous chaque cadres : pastille nom + pastille vies arrondies accessibles.

## 7. Question et réponses (mécanique)

Bande horizontale de question (en haut ou en bas — voir §11), sous elle la rangée de
deux boutons-réponses :

- **Initial** : 2 pilules neutres (bleu-ambre, texte blanc, bordure claire), texte blanc
  en Oswald, une des deux masquée → affiche `?`.
- **Sélection orange provisoire** (étape 1) : la réponse choisie passe `#FF9F1C` (or/orange) avec
  texte blanc ; si masquée, elle reste `?` ; l'autre réponse reste neutre.
- **Révélation** (étape 2) : commande distincte de l'étape 1 ; le `?` révèle le vrai texte
  sans changer de couleur (reste orange).
- **Verdict définitif** (étape 3) : vert (correct) ou rouge (incorrect), avec un effet de
  révélation (étincelle / flash lumineux).

## 8. Sept propositions

- Format **colonne verticale** de propositions (7 pilules) à gauche, grande zone vidéo à droite
  (présentateur/candidat) ;
- Chaque proposition est une pilule arrondie, texte Montserrat en gras, bordure claire ;
- Proposition déjà validée → devient **vert** légèrement estompé + coche + définitive, ne
  peut plus être sélectionnée ;
- Proposition sélectionnée (provisoire) → orange (sélection orange) ;
- Intrus révélée (après 6 réponses correctes) → rouge ;
- Si candidat choisit intrus → épreuve s'arrête (effet de tension).

## 9. Vies et états

- **Symbolème** : cœur (cœur remplissage coloré, `vert-état` 2 vies · `orange-provisoire`
  1 vie · `rouge-état` 0 vie). À valider (autre : étoile, flamme, bolt).
- Ancré sur chaque cadre vidéo (sous les noms).
- Agrandis pour le participant (plus lisibles) ; décrochés/transformés en pastille pour
  l'administrateur (compacité).
- L'état rouge (0 vie) déclenche l'épreuve de survie (design de prochaine phase).

## 10. Deux habillages

### Habillage classique (couleur)
- Palette et typographie ci-dessus (bleu dominant, cyan, or).

### Habillage rouge (duel / survie)
- Même structure et même squelette, mais :
  - Fond `rouge-duel-fond` → `rouge-duel` (avec halo rouge/orange) ;
  - Cadres à bordure or/coral (`#FFB26A`) + halo rouge ;
  - Étoiles/explosions en or + rouge (étincelles blanches scintillantes) ;
  - Questions/réponses : pilules en rose/corail, texte blanc ;
  - Badge « Duel » étoilé en haut à gauche (or), logo/diffusion en haut à droite.

## 11. Animations et transitions

- **Transitions** : fade rapide (300–400ms) entre scènes, micro-étiquettes d'apparition
  des éléments ;
- **Pulse de sélection** : micro-impulsion de glow légèrement cyan sur le bouton sélectionné ;
- **Révélation finale** : flash lumineux radial + étincelle pour chaque réponse révélée ;
- **Billet de vies** : animation légère (pulsing) lors de la perte d'une vie ;
- **Duel rouge** : pulse rouge plus lent et cinématique (4–6 secondes) pour en imposer.

## 12. Cohérence entre les trois interfaces

| Interface | Destinataire | Contenu principal | Densité |
|---|---|---|---|
| **Diffusion** | Spectateurs (OBS) | Cadres + question + réponses + vies + duel | Élevée (spectacle) |
| **Administrateur** | Animateur | Candidats compactes, réponses en 3 étapes, vies, scènes, chronomètres | Compacte (chat Twitch visible) |
| **Participant** | Candidat | Cadres + vies + question + micro/cam | Épurée (peu de commandes) |

- Une charte de composants partagés (titres, bordures, boutons-pilules, badges, bandes de
  question) : même langage entre la diffusion et le participant ; l'admin modeste
  (compacte) mais même langage, pas de rupture.

## 13. Maquettes produites

Les maquettes sont **des propositions, pas des décisions finales**. Elles sont à créer
progressivement, en suivant le circuit : **présentation → validation → consignation**.

Maquettes produites (sous `docs/maquettes/`, toutes 16:9) :
- `01-question-individuelle.jpg` — État initial : présentateur + candidat, deux réponses dont une masquée ;
- `02-selection-orange.jpg` — Étape 1 : réponse provisoire en orange (masquée, toujours `?`) ;
- `03-revelation.jpg` — Étape 2 : réponse révélée, toujours orange ;
- `04-verdict.jpg` — Étape 3 : réponse correcte vertée (verdict définitif) ;
- `05-sept-propositions.jpg` — Épreuve 2 : 7 propositions (2 validées vertes, 1 provisoire orange, 4 neutres) + grande zone vidéo ;
- `06-duel.jpg` — Duel rouge : badge or, minuterie, 2 finalistes, bande orange radiée ;
- `07-vue-generale.jpg` — Vue générale : présentateur + 4 candidats, vies (cœur vert/orange) ;
- `08-admin.jpg` — Interface administrateur compacte : candidats compacts, trois étapes, scènes, minuterie ;
- `09-participant.jpg` — Interface participant épurée : présentateur + 4 candidats, vies (2 cœurs), micro/cam.

> Les maquettes sont **des propositions** : elles ne sont pas définitives avant validation de l'utilisateur.

## 14. Choix à valider avant d'être considérés comme définitifs

1. Palette (bleu royal + cyan dominant ; or et ornements ; nuances des états) ;
2. Typographies (Oswald + Montserrat) ;
3. Formes et matériaux (pilules/cadres arrondis, cadres cyan lumineux) ;
4. Symbolème des vies (cœur proposé — alternative : étoile, flamme, bolt) ;
5. Layout administrateur (présentateur gauche + 4 candidats à droite en grille 2×2 ?) ;
6. Ordre des habillages dans l'émission (que forment les questions individuelles et les duels ?) ;
7. L'emplacement de la bande de question (en haut vs en bas).
