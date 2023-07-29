# Authentification 

La classe `DatabaseUserAuth` est une classe d'authentification utilisée dans CLIENTXCMS pour gérer l'authentification des utilisateurs à l'aide d'une base de données. Cette classe implémente l'interface `Auth` et fournit des fonctionnalités pour la connexion, la déconnexion, la vérification de l'état du compte utilisateur, etc.

## Méthodes

### `getUser(?int $userId = null): ?User`

Cette méthode permet de récupérer l'utilisateur authentifié. Si aucun ID d'utilisateur n'est spécifié, elle retourne l'utilisateur actuellement authentifié. Sinon, elle recherche et renvoie l'utilisateur correspondant à l'ID spécifié.

### `login(string $email, string $password, bool $remember): ?User`

Cette méthode permet de connecter un utilisateur en vérifiant les informations d'identification fournies (adresse e-mail et mot de passe). Si les informations sont valides, elle enregistre l'utilisateur dans la session et retourne l'utilisateur connecté. Sinon, elle retourne `null`.

### `logout(): void`

Cette méthode permet de déconnecter l'utilisateur en supprimant ses informations d'authentification de la session.

### `setUser($user, bool $isAdmin = false, ?User $admin = null): void`

Cette méthode permet de définir l'utilisateur actuellement authentifié. Elle peut prendre en paramètre soit un objet `User`, soit l'ID d'un utilisateur. Si le paramètre `$isAdmin` est défini sur `true`, cela indique que c'est un  administrateur qui se connecte sur un compte client et l'ID de l'administrateur peut être spécifié en paramètre `$admin`.

### `getSession(): SessionInterface`

Cette méthode permet de récupérer l'instance de l'interface `SessionInterface` utilisée pour gérer la session utilisateur.

## Exemple d'utilisation dans une classe Action

```php
// src/Example/Actions/ExampleAction.php
namespace App\Example\Actions;

use App\Auth\DatabaseUserAuth;
use ClientX\Actions\Action;

use Psr\Http\Message\ServerRequestInterface;

class ExampleAction extends Action
{
    public function __construct(DatabaseUserAuth $auth)
    {
        $this->auth = $auth;
    }

    public function __invoke(ServerRequestInterface $request)
    {
        if ($this->isLogged()) {
            $user = $this->getUser();
            // Utilisation de l'utilisateur authentifié
        }
    }
}
```

Dans cet exemple, la classe `ExampleAction` étend la classe `Action` de CLIENTXCMS et injecte l'instance de la classe `DatabaseUserAuth` pour gérer l'authentification des utilisateurs. La méthode `__invoke()` est exécutée lors de l'appel de l'action et permet de vérifier si l'utilisateur est connecté en utilisant la méthode `isLogged()` et de récupérer l'utilisateur authentifié en utilisant la méthode `getUser()`.