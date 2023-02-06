---
sidebar_position: 1
---

# Services

Pour gérer vos services, leurs expirations et créations

Pour y accéder : `Espace Administration` > `Services` > `Tout`

## Coté admin

![img](https://media.discordapp.net/attachments/1033142197102592131/1033296007070490664/unknown.png)
Vous pouvez rechercher facilement un service ou réorganiser l'ordre d'affichage, voir les services actif, suspendus, expiré et créer d'autres services.

### Filtre
Vous pouvez filtrer les services par leur état depuis le menu d'administration

![img](https://media.discordapp.net/attachments/1033142197102592131/1033299725337759806/unknown.png)


## Importation de service
Il est possible de synchroniser un service déjà existant sur votre serveur depuis CLIENTXCMS, Pour y accéder : `Espace Administration` > `Services` > `Tout` > `Nouveau`
![img](https://media.discordapp.net/attachments/1033142197102592131/1033413949200273489/unknown.png)

- Sélectionnez le produit à livrer

- L'utilisateur qui va recevoir le service

- **Cochez "Ajouter manuellement le service"**

Puis cliquez sur suivant


Une seconde page va apparaître où vous aller pouvoir sélectionner parmi tous les services existants sur votre serveur.

![img](https://media.discordapp.net/attachments/1033142197102592131/1033416134294249572/unknown.png?width=1440&height=205)
**Transaction**(select) : Transaction qui va être utilisée

**Type**(select) : Cycle de facturation

**Date d'expiration**(datetime) : Expiration du service (personnalisable)

**Nom**(texte) : Nom du service
## Création de service
Il est possible de livrer un service à un utilisateur depuis CLIENTXCMS, Pour y accéder : `Espace Administration` > `Services` > `Tout` > `Nouveau`

![img](https://media.discordapp.net/attachments/1033142197102592131/1033401510010306710/unknown.png)

- Sélectionnez le produit à livrer

- L'utilisateur qui va recevoir le service

- **Cochez "Livrer le service automatiquement"**

Puis cliquez sur suivant
Une seconde page va apparaître où vous aller pouvoir définir les informations du service

![img](https://media.discordapp.net/attachments/1033142197102592131/1033403713169133668/unknown.png?width=1440&height=520)

**Transaction**(select) : Transaction qui va être utilisée

**Type**(select) : Cycle de facturation 

**Date d'expiration**(datetime) : Expiration du service (personnalisable)

**Nom**(texte) : Nom du service

**Commentaire**(text) : Commentaire de la commande

Sur la gauche, vous pourrez mettre les données de la commande demandée par le module d'approvisionnement. Cette partie peut être cachée si le module demande rien.
Puis cliquez sur créer, vous serez redirigé vers la transaction qui vient d'être créé.
## Détails d'un service
Dans cette section, vous pouvez modifier les détails du service et voir les informations du service comme le serveur où le service est hébergé, le type de paiement ou la date de créations.

![img](https://media.discordapp.net/attachments/1033142197102592131/1033301949744939059/unknown.png?width=427&height=676)
### Amélioration
Les services peuvent être améliorés par l'administration ou le client les produits sont determinés par le groupe de produit et si le groupe de produit autorise l'amélioration d'offre.
![img](https://media.discordapp.net/attachments/829844680539111486/1071558258717900840/image.png)
### Facturation

**Date d'expiration**(datetime) : Expiration du service 

**Prix**(nombre) : Prix du service pour un mois**

**Etat**(select) : Etat actuel du service

**Nb. max de renouvellement**(nombre) : Limitation du nombre de renouvellements pour une souscription (0 = Illimité)

Vous pouvez modifier les détails puis cliquez sur le bouton de sauvegarde

**Si le prix du service est différent du prix du produit d'origine, il va prendre ce prix et le multiplier par le nombre de mois du cycle de renouvellement.
Si vous avez un produit à 2.99€/mois et que vous modifier le prix du produit à 3.99€/mois il gardera le renouvellement du service à 2.99/mois. 

### Nom et cycle 
![img](https://media.discordapp.net/attachments/1033142197102592131/1033305275697991690/unknown.png)

:::info
Ces fonctionnalités sont également disponibles depuis l'espace clientèle.
:::

#### Nom du service 
Il est possible de modifier le nom visuel du service cela permet à vous et vos clients de mieux reconnaitre son service. Ce nom sera affiché un peu partout sur l'espace client, par défaut le nom du produit commande est utilisé comme nom de service

Dans certains cas comme Wisp ou Pterodactyl cela modifie également sur le panel de jeux.

#### Cycle de facturation
Le cycle de facturation permet de renouvellement pour X mois. Celui-ci cette base sur le produit commandé par défaut ou le prix redéfinis plus haut qui est multiplié par le nombre de mois du cycle pour générer la facture. 

##### Cycles de facturation supportés

- Mensuellement
- Trimestriel
- Semestriel
- Annuel
##### Différents états d'un service 
- En ligne - le service est accessible au client
- En attente - le service est en cours de livraisons
- Suspendu - le service est suspendu (peut être renouvelé)
- Terminé - Le service est terminé - déprécié
- Expiré - Le service est expiré (peut être renouvelé)
- Refunded - Le service a été remboursé
- Cancelled - Le service a été annulé
#### Renouvellement via le portefeuille
Cette option permet de renouveler le service automatiquement tant que le portefeuille de l'utilisateur à du solde.
Par exemple, un client ajoute 20€ sur son compte depuis le module Ajout de fond et commande un produit à 4.99€/mois, avec cette option d'activée son service sera renouvelé quatre fois sans qu'il a le moindre action à faire.
### Actions
![img](https://media.discordapp.net/attachments/1033142197102592131/1033304090291216425/unknown.png)
#### Rembourser
Le service sera supprimé du serveur, l'état du service ainsi que la transaction seront définis en en tant que remboursés.
#### Suspendre/Unsuspend
En cas de suspension, le service sera suspendu du serveur, l'état du service sera définis en en tant que suspendu. En cas d'unsuspend, le service sera réactivé sur le serveur et l'état du service sera redéfinis en tant que en ligne
#### Terminer
Le service sera supprimé du serveur, l'état du service sera définis en en tant que terminé.

## Processus de renouvellement

![img](https://media.discordapp.net/attachments/1033142197102592131/1033307112308215868/unknown.png)
Tableau avec toutes les transactions lié à un service

:::info
Ce tableau est également disponible depuis l'espace clientèle sur la page de renouvellement.
:::

1) L'utilisateur va dans la section "Renouvellement" de son panel service

2) Clique sur le bouton renouveler

3) Cela va générer sa facture de son renouvellement pour X mois (selon son cycle)

4) Il paye sa facture et l'expiration se rajoute


## Expiration d'un service
Le système d'expiration est simple avec un exemple
Contexte : 
- On va prendre la date d'expiration est le 20 du mois.
- La configuration du nombre de jours est à +3 jours après la suspension

Une facture va être générée le 17 du mois (Expiration - configuration). Si celle-ci est payée dans les TROIS jours, le service va continuer sans interruption.
Sinon le 20 du mois le service va être automatiquement suspendu pour TROIS jours, un mail sera envoyé au client pour payer la facture. 
Si TROIS jours après la facture n'est toujours pas payée, le service va être supprimé, l'état va être définis sur Expiré eet il pourra plus être renouvelé. 
## Paramètres
![img](https://media.discordapp.net/attachments/1033142197102592131/1033409113704636416/unknown.png)
Les paramètres des services se trouvent sur `Espace Administration` > `Paramètres` > `Store`.
Modifier les valeurs puis cliquer sur sauvegarder.

## Widget tableau de bord
![img](https://media.discordapp.net/attachments/1033142197102592131/1033393621094912000/unknown.png)

Vous pouvez voir les meilleures ventes de vos services depuis votre tableau de bord CLIENTXCMS ainsi qu'un graphique avec l'état actuel des services des clients
## Rechercher des produits dans les transactions


Vous pouvez savoir dans quelles transactions un produit se trouve et l'afficher sur un tableau depuis `Espace Administration` > `Tableau des revenues`. Sélectionnez le produit et cliquer sur la loupe.
![img](https://media.discordapp.net/attachments/1033142197102592131/1033410511099928638/unknown.png)

![img](https://media.discordapp.net/attachments/1033142197102592131/1033411718983991391/unknown.png?width=1440&height=279)
Il pourra accéder à toutes les transactions qui est lié au produit sélectionné.

## Service d'un client
La liste des services d'un client est disponible sur la page d'édition d'un utilisateur `Espace Administration` > `Utilisateurs` > `Edition` > `Services/Transactions lié(e)`
![img](https://media.discordapp.net/attachments/1033142197102592131/1033391975975637102/unknown.png)
