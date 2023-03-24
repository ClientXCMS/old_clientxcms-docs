---
sidebar_position: 4
--- 
# Réinstaller CLIENTXCMS

Pour réinstaller CLIENTXCMS, il faut sauvegarder **la base de données ainsi que le fichier d'environnement `.env` pour les remettre sur votre prochain hébergement**.
Les modules et thèmes peuvent être réinstallé en un clic et peuvent être ignoré appart si vous avez des modifications de faites sur votre CLIENTXCMS.
Les configurations des produits, services, factures etc ne seront pas perdues, ils sont tous dans la base de données.
## Exporter la base de données
### Depuis les lignes de commandes
Connectez-vous sur votre serveur en SSH puis executez cette commande : 

`mysqldump -u username -p password databasename > exporteddb.sql`

Remplacez "nom d'utilisateur" par votre nom d'utilisateur, "mot de passe" par votre mot de passe et

"databasename" avec le nom de votre base de données. Vous pouvez également remplacer "exporteddb.sql" par un nom plus descriptif.
Et terminer en récupérant le fichier via SFTP dans le dossier où vous êtes.

### Depuis PHPMyAdmin
- Connectez-vous sur votre PHPMyAdmin avec un utilisateur ayant accès à la base de données
- Sélectionnez votre base de données à exporter
- Cliquez sur la section "export"
- Sélectionner le format SQL
- Valider en cliquant sur "Export"

## Export du fichier d'environnement
Récupérer le fichier `.env` depuis votre hébergement initial et garder le bien précisément, car il contient la clé de chiffrement des données sensibles, et sans cette clés impossible de réutiliser les données de la base exportée.


## Installation sur votre nouvel hébergement
Pour ceci, suivez [l'installation traditional](../installation/Installation-du-Cms.md) et remettez votre fichier `.env` à la racine de l'hébergement.
:::success
Vous devriez également créer un fichier à la racine en l'appelant `installed` en le laissant vide cela permettra à CLIENTXCMS de ne pas proposer d'installer à nouveau. 
:::
## Importer la base de données
### Depuis les lignes de commandes
Connectez-vous sur votre serveur en SSH puis executez cette commande :

`mysql -u username -p password databasename > exporteddb.sql`

Remplacez "nom d'utilisateur" par votre nom d'utilisateur, "mot de passe" par votre mot de passe et

"databasename" avec le nom de votre base de données. Vous pouvez également remplacer "exporteddb.sql" par un nom plus descriptif.
Et terminer en récupérant le fichier via SFTP dans le dossier où vous êtes.

### Depuis PHPMyAdmin
- Connectez-vous sur votre PHPMyAdmin avec un utilisateur ayant accès à la nouvelle base de données
- Sélectionnez votre base de données qui va accueillir les données
- Cliquez sur la section "import"
- Sélectionner le fichier .zip
- Valider en cliquant sur "Import"

## Réactivation des modules
Il vous suffit de télécharger à nouveau les modules que vous voulez, les configurations de produits et paramètres sont récupérer depuis la base de données donc aucune perte.

Votre CLIENTXCMS est réinstallé sur un autre hébergement.