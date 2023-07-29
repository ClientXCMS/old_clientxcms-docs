---
sidebar_position: 1
---
# Infrastructure

Vous devez surement la connaitre mais voici l'infrastructure d'un CLIENTXCMS.
Pour créer un module vous allez surtout modifier le dossier /src, /Templates et /Lang

```bash
/var/www/clientxcms
│ # Dossier où sont stockés des configurations du container
├── config
├──── config.php
├──── main.php
│ # Dossier utilisé pour les tâches CRON
├── Cron
├──── index.php
│ # Dossier où sont stockés les traductions
├── Lang
├──── fr_FR
├──── en_GB
├──── es_ES
│ # Dossier où sont stockés les modèles d'emails
├── Emails
├──── default.html.twig
├──── default.txt
├──── custom.html.twig
│ # Dossier où sont stockées les vues par défaut de ClientXCMS
├── Templates
├──── Account
├──── Announcements
├──── Auth
├──── ...
| # Dossier où sont stockés le code source de CLIENTXCMS
├── src
├──── Account
├──── Admin
├──── Basket
├──── Shop
├──── Exemple # Nom de votre module 
├──── ...
|
| # Dossier où seront stockées les vues du thème
├── Themes
├─── VotreTheme
├───── Views
├─────── Account
├─────── Announcements
├─────── Auth
├─────── ...
|
| # Dossier où seront stockées les assets du thème
├── public
├─── Themes
├──── VotreTheme
├────── assets
├────── ...
|
|
| ## Autres fichiers
├── server.php
└── phpunit.xml
└── phpcs.xml
└── ...
```

:info:
Dans cette documentation nous allons utilisé comme nom de module "Example"

## Infrastructure d'un module basique
```bash
/var/www/clientxcms/src/Example
├──── config.php
├──── ExampleModule.php
├──── ....
├──── /db/migrations
├──── /db/seeds
├──── /Views
├──── /Actions/ExampleAction.php
├──── /Database/ExampleTable.php
├──── /Schedules/ExampleSchedule.php
├──── ....

```

## Initialisation du module

1.  Créer un dossier `/src/Example`
2.  Créer une classe PHP principale du module  `/src/Example/ExampleModule.php`

   ```php
<?php

namespace App\Example;

use ClientX\Module;
use Psr\Container\ContainerInterface;


class ExampleModule extends Module {

	const MIGRATIONS = __DIR__ . '/db/migrations';
	const SEEDS = __DIR__ . '/db/seeds'; 
	const DEFINITIONS = __DIR__ . '/config.php'; 
	const AUTHOR = "Votre nom d'utilisateur";
	const NAME = "Nom du module"; 
	const TAG = "v.1";
	const UUID = "example";
	public static function onEnable(ContainerInterface $container){ } 
	
	public static function onDisable(ContainerInterface $container){ }
	 
	public static function middlewares():array { }
}
```

Détails : 
** MIGRATIONS** (facultatif) : Permet de gérer des migrations de la base de données plus d'informations sur la page dédiée
** MIGRATIONS** (facultatif) : Permet de gérer des seeders de la base de données plus d'informations sur la page dédiée
** DEFINITIONS** (obligatoire) : Permet de gérer les définitions du container
** AUTHOR** (factutatif) : Permet de definir un auteur du module
** NAME** (factutatif) : Permet de definir un nom du module
** TAG** (factutatif) : Permet de definir un auteur du module
** UUID** (OBLIGATOIRE) : Permet de d'identifier un module (il doit être unique)
3. Activer le module depuis la page "modules" section "modules personnalisés"