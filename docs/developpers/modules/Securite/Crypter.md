
La classe `ClientX\Crypt\Crypter` permet d'encoder et de décoder un contenu en utilisant une clé d'application. L'encodage est utile pour sécuriser les données sensibles, comme les mots de passe, dans votre application. Il est important de conserver la clé d'application de manière sécurisée, car elle est nécessaire pour décoder les données.

## Configuration

Pour utiliser la classe `Crypter`, vous devez avoir définir la clé d'application dans votre fichier `.env`. Cette clé sera utilisée pour l'encodage et le décodage des données. Par défault cette clé est générée par la classe mais disponible dans le fichier .env
```bash
APP_KEY=base
```
## Méthodes de la classe

### `encrypt($plain)`

Cette méthode permet d'encoder un contenu en utilisant la clé d'application. Le paramètre `$plain` représente le contenu à encoder.

Exemple d'utilisation :

```php
use ClientX\Crypt\Crypter;

$crypter = new Crypter();
$encrypted = $crypter->encrypt('secret_data');
```

Dans cet exemple, nous utilisons la méthode `encrypt()` pour encoder la chaîne de caractères `'secret_data'`. Le résultat est stocké dans la variable `$encrypted`.

### `decrypt($encrypted)`

Cette méthode permet de décoder un contenu encodé en utilisant la clé d'application. Le paramètre `$encrypted` représente le contenu encodé à décoder.

Exemple d'utilisation :

```php
use ClientX\Crypt\Crypter;

$crypter = new Crypter();
$decrypted = $crypter->decrypt($encrypted);
```

Dans cet exemple, nous utilisons la méthode `decrypt()` pour décoder le contenu encodé `$encrypted`. Le résultat est stocké dans la variable `$decrypted`.

## Exemple avec une entité


```php
namespace App\Example\Entity\Example;

use ClientX\Crypt\Crypter;

class Example
{
    private $password;
    /**
    * La données qui rentre dans l'entité vient de la base de données et donc crypté 
    */
    public function setPassword($encrypt)
    {
        $crypter = new Crypter();
        $encrypted = $crypter->decrypt($encrypt);
        // La valeur est maintenant décrypter 
        $this->password = $encrypted;
    }

    public function getPassword()
    {
	    return $this->password;
    }

}
```
