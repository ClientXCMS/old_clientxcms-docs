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
## Créer les dossiers theme
Il faut donc créer 2 dossiers si vous avez bien suivi :
- /public/Themes/FakeTheme
- /Themes/FakeTheme

```bash
mkdir /var/www/clientxcms/public/Themes/Fake
mkdir /var/www/clientxcms/Themes/Fake
```

## Classe du Thème
Pour configurer les informations du thème, il faut créer une classe PHP dans le dossier `/Themes/Fake` et l'appeler `FakeTheme.php`
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
    'class' => FakeTheme::class,
    //'boostrapv5' => true, // Recommandé si vous adaptez un thème boostrap v5
];
```

### Détection du thème
Après ceci votre thème sera détecté par le système et sera affiché dans la page `Espace Administration` > `Themes`
![img](https://media.discordapp.net/attachments/475073153509490689/957781759263658045/unknown.png)

Il vous suffira de le sélectionner et de sauvegarder.


#### Afficher le menu de navigation
##### Système classique
Les menus sont constitués d'items (element) que chaque module rajoute et le système récupère chaque item et les affiches à la suite.

Exemple, cette barre de navigation, est définie comme un menu de ClientXCMS

![img](https://media.discordapp.net/attachments/926274245225504779/1001917936518303805/unknown.png)

##### Personnalisable
mais également ces widgets sont des menus, car chaque widget est représenté séparément dans le code
Pour modifier ce widget suivez ceci :
1. Créer unn fichier `/Themes/Fake/navigations/home.twig`
2. Insérez ce contenu

```
   {% for item in items %}
    <div class="col-xl-{{ item.col ? item.col : 3 }} col-sm-12 col-lg-{{ item.col ? item.col : 3 * 2 }} col-12">
        <div class="card card-statistic-1">
            <div class="card-icon bg-{{ item.color }}">
                <i class="{{ item.icon }}"></i>
            </div>
            <div class="card-wrap">
                <div class="card-header">
                    <h4>{{ item.value }}</h4>
                </div>
                <div class="card-body">
                    {{ trans(item.name) }}
                </div>
            </div>
        </div>
    </div>
{% endfor %}
```
3. Ici, Pour les 4 widgets il va faire une boucle et avec les variables changer la couleur et les valeurs que ClientXCMS donne

### Fichier
### Fonction et filtres
## Fonctions
les fonctions s'utile sous format : "{{ path('home') }}'" dans un fichier twig

### Quelques fonctions de base
Functions       | Paramètres              | Description |
|------------        | ------------             |------------ |
| path           | routeName:string, params:array, absolue:false | Génére une URL |
| is_subpath | routeName:string, params:array | Vérifie si l'url courant contiens l'url de la route demandé |
| is_path | routeName:string, params:array | Vérifie si l'url courant est égale l'url de la route demandé |
| current_route |  | Récupère la route courante (en object) |
| current_user |  | Récupère l'utilisateur courant (en object) |
| to_recurring | recurring:string | Renvoie le recurring (en object) |
| basket_count |  | Renvoie le nbr d'élément dans le panier |
| basket_row | product:Product | Renvoie la ligne d'élément dans le panier |
| basket_data | product:Product | Renvoie la ligne d'élément dans le panier |
### Récupérer l'utilisateur connecté

Pour récupérer simplement l'utilisateur connecté il suffit de faire dans la vue :

```twig
{{ current_user().firstname }}
```

Pour vérifier si l'utilisateur est connecté :

```
{% if current_user() %}
Bonjour  {{ current_user().name }} ! 
{% else %}
L'utilisateur n'est pas conecté
{% endif %}
```
#### Coté admin
Pour récupérer l'admin connecté il suffit de faire
```twig
{{ current_admin().firstname }}
```
Dans notre cas, il va afficher le nom de l'utilisateur courant, si l'utilisateur n'est pas connecté il affichera un texte.
### Page 404
Vous pouvez personnaliser la page 404 de votre thème en créant un fichier `/Themes/Fake/e404.twig` avec le contenu que vous voulez.
Variables :
- **%uri%** : URL non trouvé