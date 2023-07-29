
L'interface `LoggerInterface` est une interface standard définie par le PSR-3 (PHP Standards Recommendation) qui fournit une abstraction pour l'enregistrement des messages de journalisation dans CLIENTXCMS. Les messages sont le plus souvent sauvegardé dans la base de données en utilisant l'implémentation 

## Méthodes de l'interface

L'interface `Psr\Log\LoggerInterface` définit plusieurs méthodes pour l'enregistrement des messages de journalisation. Voici les méthodes principales :

- `emergency(string $message, array $context = [])` : Enregistre un message d'urgence. Il s'agit d'une situation critique nécessitant une action immédiate.
- `alert(string $message, array $context = [])` : Enregistre un message d'alerte. Il s'agit d'une condition d'erreur critique qui nécessite une intervention.
- `critical(string $message, array $context = [])` : Enregistre un message critique. Il s'agit d'une condition d'erreur critique.
- `error(string $message, array $context = [])` : Enregistre un message d'erreur. Il s'agit d'une condition d'erreur.
- `warning(string $message, array $context = [])` : Enregistre un message d'avertissement. Il s'agit d'une condition potentiellement dangereuse.
- `notice(string $message, array $context = [])` : Enregistre un message de notification. Il s'agit d'une condition normale nécessitant une attention.
- `info(string $message, array $context = [])` : Enregistre un message informatif. Il s'agit d'une information générale.
- `debug(string $message, array $context = [])` : Enregistre un message de débogage. Il s'agit d'une information de débogage détaillée.

Chaque méthode prend en paramètre le message à enregistrer sous forme de chaîne de caractères, ainsi qu'un tableau optionnel `$context` contenant des données supplémentaires à associer au message.

## Configuration de l'implémentation dans le container

Dans un environnement utilisant un conteneur d'injection de dépendances, il est possible de configurer l'implémentation concrète de la `LoggerInterface` en y ajoutant une entrée correspondante dans le conteneur. 

```php
<?php
// src/Example/config.php
use App\Example\Logger\CustomLogger;

return [
    // Autres définitions...

    Psr\Log\LoggerInterface::class => DI\get(CustomLogger::class),
];
```


## Exemple d'utilisation dans une classe d'action

Voici un exemple d'utilisation de la `LoggerInterface` dans une classe d'action fictive qui enregistre une information :

```php
<?php
// src/Example/Actions/ExampleAction.php
namespace App\Example\Actions\ExampleAction;

use Psr\Log\LoggerInterface;
use ClientX\Actions\Action;
class ExampleAction extends Action
{

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function __invoke()
    {
        // ... Logique de l'action ...

        $this->logger->info('L\'action a été exécutée avec succès.');

        // ... Suite de la logique de l'action ...
    }
}
```

Dans cet exemple, la classe `ExampleAction` injecte la `Psr\Log\LoggerInterface` via son constructeur. Lors de l'exécution de la méthode `__invoke()`, elle utilise la méthode `info()` de la `LoggerInterface` pour enregistrer un message informatif dans les journaux.

N'oubliez pas d'adapter le code en fonction de votre propre implémentation de la `LoggerInterface` et de la configuration de votre conteneur d'injection de dépendances.

Notez que l'exemple utilise la méthode `info()`, mais vous pouvez utiliser n'importe quelle autre méthode de la `LoggerInterface` en fonction du niveau de gravité approprié pour le message que vous souhaitez enregistrer.