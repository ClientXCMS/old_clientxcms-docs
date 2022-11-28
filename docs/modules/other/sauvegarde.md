---
sidebar_position: 1
---

# Sauvegarde
**ClientXCMS** permet de sauvegarder votre base de données. Vous pouvez gérer vos différentes sauvegardes de votre base de données.

Une intégration avec **ClientXCMS** facile qui offre une gestion des sauvegardes de la base de données pour ne perdre aucunes données.
Une tâche CRON s'exécute toutes les 12 heures (ou manuellement) pour sauvegarder l'entièreté des tables de la base de données.
Pour y accéder : `Espace Administration` > `Sauvegardes`
## Types de sauvegarde
- Google drive
- Fichier

![img](https://media.discordapp.net/attachments/475073153509490689/1041132720039936010/image.png?width=1440&height=622)
## Téléchargement d'une sauvegarde
Vous pouvez télécharger une sauvegarde de votre base de données sur votre ordinateur pour la garder en mémoire. Il vous suffit de cliquer sur le bouton bleu dans la colonne "Actions" et il vous fera télécharger le fichier au format **.sql**.
## Suppression d'une sauvegarde
Vous pouvez supprimer une sauvegarde pour des raisons de place ou même parce qu'elle est trop vielle. Pour cela, il vous suffit de cliquer sur le bouton rouge dans la colonne "Actions", une validation vous sera demandée pour vérifier que vous êtes sûr de vouloir supprimer une sauvegarde. Après la confirmation, la sauvegarde sera supprimée du serveur.
## Création manuellement
Vous pouvez créer une sauvegarde de l'instant présent de votre base de données. Il vous suffit de cliquer sur bouton en haut à droite "Créer manuellement". Après ceci la sauvegarde sera visible dans le tableau principal.
## Configuration
![img](https://media.discordapp.net/attachments/475073153509490689/1041129970665271317/image.png)
*Nombre maximum de sauvegardes gardées en mémoire* (nombre) : Nombre maximum de sauvegardes gardées en mémoire. Valeur par défaut : 4
*Heures entre deux sauvegardes* (nombre) : Heures entre deux sauvegardes. Valeur par défaut : 12
### Stockage fichier
Les sauvegardes sont stockées dans le dossier `/Backups` à la racine de votre serveur.
:::info
Vérifiez bien les permissions d'écriture de PHP sur ce dossier pour pas provoquer des erreurs de permissions.
:::
### Stockage Google drive
- Créer un projet sur [google console](https://console.cloud.google.com/projectcreate)

![img](https://media.discordapp.net/attachments/475073153509490689/1041110466166014074/image.png)

- Créer un dossier sur votre Google drive
- Récupérer l'identifiant de votre dossier

![img](https://media.discordapp.net/attachments/475073153509490689/1041128320852578495/Capture6.PNG)

- Activez [l'API Drive](https://console.cloud.google.com/apis/library/drive.googleapis.com)
- Créer des [identifiants](https://console.cloud.google.com/apis/credentials) en selectionnant "ID client OAuth" et en type d'application Type d'application "Application Web"
![img](https://media.discordapp.net/attachments/475073153509490689/1041127503521124352/capture4.PNG)
- Définissez les variables d'environnement `GOOGLE_CLIENT_ID`, `GOOGLE_SECRET`, `GOOGLE_FOLDER_ID` 
- Ajouter une URL de redirection vers `https://votredomain.fr/admin/backup/google`
![img](https://media.discordapp.net/attachments/475073153509490689/1041113185027104808/image.png)
- Ajouter [un utilisateur de tests pour pouvoir se connecter](https://console.cloud.google.com/apis/credentials/consent)
![img](https://media.discordapp.net/attachments/475073153509490689/1041115246024196096/Capture2.PNG)
  - Allez dans `Panel Administration` > `Système` > `Paramètres` et connectez-vous avec le lien de connexion. Le processus habituel devrait se dérouler, après ceci il vous affichera ce message de validation : Done!
### Bugs connus
![img](https://media.discordapp.net/attachments/794698865253154826/1046538560381128714/image.png)

Il suffit de mettre à jour vos dépendances PHP via [composer](../../installation/Composer.md)
