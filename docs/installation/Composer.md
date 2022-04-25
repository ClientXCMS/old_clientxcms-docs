---
sidebar_position: 5
---

<br/>
Composer est essentiel pour **CLIENTXCMS**. 

## Installer les dépendances via Plesk

- Rendez-vous dans votre hébergement
- Cliquez sur "PHP Composer" , Plesk va trouver tout seul le ```package.json```
- Il ne sera donc que nécéssaire de cliquer sur Installer.

(*dans certains cas, il est possible que vous deviez faire un scan dans la section composer*)

## Installation de Composer sur un VPS / Dédier


### Utiliser composer sans l'installer sur la machine 

Exécutez ces commandes dans le répertoir ou vous avez installer ClientXCMS.

```twig
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```

```twig
php composer-setup.php
```

```twig
php -r "unlink('composer-setup.php');"
```

Et vérifiez que la commande réponde correctement: <br/> 
```twig
./composer.phar
``` 


### Installation depuis apt

Effectuer cette commande pour installaler Composer sur l'entièreter de votre machine
```twig
sudo apt-get install composer
```

Pour plus d'informations à propos de composer : https://getcomposer.org/

## Installer les dépendances en cli

Assurez-vous d'avoir bien Composer d'installé sur votre machine, executez la commande: 
```twig
composer
```
ou
```twig
./composer.phar
```
 Si il ne trouve pas la commande, installez Composer en vous aidant de la partie [Installation de composer](#installation-de-composer-sur-un-vps--dédier)

Rendez-vous dans votre dossier où se trouve CLIENTXCMS. 
Exécutez cette commande 
```twig
composer install --optimize-autoloader --no-dev
``` 
:::caution attention
Des messages `warning` devraient êtres affichés, pas d'inquiétude, cela n'impacte pas le CMS
:::
ou adaptez-la pour convenir à votre situation.

Des messages "warning" devraient êtres affichés, pas d'inquiétude, cela n'impacte pas le CMS.

## Installation de Composer chez Ionos

Si vous êtes chez Ionos, l'installation est plus compliquée. 

Nous vous conseillons de suivre ce [tutoriel](https://www.ionos.com/community/hosting/php/using-php-composer-in-11-ionos-webhosting-packages/) qui vous l'expliquera.

N'oubliez pas d'adapter la commande à votre version de php : si vous utilisez php 7.4 remplacez ```/usr/bin/php7.1-cli``` par ```/usr/bin/php7.4-cli``` et cela dans chaque commande.

Avant chaque commande **composer** ajoutez ```/usr/bin/php7.4-cli``` suivi d'un espace devant chaque commande (*adaptez la version de php*)
