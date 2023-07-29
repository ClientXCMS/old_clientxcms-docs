# Gestion de la base de données
Phinx est un outil de gestion de base de données pour PHP, qui facilite les tâches de migration et de seeding. Il vous permet de versionner votre schéma de base de données et de le mettre à jour facilement au fil du temps.

## Migrations

Les migrations sont des fichiers qui décrivent les modifications du schéma de votre base de données. Chaque migration représente une étape dans l'évolution de votre schéma. Phinx utilise une convention de nommage pour les fichiers de migration, qui incluent un horodatage pour les identifier de manière unique.

Voici un exemple de fichier de migration pour créer une table "example" :

```shell
./vendor/bin/phinx create CreateExamplesTable
```

```php
<?php
// /src/Example/db/migrations/20230706094500_create_examples_table.php

use Phinx\Migration\AbstractMigration;

class CreateExamplesTable extends AbstractMigration {

	public function change() {
		$table = $this->table('examples');
		$table
		->addColumn('name', 'string')
		->addColumn('price', 'float', ['precision' => 10, 'scale' => 2])                 ->addTimestamp()
		->create();
	}
}
```

Plus d'information sur phinx  [ici](https://book.cakephp.org/phinx/0/en/migrations.html)

Pour exécuter les migrations, utilisez la commande suivante :

```bash
./vendor/bin/phinx migrate
```


Phinx exécutera les migrations qui n'ont pas encore été appliquées à votre base de données.

## Seeders

Les seeders sont des fichiers qui permettent de peupler votre base de données avec des données initiales. Ils sont utiles pour insérer des enregistrements par défaut ou des données de test.

Voici un exemple de fichier de seeder pour ajouter des enregistrement dans la table "examples" :

```bash
./vendor/bin/phinx seed:create ExampleSeeder
```

```php
<?php // /src/Example/db/seeders/ExampleSeeder.php
use Phinx\Seed\AbstractSeed;

class ExampleSeeder extends AbstractSeed {

	public function run(){
	  
        $data = [
            [
                'body'    => 'foo',
                'created' => date('Y-m-d H:i:s'),
            ],[
                'body'    => 'bar',
                'created' => date('Y-m-d H:i:s'),
            ]
        ];

        $posts = $this->table('examples');
        $posts->insert($data);
	}
```


Pour exécuter les seeders, utilisez la commande suivante :

```bash
./vendor/bin/phinx seed:run
```