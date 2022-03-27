---
sidebar_position: 10
---

# Sauvegarde
**ClientXCMS** permet de sauvegarder votre base de données. Vous pouvez gérer vos différentes sauvegardes de votre base de données.

Une intégration avec **ClientXCMS** facile qui offre une gestion des sauvegardes de la base de données pour ne perdre aucunes données.
Une tâche CRON s'exécute toutes les 12 heures (ou manuellement) pour sauvegarder l'entièreté des tables de la base de données.
Pour y accédez : `Espace Administration` : `Sauvegardes`

![img](https://media.discordapp.net/attachments/829844680539111486/957442535767289876/unknown.png?width=1440&height=390)
## Téléchargement d'une sauvegarde
Vous pouvez télécharger une sauvegarde de votre base de données sur votre ordinateur pour la garder en mémoire. Il vous suffit de cliquer sur le bouton bleu dans la colonne "Actions" et il vous fera télécharger le fichier au format **.sql**.

## Suppression d'une sauvegarde
Vous pouvez supprimer une sauvegarde pour des raisons de place ou même parce qu'elle est trop vielle. Pour cela, il vous suffit de cliquer sur le bouton rouge dans la colonne "Actions", une validation vous sera demandé pour vérifier que vous êtes sûr de vouloir supprimer une sauvegarde. Après la confirmation, la sauvegarde sera supprimée du serveur.
## Création manuellement
Vous pouvez créer une sauvegarde de l'instant présent de votre base de données. Il vous suffit de cliquer sur bouton en haut à droite "Créer manuellement". Après ceci la sauvegarde sera visible dans le tableau principal.
## Stockage
Les sauvegardes sont stockées dans le dossier `/Backups` à la racine de votre serveur.
