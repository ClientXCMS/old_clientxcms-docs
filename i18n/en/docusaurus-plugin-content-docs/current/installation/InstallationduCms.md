---
sidebar_position: 4
---

# Install CLIENTXCMS

### Download CLIENTXCMS

To download CLIENTXCMS : 
1. Log in to your customer area
2. On your dashboard, click on "Download".
3. Choose the download starting with "CLIENTXCMS". This will be the latest release

### Downloading a previous version

To download a previous version of CLIENTXCMS, open a request to download the requested version.

### Database creation
CLIENTXCMS uses MySQL® to store data. You can create one during installation or after. 
[More information](https://clientxcms.com/docs/fr/database)

- Creating a database with cPanel ](https://docs.cpanel.net/cpanel/databases/mysql-database-wizard/)
- Creating a database with Plesk](https://docs.plesk.com/en-US/17.0/customer-guide/advanced-website-databases.69535/)

### Database Privilege
The following privileges are required:

![image](https://media.discordapp.net/attachments/762642627286794260/963035522308137000/unknown.png)

### Installation de CLIENTXCMS

Pour installer CLIENTXCMS, vous pouvez suivre ce processus : 
- Extract de l'archive dans un dossier sur votre ordinateur
- Transférer les fichiers sur votre serveur web (Plesk ou VPS)
  <br/>
  -Si vous etes sur un VPS assurer vous de bien donner les droits a votre serveur web (Apache ou Nginx) au dossier dajns lequel vous avez installer les fichier du cms. 
  <br/>
  Utiliser la commande : 
```twig
sudo chown -R www-data:www-data Votredossier
```
- Télécharger les dépendances via [composer](https://docs.clientxcms.com/docs/installation/Composer)
- [Modifier la racine du serveur web](https://docs.clientxcms.com/docs/installation/DocumentRoot)
- Vous devez aussi activer une extension apache pour pouvoir utiliser corectemenet clientx
  ```
  sudo a2enmod rewrite
  sudo service apache2 restart
  ```

- Ouvrez votre navigateur et rendez-vous sur [https://domain.fr](https://domain.fr) pour lancer l'installation.
- Enter the information requested and enter your license key.
After this, you will be automatically logged into the administration panel.
 