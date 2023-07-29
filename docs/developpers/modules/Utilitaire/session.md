
L'interface `ClientX\Session\SessionInterface` définit un contrat pour gérer les informations en session. Par défaut, cette interface est implémentée par la classe `ClientX\Session\PHPSession`, mais vous pouvez la remplacer en configurant une clé dans votre conteneur de dépendances.

## Méthodes de l'interface

### `get(string $key, $default = null)`

Cette méthode permet de récupérer la valeur associée à une clé dans la session. Si la clé n'existe pas, la méthode renverra la valeur par défaut spécifiée (ou `null` si aucune valeur par défaut n'est fournie).

Exemple d'utilisation :

```php
// Récupérer la valeur de la clé "key" dans la session
$userID = $this->session->get('key');
```

Dans cet exemple, nous utilisons la méthode `get()` pour récupérer la valeur de la clé "user_id" dans la session.

### `set(string $key, $value): void`

Cette méthode permet de définir une valeur associée à une clé dans la session.

Exemple d'utilisation :

```php
// Définir la valeur de la clé "key" dans la session
$this->session->set('key', 123);
```

Dans cet exemple, nous utilisons la méthode `set()` pour définir la valeur 123 pour la clé "key" dans la session.

### `delete(string $key): void`

Cette méthode permet de supprimer une clé et sa valeur correspondante de la session.

Exemple d'utilisation :

```php
// Supprimer la clé "key" de la session
$this->session->delete('key');
```

Dans cet exemple, nous utilisons la méthode `delete()` pour supprimer la clé "key" de la session.

## Personnalisation de l'implémentation

Si vous souhaitez utiliser une implémentation personnalisée pour l'interface `ClientX\Session\SessionInterface`, vous pouvez le faire en configurant une clé dans votre conteneur de dépendances.

Exemple de configuration :

```php
use ClientX\Session\MyCustomSessionImplementation;

return [
    // Autres définitions...

    ClientX\Session\SessionInterface::class => DI\create(MyCustomSessionImplementation::class),
];
```

## Exemple concret avec le container de dépendances

```php
<?php

namespace App\Example\Actions;

use ClientX\Actions\Action;
use ClientX\Session\SessionInterface;
use Psr\Http\Message\ServerRequestInterface;

class ExampleAction extends Action {

  

	public function __construct(SessionInterface $session, ....){

		$this->session = $session;

		....

	}

  

	public function __invoke(ServerRequestInterface $request) {
	
		$key = $this->session->get('key');
	
	}

}
```

## Implémentations disponibles
- `ClientX\Session\PHPSession`
- `ClientX\Session\ArraySession`
- `ClientX\Session\CacheSession`