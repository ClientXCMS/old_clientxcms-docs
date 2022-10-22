---
sidebar_position: 1
---

# Dedipass
![img](http://dedipass.com/images/logo-white.png)

Dedipass est un service de micropaiement via appel surtaxé, SMS, Audiotel.
:::info
Cette fonctionnalité require les modules "Dedipass" et "Fond", ils sont gratuits et disponibles au téléchargement depuis la page des modules [cliquez ici pour l'activer](../#activation-dun-module).
:::
## Installation
Après vous êtes inscrit ou connecter, créez un **Service** de type **Virtual currency** et cliquez sur next. Complétez les champs demandés avec ces informations : 
![img](https://media.discordapp.net/attachments/926274245225504779/954699793060462662/unknown.png)
- L'installation URL vous mettez fakehosting.com/client/dedipass
- Sélectionnez "Callback IPN"
- Le callback URL vous mettez fakehosting.com/api/dedipass
- Remplacez fakehosting.com par votre domaine d'installation de ClientXCMS.

Puis, dans les paramètres  `Espace Administration` > `Paramètres` > `Dedipass`. Insérez vos clés d'api données par Dedipass puis sauvegarder.
![img](https://media.discordapp.net/attachments/1033142197102592131/1033142225862922270/unknown.png)

## Transaction
Toutes les transactions Dedipass avec les détails du paiement sont disponibles sur la page  `Espace Administration` > `Facturation` > `Dedipass`
Il est également possible de rechercher un paiement par son code de paiement.
![img](https://media.discordapp.net/attachments/926274245225504779/954702127882715156/unknown.png)
### Page de paiement 
![img](https://media.discordapp.net/attachments/926274245225504779/954705231567011900/unknown.png)
Le client sélectionne le montant qu'il veut recharger son compte, appel le numéro/sms surtaxé et valide le code donnée. Après ceci le système rajoute du crédit à son portefeuille virtuel qui pourra après dépenser sur votre boutique.
Il peut également voir ses anciennes transactions déjà faites via Dedipass sur la page accessible depuis le menu latéral en étant connecté
### Transaction d'un client
La liste des transactions Dedipass est disponible sur la page d'édition d'un utilisateur `Espace Administration` > `Utilisateur` > `Edition` > `Services/Transactions lié(e)`
![img](https://media.discordapp.net/attachments/926274245225504779/954701610804736030/unknown.png)