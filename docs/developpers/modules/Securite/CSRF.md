
Le CSRF est une technique d'attaque qui exploite la confiance accordée par un site Web à un utilisateur authentifié. Pour prévenir les attaques CSRF, CLIENTXCMS propose une protection intégrée basée sur l'utilisation de jetons CSRF.

## Activation de la protection CSRF

La protection CSRF est activée par défaut sur toutes les méthodes HTTP POST, DELETE et PUT. Cela signifie que chaque fois qu'une requête est envoyée avec l'une de ces méthodes, le serveur vérifie si un jeton CSRF valide est inclus dans la requête.

## Utilisation des jetons CSRF dans les formulaires Twig

Pour inclure un jeton CSRF dans un formulaire Twig, vous pouvez utiliser la fonction `{{ csrf_input() }}` pour générer un élément `<input>` contenant le jeton CSRF, ou `{{ csrf_token() }}` pour obtenir uniquement la valeur du jeton sans l'élément `<input>`.

Exemple de formulaire avec l'élément `<input>` du jeton CSRF :

```twig
<form method="POST">
    {{ csrf_input() }}
    <!-- Autres champs du formulaire -->
    <button type="submit">Soumettre</button>
</form>
```

Exemple de formulaire avec uniquement la valeur du jeton CSRF :

```twig
<form method="POST">
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
    <!-- Autres champs du formulaire -->
    <button type="submit">Soumettre</button>
</form>
```

## Désactivation de la protection CSRF pour une URL spécifique

Dans certaines situations, vous pouvez avoir besoin de désactiver la protection CSRF pour une URL spécifique. Pour ce faire, vous pouvez utiliser le conteneur d'injection de dépendances de CLIENTXCMS et ajouter une clé `'csrf.except'` contenant l'URL ou le chemin que vous souhaitez exclure de la vérification CSRF.

Exemple de désactivation du CSRF pour une URL :

```php
<?php
return [
    'csrf.except' => DI\add('example.post'),
];
```

Dans cet exemple, la vérification CSRF sera désactivée pour la route example.post. Veuillez noter que cette désactivation doit être utilisée avec précaution et uniquement lorsque cela est nécessaire.

La protection CSRF intégrée dans CLIENTXCMS offre une couche de sécurité supplémentaire en empêchant les attaques par falsification de requêtes intersites. Veillez à activer et à utiliser correctement la protection CSRF dans vos formulaires et à désactiver uniquement lorsque cela est absolument nécessaire.