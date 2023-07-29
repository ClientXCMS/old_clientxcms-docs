
Par défaut, les navigateurs web ne supportent que les méthodes GET et POST pour envoyer des requêtes HTTP. Cependant, il existe des cas où vous pouvez avoir besoin d'utiliser d'autres méthodes telles que PUT, DELETE, OPTION, etc. pour effectuer des opérations spécifiques sur le serveur.

ClientXCMS fournit une méthode simple pour changer la méthode de la requête en utilisant l'élément HTML `<input type="hidden" name="_method" value="PUT">` dans vos formulaires. Cela permet d'indiquer au serveur la méthode à utiliser pour traiter la requête.

## Étapes pour changer la méthode de la requête

Suivez les étapes ci-dessous pour changer la méthode de la requête sur ClientXCMS :

1. Ajoutez un élément `<input type="hidden">` avec le nom `_method` et la valeur correspondant à la méthode souhaitée (par exemple, "PUT", "DELETE", "OPTION", etc.) dans votre formulaire ou votre requête.
2. Utilisez le router de ClientXCMS pour définir une route qui correspond à la méthode spécifiée.

## Exemple d'utilisation du Router avec une méthode OPTION

Voici un exemple d'utilisation du router de ClientXCMS pour définir une route avec la méthode OPTION :

```php
use ClientX\Router;

class ExampleModule extends \ClientX\Module
{
    public function __construct(Router $router)
    {
        $router->option('/maroute', ExampleAction::class, 'nomdelaroute');
    }
}
```

Dans cet exemple, nous utilisons la méthode `$router->option()` pour enregistrer une route avec la méthode OPTION. L'URL de la route est `/maroute` et la classe `ExampleAction` est associée à cette route.

## Utilisation de l'élément `<input type="hidden">`

Pour changer la méthode de la requête dans vos formulaires, vous pouvez ajouter l'élément `<input type="hidden">` avec le nom `_method` et la valeur correspondant à la méthode souhaitée. Par exemple, pour utiliser la méthode PUT, vous pouvez ajouter cet élément à votre formulaire :

```html
<form action="/example" method="POST">
    <!-- Vos autres champs de formulaire ici -->
    <input type="hidden" name="_method" value="PUT">
{{ field('username', user.username, 'Nom d\'utilisateur') }}

    <button type="submit">Envoyer</button>
</form>
```

Dans cet exemple, l'élément `<input type="hidden" name="_method" value="PUT">` indique que la méthode PUT doit être utilisée lors de l'envoi du formulaire. Lorsque le formulaire est soumis, le navigateur enverra une requête POST avec l'élément `_method` spécifié, permettant ainsi au serveur de traiter la requête en tant que méthode PUT.

Assurez-vous de configurer votre application pour reconnaître et traiter correctement les requêtes avec la méthode spécifiée via l'élément `_method`.