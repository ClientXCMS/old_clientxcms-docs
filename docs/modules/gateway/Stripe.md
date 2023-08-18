---
sidebar_position: 4
---

# Stripe

![img](https://api.clientxcms.com/assets/8d147de5-b42f-4f69-aec1-96a50ff89c27)

Le module Stripe permet d'accepter les paiements via Cartes bleues, Apple Pay, Google Pay, SEPA etc. Il n'est pas très connu aux yeux des clients mais utilité par des millions de site internet à travers le monde.

:::info
Cette fonctionnalité require le module "Stripe", il est gratuit et disponible au téléchargement depuis la page des modules.
:::

## Mode live vs Mode Test
Le mode live de stripe permet d'accepter de vrais paiements (Utilisé en production).
Le mode test permet d'émettre des paiements de tests sans dépenser de l'argent réel (Utilisé en développement ou pour tester)
Vous pouvez choisir ce mode en haut à droite "Mode test"
## Récupérer ses clés
Une fois connecté, Rendez-vous sur [sur le Dashboard API stripe](https://dashboard.stripe.com/apikeys) et cliquez sur le bouton "Crée une clé secrète"
![img](https://media.discordapp.net/attachments/926274245225504779/1001908055421767790/unknown.png)
![img](https://media.discordapp.net/attachments/926274245225504779/1001907713862807702/unknown.png)

Puis validez et récupérez vos deux clés, une publique (publishable key) et une secrète (secrete key)
## Webhook Stripe
Rendez-vous sur [sur le Dashboard Webhook stripe](https://dashboard.stripe.com/webhooks) et cliquez sur le bouton "ajouter un endpoint"
![img](https://media.discordapp.net/attachments/926274245225504779/1001913804587815013/unknown.png)
![img](https://media.discordapp.net/attachments/926274245225504779/1001913973270118440/unknown.png?width=611&height=467)

- **URL d'endpoint** : votredomain.fr/stripe/api
- **Description** : Mon super hébergeur (facultative)
- **Ecouter** : évenements sur votre compte
- **Version** : 2019-09-09
- **évènements** : Sélectionnez tout, ClientXCMS fera le tri

Puis cliquez sur ajouter un endpoint
Il vous fournira une clé secrète commençant par **whsec**
## Installation

Après avoir activé le module Stripe et récupérer ses clés d'api, Vous serrez rediriger vers la page de configuration des clés d'API pour synchroniser ClientXCMS à Stripe.
Vous pouvez également cliquer sur le bouton violet situé en haut à droite dans la boite du module
![img](https://media.discordapp.net/attachments/926274245225504779/1001911463520256180/unknown.png?width=960&height=185)
- Stripe Secret Key : la clé secrète que Stripe donne
- Stripe Public key : la clé publique que Stripe donne
- Stripe webhook secret : la clé secrète de la webhook (** doit commencer par whsec**)

![img](https://media.discordapp.net/attachments/926274245225504779/1001913205997711360/unknown.png?width=960&height=233)
Vous pourrez tester la connexion Stripe à ClientXCMS. Si la connexion est bien faite il persistera les informations

Si vous avez des problèmes de connexion veuillez contacter notre support.
### Ajouter des méthodes de paiement

Pour ajouter des solutions de paiement comme `bancontact`. Il faut se rendre [ici](https://dashboard.stripe.com/settings/payment_methods) pour l'activer depuis Stripe puis aller sur la page `Espace Administration` > `Paramètres` > `Stripe` et sélectionner le type.
![img](https://media.discordapp.net/attachments/475073153509490689/1046538287537467513/unknown.png)
## Transaction
Toutes les transactions Stripe avec les détails du paiement sont disponibles sur la page  `Espace Administration` > `Facturation` > `Stripe`
Il est également possible de rechercher un paiement par l'id du paiement.
![img](https://media.discordapp.net/attachments/926274245225504779/1001913007405805588/unknown.png?width=960&height=187)
### Page de paiement

Le client sélectionne le type de paiement Stripe. ClientXCMS va le redirige vers le Checkout stripe pour payer puis est redirigé vers votre site pour valider la commande.
Après ceci, la transaction sera mise comme payée et les services seront livrés.
### Transaction d'un client
La liste des transactions Stripe est disponible sur la page d'édition d'un utilisateur `Espace Administration` > `Utilisateur` > `Edition` > `Services/Transactions lié(e)`
![img](https://media.discordapp.net/attachments/926274245225504779/954712356057935943/unknown.png)