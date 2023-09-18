# Migration
Vous pouvez migrer vos utilisateurs & produits depuis WHMCS facilement.

## Installation

Le module **Migrator** est disponible __gratuitement__, et activable depuis la page "Modules" de votre espace d'administration de votre site ClientXCMS.
![img](https://media.discordapp.net/attachments/926274245225504779/1153428686968733827/image.png?width=1439&height=101)
Pour pouvoir relier CLIENTXCMS à votre ancienne base de données, rendez-vous dans le fichier .env de votre hébergement et indiquez les accès base de données WHMCS.

```shell
WHMCS_DATABASE=xxx
WHMCS_USERNAME=xxx
WHMCS_PASSWORD=xxx
WHMCS_HOSTNAME=xxx
WHMCS_KEY=xxx
WHMCS_PORT=3306
WHMCS_CHARSET=utf8
```
:::info WHMCS_KEY
Cette clé permet de décoder les informations encodées sur votre WHMCS elle est disponible dans la variable $cc_encryption_hash dans le fichier configuration.php
:::

## Importation Supportées
- Utilisateurs
- Produit
- Groupes boutique
- Ticket
- Département ticket