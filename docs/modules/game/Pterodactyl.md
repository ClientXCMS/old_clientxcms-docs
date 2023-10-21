---
sidebar_position: 1
---

# Pterodactyl
Pterodactyl est un panel très répandu pour gérer des serveurs de jeux très rapidement et simplement. Ce module permet de créer les services de vos clients avec les performances choisis.
Il permet de proposer tous les types d'œuf Pterodactyl possible à la vente.


| Création 	| Suspension 	| Expiration 	| Unsuspend 	| Importation 	| Options 	|  Amélioration 	|
|----------	|------------	|------------	|-----------	|-------------	|---------	|---------	|
|     ✅    	|      ✅     	|      ✅     	|     ✅     	|      ✅      	|    ✅    	|   ✅    	|

:::warning Attention
Les versions 0.7 de Pterodactyl sont dépréciées et donc plus supportés sur ce module.
:::
:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module Pterodactyl soit activé sur votre ClientXCMS. [cliquez ici pour l'activer](../)
:::

## Authentification
Créez un serveur ClientXCMS dans `Espace d'administration ` > `Système` > `Serveurs` > `Nouveau` en sélectionnant le type de serveur en "Pterodactyl". 

![img](https://media.discordapp.net/attachments/475073153509490689/957611067779993650/unknown.png)

**Adresse IP** : Sous domaine ou Adresse IP du Pterodactyl

**Client API** : Clé client

**Application API** : Clé application

### Clé client 

Clé d'api client disponible sur votre Pterodactyl `/account/api`
![img](https://media.discordapp.net/attachments/475073153509490689/957610044030066698/unknown.png)

**Description** : CLIENTXCMSAPI

**Allowed ips** : Laissez vide ou mettez l'IP de votre ClientXCMS pour plus de sécurité

Votre clé d'api client vous sera donnée qu'une seule fois, après elle sera tronquée.
### Clé application
Clé d'api client (Account) disponible sur votre Pterodactyl `/admin/api/new`

![img](https://media.discordapp.net/attachments/1033142197102592131/1033147132049363136/unknown.png)
**Permissions** : Comme dans la capture

**Description** : CLIENTXCMSAPI
## Liste des configurations
Vous pouvez voir la liste de vos configurations Pterodactyl depuis `Espace Administration` > `Utilitaires` > `Pterodactyl`.

![img](https://media.discordapp.net/attachments/475073153509490689/957621406902923314/unknown.png)
Vous pouvez modifier directement la configuration d'un produit dans la colonne "Actions" en cliquant sur le bouton bleu.

## Configuration de l'offre
![img](https://media.discordapp.net/attachments/1033142197102592131/1033456203130482720/unknown.png)
- **Mémoire (MB)**: Mémoire du serveur
- **Espace Disque (MB)**: Espace disque du serveur
- **Block IO**: poids IO du serveur.
- **Swap**: Swap du serveur
- **ID Egg Pterodactyl**: Eggs disponible
- **ID Location Pterodactyl**: Location Pterodactyl
- **Serveur**: Serveur Pterodactyl où le service va être livrer
- **Port à attribuer au serveur**: Ports spécifiques (Exemple FIVEM)
- **Nom du serveur**: Nom du serveur**
- **Bases de données à attribuer au serveur**: Nombre de bases de données
- **Sauvegardes de données à attribuer au serveur**: Nombre de sauvegardes
- **Allocation à attributer au serveur**: Nombre d'allocation (port à donner)

:::info Conseil de pro
Vous pouvez convertir directement de GB en MO ou inversement rapidement via le convertisseur.
:::
:::success Conseil de pro 2
Vous pouvez sélectionner plusieurs eggs et vos clients pourront choisir l'œuf pterodactyl qui veulent parmi la liste
:::

** Vous pouvez utiliser des variables pour personnaliser le nom du serveur.

### Variables disponibles 

| Variables         | Description                   |
|-------------------|-------------------------------|
| %owner_email%     | Email de l'utilisateur        |
| %owner_username%  | Nom + Prénom de l'utilisateur |
| %owner_firstname% | Prénom de l'utilisateur       |
| %owner_lastname%  | Nom de l'utilisateur          |
| %product_name%    | Nom du produit                |
| %order_id%        | Id de la commande             |
| %service_id%      | Id du service                 |

## Création manuellement

Pour créer un serveur Pterodactyl dans CLIENTXCMS, rendez-vous sur `Espace Administration` > `Services` > `Tout` > `Nouveau`.

Sélectionnez votre produit Pterodactyl et l'utilisateur, cochez "**Ajouter service automatiquement**". Puis vous cliquez sur suivant.
Ensuite cliquez sur "Créer".

Pour plus d'informations sur la création manuelle d'un service [cliquez ici](../../store/services#création-de-service)
## Importation
Pour importer un serveur qui est déjà sur votre Pterodactyl sur CLIENTXCMS, rendez-vous sur `Espace Administration` > `Services` > `Tout` > `Nouveau`.

Sélectionnez votre produit Pterodactyl et l'utilisateur, cochez "**Ajouter manuellement le service**". Puis cliquez sur suivant


Après ceci vous pourrez choisir le serveur à importer sur CLIENTXCMS
![img](https://media.discordapp.net/attachments/1033467001244495882/1033467022392164383/unknown.png?width=1440&height=237)

Puis cliquez sur "Créer".

Le serveur est désormais gérable depuis CLIENTXCMS.

Pour plus d'informations sur l'importation d'un service [cliquez ici](../../store/services#importation-de-service)
## Panel de gestion
![img](https://media.discordapp.net/attachments/1033467001244495882/1033468500641067128/unknown.png)
### Erreurs/Problèmes connus

#### Code HTTP 200
Échec de la création du serveur, code d'erreur reçu : 200.
Il suffit de modifier votre serveur et mettre le champ sécurité à enabled.

#### Ip du serveur qui n'est pas affiché
![img](https://media.discordapp.net/attachments/475073153509490689/1012087901112238170/unknown.png)

Ce problème vient du fait que vous n'avez pas autorisé la permission "Allocations" à "READ"
Pour les anciennes installations nous conseillons de recréer une clé "Application" d'API" en précisant la permission "Allocations" à Read