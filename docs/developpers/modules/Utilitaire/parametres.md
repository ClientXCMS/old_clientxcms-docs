# Paramètres
L'interface `App\Admin\Settings\SettingsInterface` définit un contrat pour ajouter une section de paramètres dans l'administration de votre CLIENTXCMS. Chaque section de paramètres doit implémenter cette interface et fournir les détails nécessaires pour l'affichage et la validation des paramètres.

```php
<?php
namespace App\Admin\Settings;

use ClientX\Renderer\RendererInterface;
use ClientX\Validator;

interface SettingsInterface
{

    public function name():string;

    public function title():string;

    public function icon():string;

    public function render(RendererInterface $renderer);

    public function validate(array $params):Validator;
}
```

## Méthodes de l'interface

### `name(): string`

Cette méthode renvoie le nom unique de la section de paramètres, qui sert d'identifiant. Il doit être unique pour chaque section de paramètres.

Exemple d'utilisation :

```php
public function name(): string
{
    return 'example_settings';
}
```

Dans cet exemple, la méthode `name()` renvoie la valeur `'example_settings'` comme nom unique de la section de paramètres.

### `title(): string`

Cette méthode renvoie le nom affiché de la section de paramètres qui sera affiché dans le menu de l'administration.

Exemple d'utilisation :

```php
public function title(): string
{
    return 'Example module';
}
```

Dans cet exemple, la méthode `title()` renvoie la valeur `'Paramètres d'exemple'` comme nom affiché de la section de paramètres.

### `icon(): string`

Cette méthode renvoie le nom de l'icône Font Awesome qui sera affichée dans le menu de l'administration à côté du nom de la section de paramètres.

Exemple d'utilisation :

```php
public function icon(): string
{
    return 'fas fa-cog';
}
```

Dans cet exemple, la méthode `icon()` renvoie la valeur `'fas fa-cog'` comme nom de l'icône Font Awesome.

### `render(RendererInterface $renderer)`

Cette méthode permet de rendre une vue avec l'interface `RendererInterface` pour afficher les paramètres de la section.

Exemple d'utilisation :

```php
public function render(RendererInterface $renderer)
{
    return $renderer->render('@exemple_admin/settings');
}
```

Dans cet exemple, la méthode `render()` utilise l'instance de `RendererInterface` pour rendre la vue "@exemple_admin/settings" et retourne le résultat du rendu.

### `validate(array $params): Validator`

Cette méthode permet de valider les données des paramètres de la section en utilisant la classe `Validator`. Elle reçoit un tableau `$params` contenant les données des paramètres à valider et retourne une instance de `Validator` contenant les résultats de la validation.

Exemple d'utilisation :

```php
public function validate(array $params): Validator
{
    $validator = new Validator();
    // Ajouter des règles de validation...

    return $validator;
}
```

## Exemple d'implémentation 

```php
namespace App\Example;

use ClientX\RendererInterface;
use ClientX\Validator\Validator;
use App\Admin\Settings\SettingsInterface;

class ExampleSetting implements SettingsInterface
{
    public function name(): string
    {
        return 'example_settings';
    }

    public function title(): string
    {
        return 'Paramètres d\'exemple';
    }

    public function icon(): string
    {
        return 'fas fa-cog';
    }

    public function render(RendererInterface $renderer)
    {
        return $renderer->render('@exemple_admin/settings');
    }

    public function validate(array $params): Validator
    {
        $validator = new Validator();
        // Ajouter des règles de validation...

        return $validator;
    }
}
```


- La méthode `name()` renvoie le nom unique de la section de paramètres (`'example_settings'`).
- La méthode `title()` renvoie le nom affiché de la section de paramètres (`'Paramètres d'exemple'`).
- La méthode `icon()` renvoie le nom de l'icône Font Awesome (`'fas fa-cog'`).
- La méthode `render()` utilise l'instance de `RendererInterface` pour rendre la vue `@exemple_admin/settings`.
- La méthode `validate()` utilise une instance de `Validator` pour valider les données des paramètres.

## Configuration dans le conteneur de dépendances

Pour inclure la classe implémentant l'interface `SettingsInterface` dans les paramètres, vous devez l'injecter dans le conteneur de dépendances en utilisant la clé `'admin.settings'` et la fonction `DI\add(DI\get())`.

Exemple de configuration :

```php
use App\Example\ExampleSetting;

return [
    // Autres définitions...

    'admin.settings' => DI\add(DI\get(ExampleSetting::class)),
];
```

Dans cet exemple, nous configurons le conteneur de dépendances pour inclure la classe `ExampleSetting` implémentant `SettingsInterface` avec la clé `'admin.settings'`.