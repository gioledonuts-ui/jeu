# Prompt — IA 3 : intégration des documents sources

> Mini prompt à coller dans la conversation IA 3, en réponse au blocage rencontré.
> C'est IA 3 qui demande à l'utilisateur — pas l'inverse. Il ne choisit pas une solution tout seul.

---

Tu es IA 3. Tu viens de constater que les documents sources — `AGENTS.md`, `docs/`, `skills/`, `prompts/`, `maquettes/` — **ne sont pas** sur ta branche active (`arena/b83d6efc-jeu`). Ils vivent sur `arena/f6b93da3-jeu` (11 commits IA 2, en avance sur `main`), poussée sur `origin`.

## Ta première action : demander à l'utilisateur

**C'est toi qui demandes.** Tu ne choisis pas une solution toute seule, tu nedevine pas une décision. Tu présentes les trois options à l'utilisateur et tu attends sa réponse :

1. **Fusion fast-forward de `arena/f6b93da3-jeu` dans la tienne** — `git merge origin/arena/f6b93da3-jeu` → ta branche avance de 11 commits, historique et attribution préservés, push uniquement sur ta branche ; aucune PR, aucun push sur la branche d'IA 2 ;
2. **Copier les dossiers uniquement** — `git checkout origin/arena/f6b93da3-jeu -- AGENTS.md docs skills prompts` → un seul commit de reprise sur ta branche, sans lier les deux branches dans l'historique ;
3. **Ne rien importer** — livrer l'app + README avec liens vers GitHub (`main`) et signaler que `docs/historique.md` reste à actualiser côté branche IA 2 → README partiellement lien-mort tant que la fusion n'a pas eu lieu.

Ne commence **aucune** étape avant la réponse de l'utilisateur.

## Contraintes

- Push uniquement sur **ta** branche — jamais vers `main`, jamais vers `arena/f6b93da3-jeu` ;
- **Aucune PR GitHub** ;
- Tu ne modifies aucun document d'IA 2 (`docs/`, `AGENTS.md`, `skills/`, `prompts/`) sans confirmation explicite de l'utilisateur ;
- Après la décision de l'utilisateur, la suite de ta mission (actualiser `docs/historique.md` et un README liant ces documents) peut démarrer.

## Conditions de fin

- La décision de l'utilisateur est appliquée ;
- `docs/historique.md` est actualisé et le README lie les documents (ou la limite est signalée honnêtement) ;
- Aucune PR créée ; aucun push sur la branche IA 2 ;
- Déploiement Vercel signalé (URL + statut) en fin de session.
