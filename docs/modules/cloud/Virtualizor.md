---
sidebar_position: 2
---

# Virtualizor

Virtualizor est un panel très répandu pour gérer des VPS très rapidement et simplement. Ce module permet de créer des VPS de vos clients avec les performances choisis.

:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module Virtualizor  soit activé sur votre ClientXCMS. [cliquez ici pour l'activer](../)
:::

| Création 	| Suspension 	| Expiration 	| Unsuspend 	| Importation 	| Options 	|  Amélioration 	|
|----------	|------------	|------------	|-----------	|-------------	|---------	|---------	|
|     ✅    	|      ✅     	|      ✅     	|     ✅     	|      ✅      	|    ✅    	|   ✅    	|

## Création du serveur

### Récupérer ses clés d'API
Créez vos clé d'API Virtualizor en vous connectant > `API Crediential` > `List API Pair` > `Create API Credential` en ajoutant les permissions.

![img](https://media.discordapp.net/attachments/475073153509490689/1041055765064073246/image.png)
Et remplissez le formulaire
![img](https://media.discordapp.net/attachments/475073153509490689/1072239653362614373/image.png)
### Authentification

Créez un serveur ClientXCMS dans `Espace d'administration ` > `Système` > `Serveurs` > `Nouveau` en sélectionnant le type de serveur en "Virtualizor".

![img](https://media.discordapp.net/attachments/475073153509490689/1072237808233742476/image.png)

**Adresse IP** : Sous domaine ou Adresse IP du Virtualizor

**Username** : API Key

**Password** : API Password

En cas de succès de la connexion, il vous répondra "Success"
En cas d'échec, il vous le notifiera par une erreur.
## Configuration de l'offre
## Liste des configurations

Vous pouvez voir la liste de vos configurations Virtualizor depuis `Espace Administration` > `Utilitaires` > `Virtualizor`.

![img](https://media.discordapp.net/attachments/475073153509490689/1072240431242412164/image.png)
## Création manuellement

Pour créer un service proxmox dans CLIENTXCMS, rendez-vous sur `Espace Administration` > `Services` > `Tout` > `Nouveau`.

Sélectionnez votre produit Virtualizor et l'utilisateur, cochez "**Ajouter service automatiquement**". Puis vous cliquez sur suivant.
Après ceci vous pourrez définir le mot de passe root, l'os et un nom d'hôte personnalisé
![img](https://media.discordapp.net/attachments/475073153509490689/1041093908660240556/image.png)

Puis cliquez sur "Créer".

Pour plus d'informations sur la création manuelle d'un service [cliquez ici](../../store/services#création-de-service)


## Importation
Pour importer un VPS qui est déjà sur votre Virtualizor sur CLIENTXCMS, rendez-vous sur `Espace Administration` > `Services` > `Tout` > `Nouveau`.

Sélectionnez votre produit Proxmox et l'utilisateur, cochez "**Ajouter manuellement le service**". Puis cliquez sur suivant
Après ceci vous pourrez choisir le VPS à importer sur CLIENTXCMS
![img](https://media.discordapp.net/attachments/475073153509490689/1041094156208054353/image.png)
## Panel de gestion
![img](https://media.discordapp.net/attachments/475073153509490689/1041095492865638460/image.png?width=1440&height=437)

## Option Supportées
- Espace disque additionnel
- Mémoire additionnel
- Adresse IP additionnel
- Cœur additionnel