---
sidebar_position: 4
---

# Maintenance
**ClientXCMS** introduit un système permettant de mettre l'espace client en maintenance : bloquant l'accès aux utilisateurs non autorisés.

**Information** : Les services fonctionneront toujours normalement, les utilisateurs ne pourront plus se connecter à leur compte client
## Activation
:::info
Si la maintenance ne s'active pas même après activation, vérifiez les dates de début et de fin dans la configuration quelles soient validées.
:::

Pour activer la maintenance, cochez la checkbox 'Enable maintenance', les détails de la maintenance apparaitront. Puis, sauvegardez vos modifications en appuyant sur "Sauvegarder"
## Configuration
**Message**(texte) : Message qui sera affiché aux utilisateurs non autorisés. Valeur par défaut : System in maintenance.

**Début**(date/heure) : Date de début de la maintenance, Après cette date tous les utilisateurs seront filtrés.

**Fin**(date/heure) : Date de fin de la maintenance, Après cette date tous les utilisateurs pourront réutiliser l'espace client.

**URL**(URL) : URL permettant de passer à travers la maintenance et utiliser l'espace client classiquement
L'URL doit rester secrète aux yeux de vos clients. Il est fortement recommandé de modifier la valeur.
Valeur par default : /weareinmantenance
![img](https://media.discordapp.net/attachments/475073153509490689/957092998091526184/unknown.png)
## Désactivation
Pour désactiver le mode maintenance, décochez la checkbox 'Enable maintenance', les détails de la maintenance disparaitront. Puis, sauvegardez vos modifications en appuyant sur "Sauvegarder".
## Modifier la page de maintenance
Pour modifier la page de maintenance selon le thème, rendez-vous ici : `/Themes/NomThemes/403.twig`
Si ce fichier n'existe pas il faut modifier le fichier suivant : `/Templates/maintenance.twig`