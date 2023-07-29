
# Gestions des formulaires
CLIENTXCMS permet de générer facilement des champs de formulaire HTML et de gérer les erreurs de validation. Des fonctions Twig pour générer différents types de champs tels que des cases à cocher, des zones de texte, des champs d'entrée, sont disponible.


## Signature de la fonctions

```php
public function field(
    array $context,
    string $key,
    $value,
    ?string $label = null,
    ?array $options = [],
    array $attributes = []
): string
```

- `$context` : Le contexte de la vue Twig. Cela est passé automatiquement par Twig lors de l'appel de la fonction.
- `$key` : La clé du champ. C'est le nom qui sera utilisé pour l'attribut `name` du champ.
- `$value` : La valeur du champ. C'est la valeur actuelle qui sera affichée dans le champ.
- `$label` (optionnel) : Le label du champ. C'est le texte qui sera affiché à côté du champ.
- `$options` (optionnel) : Un tableau d'options pour personnaliser le champ.
- `$attributes` : Un tableau d'attributs HTML supplémentaires à ajouter à l'élément `<input>`.

Options disponibles dans le tableau `$options` :

- `'help'` : Permet de spécifier un texte d'aide qui sera affiché en bas du champ.
- `'prefix'` : Permet de spécifier un préfixe qui sera affiché avant le champ, par exemple pour ajouter un caractère spécial ou un symbole.
- `'container_class'` : Permet de changer la classe du conteneur qui englobe le champ. Cela peut être utile pour appliquer des styles personnalisés.
- `'label_class'` : Permet de changer la classe du label du champ. Cela peut être utilisé pour appliquer des styles spécifiques au label.
- `'placeholder'` : Permet de spécifier un texte de placeholder qui sera affiché dans le champ lorsque celui-ci est vide.

Vous pouvez ajouter ces options dans le tableau `$options` pour personnaliser le champ selon vos besoins. Les attributs HTML supplémentaires peuvent être spécifiés dans le tableau `$attributes` pour ajouter des attributs tels que `class`, `id`, `readonly`, `disabled`, etc.

N'oubliez pas d'adapter le code en fonction de votre propre implémentation et configuration.
En premier paramètres, le contexte twig qui est déjà injecté,

#### Génération d'un champ textarea
```twig
{{ field('message', message, 'Message', { 'type': 'textarea' }, { 'rows': 4, 'class': 'form-control-lg', 'placeholder': 'Entrez votre message...'}) }}
```


#### Génération d'un champ select
```twig
{{ field('message', message, 'Message', { 'options': {'key1': 'value1', 'key2': 'value2'} }) }}
```


#### Génération d'un champ de case à cocher (checkbox)

```twig
{{ custom_checkbox('agree', true, 'J\'accepte les conditions d\'utilisation') }}
```

La fonction `custom_checkbox` génère un champ de case à cocher avec une étiquette associée. Vous pouvez spécifier le nom de la case à cocher, sa valeur par défaut, le texte de l'étiquette et  une couleur Bootstrap (par défaut : "success").

#### Génération d'un champ caché (hidden)

```twig
{{ custom_hidden('hidden_field', 'Valeur cachée') }}
```

La fonction `custom_hidden` génère un champ caché avec une valeur par défaut. Vous pouvez spécifier le nom du champ caché et sa valeur.

#### Génération d'un champ de formulaire générique

```twig
{{ field('username', user.username, 'Nom d\'utilisateur') }}
```

La fonction `field` génère un champ de formulaire générique en fonction des options spécifiées. les paramètres nécessaires tels que la clé du champ, la valeur par défaut, l'étiquette du champ, les options supplémentaires et les attributs HTML.

Dans l'exemple ci-dessus, nous générons un champ de texte avec la clé `'username'`, la valeur par défaut `user.username` (récupérée du contexte), l'étiquette "Nom d'utilisateur" et les options supplémentaires spécifiées (ici, le type de champ est défini sur "text" mais peut être définis sur "number", "date", "password", etc).

### Gestion des erreurs de validation

CLIENTXCMS prend également en charge la gestion des erreurs de validation. Si une erreur de validation est présente pour un champ donné, un message d'erreur sera affiché à côté du champ en utilisant infrascture Bootstrap
Plus d'informations sur la validation des données sur la page dédiée


```twig
{{ field('username', user.username, 'Nom d\'utilisateur') }}
```
