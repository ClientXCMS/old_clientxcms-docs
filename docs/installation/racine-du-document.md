---
sidebar_position: 5
---
# Changer la racine du document

Veuillez vous assurer, comme dans la configuration ci-dessous, que votre serveur Web dirige toutes les requêtes vers le fichier `public/index.php` de votre ClientXCMS. Vous ne devriez jamais essayer de déplacer le fichier index.php à la racine de votre projet, car cela exposera de nombreux fichiers de configuration sensibles à l'Internet

Dans les exemples de cette page nous prendrons FakeHosting, un hébergeur factice ayant comme nom de domaine (factice) example.com
## Changer depuis plesk
La documentation officielle de plesk fournit un article complet sur la [Modification de la racine du serveur web dans plesk](https://docs.plesk.com/fr-FR/onyx/administrator-guide/h%C3%A9bergement-web/structure-des-r%C3%A9pertoires-de-sites-web/d%C3%A9finir-une-racine-du-document-personnalis%C3%A9e.77500/)
![image](https://docs.plesk.com/fr-FR/onyx/administrator-guide/images/77501.webp)

### Exemple
En cas d'installation sur domaine principal:
`httpdocs/public`

En cas d'installation sur un sous domaine : 
```manager.example.com/public```

Adaptez-le avec vos propres dossiers déjà existants.

## Depuis cPanel

Après s'être connecté sur l'interface cPanel, dans la page domaines (ou sous-domaines), dans la colonne **racines du document**
Modifier la a l'aide de l'icone de stylo.
![image](https://media.discordapp.net/attachments/926274245225504779/954686279830888458/cpanel.png)

### Exemple
En cas d'installation sur domaine principal:
`public_html/public`

En cas d'installation sur un sous domaine :
```public_html/manager/public```
Adaptez-le avec vos propres dossiers déjà existants.

## Depuis un serveur web

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx" label="Nginx">

Connectez-vous en SSH à votre machine virtuelle et exécutez ces commandes
```bash
nano /etc/nginx/sites-available/manager.example.com.conf
```
#### Exemple de fichier de configuration
```bash
server {
    listen 80;
    listen [::]:80;
    server_name manager.example.com;
    root /var/www/manager.example.com/public;
 
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
Maintenant il faut activer le vhost mainenant

```sudo ln -s /etc/nginx/sites-available/manager.example.com.conf /etc/nginx/sites-enabled/```

Enfin, relancez votre serveur nginx pour que vos modifications soient prises en compte.

```sudo service nginx restart```


</TabItem>

<TabItem value="apache" label="Apache">

Connectez-vous en SSH à votre machine virtuelle et exécutez ces commandes
```bash
cd /etc/apache2/sites-available/
```
```bash
nano manager.example.com.conf
```
#### Exemple de fichier de configuration
```bash

<VirtualHost *:80>
    ServerAdmin admin@example.com
    ServerName manager.example.com
    ServerAlias www.manager.example.com
    DocumentRoot /var/www/manager.example.com/public
     
        <Directory />
                Options FollowSymLinks
                AllowOverride All
        </Directory>
        <Directory /var/www/manager.example.com/public>
                Options FollowSymLinks MultiViews
                AllowOverride All
                Order allow,deny
                allow from all
        </Directory>

     
    LogLevel debug
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Activer votre vhost

```sudo a2ensite manager.example.com.conf```

Enfin, relancez votre serveur apache pour que vos modifications soient prises en compte.

```sudo service apache2 restart```

</TabItem>

</Tabs>
