---
sidebar_position: 3
---

# cPanel

Le module cPanel permet de fournir des offres cPanel à vos clients. Le module supporte les revendeurs web et hébergement simple. Il fonctionne avec les plans cPanel qui facilite grandement sa configuration puisqu'il suffit de lié un produit à un plan cPanel.

| Création 	| Suspension 	| Expiration 	| Unsuspend 	| Importation 	| Options 	|
|----------	|------------	|------------	|-----------	|-------------	|---------	|
|     ✅    	|      ✅     	|      ✅     	|     ✅     	|      ✅      	|    ✅    	|


:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module Plesk soit activé sur votre ClientXCMS. [cliquez ici pour l'activer](../)
:::
### Fonctionnalités supportées 
- Automatisez la création et l'approvisionnement des comptes
- Gestion des hébergements depuis l'espace client
- Envoie des identifiants de connexion par E-mail
- Connexion automatique au cPanel
- Réinitialiser les mots de passe et gérer les comptes
- Automatisez les suspensions et les résiliations

## Création du serveur

Créer un serveur ClientXCMS dans `Espace d'administration` > `Système` > `Serveurs` > `Nouveau` en sélectionnant le type de serveur en "cPanel". 

![img](https://media.discordapp.net/attachments/1033142197102592131/1141127724883251230/image.png)

**Adresse IP** : Sous domaine ou adresse IP du cPanel

**Username** : Nom d'utilisateur

**Password** : Mot de passe

Le port suivant doit être ouvert pour connecter ClientXCMS à votre cPanel : 2087

Vous pouvez tester la connexion au serveur et vérifier que le serveur renvoie *"Success"* en réponse.

## Configuration de l'offre
En premier lieu, [créez votre produit](../../store/produits#création) en sélectionnant **cPanel Hosting** pour les hébergements Web ou **cPanel Reselling** pour livrer des revendeurs Web.
![img](https://media.discordapp.net/attachments/1033142197102592131/1141128425193611364/image.png)
Après appuyez sur le bouton "Suivant" il vous redirigera vers la page de configuration de l'offre. Si le champs est vide, assurez vous que votre serveur ne soit pas caché, dans ce cas il ne sera pris en compte dans le système pour récupérer les plans cPanel.

![img](https://media.discordapp.net/attachments/926274245225504779/962911997190610984/unknown.png)

Dans cette page, vous pourrez sélectionner le plan qui faudra livrer à vos clients puis sauvegarder.
## Liste des configurations
Vous pouvez voir la liste de vos configurations Pterodactyl depuis `Espace Administration` > `Utilitaires` > `cPanel`.

![img](https://media.discordapp.net/attachments/1033142197102592131/1141127408406241360/image.png)
Vous pouvez modifier directement la configuration d'un produit dans la colonne "Actions" en cliquant sur le bouton bleu.

## Importation
Vous pouvez importer un hébergement ou un revendeur qui est sur votre serveur cPanel en tant que service CLIENTXCMS. Pour ceci, allez dans `Espace Administration` > `Services` > `Nouveau`
Sélectionnez votre produit cPanel et l'utilisateur, cochez "**Ajouter manuellement le service**". Puis cliquez sur suivant


Après ceci vous pourrez choisir l'hébergement/revendeur à importer sur CLIENTXCMS
![img](https://media.discordapp.net/attachments/1033142197102592131/1141138768871563264/image.png)

### Panel de gestion
![img](https://media.discordapp.net/attachments/1033142197102592131/1141138807853437019/image.png)
