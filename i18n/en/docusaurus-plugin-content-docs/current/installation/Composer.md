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

For more information about composer: https://getcomposer.org/

## Install dependencies in cli

Make sure you have Composer installed on your machine, run the command: 
``twig
compose
```
or
twig
./composer.phar
```
 If it doesn't find the command, install Composer with the help of the [Installing Composer] part (#installing-composer-on-a-vps-address)

Go to your folder where CLIENTXCMS is located. 
Run this command 
```twig
composer install --optimize-autoloader --no-dev
``` 
:::caution
Some `warning` messages should be displayed, don't worry, it doesn't impact the CMS
:::
or adapt it to suit your situation.

Warning" messages should be displayed, don't worry, it doesn't impact the CMS.

## Installing Composer at Ionos

If you are on Ionos, the installation is more complicated. 

We advise you to follow this [tutorial](https://www.ionos.com/community/hosting/php/using-php-composer-in-11-ionos-webhosting-packages/) which will explain it to you.

Don't forget to adapt the command to your php version: if you are using php 7.4 replace ``/usr/bin/php7.1-cli`` by ``/usr/bin/php7.4-cli`` and this in each command.

Before each **compose** command add ``/usr/bin/php7.4-cli`` followed by a space in front of each command (*adapt version of php*)
