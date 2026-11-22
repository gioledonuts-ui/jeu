# Prompts de travail — conventions

> Les prompts sont la troisième couche : ils disent à l'IA 3 **ce qu'il faut faire maintenant**,
> pas ce qu'il doit faire en général. Les règles et méthodes viennent des documents et des
> Skills ; le prompt ne les répète pas — il les lit.

## Format d'un prompt

1. **Rôle** — l'IA 3, dans son rôle AGENTS.md ;
2. **Documents à relire en premier** — chemins dans `docs/` + AGENTS.md, dans cet ordre précis ;
3. **Skills à consulter** — identifiants dans `skills/` ;
4. **Décisions à respecter** — identifiants dans `docs/decisions.md` ;
5. **Contexte et Tâche** — ce qui est demandé, pas les règles ;
6. **Contraintes opérationnelles** — pas de PR sur GitHub ; déploiement sur Vercel à chaque
   session ;
7. **Conditions de fin** — ce qui doit être vrai pour déclarer la tâche terminée.

Une mission doit être auto-suffisante : un développeur démarrant une conversation neuve doit pouvoir
l'exécuter sans interprétation. Tous les éléments de contexte manquent si un prompt est livré
avec ce format.
