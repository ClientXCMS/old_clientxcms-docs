---
sidebar_position: 2
---

# PayPal Checkout
![img](https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png)

Le module PayPal permet de accepter les paiements via PayPal de vos clients.
:::info
Cette fonctionnalité require le module "PayPal", il est gratuit et disponible au téléchargement depuis la page des modules [cliquez ici pour l'activer](../#activation-dun-module).
:::
## Mode live vs Mode Sandbox
Le mode live de paypal permet d'accepter de vrais paiements (Utilisé en production).
Le mode sandbox permet d'émettre des paiements de tests sans dépenser de l'argent réel (Utilisé en développement ou pour tester)

## Récupérer ses clés d'api

Rendez-vous sur votre [Panel Développeur PayPal](https://developer.paypal.com/developer/applications), connectez-vous puis de créer des identifiants API.

Pour cela, il est nécessaire d'aller dans La catégorie **Live** (ou Sandbox pour le développement) et de Cliquer sur "**Create App**" avec le nom souhaité (*par exemple : ClientXCMS*).
![img](https://media.discordapp.net/attachments/926274245225504779/954709850095484969/live.png)
![img](https://media.discordapp.net/attachments/926274245225504779/954709927073546270/creation.png)

Il vous suffira après de cliquer sur le **nom de votre application** (*ClientXCMS dans notre cas*) et vous pourrez accéder aux informations de l'application :
- Client ID
- Secret (Que vous devez générer si besoin*).
![img](https://media.discordapp.net/attachments/926274245225504779/954710485851308053/informations.png)


## Installation

Après avoir activé le module PayPal et récupérer ses clés d'api, Vous serrez rediriger vers la page de configuration des clés d'API pour synchroniser ClientXCMS à Paypal.
Vous pouvez également cliquer sur le bouton violet situé en haut à droite dans la boite du module 
![img](https://media.discordapp.net/attachments/926274245225504779/954708583726071828/unknown.png)
- PayPal Secret : la clé secrète que Paypal donne
- PayPal Id : l'id de l'application que Paypal donne
- PayPal live : Enabled en live sinon Disabled

![img](https://media.discordapp.net/attachments/926274245225504779/954711209582673970/unknown.png)
Vous pourrez tester la connexion PayPal à ClientXCMS. Si la connexion est bien faite il persistera les informations

Si vous avez des problèmes de connexion veuillez contacter notre support.

## Transaction
Toutes les transactions PayPal avec les détails du paiement sont disponibles sur la page  `Espace Administration` > `Facturation` > `PayPal`
Il est également possible de rechercher un paiement par l'id du paiement.
![img](https://media.discordapp.net/attachments/926274245225504779/954707212192858162/unknown.png?width=1440&height=285)
### Page de paiement

Le client sélectionne le type de paiement PayPal. ClientXCMS va le redirige vers le Checkout paypal pour payer puis est redirigé vers votre site pour valider la commande.
Après ceci, la transaction sera mise comme payée et les services seront livré.
### Transaction d'un client
La liste des transactions PayPal est disponible sur la page d'édition d'un utilisateur `Espace Administration` > `Utilisateur` > `Edition` > `Services/Transactions lié(e)`
![img](https://media.discordapp.net/attachments/926274245225504779/954712356057935943/unknown.png)