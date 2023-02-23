---
sidebar_position: 1
---

# Produits

Pour vendre vos services un système de produits est disponible pour gérer l'automatisation de la livraison, gestion des stocks et configuration.

Pour y accéder : `Espace Administration` > `Boutique` > `Produits`

## Liste des produits
![img](https://media.discordapp.net/attachments/475073153509490689/957675371279577229/unknown.png)
### Boutons
![img](https://media.discordapp.net/attachments/475073153509490689/957675470185435246/unknown.png)

**Premier bouton** : Permet d'éditer les informations globales du produit

**Second bouton** : Permet d'éditer la configuration du produit

**Troisième bouton** : Permet de cloner les informations globales du produit

**Quatrième bouton** : Permet de supprimer le produit

## Création
![img](https://media.discordapp.net/attachments/1033142197102592131/1033290336090456094/unknown.png)
**Nom du produit**(texte) : Nom de vente qui sera affiché aux clients

**Groupe**(select) : Groupe associé - Ne peut pas être dans aucun groupe [(Si vide créez en un ici)](./groupes#Création)

**Order**(texte) : Ordre d'apparition - [Gérer nativement par la Réorganisation des produits](./groupes#Réorganisation-des-produits)

**Type**(select) : Type de produit - [(Si vide activez un module d'approvisionnement ici)](../modules#Activation-dun-module)

**Type de paiement**(select) : Type de paiement pour le produit

**Description**(texte) : Texte avec la description du produit

**Offre sur demande**(checkbox) : Votre client sera redirigé vers la création d'une demande d'aide pour commander

**Créer automatiquement le service**(checkbox) : Activez ou non la création automatique d'un service

**Caché**(checkbox) : Permet de cacher le produit ou non. [se référer ici pour plus d'informations](./produits#Produit-caché)


### Types de paiement disponibles
#### Gratuit
Le client ne devra rien payer pour avoir son service. Une facture sera quand même émise. Idéale pour des essais gratuits sur une courte durée.
![img](https://media.discordapp.net/attachments/475073153509490689/957681991212482560/unknown.png)
#### A vie
Le client paye une fois son service et ne devra pas payer pour le renouveler.

Vous pouvez y ajouter un prix et des frais d'installation potentiel à faire facturer à votre client lors de l'achat.

![img](https://media.discordapp.net/attachments/475073153509490689/957681127345238016/unknown.png)
#### Récurrent
Le client doit renouveler son service à son expiration pour le garder en ligne.

Vous devez ajouter un prix et des frais d'installation potentiel à faire facturer à votre client lors de l'achat pour chaque cycle de facturation et proposer des réductions pour des cycles longs.

Vous pouvez également laisser ZÉRO en valeur pour désactiver le cycle de facturation.

![img](https://media.discordapp.net/attachments/475073153509490689/957682824255766538/unknown.png)

:::info
Conseil de pro : Vous pouvez directement configurer le prix mensuellement et en cliquant sur le bouton de calculatrice, il vous configura le prix pour les autres cycles de facturation.
:::
## Edition
### Edition de la configuration
Vous pouvez modifier la configuration spécifique à chaque module en cliquant sur le troisième bouton ou sur le bouton "Configuration du produit" depuis la page d'édition.
:::info
Veuillez-vous référez à la page du module pour plus d'information en termes de configuration du produit.
:::
## Suppression
:::danger
La suppression d'un produit peut provoquer des problèmes dans le système.
:::
Vous pouvez supprimer un produit en cliquant sur le bouton rouge dans la colonne "Actions". Une confirmation vous sera demandé puis le produit sera supprimé.


## Produit caché
Cette option permet de décider si le produit ne doit pas être disponible à l'achat. Il affichera plus le produit dans la boutique en un click. Pour cacher un produit, cochez la checkbox dans la colonne "#", le voyant rouge passera à vert.

**Rouge** : Non caché, le produit est affiché et commandable.

**Vert** : Caché, le groupe n'est pas affiché et non commandable.
## Autres 
### Lien pour ajouter un produit

Lors de l'édition d'un produit vous pouvez avoir les deux liens pour ajouter le produit
![img](https://media.discordapp.net/attachments/1033142197102592131/1033298298850787368/unknown.png)

`https://votreDomaine.fr/basket/add/[id]` - Ajoute le produit au panier

`https://votreDomaine.fr/store/[id]/checkout` - Affiche le Checkout pour commander le produit

### Configuration d'options

Vous pouvez ajouter des options de configurations qui sera pris en compte par le module d'approvisionnement lors de la livraison du service. Pour ceci, rendez-vous sur la page `Espace administration` > `Boutique` > `Options additionnels`
### Packs de produits
Vous pouvez vendre plusieurs services dans un pack. Par exemple un hébergement web et un serveur pterodactyl dans un même produit. L'expiration des services sera synchronisée à partir du pack

### Produits Vente additionnelle

Augmentez vos ventes grâce à CLIENTXCMS en faisant de la vente additionnelle (cross selling).
Vous pouvez proposer et vendre des produits complémentaires ou un produit supérieur au produit initialement acquis ou visé par l'acheteur. Ces produits seront affichés après que le prospect aura ajouté votre produit à son panier sous cette forme : 
![img](https://media.discordapp.net/attachments/882576437075394650/1012292936278478879/31.png)

Il est conseillé de mettre trois produits maximums pour chaque produit. Sélectionnez les produits sur la page d'édition ou de création d'un produit dans le champ "Produits cross selling"   