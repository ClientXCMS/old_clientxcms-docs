
Les middlewares sont des classes qui permettent de traiter les requêtes HTTP dans une application. Ils peuvent effectuer des opérations avant et/ou après le traitement de la requête principale.

## Étapes pour créer un Middleware

Suivez les étapes ci-dessous pour créer un Middleware en utilisant l'interface `MiddlewareInterface` de PHP :

1. Créez une classe pour votre Middleware et implémentez l'interface `MiddlewareInterface`.
2. Implémentez la méthode `process()` qui sera exécutée pour traiter la requête.
3. Enregistrez le Middleware dans votre application pour qu'il soit utilisé lors du traitement des requêtes.

## Exemple de création d'un Middleware

Voici un exemple de classe de Middleware fictive appelée `ExampleMiddleware` :

```php
namespace App\Example\Middlewares;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class ExampleMiddleware implements MiddlewareInterface
{

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }
	
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): \Psr\Http\Message\ResponseInterface
    {
        // Avant le traitement de la requête principale
        
        $response = $handler->handle($request);

        // Après le traitement de la requête principale

        return $response;
    }
}
```

Dans cet exemple, la classe `ExampleMiddleware` implémente l'interface `MiddlewareInterface` et définit la méthode `process()`. Cette méthode reçoit la requête `$request` et le gestionnaire de requêtes `$handler`. Vous pouvez effectuer des opérations avant le traitement de la requête principale, puis appeler `$handler->handle($request)` pour exécuter la requête principale, et enfin effectuer des opérations après le traitement de la requête principale. Le résultat retourné est une instance de `ResponseInterface`.

## Enregistrer le Middleware dans CLIENTXCMS

Une fois votre Middleware créé, vous devez l'enregistrer dans votre application pour qu'il soit utilisé lors du traitement des requêtes. Voici un exemple d'enregistrement de Middleware dans une classe de module fictive :

```php
namespace App\Example;

use App\Example\Middlewares\ExampleMiddleware;
use ClientX\Middleware\CsrfMiddleware;
use ClientX\Middleware\MaintenanceMiddleware;
use ClientX\Module;
use Psr\Container\ContainerInterface;

class ExampleModule extends Module
{
    // ...

    public static function middlewares(): array
    {
        return [
            ExampleMiddleware::class => [
                'before' => CsrfMiddleware::class, // Middleware à exécuter avant
                'after' => MaintenanceMiddleware::class, // Middleware à exécuter après
                'prefix' => '/client' // Préfixe pour lequel le Middleware s'applique (facultatif)
            ]
        ];
    }
}
```

Dans cet exemple, la classe `ExampleModule` étend la classe `Module` et définit une méthode statique `middlewares()` qui retourne un tableau d'associations. Chaque association représente un Middleware à enregistrer. Vous pouvez spécifier un Middleware à exécuter avant (`'before'`), un Middleware à exécuter après (`'after'`), et un préfixe (`'prefix'`) pour lequel le Middleware s'applique (facultatif).

Notez que les Middleware spécifiés en tant que "before" ou "after" doivent être enregistrés dans votre application pour être utilisés. Assurez-vous d'avoir importé les classes correspondantes dans votre classe de module et de les enregistrer correctement dans votre application.