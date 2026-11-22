# Cahier des charges initial — Le jeu

> Extrait fidèle du cahier des charges fourni avec la première mission. Permet de distinguer
> clairement ce qui est **défini** et ce qui reste à **approfondir**.

## 1. Écosystème

- Twitch : diffusion de l'émission ;
- Discord : communauté, recrutement, organisation des candidats ;
- QG : réseau social de l'animateur (`qg2gionny`) ;
- Application du jeu : participation effective.

## 2. Connexions

- **Avec un compte QG** : récupération du pseudo et de la photo de profil ;
- **En invité** : saisie d'un pseudo et d'un code d'invitation, sans compte persistant.

## 3. Les trois interfaces

- **Diffusion** : affichée dans OBS ou dans une fenêtre de navigateur, montre l'animateur et les
  candidats, questions, réponses, vies, chronomètres, animations ; c'est l'image des spectateurs.
- **Administrateur** : compacte (chat Twitch visible), gestion des candidats, questions,
  réponses, vies, éliminations, chronomètres et scènes ; doit permettre de piloter sans gérer
  la réalisation.
- **Participant** : simple et épurée, affiche l'animateur, les autres candidats et les
  informations utiles ; permet de couper/réactiver micro et caméra ; ne doit pas être encombrée.

## 4. Règles du jeu (principes)

- Quatre candidats, deux vies chacun ; rendu d'un symbole graphique (à définir) ;
- État vert : 2 vies · orange : 1 vie · rouge : état critique nécessitant une épreuve de survie ;
- Une erreur fait perdre une vie ;
- Épreuves :
  1. **Question individuelle à deux réponses** (voir §5 ci-dessous) ;
  2. **Collective sur sept propositions** (voir §6 ci-dessous) ;
  3. **Survie** au rouge (à approfondir) ;
  4. **Finale** entre les deux derniers candidats, au chronomètre.

> Règles détaillées et enchaînements : **à approfondir**. Ne pas compléter par supposition.

## 5. Première épreuve — fonctionnement précis des réponses

Chaque candidat reçoit une question individuelle avec **deux réponses** :

- Une réponse visible · une réponse masquée (point d'interrogation).

Le candidat choisit oralement l'une des deux. L'animateur effectue ensuite trois actions
distinctes depuis l'interface administrateur :

- **Étape 1 — Sélection provisoire** : clic sur la réponse choisie par le candidat. La réponse
  sélectionnée passe **orange**. Si le candidat a choisi la réponse masquée, elle reste un
  point d'interrogation : contenu non dévoilé.
- **Étape 2 — Révélation** : commande de commande distincte qui dévoile la réponse masquée. Le
  point d'interrogation disparaît, le contenu réel apparaît, la réponse **reste orange** et la
  sélection reste provisoire.
- **Étape 3 — Verdict définitif** : confirmation du résultat. La réponse passe au **vert** (bonne)
  ou au **rouge** (mauvaise). Le résultat est désormais définitif.

> Les trois états distincts à respecter : (1) sélection orange provisoire · (2) révélée mais
> toujours orange · (3) verdict final vert ou rouge. Ne jamais simplifier en une simple
> sélection suivie d'un résultat.

## 6. Seconde épreuve — sept propositions

- Une question commune ; **sept propositions** : six correctes + **une intrus** (incorrecte) ;
- Les candidats répondent à tour de rôle, en donnant une proposition qu'ils estiment correcte ;
  **ils ne doivent pas désigner directement l'intrus** ;
- Chaque proposition validée disparaît et ne peut plus être sélectionnée ;
- Si un candidat sélectionne l'intrus : l'épreuve s'arrête immédiatement ;
- Si les six bonnes propositions sont trouvées : la dernière proposition restante est révélée
  comme intrus ;
- L'animateur a aussi un système de **sélection provisoire orange puis validation définitive**,
  comme dans la première épreuve.

## 7. Réalisation automatique (principes)

- Caméra de l'animateur et caméras des candidats ;
- Mise en avant de la personne qui parle ;
- Détection réelle de la parole (pas simplement du bruit) ;
- Verrouillage manuel possible d'une caméra ;
- Transitions discrètes ;
- Emplacements conservés même caméra désactivée ;
- Gestion des conversations simultanées ;
- Adaptation au vertical et à l'horizontal ;
- Modes de réalisation définis et centralisés (ne pas multiplier les dispositions).

## 8. Identité visuelle (première mission)

- Référence : trois captures d'écran d'une émission télévisée **(non jointes au moment de ce
  document — voir `skills/visual-identity.md` et la note à l'utilisateur)** ;
- Principes connus : palette bleue dominante + nuances de bleu, cyan et bordures lumineuses,
  couleurs des états (vert/orange/rouge/jaune), profondeur et particules lumineuses, cadres à
  bordures lumineuses, bande horizontale de question, propositions en colonne avec grande zone
  vidéo, habillage classique (blue) et habillage rouge pour le duel / la survie.
