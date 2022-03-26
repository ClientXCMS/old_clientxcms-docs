---
sidebar_position: 2
---

# Modules

Les modules sont des fonctionnalités développés appart de CLIENTXCMS qui peut-être ajouter en un clic. Ils permettent d'ajouter des méthodes de paiement ou des fournisseurs de service (Plesk, cPanel, Virtualizor) ou permet d'ajouter de nouvelles pages ou fonctionnalités.
Ceci une page de documentation globale sur la gestion des modules.

### Modules officiels
![img](https://media.discordapp.net/attachments/926274245225504779/954534628222435378/unknown.png)

*Note* : Les modules autorisés sont récupérés depuis l'API clientxcms et  l'utilisateur de la licence de l'installation. En cas d'achat depuis un autre utilisateur, il faudra demander à notre support de modifier.

## Installation d'un module
Pour installer un module officiel, il vous suffit de se rendre dans votre `Espace d'administration` > `Modules` puis cliquez sur "Télécharger" en dessous de du nom du module
Le module se téléchargera directement depuis *clientxcms.com* et va s'installer sur votre installation de lui même.

*Information*: Si aucun bouton apparait, il suffit de forcer l'actualisation du cache en cliquant sur le bouton en haut.
Si le problème persiste, veuillez contacter notre support.
Pour un achat recent, veuillez attendre un peu ou forcer également l'actualisation du cache.

![img](https://media.discordapp.net/attachments/926274245225504779/954536548559380560/unknown.png)
## Activation d'un module

L'activation se fait en 1 clic, sur la page `Espace d'administration` > `Modules` en cliquant sur le bouton `Activer` en bas de la boite d'informations du module.

## Désactivation d'un module
Comme l'activation, La désactivation se fait en 1 clic, sur la page `Espace d'administration` > `Modules` en cliquant sur le bouton `Désactiver` en bas de la boite d'informations du module.

## Mise à jour

Les mises à jour sont à faire manuellement en cliquant sur le bouton "Télécharger" du module choisi.
Si vous êtes en dernière version du module il vous proposera de réinstaller le module sur votre installation.

### Widget dashboard
Pour faciliter la mise à jour des modules, un widget avec les modules téléchargeable est disponible sur la page `Espace d'administration`> `Dashboard`

![img](https://media.discordapp.net/attachments/926274245225504779/954544218112667688/unknown.png)
### Historique des modifications
Les modifications faites à un module est disponible en cliquant sur le bouton "Voir les changements"
Une boite modal va s'ouvrir avec les détails des versions du module sélectionné.

![img](https://media.discordapp.net/attachments/926274245225504779/954541336340623431/unknown.png)
## API Modules

Nous mettons à disposition des points d'arrêts disponibles à tous : 
- ```clientxcms.com/api/modules``` - Données sous format JSON des modules 
- ```clientxcms.com/api/changelog/Paypal``` Donnée sous format JSON des historiques des modifications (changelogs) d'un module
- ```clientxcms.com/api/changelog``` Données sous format JSON des historiques des modifications (changelogs) de ClientXCMS 

### Exemple
```bash
curl clientxcms.com/api/modules
```