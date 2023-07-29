
La classe `Router` de ClientXCMS permet l'enregistrement et la gestion des routes dans CLIENTXCMS. Elle utilise la bibliothèque AltoRouter pour gérer les routes.

## Méthodes de la classe

La classe `Router` dispose des méthodes suivantes :

- `addMatchTypes(string $key, string $value)`: Permet d'ajouter des types de correspondance personnalisés pour les routes.
- `get(string $route, $target, ?string $name = null)`: Enregistre une route de type GET.
- `post(string $route, $target, ?string $name = null)`: Enregistre une route de type POST.
- `put(string $route, $target, ?string $name = null)`: Enregistre une route de type PUT.
- `delete(string $route, $target, ?string $name = null)`: Enregistre une route de type DELETE.
- `head(string $route, $target, ?string $name = null)`: Enregistre une route de type HEAD.
- `any(string $route, $target, ?string $name = null)`: Enregistre une route pour tous les types de requêtes (GET, POST, PUT, DELETE).
- `match(ServerRequestInterface $request): ?Route`: Correspond à une URL avec une route enregistrée et renvoie un objet `Route` si la correspondance est trouvée, sinon renvoie `null`.
- `generateURI(?string $name = null, array $params = [], array $queryParams = []): ?string`: Génère l'URL correspondant au nom de la route et aux paramètres fournis.
- `generateURIAbsolute(?string $name = null, array $params = [], array $queryParams = []): string`: Génère l'URL absolue (complète) correspondant au nom de la route et aux paramètres fournis.
- `crud(string $prefixPath, $callable, string $prefixName, array $exclude = [], $i = "i")`: Enregistre les routes pour les opérations CRUD (Create, Read, Update, Delete).
- `group(string $prefixPath, string $routePrefix)`: Crée un groupe de routes avec un préfixe commun.

## Exemple d'utilisation dans une classe Action

Voici un exemple d'utilisation de la classe `Router` dans une classe d'action fictive qui utilise le router pour effectuer une redirection vers une URL :

```php
namespace App\Example\Actions
use ClientX\Router;
use ClientX\Actions\Action;
use ClientX\Response\RedirectResponse;

use Psr\Http\Message\ServerRequestInterface;
class ExampleAction extends Action
{
    public function __construct(Router $router)
    {
        $this->router = $router;
    }

    public function __invoke(ServerRequestInterface $request)
    {
        // ... Logique de l'action ...
		// $url = $this->generateURL('nomdelaroute')
        $url = $this->router->generateURI('example.get');
        return new RedirectResponse($url);
        // Redirige sur une URL précisément
        // return $this->redirect('/home')
        
        // return $this->redirectToRoute('nom', ['id' => 1])
    }
}
```

Dans cet exemple, la classe `ExampleAction` injecte l'instance de la classe `Router` via son constructeur. Lors de l'exécution de la méthode `__invoke()`, elle utilise la méthode `generateURI()` du router pour générer l'URL correspondant à la route nommée "nomdelaroute". 

## Exemple d'enregistrement dans une classe Module

Voici un exemple d'enregistrement de routes dans une classe de module fictive en utilisant la classe `Router` :

```php
use ClientX\Router;
use App\Example\Actions\ExampleAction;
class ExampleModule extends \ClientX\Module
{
    const UUID =  "example";
    const NAME = "Example";
    #...

    public function __construct(Router $router)
    {
        $router->any('/any', ExampleAction::class, 'example.any');
        $router->get('/get/[i:id]', ExampleAction::class, 'example.get')
    }
}
```
### Récupérer les attribut d'une requête
```php
<?php

namespace App\Example\Actions;

use ClientX\Actions\Action;
use Psr\Http\Message\ServerRequestInterface;

class ExampleAction extends Action {

  

	public function __construct(....){
	}


	public function __invoke(ServerRequestInterface $request) {
		$id = $request->getAttribute('id');
		return "ID : $id";
	
	}

}
```