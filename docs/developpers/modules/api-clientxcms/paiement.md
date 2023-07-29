# Méthodes de paiements

CLIENTXCMS introduit un système pour gérer les paiements facilement selon la passerelle de paiements avec les interface `ClientX\Payment\PaymentTypeInterface` et `ClientX\Payment\PaymentManagerInterface`

## Liste des passerelles de paiement supportées
- PayPal
- Dedipass
- Stripe
- Paysafecard

## L'interface `PaymentTypeInterface`

L'interface `PaymentTypeInterface` est une interface qui définit les méthodes pour définir le type de paiement pris en charge dans l'application CLIENTXCMS. Les classes implémentant cette interface représentent différents types de paiement, tels que PayPal, Stripe, etc.

### Méthodes

#### `getName(): string`

Cette méthode retourne le nom du type de paiement. Par exemple, pour PayPal, cette méthode renverra "paypal".

#### `getTitle(): ?string`

Cette méthode retourne le titre du type de paiement, c'est-à-dire une version lisible par l'homme du nom du type de paiement. Par exemple, pour PayPal, cette méthode renverra "PayPal".

#### `getManager(): string`

Cette méthode retourne le nom de la classe du gestionnaire de paiement associé à ce type de paiement. Le gestionnaire de paiement est une implémentation de la `PaymentManagerInterface`.

#### `getLogPath(): string`

Cette méthode retourne le chemin vers les fichiers de journalisation des transactions pour ce type de paiement. Par exemple 'admin.example.payment', 

#### `getIcon(): string`

Cette méthode retourne le nom de l'icône utilisée pour représenter ce type de paiement, par exemple "fab fa-paypal" pour PayPal.

#### `canPayWith(): bool`

Cette méthode retourne un booléen indiquant si le paiement peut être effectué via le processus de paiement standard (checkout). Exemple Dedipass : false, PayPal : true

## Action de journalisation

### Menu de navigations
CLIENTXCMS récupére les types et les affiches directement dans le menu d'administration avec les autres types de paiement pour accéder facilement à la page de journalisations

### Route
Pour ajouter l'action dans votre module : 
```php
use ClientX\Router;
use Psr\Container\ContainerInterface;
use App\Example\Actions\ExamplePaymentAction;

class ExampleModule extends \ClientX\Module
{
    const UUID =  "example";
    const NAME = "Example";
    ....

    public function __construct(Router $router, ContainerInterface $container)
    {
	    if ($container->has('admin.prefix')) { 
	    
			$prefix = $container->get('admin.prefix');
			$router->crud($prefix . '/example/payment/[i:id]', ExamplePaymentAction::class, 'admin.example.payment');
			// même nom de route que dans le getLogPath()
	    }
	    
    }
    ```

### Actions
CLIENTXCMS permet de facilement rendre une vue avec la liste des transactions faites via votre moyen de paiement grâce à la classe `ClientX\Actions\Payment\PaymentAdminAction`. Elle s'occupera automatiquement de la recherche et du rendu de la page HTML 

```php
<?php

namespace App\Example\Actions;

use ClientX\Actions\Payment\PaymentAdminAction;

class ExamplePaymentAction extends PaymentAdminAction {

protected $routePrefix = "admin.example.payment";

protected $paymenttype = "example";

}
```


## L'interface `PaymentManagerInterface`

L'interface `PaymentManagerInterface` est une interface qui définit les méthodes pour gérer le processus de paiement, l'exécution des paiements . Les classes implémentant cette interface sont responsables du traitement des paiements pour un type de paiement spécifique, tel que PayPal, Stripe, etc.

### Méthodes

#### `process(Transaction $transaction, ServerRequestInterface $request, User $user): mixed`

Cette méthode gère le processus de paiement pour une transaction donnée. Elle prend en paramètre l'objet `Transaction`, l'objet `Request` et l'objet `User` associés au paiement. Prenons un exemple concrets, c'est cette méthode qui va demander à Stripe ou paypal de créer le paiement avec les détails de la transactions (prix, produits, etc). Où ils vont vous donner un lien de paiement qui sera utilisé par le client pour payer.

#### `execute(Transaction $transaction, ServerRequestInterface $request, User $user): void`

Cette méthode exécute le paiement pour une transaction donnée. Elle prend en paramètre l'objet `Transaction`, l'objet `Request` et l'objet `User` associés au paiement.

#### `refund(array $items): bool`

N'est pas encore implémenté dans le coeur de CMS, vous pouvez renvoyer false d'office.

### Example d'implémentation du manager
```php
<?php

namespace App\Example\Payment;

use App\Account\User;
use App\Account\User as UserAccount;
use App\Basket\Basket;
use App\Shop\Entity\Invoice;
use App\Shop\Entity\Transaction;
use App\Shop\Entity\TransactionItem;
use App\Shop\Services\TransactionService;
use ClientX\Auth;
use ClientX\Database\NoRecordException;
use ClientX\Helpers\Str;
use ClientX\Payment\PaymentManagerInterface;
use ClientX\Response\RedirectResponse;
use ClientX\Router;
use Psr\Http\Message\ServerRequestInterface as Request;

class ExamplePaymentManager extends AbstractPaymentManager implements PaymentManagerInterface

{


	public function __construct(Router $router, Auth $auth, TransactionService $service) {

	parent::__construct($router, $auth, $service);

	}

  

public function process(Transaction $transaction, Request $request, User $user) {

		$user = $this->getUser();
		
		if ($user === null) {
		
			return;
		
		}
		
		$transactionId = Str::random(10);
		
		$transaction->setTransactionId($transactionId);
		
		$this->service->updateTransactionId($transaction);
		
		$links = $this->getRedirectsLinks($request, $transaction);
		
		$return = $links['return'];
		
		$cancel = $links['cancel'];
		
		// Donne les deux liens de return et de cancel
		
		/** @var TransactionItem */
		
		$items = $transaction->getItems();
		
		collect($items)->map(function(TransactionItem $item){
		
			return ['price' => $item->getPrice(), 'label' => $item->getName()];
		
		})->toArray();
		
		// URL que donne la passerelle de paiement
		
		  
		
		$url = "https://clientxcms.com/fake?trans_id=" . $transactionId;
		
		return new RedirectResponse($url);

	}

  
	
	public function execute(Transaction $transaction, Request $request, User $user){
		
		  
		
		/** @var UserAccount */
		
		$user = $this->getUser();
		
		if ($user === null) {
		
			return new RedirectResponse($this->getRedirectsLinks($request, $transaction)['cancel']);
		
		}
		
		$transId = $request->getQueryParams()['trans_id'];
		
		try {
		
		if ($transId !== $transaction->getTransactionId()) {
		
			return new RedirectResponse($this->getRedirectsLinks($request, $transaction)['cancel']);
		
		}
		
		$success = true;
		
		// le paiement est bien valider
		
		if ($success) {
		
			// on complete la transaction puis livre les items
			
			$this->service->complete($transaction);
		
			foreach ($transaction->getItems() as $item) {
			
				$this->service->delivre($item);
		
			}
			
			return $transaction;
			
		}
		
		$reason = "Card invalid";
		
		$transaction->setState($transaction::REFUSED);
		
		$transaction->setReason($reason);
		
		$this->service->changeState($transaction);
		
		$this->service->setReason($transaction);
		
		return $transaction;
		
		} catch (NoRecordException $e) {
		
		return new RedirectResponse($this->getRedirectsLinks($request, $transaction)['cancel']);
		
		}
		
	}
	
	  
	
	public function refund(array $items): bool {
	
	return false;
	
	}

}
```
## Intégration dans le conteneur

Pour utiliser les classes implémentant l' interface `PaymentTypeInterface`  vous devez les ajouter dans le conteneur sous la clé `'payments.type'` avec les noms de classes associés.

Exemple de configuration dans le fichier du conteneur du module :

```php
<?php
use function \DI\get;
use function \DI\add;
return [
    // ...
    'payments.type' => [
        add(get(\App\Example\ExamplePaymentType::class)),
        // Ajoutez d'autres types de paiement ici...
    ],
    // ...
];
```

Avec cette configuration, les types de paiement seront disponibles dans l'application CLIENTXCMS et pourront être utilisés pour gérer les paiements dans les différents modules et actions.