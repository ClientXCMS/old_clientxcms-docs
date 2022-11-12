---
sidebar_position: 6
---

# Base de données

## Introduction 
Pour stocker les données de vos clients et celles nécessaires au bon fonctionnement du CMS, CLIENTXCMS utilise le système relationnel MySQL. Une base de données est obligatoire (vierge ou non) pour contenir les tables nécessaires au bon fonctionnement du CMS. Le système PDO (PHP Data Objets) est utilisé pour intéragir avec la base. Il faut donc que l'extension MySQL ainsi que PDO soient installés sur votre hébergement WEB.

## Connexion
Les informations de connection à la base sont demandées dans le ```.env```. Ce fichier ne doit pas être versionné par git. Voici un exemple
```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=clientx
DB_USER=root
DB_PASS=root
DB_CHARSET=utf8
```
# Caractères Spéciaux
En cas de caractères spéciaux dans le mot de passe ou nom d'utilisateur pour l'accès à la base de données. Vous pouvez ajouter des doubles quotes `""` à votre chaine de caractères.
## Tester la connection

Pour vérifier que la connexion entre CLIENTXCMS et MySQL est bien opérationnelle, ouvrez une page de CLIENTXCMS :
En cas d'échec, la page vous renvoie le message d'érreur :
`Erreur de connexion à la base de données`.

Pour plus de détails, modifiez dans le fichier ```.env```  la clé `APP_ENV` à `dev`.
:::danger
Attention, les identifiants peuvent apparaitre sur la page. Mais ça peut vous aider à résoudre le problème.
:::

## .env.copy introuvable
Vous pouvez le recréer facilement avec l'exemple disponible [ici](https://clientxcms.com/api/env.copy)
## Migration

Pour gérer les migrations de la base de données (pour le développement ou la mise en production). ClientXCMS utilise [phinx.org](https://phinx.org/). Vous pouvez vous référer à leur documentation pour approfondir son fonctionnement.

Une interface visuelle est disponible sur  `Espace d'administration` > `Base de données` 
### Commandes importantes 
- Migrate <br/>

    Cette commande permet de migrer les migrations manquantes.
    ```
    ./vendor/bin/phinx migrate
    ```

- Create <br/>

    Cette commande est importante en développement, elle permet de créer une migration.
    ```
    ./vendor/bin/phinx create PremièreMigration
    ```

- Seed <br/>

    Cette commande permet de remplir votre base avec des données prédéfinies ou générer dynamiquement via la librairie [faker](https://github.com/fzaninotto/Faker)
    ```
    ./vendor/bin/phinx seed:run
    ```
    ou
    ```
    ./vendor/bin/phinx seed:create PremierSeeding
    ```
