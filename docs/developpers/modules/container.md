---
sidebar_position: 3
---
# Container
L'interface `ContainerInterface` est une interface standard en PHP qui définit les méthodes pour gérer les dépendances et la résolution de classes dans un conteneur d'injection de dépendances. CLIENTXCMS utilise une CLIENTXCMS utilise [PHP-DI](https://php-di.org) comme injecteur de dépendances gérer les dépendances et injecter des instances de classes dans les actions, les services, les modules, etc.

## Méthodes

### `get(string $id): mixed`

Cette méthode permet de récupérer une instance de classe en utilisant son ID. Le paramètre `$id` est l'identifiant de la classe à récupérer. Si la classe est présente dans le conteneur, l'instance correspondante est renvoyée.

### `has(string $id): bool`

Cette méthode permet de vérifier si une instance de classe est présente dans le conteneur. Le paramètre `$id` est l'identifiant de la classe à vérifier. Si la classe est trouvée, la méthode renvoie `true`, sinon elle renvoie `false`.
## Exemple d'utilisation de l'action `ExampleAction`

```php
<?php
// src/Example/Actions/ExampleAction.php
namespace App\Example\Actions\ExampleAction;

use Psr\Container\ContainerInterface;
use ClientX\Actions\Action;

class ExampleAction extends Action
{
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function __invoke()
    {
        // Utilisation du conteneur pour récupérer une instance de classe

        // Exemple : récupérer une instance de la classe DatabaseUserAuth
        $authService = $this->container->get(\App\Auth\DatabaseUserAuth::class);
        // Utilisation de l'instance de la classe DatabaseUserAuth

        // Exemple : récupérer une instance de la classe RendererInterface
        $renderer = $this->container->get(\ClientX\Renderer\RendererInterface::class);
        // Utilisation de l'instance de la classe RendererInterface
    }
}
```

Dans cet exemple, la classe `ExampleAction` injecte une instance de l'interface `ContainerInterface` pour accéder au conteneur d'injection de dépendances. En utilisant la méthode `get()`, l'action peut récupérer des instances de classes spécifiées par leur ID et les utiliser dans son code. Cela permet une gestion flexible des dépendances et permet d'accéder facilement aux services et aux instances de classes nécessaires à l'exécution de l'action.