---
name: visual-identity
description: Identité graphique, interfaces et maquettes du jeu (diffusion, administrateur, participant). À utiliser pour toute conception ou modification d'un élément visuel.
when_to_use: Première mission (conception), toute évolution d'une interface, d'un élément de l'habillage, ou d'une maquette ; toute mise en cohérence entre les trois interfaces.
---

# Objectif

Produire et maintenir une **direction artistique originale**, fidèle à l'esprit des références
(bleu dominant, couleurs d'état, profondeur, cadres lumineux), cohérente entre les trois
interfaces et préservant les mécanismes visuels du jeu (trois étapes de réponse, sept
propositions, états des vies, duel au rouge).

# Documents à consulter

- `AGENTS.md` (méthodes et règles permanentes) ;
- `docs/00-brief-projet.md` (règles et mécanismes définis dans le brief initial) ;
- `docs/identite-graphique.md` (la charte — à créer et maintenir après validation) ;
- Les trois captures d'écran de référence (non jointes au début de la mission).

# Méthode de travail

1. **Lire** les références (captures) et les éléments définis dans le brief avant de dessiner.
2. **Proposer une direction artistique**, dans cet ordre, en présentant les choix à l'utilisateur
   avant de les rendre définitifs :
   1. palette de couleurs (codes HEX) — bleu dominant + nuances, cyan et bordures lumineuses,
      vert/orange/rouge/jaune pour les états ;
   2. typographie (deux polices maximum) ;
   3. formes, bordures, proportions et matériaux ;
   4. arrière-plans et effets lumineux (profondeur, étoiles, particules) ;
   5. cadres vidéo (bordures lumineuses, séparation, proportions, lisibilité) ;
   6. design des questions et des réponses (bande horizontale, séparation, états, hiérarchie) ;
   7. design des sept propositions (colonne lisible, grande zone vidéo, progression des
      propositions validées) ;
   8. les états visuels des réponses : masquée · sélectionnée orange · révélée toujours orange ·
      verdict vert ou rouge — **trois états distincts, jamais fusionnés** ;
   9. design des vies et de leurs états (vert 2 · orange 1 · rouge critique) ;
   10. habillage classique (bleu) et habillage rouge (duel / survie) — même charte, ambiance
       rouge plus intense et cinématique ;
   11. principes d'animation et de transition ;
   12. cohérence entre les trois interfaces : diffusion · administrateur · participant.
3. **Présenter et faire valider** : chaque choix significatif (palette, typographie, formes)
   est soumis à l'utilisateur avant d'être considéré définitif.
4. **Produire les maquettes maquettées** (images, 16:9), au minimum :
   - question individuelle + présentateur + un candidat ;
   - les deux réponses dont une masquée (point d'interrogation) ;
   - les trois étapes : sélection provisoire · révélation · verdict ;
   - l'épreuve des sept propositions ;
   - le duel au rouge (thème dramatique) ;
   - une vue générale avec plusieurs candidats.
5. **Consigner** la charte et les maquettes dans `docs/identite-graphique.md` et noter
   l'évolution dans la maintenance du projet.
6. Ne jamais donner d'apparence définitive aux maquettes avant décision de l'utilisateur :
   ce sont des propositions.

# Règles

- Les trois états de réponse (sélection orange provisoire / révélée toujours orange / verdict
  vert/rouge) sont **distincts** et doivent être visuellement différenciés ; ne jamais fusionner
  ou simplifier en une simple sélection suivie d'un verdict.
- Sept propositions : six correctes + un intrus ; chaque proposition validée disparaît et ne
  peut plus être sélectionnée ; sélection orange provisoire puis validation définitive.
- Cohérence des interfaces : la diffusion affiche l'image spectateurs, l'administrateur pilote
  compact, le participant reste épuré. Ne pas réutiliser le même maillage partout.
- **Ne pas reproduire à l'identique** une émission existante : conserver l'esprit, créer une
  direction originale.
- **Ne pas inventer** les éléments non définis (règles des épreuves, design des vies
  (symbole), enchaînements) — les signaler.
- Les maquettes sont des propositions : aucune ne constitue une décision définitive avant
  validation.

# Vérifications

- Le bleu est-il dominant dans tous les états sauf le thème rouge du duel ?
- Chaque état visuel est-il différencié (masquée / orange sélectionnée / orange révélée /
  vert / rouge) ?
- Les couleurs des états (vert/orange/rouge/jaune) sont-elles identiques entre les trois
  interfaces ?
- La question est-elle toujours dans une bande horizontale lisible, avec des réponses clairement
  séparées ?
- La maquette a-t-elle été produite en 16:9 ?
- La révision présentée a-t-elle été explicitement soumise à validation ?

# Erreurs et oublis à éviter

- Décrire la palette sans maquette rendue ;
- Reproduire une émission existante au lieu d'en conserver l'esprit ;
- Masquer les états provisoires (orange, révélation) ou les confondre avec le verdict ;
- Faire le duel au rouge sans conserver la charte générale ;
- Écraser l'administrateur par le maillage de diffusion ;
- Commander des maquettes avant d'avoir présenté les choix à l'utilisateur.

# Conditions de fin

- Les références ont été lues et analysées ; les choix proposés sont présentés pour validation ;
- Les maquettes demandées sont produites et présentées ;
- La charte est consignée dans `docs/identite-graphique.md` (quand validée) ;
- Toute évolution est documentée ;
- Le statut « non définitif » des propositions est clair pour l'utilisateur.
