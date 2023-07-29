# Créer un produit
Pour créer des produits sur CLIENTXCMS, cela se fait relativement assez simplement puisque CLIENTXCMS suit une liste d'interface PHP à implémenter et le coeur du CMS s'occupe de pas mal de chose automatiquement. 
Dans cette page nous allons utiliser les composants principaux de CLIENTXCMS
- Router
- Renderer
- Base de données
- Action
- Container
- Validator
- Traductions
- Input
- Migration

## Implémentation de la ProductTypeInterface
Dans un premier temps, nous allons créer une classe implémentant la `ClientX\Product\ProductTypeInterface`
### Méthodes 

L'interface `ClientX\Product\ProductTypeInterface` expose les méthodes suivantes :

#### getName()

Cette méthode retourne le nom unique du produit.

```php
/**
 * @return string
 */
public function getName(): string;
```

#### getTitle()

Cette méthode retourne le titre de produit. (qui sera affiché sur la page de création de produit)

```php
/**
 * @return string
 */
public function getTitle(): string;
```

#### getConfigPath()

Cette méthode retourne la route de configuration spécifique au type de produit.

```php
/**
 * @return string
 */
public function getConfigPath(): string;
```

#### getData()

Cette méthode retourne la classe donnée spécifiques au type de produit.

```php
/**
 * @return null|ProductDataInterface
 */
public function getData(): ?ProductDataInterface;
```

### Exemple d'implémentation

Voici un exemple d'implémentation de la classe `PleskHostingType` qui utilise l'interface `ClientX\Product\ProductTypeInterface` :

```php
<?php
namespace App\Example;

use ClientX\Product\ProductTypeInterface;

class ExampleType implements ProductTypeInterface
{
    public function getName(): string
    {
        return "example.hosting";
    }

    public function getTitle(): string
    {
        return "Example Hosting";
    }

    public function getData(): ?ProductDataInterface
    {
        return ExampleData::class;
        // ou si il y a pas besoins de données
        // return null;
    }
    
    public function getConfigPath(): string
    {
        return "example.admin.config";
    }
}
```
### Ajout dans le container

```php
<?php

// src/Example/config.php

use App\Example\ExampleType;
use function \DI\get;
use function \DI\add;

return [
    'products.types' => add([
        get(ExampleType::class),
    ]),
```
## Implémentation de la ProductDataInterface
Si vous avez besoins de données spécifique pour traité la commande (exemple un mot de passe). Vous pouvez utiliser la  `ClientX\Product\ProductDataInterface` pour traiter les données
### Méthodes

#### primary()

Cette méthode définit la clé primaire qui sera affiché dans le panier dans la colonne "données"

```php
public function primary();
```

#### validate(array $data)

Cette méthode valide les données spécifiques au type de produit avec le valide

```php
public function validate(array $data): Validator;
```

#### params(array $params)

Cette méthode retourne un tableaux clé valeur des données qu'on garde pour les données de la commande.

```php
public function params(array $params): array;
```

#### render(RendererInterface $renderer, array $data = [])

Cette méthode génère le rendu des données demander.

```php
public function render(RendererInterface $renderer, array $data = []): string;
```

## Exemple d'implémentation de la ProductDataInterface

```php
<?php

namespace App\Example;

use ClientX\Database\NoRecordException;
use ClientX\Renderer\RendererInterface;
use ClientX\Validator;

class ExampleData implements \ClientX\Product\ProductDataInterface
{
    public function primary()
    {
        return 'input';
    }

    public function validate(array $data): Validator
    {
        $validator = new Validator($data);
        $validator->notEmpty('input');

        return $validator;
    }

    public function params(array $params): array
    {
    // on filtre pour récupérer que la clé "input"
        return array_filter($params, function ($key) {
            return in_array($key, ["input"]);
        }, ARRAY_FILTER_USE_KEY);
    }

    public function render(RendererInterface $renderer, array $data = []): string
    {
        $productId = $data['product']->getId();
        $errors = $data['errors'];
        $item = $data['item'];
        $inAdmin = $data['inAdmin'] ?? false;
        return $renderer->render("@example/data", compact('productId', 'item', 'errors', 'inAdmin'));
    }

}
``````

/Templates/Example/data.twig

```html
<div class="col-md-12 col-xl-{{ inAdmin is not defined ? 12 : 6 }} col-sm-12">
    <div class="card">
        <div class="card-body">
            <div class="row">
				<div class="col-12">
					{{ field("input", item.input, "Inut") }}
				</div>
            </div>
        </div>
    </div>
</div>
```
## Gestions de la configuration

### Route
```php
<?php
namespace App\Example;

use ClientX\Router;
use Psr\Container\ContainerInterface;
use App\Example\Actions\ExampleConfigAction;
use ClientX\Renderer\RendererInterface;
use ClientX\Theme\ThemeInterface;

class ExampleModule extends \ClientX\Module
{
    const UUID =  "example";
    const NAME = "Example";
    ....

    public function __construct(Router $router, ContainerInterface $container, ThemeInterface $theme, RendererInterface $renderer)
    {
	    if ($container->has('admin.prefix')) { 
	    
    $renderer->addPath('example_admin', __DIR__ . '/Views');
    // Pour faire la vue config
			$prefix = $container->get('admin.prefix');
			$router->any($prefix . '/example/config/[i:id]', ExampleConfigAction::class, 'example.admin.config');
			// même nom de route que dans le getConfigPath()
	    }
	    
    $renderer->addPath('example',  $theme->getViewsPath() .'/Example');
    // Pour faire la vue données
    }
}
```
### Migrations
Pour sauvegarde les configuration des produits, il faut créer une table de configuration avec phinx
```shell
./vendor/bin/phinx create CreateExampleConfigTable
```

```php
<?php
// /src/Example/db/migrations/20230806094500_create_example_config_table.php

use Phinx\Migration\AbstractMigration;

class CreateExampleConfigTable extends AbstractMigration {

	public function change() {
		$table = $this->table('example_config');
		$table
		->addColumn('product_id', "integer") // champs obligatoire pour faire la liaison avec le produit
		->addColumn('plan', 'string')
        ->addForeignKey('product_id', 'products', ['id'], ['delete' => 'cascade'])
        ->addIndex('product_id', ['unique' => true])
		->addTimestamp()
		->create();
	}
}
```

### Table
Elle va permettre d'intégratif avec la base de données et pouvoir trouver les configurations des produits elle doit être implémenter la `ClientX\Product\ProductConfigurationInterface`. Dans l'exemple plus bas, la classe  extends de la `ClientX\Database\AbstractConfigurationTable` qui permet d'implémenter la `ClientX\Product\ProductConfigurationInterface`

#### Méthodes

##### findConfig(int $productId)

Cette méthode récupère la configuration d'un produit dans la base de données en fonction de son ID.

```php
/**
 * Récupère la configuration d'un produit dans la base de données
 * @param int $productId
 * @return mixed|null
 */
public function findConfig(int $productId);
```

##### deleteConfig(int $productId)

Cette méthode supprime la configuration d'un produit de la base de données en fonction de son ID.

```php
/**
 * Supprime la configuration d'un produit dans la base de données
 * @param int $productId
 * @return bool
 */
public function deleteConfig(int $productId): bool;
```

##### createConfig(int $productId, array $data = [])

Cette méthode crée la configuration d'un produit dans la base de données en fonction de son ID et des données fournies.

```php
/**
 * Crée la configuration d'un produit dans la base de données
 * @param int $productId
 * @param array $data
 * @return bool
 */
public function createConfig(int $productId, array $data = []): bool;
```

##### updateConfig(int $id, int $productId, array $data)

Cette méthode met à jour la configuration d'un produit dans la base de données en fonction de son ID, de l'ID de configuration et des nouvelles données.

```php
/**
 * Met à jour la configuration d'un produit dans la base de données
 * @param int $id
 * @param int $productId
 * @param array $data
 * @return bool
 */
public function updateConfig(int $id, int $productId, array $data): bool;
```

Avec la `ClientX\Database\AbstractConfigurationTable` permet de remplir uniquement les fonctions `createConfig` et `updateconfig` de l'interface
### Exemple
```php
<?php

namespace App\Example\Database;

use ClientX\Database\AbstractConfigurationTable;
use ClientX\Database\Query;

class ExampleTable extends AbstractConfigurationTable
{

    protected $table = "example_config";

    public function createConfig(int $productId, array $data = []): bool
    {
        return $this->insert($data);
    }

    public function updateConfig(int $id, int $productId, array $data): bool
    {
        return $this->update($id, $data);
    }
}
```

### Action
```php
<?php

namespace App\Example\Actions;

use App\Pterodactyl\Database\PterodactylTable;
use App\Admin\Entity\Server;
use App\Admin\Database\ServerTable;
use App\Pterodactyl\Http;
use App\Pterodactyl\PterodactylTrait;
use ClientX\Actions\ConfigAction;
use ClientX\Services\ConfigActionService as Config;
use ClientX\Renderer\RendererInterface as Renderer;
use ClientX\Router;
use ClientX\Validator;

class ExampleConfigAction extends ConfigAction
{
	/**
	* Permet de garder que ces clés dans les données envoyés par la requete
	*/
    protected array $fillable = [
	    "plan"
    ];
    /**
	* Chemin ou va être la vue de configuration
	*/
    protected string $viewPath = "@example_admin/config";
    /**
	* Types de produit que l'action peut supporter (ExampleType.getName()) (dans notre cas 'example.hosting' )
	*/
    protected array $types = ["example.hosting"];
    public function __construct(
        Router $router,
        Config $service,
        Renderer $renderer,
        ExampleTable $table,
        ServerTable $serverTable
    ) {
        parent::__construct($router, $service, $renderer, $table);
        // Par exemple si on veut récupérer tout les serveurs de type "example" qui sont pas caché
        $servers = $serverTable->findIn('example', 'type')->fetchAll();
        $this->servers = collect($servers)->filter(function (Server $server) 
            return $server->isHidden() == false;
        })->toArray();
    }

    public function validate(array $data): Validator
    {
        $validator = (new Validator($data))
	        ->notEmpty('plan')
        return $validator;
    }

    protected function formParams(array $params)
    {
        $params['plans'] = collect($this->servers)->map(function(Server $server){
	        // classe imaginaire qui permettrais de récupérer les plans, plus d'informations sur la page serveurs
	        return ExampleFetch::fromServer($server);
        })->toArray();
    
        return parent::formParams($params);
    }
}
```

/src/Example/Views/config.twig
```twig
{% extends "@admin/layout.twig" %}
{% block title trans('example.admin.title')%}
{% block pagetitle trans('example.admin.title') %}
{% block pagesubtitle trans('example.admin.subtitle') %}
{% block style %}
	<style>
		.round {
			line-height: 48px;
			color: #ffffff;
			width: 50px;
			height: 50px;
			display: inline-block;
			font-weight: 400;
			text-align: center;
			border-radius: 100%;
			background: #1e88e5;
			margin-right: 10px;
		}
	</style>
{% endblock %}
{% block body %}
	<form method="POST" action="{{ path('example.admin.config', {id: id})}}">
		{{ csrf_input() }}
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<div class="card">
					<div class="card-header">
						<span class="round">
							<i class="fas fa-cloud"></i>
						</span>
						{{ trans('example.admin.title') }}
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-12 col-sm-12">
								{{ field('plan', item.plan,  trans('example.admin.plan'),{options:plans})}}
							</div>
						</div>
						<button class="btn btn-primary">{{ trans("save")}}</button>
					</div>
				</div>
			</div>
		</div>
	</form>
{% endblock %}
```

Voilà pour la création d'un produit CLIENTXCMS et sa configuration, pour gérer sa livraison veuillez suivre la gestion de serveur avec la création, suspension ou suppression de service.

## Gestion des options

### Méthodes

L'interface `OptionInterface` expose les méthodes suivantes :

#### translationNameKey(): string

Cette méthode retourne la clé de traduction du nom de l'option.

```php
/**
 * Retourne la clé de traduction du nom de l'option
 * @return string
 */
public function translationNameKey(): string;
```

#### value(array $params): string

Cette méthode retourne la valeur de l'option en fonction des paramètres fournis.

```php
/**
 * Retourne la valeur de l'option en fonction des paramètres
 * @param array $params
 * @return string
 */
public function value(array $params): string;
```

#### for(): array

Cette méthode retourne un tableau des types de produit pour lesquels l'option est applicable.

```php
/**
 * Retourne un tableau des types d'éléments pour lesquels l'option est applicable
 * @return array
 */
public function for(): array;
```

#### render(RendererInterface $renderer, Product $product, Option $option, array $params = []): string

Cette méthode rendu l'option en utilisant le moteur de rendu fourni, le produit associé et l'option spécifique.

```php
/**
 * Rendu de l'option en utilisant le moteur de rendu, le produit et l'option
 * @param RendererInterface $renderer
 * @param Product $product
 * @param Option $option
 * @param array $params
 * @return string
 */
public function render(RendererInterface $renderer, Product $product, Option $option, array $params = []): string;
```

#### validate(array $params, Option $option): Validator

Cette méthode valide les paramètres de l'option en fonction de l'option spécifique fournie.

```php
/**
 * Valide les paramètres de l'option en fonction de l'option spécifique
 * @param array $params
 * @param Option $option
 * @return Validator
 */
public function validate(array $params, Option $option): Validator;
```

#### type(): string

Cette méthode retourne le type de l'option.

```php
/**
 * Retourne le type de l'option
 * @return string
 */
public function type(): string;
```

#### unit(): string

Cette méthode retourne l'unité de mesure de l'option.

```php
/**
 * Retourne l'unité de mesure de l'option
 * @return string
 */
public function unit(): string;
```

#### primaryData(array $data): string

Cette méthode retourne les données principales de l'option en fonction des données fournies.

```php
/**
 * Retourne les données principales de l'option en fonction des données fournies
 * @param array $data
 * @return string
 */
public function primaryData(array $data): string;
```

## Exemples d'intégration

### Exemple d'option pour une adresse IP sans unité

```php
<?php

namespace App\Example\Options;

use App\Shop\Options\OptionInterface;
use ClientX\Validator;

use ClientX\Renderer\RendererInterface;
use App\Shop\Entity\Option;
use App\Shop\Entity\Product;

class IPAddressOption implements OptionInterface
{
    public function translationNameKey(): string
    {
        return 'example.ip_address';
    }

    public function value(array $params): string
    {
        return $params[$this->type()];
    }

    public function for(): array
    {
        return ['example'];
    }

    public function render(RendererInterface $renderer, Product $product, Option $option, array $params = []): string
    {
        return $renderer->render('@example/options/ipaddress', compact('product', 'option',  'params'));
    
    }

    public function validate(array $params, Option $option): Validator
    {
	    return (new Validator($params))->isIp('ip_address');
    }

    public function type(): string
    {
        return 'ip_address';
    }

    public function unit(): string
    {
        return '';
    }

    public function primaryData(array $data): string
    {
    return $data['ip_address'];
    }
}
```

### Exemple de fichier de définition du container

```php
<?php
use App\Example\Options\IPAddressOption;

return [
    'options.list' => [
        IPAddressOption::class,
        // Autres options...
    ],
    // Autres définitions du container...
];
```
