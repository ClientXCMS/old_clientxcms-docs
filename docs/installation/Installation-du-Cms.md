---
sidebar_position: 4
---

# Installer CLIENTXCMS

### Téléchargement CLIENTXCMS

Pour télécharger CLIENTXCMS : 
1. Connectez-vous sur votre espace client
2. Sur votre tableau de bord, cliquez sur "Licences"
3. Cliquez sur "Installer" puis télécharger l'archive
![img](https://media.discordapp.net/attachments/475073153509490689/1047231791196536922/image.png)
### Téléchargement de version antérieur

Pour télécharger une version antérieure de CLIENTXCMS, ouvrez une demande pour télécharger la version demandée.

### Création de base de données
CLIENTXCMS utilise MySQL® pour sauvegarder les données. Vous pouvez en créer une lors d'une installation ou après.

- [Création de base de données avec cPanel ](https://docs.cpanel.net/cpanel/databases/mysql-database-wizard/)
- [Création de base de données avec Plesk](https://docs.plesk.com/en-US/17.0/customer-guide/advanced-website-databases.69535/)

### Privilège de la base de données
Les privilèges suivants sont requis :

![image](https://media.discordapp.net/attachments/762642627286794260/963035522308137000/unknown.png)

### Installation de CLIENTXCMS

Pour installer CLIENTXCMS, vous pouvez suivre ce processus : 
- Extract de l'archive dans un dossier sur votre ordinateur
- Transférer les fichiers sur votre serveur web (Plesk ou VPS)
  <br/>
  -Si vous etes sur un VPS assurer vous de bien donner les droits à votre serveur web (Apache ou Nginx) au dossier dajns lequel vous avez installer les fichier du cms. 
  <br/>
  Utiliser la commande : 
```twig
sudo chown -R www-data:www-data Votredossier
```
- Télécharger les dépendances via [composer](https://docs.clientxcms.com/docs/installation/Composer)
- [Modifier la racine du serveur web](https://docs.clientxcms.com/docs/installation/DocumentRoot)
- Vous devez aussi activer une extension apache pour pouvoir utiliser correctement clientx
  ```
  sudo a2enmod rewrite
  sudo service apache2 restart
  ```

- Ouvrez votre navigateur et rendez-vous sur [https://domain.fr](https://domain.fr) pour lancer l'installation.
- Entrez les informations demander et entrez votre clé de licence.
Après ceci, vous serrez automatiquement connecté sur le panel d'administration.
