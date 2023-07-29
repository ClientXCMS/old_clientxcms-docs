# Tâche Cron

Pour exécuter des tâches planifiées sur CLIENTXCMS, vous pouvez créer une classe étendant `AbstractCron`. Cette classe définira les détails de la tâche cron tels que l'icône, le nom et l'intervalle de temps entre deux exécutions.

### Exemple de classe `ExampleSchedule`

```php
namespace App\Example\Schedules;

class ExampleSchedule extends AbstractCron
{
    protected $icon = "fa fa-clock";
    protected $name = "example_schedule";
    protected $time = 3600; // Temps en secondes (1 heure)

    public function __construct(....)
    {
    }

    public function run(): array
    {
        // Code de la tâche cron à exécuter

        // Retourne un tableau de résultats ou d'informations
        return [];
    }
}
```

Dans cet exemple, la classe `ExampleSchedule` étend `AbstractCron` et définit les propriétés suivantes :
- `$icon` : l'icône associée à la tâche cron (utilisée pour l'affichage)
- `$name` : le nom de la tâche cron
- `$time` : l'intervalle de temps entre deux exécutions de la tâche (en secondes)

La méthode `run()` doit être implémentée pour exécuter le code de la tâche cron. Vous pouvez y ajouter le code spécifique que vous souhaitez exécuter à intervalles réguliers. Elle doit retourner un tableau contenant éventuellement des résultats ou des informations supplémentaires.

La tâche sera affichée dans la page de gestions sur CLIENTXCMS avec les autres tâches

### Ajout de la classe `ExampleSchedule` au container

Pour que la tâche cron `ExampleSchedule` soit prise en compte par CLIENTXCMS, vous devez l'ajouter au container en tant que service avec la clé `"cron.schedules"`. Voici un exemple de configuration dans le fichier de configuration du container :

```php
// src/Example/config.php
use App\Example\Schedules\ExampleSchedule;

// ...

return [
    // ...
    'cron.schedules' => DI\add([
        DI\get(ExampleSchedule::class),
        // Ajoutez d'autres tâches cron ici si nécessaire
    ]),
];
```


CLIENTXCMS exécutera automatiquement les tâches cron en fonction de leur intervalle de temps spécifié. Assurez-vous que votre environnement est correctement configuré pour exécuter les tâches cron de CLIENTXCMS. 