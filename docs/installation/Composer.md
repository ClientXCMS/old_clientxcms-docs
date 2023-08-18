---
sidebar_position: 3
---

Composer est essentiel pour CLIENTXCMS. Il permet d'installer les dépendances du projet et assurer son bon  

## Installer les dépendances via Plesk

- Rendez-vous dans votre hébergement
- Cliquez sur "PHP Composer", Plesk va trouver tout seul le ```package.json```
- Il ne sera donc que nécessaire de cliquer sur Installer.

(*dans certains cas, il est possible que vous deviez faire un scan dans la section composer*)

## Installation de Composer sur un VPS


### Utiliser composer sans l'installer sur la machine 

Exécutez ces commandes dans le répertoire où vous avez installé ClientXCMS.

```shell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

Et vérifiez que la commande réponde correctement :
```shell
./composer.phar
``` 


### Installation depuis APT

Effectuer cette commande pour installer COMPOSER sur l'entièreté de votre machine
```shell
sudo apt-get install composer
```

Il sera disponible maintenant avec la commande : 
```shell
composer
```

Pour plus d'informations à propos de COMPOSER : https://getcomposer.org/

## Installer les dépendances en CLI

Assurez-vous d'avoir bien COMPOSER d'installé sur votre machine sinon [installez le avec APT](#installation-depuis-apt)

Rendez-vous dans votre dossier où se trouve CLIENTXCMS.
```shell
cd /var/www/clientxcms
```
Exécutez cette commande : 
```shell
composer install --optimize-autoloader --no-dev
``` 
:::caution attention
Des messages `alertes` devraient être affichés, pas d'inquiétude, cela n'impacte pas le bon fonctionnement de CLIENTXCMS
:::

## Installation de Composer chez Ionos

Si vous êtes chez Ionos, l'installation est plus compliquée. 

Nous vous conseillons de suivre ce [tutoriel](https://www.ionos.com/community/hosting/php/using-php-composer-in-11-ionos-webhosting-packages/) qui vous l'expliquera.

N'oubliez pas d'adapter la commande à votre version de php : si vous utilisez php 8.1 remplacez ```/usr/bin/php8.1-cli``` par ```/usr/bin/php8.1-cli``` et cela dans chaque commande.

Avant chaque commande COMPOSER ajoutez ```/usr/bin/php8.1-cli``` suivi d'un espace devant chaque commande (*adaptez la version de php*)


## Installation de composer sur cPanel


