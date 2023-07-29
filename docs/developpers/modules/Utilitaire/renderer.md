
L'interface `ClientX\RendererInterface` définit un contrat pour le rendu des vues Twig et la gestion des chemins vers les fichiers de templates. Elle permet d'utiliser le moteur de templates Twig pour générer du contenu dynamique dans votre application.

## Introduction à Twig

Twig est un moteur de templates pour PHP qui facilite la génération de contenu HTML, XML, ou tout autre format texte. Il offre une syntaxe concise et expressive pour manipuler les données et générer des rendus.

Voici un aperçu des fonctionnalités de base de Twig :

- **Variables** : Vous pouvez utiliser des variables pour afficher des données dynamiques dans vos templates. Par exemple, `{{ variable }}`.
- **Boucles** : Vous pouvez itérer sur des tableaux ou des objets avec une boucle `for`. Par exemple, `{% for item in items %} ... {% endfor %}`.
- **Conditions** : Vous pouvez utiliser des blocs conditionnels pour exécuter des instructions en fonction de certaines conditions. Par exemple, `{% if condition %} ... {% else %} ... {% endif %}`.
- **Filtres** : Vous pouvez appliquer des filtres à des variables pour les formater ou les transformer. Par exemple, `{{ variable | filter }}`.
- **Fonctions** : Vous pouvez utiliser des fonctions intégrées ou définir vos propres fonctions personnalisées pour effectuer des opérations spécifiques dans les templates. Par exemple, `{{ function(arg) }}`.

Pour plus d'informations sur Twig, vous pouvez consulter sa documentation officielle : [Twig Documentation](https://twig.symfony.com/doc/)

## Méthodes de l'interface

### `addPath(string $namespace, ?string $path = null): void`

Cette méthode permet d'ajouter un chemin vers un répertoire contenant des fichiers de templates Twig. Le premier paramètre `$namespace` est utilisé pour identifier de manière unique le chemin ajouté.

Exemple d'utilisation :

```php
  
  
namespace App\Example;

  
use ClientX\Module;
use ClientX\Renderer\RendererInterface;
use ClientX\Theme\ThemeInterface;

class ExampleModule extends Module {
	....
	public function __construct(RendererInterface $renderer, ThemeInterface $theme){
	
	$renderer->addPath('example', $theme->getViewsPath() . '/Example');
	
	}
}
```

Dans cet exemple, nous utilisons la méthode `addPath()` pour ajouter un chemin vers les fichiers de templates du répertoire "/chemin/vers/themes". Le namespace "themes" sera utilisé pour identifier ce chemin.

### `render(string $view, array $params = []): string`

Cette méthode permet de rendre une vue Twig en utilisant le nom de la vue et un tableau de paramètres optionnels. La méthode recherche d'abord la vue dans le dossier "/Themes/Themes/Views/{Chemin}.twig". Si la vue n'est pas trouvée, elle cherche une copie dans le dossier "/Templates/{Chemin}.twig".

Exemple d'utilisation :

```php
<?php

namespace App\Example\Actions;

use ClientX\Actions\Action;

use ClientX\Renderer\RendererInterface;
use Psr\Http\Message\ServerRequestInterface;

class ExampleAction extends Action {

  
	public function __construct(RendererInterface $renderer, ....){
		$this->renderer = $renderer;
		....
	
	}

  

	public function __invoke(ServerRequestInterface $request){
	
		// Va rechercher si le fichier /Themes/Themes/Views/Example/index.twig existe sinon va prendre dans /Templates/Example/index.twig
	
		return $this->renderer->render('@example/index', ['items' => ['a', 'b','c']]);
		// Avec les helpers de la classe Action
		// $this->render('@exemple/index', ['items' => ['a', 'b','c']]);
	
	}

}
```

Dans cet exemple, nous utilisons la méthode `render()` pour générer le contenu HTML de la vue "page/home" en passant le paramètre "title" avec la valeur "Accueil". Le résultat est stocké dans la variable `$html`.

### `addGlobal(string $key, $value): void`

Cette méthode permet d'ajouter une variable globale accessible dans tous les templates. La variable est identifiée par sa clé `$key` et sa valeur est spécifiée par `$value`.

Exemple d'utilisation :

```php
// Ajouter une variable globale "exemple_value" avec la valeur azerty"
$renderer->addGlobal('exemple_value', 'azerty');
```

## Gestion des vues admin

```php
  
  
namespace App\Example;

  
use ClientX\Module;
use ClientX\Renderer\RendererInterface;
use ClientX\Theme\ThemeInterface;

class ExampleModule extends Module {
	....
	public function __construct(RendererInterface $renderer, ThemeInterface $theme){
	// Le dossier /src/Example/Views doit exister et est sensible à la case 
	$renderer->addPath('example_admin', __DIR__ . '/Views');
	
	}
}
```