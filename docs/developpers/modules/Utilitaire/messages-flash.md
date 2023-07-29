# Messages flash
La classe `ClientX\Session\FlashService` permet de sauvegarder et d'afficher des messages flash dans votre application. Les messages flash sont des messages temporaires qui sont généralement affichés une seule fois, souvent pour fournir des informations à l'utilisateur après une action.

## Méthodes de la classe

### `__construct(SessionInterface $session)`

Le constructeur de la classe `FlashService` prend en paramètre une instance de `SessionInterface` pour gérer la session.

### `warning(string $message)`

Cette méthode permet de sauvegarder un message flash de type "warning". Les messages de ce type sont souvent utilisés pour indiquer des avertissements ou des informations importantes.

Exemple d'utilisation :

```php
// Sauvegarder un message flash de type "warning"
$flashService->warning('Attention ! Votre session va expirer dans 5 minutes.');
```

### `error(string $message)`

Cette méthode permet de sauvegarder un message flash de type "error". Les messages de ce type sont généralement utilisés pour indiquer des erreurs ou des problèmes.

Exemple d'utilisation :

```php
// Sauvegarder un message flash de type "error"
$flashService->error('Une erreur s\'est produite lors du traitement de votre demande.');
```

### `info(string $message)`

Cette méthode permet de sauvegarder un message flash de type "info". Les messages de ce type sont souvent utilisés pour fournir des informations supplémentaires ou des conseils.

Exemple d'utilisation :

```php
// Sauvegarder un message flash de type "info"
$flashService->info('Merci de vous connecter pour accéder à cette fonctionnalité.');
```

### `success(string $message)`

Cette méthode permet de sauvegarder un message flash de type "success". Les messages de ce type sont généralement utilisés pour indiquer une action réussie.

Exemple d'utilisation :

```php
// Sauvegarder un message flash de type "success"
$flashService->success('Votre enregistrement a été effectué avec succès !');
```

### `get(string $type): ?string`

Cette méthode permet de récupérer le message flash associé à un certain type (par exemple, "warning", "error", "info" ou "success"). Si aucun message flash de ce type n'a été sauvegardé, la méthode renverra `null`.

Exemple d'utilisation :

```php
// Récupérer le message flash de type "success"
$message = $flashService->get('success');
```

Dans cet exemple, nous utilisons la méthode `get()` pour récupérer le message flash de type "success" précédemment sauvegardé.
Cette méthode est surtout utilisé pour les vues twig.

## Exemple avec le container de dépendances

```php
<?php

namespace App\Example\Actions;

use ClientX\Actions\Action;
use ClientX\Session\FlashService;
use Psr\Http\Message\ServerRequestInterface;

class ExampleAction extends Action {

  

	public function __construct(FlashService $flash, ....){

		$this->flash = $flash;

		....

	}

  

	public function __invoke(ServerRequestInterface $request) {
	
		$this->flash->success('Done!');
		// Avec les helpers de la classe Action
		// $this->success('Done');
	
	}

}
```