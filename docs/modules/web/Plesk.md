---
sidebar_position: 2
---

# Plesk

Le module Plesk permet de fournir des offres Plesk à vos clients. Le module supporte les revendeurs web et hébergement simple. Il fonctionne avec les plans Plesk qui facilite grandement sa configuration puisqu'il suffit de lié un produit à un plan Plesk.
:::success A savoir
Ce module est compatible avec les versions 11, 11.5, 12, 12.5 , Onyx, et Obsidian de Plesk.
:::
:::info
Pour utiliser les fonctionnalités du module, il faut que l'extension PHP **XML** soit activeé sur votre hébergement. Pour l'installer : 
```bash
apt install php-xml
```
:::
:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module Plesk soit activé sur votre ClientXCMS. [cliquez ici pour l'activer](../)
:::
### Fonctionnalités supportées 
- Automatisez la création et l'approvisionnement des comptes
- Gestion des hébergements depuis l'espace client
- Connexion automatique au Plesk
- Réinitialiser les mots de passe et gérer les comptes
- Automatisez les suspensions et les résiliations

## Création du serveur

Créer un serveur ClientXCMS dans `Espace d'administration` > `Système` > `Serveurs` > `Nouveau` en sélectionnant le type de serveur en "Plesk". 

![img](https://media.discordapp.net/attachments/926274245225504779/962908593890406430/unknown.png)

**Adresse IP** : Sous domaine ou adresse IP du Plesk

**Username** : Nom d'utilisateur admin

**Password** : Mot de passe admin

Le port suivant doit être ouvert pour connecter ClientXCMS à votre Plesk : 8443

Vous pouvez tester la connexion au serveur et vérifier que le serveur renvoie *"Success"* en réponse.

## Configuration de l'offre
En premier lieu, [créez votre produit](../../store/produit#création) en sélectionnant **Plesk Hosting** pour les hébergements Web ou **Plesk Reselling** pour livrer des revendeurs Web.
![img](https://media.discordapp.net/attachments/926274245225504779/962910219158028318/unknown.png)
Après appuyez sur le bouton "Suivant" il vous redirigera vers la page de configuration de l'offre. Si le champs est vide, assurez vous que votre serveur ne soit pas caché, dans ce cas il ne sera pris en compte dans le système pour récupérer les plans Plesk.

![img](https://media.discordapp.net/attachments/926274245225504779/962911997190610984/unknown.png)

Dans cette page vous pourrez sélectionner le plan qui faudra livrer à vos clients puis sauvegarder.
## Liste des configurations
Vous pouvez voir la liste de vos configurations Pterodactyl depuis `Espace Administration` > `Utilitaires` > `Plesk`.

![img](https://media.discordapp.net/attachments/926274245225504779/962912787334574100/unknown.png)
Vous pouvez modifier directement la configuration d'un produit dans la colonne "Actions" en cliquant sur le bouton bleu.

## Création manuellement

## Panel de gestion
### Coté admin
![img](https://media.discordapp.net/attachments/926274245225504779/962913723046047804/unknown.png)

### Coté client
![img](https://media.discordapp.net/attachments/926274245225504779/962916921416753335/unknown.png)