---
sidebar_position: 1
---

# Installation PHPMyAdmin

phpMyAdmin est un outil logiciel gratuit écrit en PHP, destiné à gérer l'administration de MySQL sur le Web. phpMyAdmin prend en charge un large éventail d'opérations sur MySQL et MariaDB. Les opérations fréquemment utilisées (gestion des bases de données, des tables, des colonnes, des relations, des index, des utilisateurs, des autorisations, etc.) peuvent être effectuées via l'interface utilisateur, tandis que vous avez toujours la possibilité d'exécuter directement n'importe quelle instruction SQL.

Il est souvent utilisé pour des hébergements de serveurs de jeux avec le panel [pterodactyl](../../modules/game/Pterodactyl).

Cette page est destinée à l'installation de ce logiciel

## Connexion 
Ouvrez un logiciel de type [Putty](https://www.puttygen.com/) ou [Termius](https://termius.com/) et se connecter à votre serveur. Puis copier/coller la commande suivant pour installer directement dans le dossier public de pterodactyl

## Installation des dépendances
Executez cette commande pour installer toute les dépendances requises pour PHPMyAdmin.
```
apt-get install wget php php-cgi php-mysqli php-pear php-mbstring libapache2-mod-php php-common php-phpseclib php-mysql -y```
```
### Installation dans un dossier

#### Installation des fichiers

```

cd /var/www/pterodactyl/public
apt-get install zip unzip
wget https://files.phpmyadmin.net/phpMyAdmin/5.2.0/phpMyAdmin-5.2.0-all-languages.zip
unzip phpMyAdmin-5.2.0-all-languages.zip
rm phpMyAdmin-5.2.0-all-languages.zip
mv phpMyAdmin-5.2.0-all-languages/ phpmyadmin/
cd phpmyadmin/
cp config.sample.inc.php config.inc.php
```
#### Configuration du PHPMyAdmin

Ouvrez le fichier config.inc.php en ligne de commande ou en SFTP 
```
nano config.inc.php
```
et à `$cfg['blowfish_secret']`, modifiez la ligne par celle-ci : 

`$cfg['blowfish_secret'] =  ->     = 'tsje8870s78b441s7e7du2bg7l51yjd9';`

:::info Information
Pour plus de sécurité, nous vous recommandons fortement de générer une autre chaine de caractère que celle sur cette page; Il faut juste quelle fasse 32 caractères.
:::

### Installation sur un sous domaine
#### Création du sous domaine
Ajoutez un enregistrement A avec cette informations dans votre zone DNS:
- Type: A
- Name: phpmyadmin
- IPv4 : L'ip de votre pterodactyl
![img](https://media.discordapp.net/attachments/475073153509490689/1040939792348749874/image.png)
#### Installation des fichiers

```

cd /var/www/
apt-get install zip unzip
wget https://files.phpmyadmin.net/phpMyAdmin/5.2.0/phpMyAdmin-5.2.0-all-languages.zip
unzip phpMyAdmin-5.2.0-all-languages.zip
rm phpMyAdmin-5.2.0-all-languages.zip
mv phpMyAdmin-5.2.0-all-languages/ phpmyadmin/
cd phpmyadmin/
cp config.sample.inc.php config.inc.php
```
#### Création du Vhost
##### Apache
```bash
cd /etc/apache2/sites-available/
```
```bash
nano phpmyadmin.exemple.com.conf
```

###### Exemple de fichier de configuration
```bash

<VirtualHost *:80>
    ServerAdmin admin@example.com
    ServerName phpmyadmin.example.com
    ServerAlias www.phpmyadmin.example.com
    DocumentRoot /var/www/phpmyadmin/public
     
    <Directory /var/www/phpmyadmin/public/>
            Options Indexes FollowSymLinks MultiViews
            AllowOverride All
            Order allow,deny
            allow from all
            Require all granted
    </Directory>
     
    LogLevel debug
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
```dockerfile
a2ensite phpmyadmin.exemple.com.conf
```
Enfin, relancez votre serveur apache pour que vos modifications soient prises en compte.

```sudo service apache2 restart```

#### Nginx
Connectez-vous en SSH à votre machine virtuelle et exécutez ces commandes
```bash
cd /etc/nginx/conf.d/
```
```bash
nano phpmyadmin.exemple.com.conf
```
##### Exemple de fichier de configuration
```bash
server {
    listen 80;
    listen [::]:80;
    server_name phpmyadmin.exemple.com;
    root /var/www/phpmyadmin;
 
    index index.php;
 
    charset utf-8;
 
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
 
    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }
 
    error_page 404 /index.php;
 
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }
 
    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

Enfin, relancez votre serveur nginx pour que vos modifications soient prises en compte.

```sudo service nginx restart```
#### Configuration du PHPMyAdmin

Ouvrez le fichier config.inc.php en ligne de commande ou en SFTP
```
nano config.inc.php
```
et à `$cfg['blowfish_secret']`, modifiez la ligne par celle-ci :

`$cfg['blowfish_secret'] =  ->     = 'tsje8870s78b441s7e7du2bg7l51yjd9';`

:::info Information
Pour plus de sécurité, nous vous recommandons fortement de générer une autre chaine de caractère que celle sur cette page; Il faut juste quelle fasse 32 caractères.
:::
