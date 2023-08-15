# Envoie email
CLIENTXCMS permet de générer et d'envoyer facilement des email à vos clients. CLIENTXCMS utilise SwiftMailer afin d'envoyer le plus simplement. 

## Modèle d'email
Par défaut, vous pouvez fournir des modèle d'email sous cette forme en 4 parties séparé par trois tirets :
**Partie 1 :**  identifiant du modèle, qui sera utilisé dans la classe mailer plus bas
**Partie 2** : Sujet de l'email envoyé (sans personnifications possibles selon le contexte)
**Partie 3** : Texte du bouton envoyé (sans personnifications possibles selon le contexte)
**Partie 4** : Contenu de l'email, interprétation avec twig 
/Emails/templates/fr_FR/example.txt
```txt
example
---
Sujet de l'email 
---
Texte du bouton
---

La notification à était envoyée à  {{ user.firstname }}
```

Vous pouvez également créer dynamiquement le modèle depuis l'administration de votre CLIENTXCMS dans la sections modèles email
## Classe Mailer

### Pour envoyer à un utilisateur en particulier
```php
<?php

namespace App\Example\Mailer;

use App\Auth\User;
use ClientX\Entity\EmailMessage;
use ClientX\Notifications\Mailer\Support\DatabaseMailer;
use ClientX\Router;

  
class ExampleMailer {

	private DatabaseMailer $mailer;
	
	private Router $router;

	public function __construct(DatabaseMailer $mailer, Router $router){
		$this->mailer = $mailer;
		$this->router = $router;
	}

  
	public function sendTo(User $user): bool{
	// URL où le bouton de l'email va rediriger
	$path = $this->router->generateURIAbsolute('example.index');
	
	$message = EmailMessage::forUser($user, "example", [
		'user' => $user,
	], $path);
	
	return $this->mailer->send($message);
	// Permet de sauvegarder en base de données pour que l'utilisateur l'ai sur son espace client, puis envoyer en tâche Cron.
	}

}
```
### Pour envoyer à un email qui n'est pas utilisateur
```php
<?php

namespace App\Example\Mailer;

use App\Auth\User;
use ClientX\Entity\EmailMessage;
use ClientX\Notifications\Mailer\Support\DatabaseMailer;
use ClientX\Router;

  
class ExampleMailer {

	private DatabaseMailer $mailer;
	
	private Router $router;

	public function __construct(DatabaseMailer $mailer, Router $router){
		$this->mailer = $mailer;
		$this->router = $router;
	}

  
	public function sendTo(User $user): bool{
	// URL où le bouton de l'email va rediriger
	$path = $this->router->generateURIAbsolute('example.index');
	
	$message = EmailMessage::forUser($user, "example", [
		'user' => $user,
	], $pathn true);
	
	return $this->mailer->send($message);
	// Permet simplement de envoyer en tâche Cron et ne pas laisser de trace sur l'espace client .
	}

}
```
## Exemple avec le container de dépendances
```php
// src/Example/Actions/ExampleAction.php
namespace App\Example\Actions;

use App\Auth\DatabaseUserAuth;
use ClientX\Actions\Action;
use App\Example\Mailer\ExampleMailer;
`ClientX\Session\FlashService`

use Psr\Http\Message\ServerRequestInterface;

class ExampleAction extends Action
{
	private ExampleMailer $mailer;
    public function __construct(DatabaseUserAuth $auth, ExampleMailer $mailer, FlashService $flash)
    {
        $this->auth = $auth;
        $this->mailer = $mailer;
        $this->flash = $flash;
    }

    public function __invoke(ServerRequestInterface $request)
    {
        if ($this->isLogged()) {
            $user = $this->getUser();
            $this->mailer->sendTo($user);
            $this->success('E-mail envoyé !');
        }
        return $this->back($request);
    }
}
```