# Table
La classe `ClientX\Database\Table` permet de gérer les interactions avec la base de données. Les méthodes d'insertion, suppression, edition y sont implémenter facilement avec une classe Builder `ClientX\Database\Query` qui renvoie une classe `ClientX\Database\QueryResult`

## Classe Table

```php 
// src/Example/Database/ExampleTable.php
namespace App\Example\Database;

use App\Example\Entity\Example;
use ClientX\Database\Table;

class ExampleTable extends Table
{
    protected $table = 'examples';
    protected $entity = Example::class;


	public function findActive(): Query
	{
		return $this->makeQuery()->where('active = 1');
	}
}
```

## Classe Action 
```php
// src/Example/Actions/ExampleAction.php
namespace App\Example\Actions;

use ClientX\Database\ExampleTable;
use ClientX\Action;

class ExampleAction extends Action
{
    private ExampleTable $exampleTable;

    public function __construct(ExampleTable $exampleTable)
    {
        $this->exampleTable = $exampleTable;
    }

    public function __invoke()
    {
        $results = $this->exampleTable->fetchAll();
        // traitement des données
    }
}
```

## Méthodes de la classe

### `from(string $table, ?string $alias = null): Query`

La méthode `from()` spécifie la table source pour la requête SELECT. Elle accepte le nom de la table en tant que premier argument et éventuellement un alias de table en tant que deuxième argument.  Elle accepte le nom de l'entité en tant que paramètre. Par Default la table celle définis dans  `protected $table`

Exemple d'utilisation :

```php
$query->from('users', 'u');
```

Dans cet exemple, nous spécifions la table "users" avec un alias "u" pour la requête SELECT.

### `select(string ...$fields): Query`

La méthode `select()` spécifie les colonnes à sélectionner dans la requête SELECT. Elle accepte un nombre variable d'arguments représentant les noms des colonnes.

Exemple d'utilisation :

```php
$query->select('id', 'name', 'email');
```

Dans cet exemple, nous sélectionnons les colonnes "id", "name" et "email" dans la requête SELECT.

### `limit(int $length, int $offset = 0): Query`

La méthode `limit()` spécifie la limite et le décalage pour la requête SELECT. Elle accepte la longueur de la limite en tant que premier argument et éventuellement le décalage en tant que deuxième argument.

Exemple d'utilisation :

```php
$query->limit(10, 20);
```

Dans cet exemple, nous spécifions une limite de 10 enregistrements à partir du décalage de 20 dans la requête SELECT.

### `group(string $group): Query`

La méthode `group()` spécifie la clause GROUP BY pour la requête SELECT. Elle accepte une chaîne représentant la clause GROUP BY.

Exemple d'utilisation :

```php
$query->group('category_id');
```

Dans cet exemple, nous spécifions la clause GROUP BY sur la colonne "category_id" dans la requête SELECT.

### `order(string $order): Query`

La méthode `order()` spécifie la clause ORDER BY pour la requête SELECT. Elle accepte une chaîne représentant la clause ORDER BY.

Exemple d'utilisation :

```php
$query->order('created_at DESC');
```

Dans cet exemple, nous spécifions la clause ORDER BY sur la colonne "created_at" en ordre décroissant dans la requête SELECT.

### `join(string $table, string $condition, string $type = "left"): Query`

La méthode `join()` spécifie une jointure de table pour la requête SELECT. Elle accepte le nom de la table à joindre, la condition de jointure et éventuellement le type de jointure (par défaut "left").

Exemple d'utilisation :

```php
$query->join('orders', 'users.id = orders.user_id', 'inner');
```

Dans cet exemple, nous effectuons une jointure interne entre les tables "users" et "orders" sur la condition "users.id = orders.user_id" dans la requête SELECT.

### `where(string ...$condition): Query`

La méthode `where()` spécifie la clause WHERE pour la requête SELECT. Elle accepte un nombre variable d'arguments représentant les conditions WHERE.

Exemple d'utilisation :

```php
$query->where('age > 18', 'gender = "female"');
```

Dans cet exemple, nous spécifions les conditions WHERE "age > 18" et "gender = 'female'" dans la requête SELECT.

### `into(string $entity): Query`

La méthode `into()` spécifie l'entité à utiliser pour l'hydratation des résultats de la requête SELECT. Elle accepte le nom de l'entité en tant que paramètre. Par Default l'entité utilisé est l'entité définis dans  `protected $entity`

Exemple d'utilisation :

```php
$query->into('App\Entities\User');
```

Dans cet exemple, nous spécifions que les résultats de la requête SELECT doivent être hydratés en utilisant l'entité "App\Entities\User".

### `count(): int`

La méthode `count()` exécute la requête SELECT et renvoie le nombre total d'enregistrements correspondants.

Exemple d'utilisation :

```php
$count = $query->count();
```

Dans cet exemple, nous exécutons la requête SELECT et stockons le nombre total d'enregistrements dans la variable `$count`.

### `

### `first()`

La méthode `first()` exécute la requête SELECT et renvoie le premier enregistrement correspondant.

Exemple d'utilisation :

```php
$record = $query->first();
```

Dans cet exemple, nous exécutons la requête SELECT et stockons le premier enregistrement correspondant dans la variable `$record`. Si aucun enregistrement n'est trouvé, une exception `NoRecordException` est levée

### `params(array $params): Query`

La méthode `params()` spécifie les paramètres à utiliser dans la requête SQL. Elle accepte un tableau associatif de paramètres.

Exemple d'utilisation :

```php
$query->params(['id' => 1, 'name' => 'John']);
```

Dans cet exemple, nous spécifions les paramètres "id" et "name" avec les valeurs correspondantes dans la requête SQL.

### `setParameter(string $key, $value): Query`

La méthode `setParameter()` spécifie un seul paramètre à utiliser dans la requête SQL. Elle accepte la clé du paramètre et sa valeur.

Exemple d'utilisation :

```php
$query->setParameter('id', 1);
$query->setParameter('name', 'John');
```

Dans cet exemple, nous spécifions les paramètres "id" et "name" avec les valeurs correspondantes dans la requête SQL.

### `fetchAll(): QueryResult`

La méthode `fetchAll()` exécute la requête SELECT et renvoie tous les enregistrements correspondants sous la forme d'un objet `QueryResult`.

Exemple d'utilisation :

```php
$result = $query->fetchAll();
```

Dans cet exemple, nous exécutons la requête SELECT et stockons les résultats dans la variable `$result`.

### `exists(string $field, $value): bool`

La méthode `exists()` vérifie si un enregistrement existe dans la base de données en fonction d'une condition donnée. Elle accepte le nom du champ à vérifier et sa valeur.

Exemple d'utilisation :

```php
$exists = $query->exists('id', 1);
```

Dans cet exemple, nous vérifions si un enregistrement avec l'ID 1 existe dans la base de données.

### `existId(int $id): bool`

La méthode `existId()` vérifie si un enregistrement avec un ID donné existe dans la base de données. Elle accepte l'ID de l'enregistrement à vérifier.

Exemple d'utilisation :

```php
$exists = $query->existId(1);
```

Dans cet exemple, nous vérifions si un enregistrement avec l'ID 1 existe dans la base de données.

### `existsBy(string $field, $value): bool`

La méthode `existsBy()` vérifie si un enregistrement existe dans la base de données en fonction d'une condition donnée. Elle accepte le nom du champ à vérifier et sa valeur.

Exemple d'utilisation :

```php
$exists = $query->existsBy('email', 'john@example.com');
```

Dans cet exemple, nous vérifions si un enregistrement avec l'e-mail "john@example.com" existe dans la base de données.

### `fetchOrFail()`

La méthode `fetchOrFail()` exécute la requête SELECT et renvoie le premier enregistrement correspondant. Si aucun enregistrement n'est trouvé, elle lève une exception `NoRecordException`.

Exemple d'utilisation :

```php
$record = $query->fetchOrFail();
```

Dans cet exemple, nous exécutons la requête SELECT et stockons le premier enregistrement correspondant dans la variable `$record`. Si aucun enregistrement n'est trouvé, une exception `NoRecordException` est levée.

### `paginate(int $perPage, int $currentPage = 1): Pagerfanta`

La méthode `paginate()` exécute la requête SELECT et renvoie un objet `Pagerfanta` pour la pagination des résultats. Elle accepte le nombre d'enregistrements par page et éventuellement la page courante.

Exemple d'utilisation :

```php
$paginator = $query->paginate(10, 1);
```

Dans cet exemple, nous exécutons la requête SELECT et renvoyons un objet `Pagerfanta` pour paginer les résultats avec 10 enregistrements par page et la première page.

### `fetch()`

La méthode `fetch()` exécute la requête SELECT et renvoie le premier enregistrement correspondant. Si aucun enregistrement n'est trouvé, elle renvoie `false`.

Exemple d'utilisation :

```php
$record = $query->fetch();
```

Dans cet exemple, nous exécutons la requête SELECT et stockons le premier enregistrement correspondant dans la variable `$record`. Si aucun enregistrement n'est trouvé, `false` est renvoyé.

### `raw(string $query)`

La méthode `raw()` permet d'exécuter une requête SQL personnalisée en spécifiant directement la requête en tant que chaîne. Elle remplace toutes les autres clauses de la requête, telles que SELECT, WHERE, etc.

Exemple d'utilisation :

```php
$query->raw('SELECT * FROM users WHERE age > 18');
```

Dans cet exemple, nous exécutons une requête SELECT personnalisée qui sélectionne tous les enregistrements de la table "users" où l'âge est supérieur à 18.

### `appendRaw(string $query)`

La méthode `appendRaw()` permet d'ajouter une requête SQL personnalisée à la requête existante en spécifiant directement la requête en tant que chaîne.

Exemple d'utilisation :

```php
$query->appendRaw('LIMIT 10');
```

Dans cet exemple, nous ajoutons une clause LIMIT à la requête existante pour limiter les résultats à 10 enregistrements.

### `__toString(): string`

La méthode `__toString()` retourne la requête SQL sous forme de chaîne de caractères. Cela permet de voir la requête SQL générée avec les paramètres correspondants.

Exemple d'utilisation :

```php
echo $query;
```

Dans cet exemple, nous affichons la requête SQL générée avec les paramètres correspondants.

## Conclusion

La classe `Query` fournit des méthodes puissantes pour construire et exécuter des requêtes SQL à l'aide de PDO. Elle simplifie l'interaction avec la base de données en vous permettant de spécifier facilement les tables, les colonnes, les conditions WHERE, les jointures, les limites, les tris, etc. De plus, elle facilite l'hydratation des résultats dans des objets d'entité correspondants.

N'hésitez pas à explorer la classe `Query` et à l'utiliser dans vos projets pour interagir avec la base de données de manière simple et efficace.