---
sidebar_position: 1
---

# Créer un thème

ClientXCMS propose par défaut des thèmes gratuits pour tous déjà préconçu. Mais vous pouvez créer votre propre thème ClientXCMS pour votre société.
La création de thème require très peu de connaissance en PHP, il suffit juste d'adapter quelques éléments.
Les vues sont écrites en Twig cela ressemble fortement à de l'HTML avec des conditions, boucles etc pour répondre aux besoins du rendu dynamique, [plus d'informations ici](https://twig.symfony.com/doc/3.x/templates.html).
## Architecture
```bash
/var/www/clientxcms
│
│ # Dossier où sont stockées les vues par défaut de ClientXCMS
├── Templates
├──── Account
├──── Announcements
├──── Auth
├──── ...
|
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

:::info
Dans cette page nous créeront notre thème "FakeTheme". Vous devez juste changer le nom par celui que vous voulez.
:::
### Créer les dossiers
Il faut donc créer 2 dossiers si vous avez bien suivi : 
- /public/Themes/FakeTheme
- /Themes/FakeTheme

```bash
mkdir /var/www/clientxcms/public/Themes/Fake
mkdir /var/www/clientxcms/Themes/Fake
```

### Classe du Thème
Pour configurer les informations du thème, il faut créer une classe PHP dans le dossier `/Themes/Fake` et l'appelé `FakeTheme.php`
```injectablephp
<?php

namespace Themes\Fake;

use ClientX\Theme\ThemeInterface;

class FakeTheme implements ThemeInterface
{

    const DEFINITIONS = __DIR__ . '/config.php';

    public function getName(): string
    {
        return "Fake";
    }

    public function getVersion(): ?string
    {
        return "1.0";
    }

    public function getAuthor(): ?string
    {
        return "MartinDev";
    }
    
    /** @deprecated  */
    public function getScreenshots(): array
    {
        return [];
    }

    /**
    * Lien vers les vues de votre thème
    * @return string|null
     */
    public function getViewsPath(): string
    {
        return __DIR__ . DIRECTORY_SEPARATOR . '/Views';
    }

    /**
    * Lien vers les assets js/css/scss
    * @return string|null
     */
    public function getAssetsPath(): string
    {
        return '/Fake/assets';
    }

    /**
    * Lien vers les plugins js/css/scss
    * @return string|null
     */
    public function getPluginsPath(): ?string
    {
        return '/Fake/vendor';
    }

    /**
    * Lien vers les vues Twig racines de votre thème
    * @return string|null
     */
    public function getTemplatesPath(): string
    {
        return __DIR__;
    }
    
    /**
    * Lien vers les composants js/css/scss
    * @return string|null
     */
    public function getComponentPath(): ?string
    {
        return null;
    }
    /**
     * Valeur disponible : discord - email - twitter
    * @return string[]|null
     */
    public function getContacts(): ?array
    {
        return [
            'discord' => 'clientxcms.com/discord',
            'email' => 'contact@clientxcms.com',
            'twitter' => "@ClientXCMS",
        ];
    }
}
```

### Fichier configuration du thème
Pour relier la classe PHP au système de thème, créer un fichier `config.php` dans le même dossier
avec ce code : 
```injectablephp
<?php

use Themes\Fake\FakeTheme;

return [
    'class' => FakeTheme::class
];
```
### Détection du thème
Après ceci votre thème sera détecté par le système et sera affiché dans la page `Espace Administration` > `Themes`
![img](https://media.discordapp.net/attachments/475073153509490689/957781759263658045/unknown.png)

Il vous suffira de le sélectionner et de sauvegarder.

### Layout
### Layout Auth
### Navigations
### Fichier
### Fonction et filtres
### Récupérer l'utilisateur connecté

### Page 404

Vous pouvez personnaliser la page 404 de votre thème en créant un fichier `/Themes/Fake/e404.twig` avec le contenu que vous voulez.