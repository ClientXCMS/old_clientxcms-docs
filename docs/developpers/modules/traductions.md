---
sidebar_position: 4
---
# Traductions
## Traduire dans une vues
Pour traduire dans une vue, vous pouvez utiliser le filtre et la fonction `trans` avec en premier paramètre la clé de la traduction et en second paramètres les variables qui peuvent être donner 
Exemple sous forme de fonction :
```
{{ trans('example.trad', {"%link%": path('example.get')})}}
```
Exemple sous forme de filtre :
```
{{ 'example.trad'| trans({"%link%": path('example.get')}) }}
```
## Rendre les entité traduisible 
L'interface `App\Translation\TranslatableInterface` définit les méthodes nécessaires pour gérer les traductions d'une entité dans l'application CLIENTXCMS. Les classes implémentant cette interface sont responsables de fournir les clés de traduction et de gérer l'hydratation des données traduisibles.

### Méthodes

#### `getTranslatableKeys(): array`

Cette méthode retourne un tableau associatif des clés traduisibles pour l'entité. Chaque clé est associée à un tableau contenant les informations nécessaires pour gérer la traduction de cette clé.

Exemple:
```php

	public function getTranslatableKeys(): array
	{
	    return [
	        'product_name_1'=> ['mode' => 'input', 'key' => 'name'],
	        // Ajoutez d'autres clés traduisibles ici...
	    ];
	}
```
**Modes disponibles :** 
- "editor" `App\Translation\TranslationMode::EDITOR` : Editeur de contenu
- "input"`App\Translation\TranslationMode::INPUT` :  Input traditionnel
- "textarea" `App\Translation\TranslationMode::TEXTAREA` : Textarea
#### `hydateTranslation(array $data)`

Cette méthode permet d'hydrater les données traduisibles à partir des données fournies. Elle prend en paramètre un tableau contenant les données traduisibles et les applique à l'entité.

### Utilisation du trait `TranslationTrait`

Le trait `TranslationTrait` permet d'ajouter facilement la gestion des traductions à une classe en utilisant les méthodes définies dans l'interface `TranslatableInterface`.

Exemple:
```php
namespace App\Example\Entity
use App\Translation\TranslatableInterface;
use App\Translation\TranslationTrait;

class Product implements TranslatableInterface
{
    use TranslationTrait;
	private string $name;
	private int $id;
	
	public function getId(): int {
		return $this->id;
	}
	  
	
	public function setId(int $id) {
		$this->id = $id;
		return $this;
	}
	
	public function getName(): string {
		return $this->name;
	}
	  
	
	public function setName($name) {
		$this->name = $name;
	
		return $this;
	}
    // ... autres propriétés et méthodes de la classe ...

    public function getTranslatableKeys(): array
    {
        return [
            'product_name_'. $this->id => ['mode' => 'input', 'key' => 'name'],
            // Ajoutez d'autres clés traduisibles ici...
        ];
    }

    public function hydateTranslation(array $data)
    {
    // $params['name'] = "la valeur traduit selon la langue de l'utilisateur courrant"
    // on utilise les setter pour définis les données
	    $this->autohydrate(['name' => 'setName'], $data);
    }
}
```

Avec l'utilisation du trait `TranslationTrait`, la classe `Product` implémente automatiquement les méthodes de l'interface `TranslatableInterface`. Il suffit de définir les clés traduisibles dans la méthode `getTranslatableKeys()` et d'implémenter la logique de l'hydratation dans la méthode `hydateTranslation()`. Le trait `TranslationTrait` s'occupe du reste et facilite la gestion des traductions pour l'entité.

## Traduire dans une action

```php
<?php

namespace App\Example\Actions;

use ClientX\Actions\Action;
use ClientX\Translator\Translater;
use Psr\Http\Message\ServerRequestInterface;

class ExampleAction extends Action {

  
	public function __construct(Translater $trans, ....){

		$this->trans = $trans;

		....

	}

  

	public function __invoke(ServerRequestInterface $request) {
	
		$this->translater->trans('key');
		// Avec les helpers de la classe Action
		// $this->trans('key');
	
	}

}
```

## Fichiers de traductions
Vous pouvez ajouter des fichiers de traductions  dans le dossier `/Lang` de CLIENTXCMS, ils doivent au format tableau de PHP. Sachez que CLIENTXMCS utilise derrière le composants de symfony de traduction

```php

<?php
// Lang/fr_FR/example.php
return [

'example' => [
	'title' => 'Exemple',
	'subtitle' => 'Un sous titre',
]

];
```
