---
sidebar_position: 3
---
# Changing the document root

Please ensure, as in the configuration below, that your web server directs all requests to the `public/index.php` file in your ClientXCMS. You should never try to move the index.php file to the root of your project, as this will expose many sensitive configuration files to the Internet

In the examples on this page we will take FakeHosting, a dummy host with the (dummy) domain name example.com
## Change from plesk
The official plesk documentation provides a complete article on [Changing the web server root in plesk](https://docs.plesk.com/fr-FR/onyx/administrator-guide/h%C3%A9bergement-web/structure-des-r%C3%A9pertoires-de-sites-web/d%C3%A9finir-une-racine-du-document-personnalis%C3%A9e.77500/)
![image](https://docs.plesk.com/fr-FR/onyx/administrator-guide/images/77501.webp)

### Example
In case of installation on main domain:
`httpdocs/public`

In case of installation on a subdomain : 
``manager.example.com/public``

Adapt it with your own existing folders.

## From cPanel

After logging into the cPanel interface, in the domains (or subdomains) page, in the **document roots** column
Modify it with the pen icon.
![image](https://media.discordapp.net/attachments/926274245225504779/954686279830888458/cpanel.png)

### Example
In case of installation on main domain:
`public_html/public`

In case of installation on a subdomain :
``public_html/manager/public``
Adapt it with your own existing folders.

## From a web server
### Apache
SSH into your virtual machine and run these commands
bash
cd /etc/apache2/sites-available/
```
``bash
nano manager.example.com.conf
```
#### Example configuration file
```bash

<VirtualHost *:80>
    ServerAdmin admin@example.com
    ServerName manager.example.com
    ServerAlias www.manager.example.com
    DocumentRoot /var/www/manager.example.com/public
     
    <Directory /var/www/manager.example.com/public/>
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

Finally, restart your apache server so that your changes take effect.

```sudo service apache2 restart``
### Nginx 
SSH into your virtual machine and run these commands
``bash
cd /etc/nginx/conf.d/
```
``bash
nano manager.example.com.conf
```
#### Example
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
    location = /robots.txt { access_log off; log_not_found off; }
 
    error_page 404 /index.php;
 
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }
 
    location ~ /(?!well-known).* {
        deny all;
    }
}
```

Finally, restart your nginx server so that your changes take effect.

```sudo service nginx restart```