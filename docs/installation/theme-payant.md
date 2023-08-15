---
sidebar_position: 10
---

# Installer un thème payant

**CLIENTXCMS** Propose des thèmes payant qui crée un site vitrine en même temps que votre espace client. Après avoir acheté un thème, suivez cette page pour l'installer en quelques minutes.

## Téléchargement de l'archive

Vous pouvez télécharger le thème depuis l'espace administrateur


## Migrations
![img](https://media.discordapp.net/attachments/972877473643634688/1040715327782264983/unknown.png)

Le thème rajoute des tables de configurations spécifiques, Cette erreur apparait sur votre page en environnement de production, il faut donc migrer la base de données en changeant l'environnement en développement depuis votre fichier `.env` disponible à la racine.
Pour modifier l'environnement [cliquez ici](../developpers/modules/environnement.md)
:::info Informations
Si ce fichier n'est pas affiché sur filezilla ou WinSCP, Il faudra cliquer sur "Afficher les fichiers cachés" Il devrait vous l'afficher pour pouvoir l'éditer.
:::
Après avoir rechargé votre page, plus d'erreurs seront affichées et vous pourrez remettre votre environnement en production.

## Configuration
Plus d'informations [ici](configurer-mon-theme.md)