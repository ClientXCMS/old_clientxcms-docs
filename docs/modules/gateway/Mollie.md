---
sidebar_position: 5
---

# Mollie

Le module Mollie permet d'accepter les paiements via Cartes bleues.

:::info
Cette fonctionnalité require le module "Mollie", il est gratuit et disponible au téléchargement depuis la page des modules.
:::

## Mode live vs Mode Test
Le mode live de mollie permet d'accepter de vrais paiements (Utilisé en production).
Le mode test permet d'émettre des paiements de tests sans dépenser de l'argent réel (Utilisé en développement ou pour tester)
## Récupérer ses clés
1. Connectez-vous à votre **tableau de bord Mollie**.
2. Rendez-vous dans **Développeurs > Clés API**.
3. Cliquez sur Copier pour utiliser les clés API.

Puis récupérez votre clé live et clé test
![img](https://media.discordapp.net/attachments/1033142197102592131/1142079828498071603/Mollie_configuration.png)
## Installation

Après avoir activé le module Mollie et récupérer la clé d'API, Vous serrez rediriger vers la page de configuration des clés d'API pour synchroniser ClientXCMS à Mollie.
Vous pouvez également cliquer sur le bouton violet situé en haut à droite dans la boite du module
![img](https://media.discordapp.net/attachments/1033142197102592131/1142078694882549761/image.png?width=1440&height=286)
- Mollie Key : la clé secrète que mollie donne
Si vous avez des problèmes de connexion veuillez contacter notre support.
## Transaction
Toutes les transactions Stripe avec les détails du paiement sont disponibles sur la page  `Espace Administration` > `Facturation` > `Mollie`
Il est également possible de rechercher un paiement par l'id du paiement.
![img](https://media.discordapp.net/attachments/1033142197102592131/1142087038636662906/image.png?width=1440&height=286)
### Page de paiement

Le client sélectionne le type de paiement Mollie. ClientXCMS va le redirige vers le Checkout mollie pour payer puis est redirigé vers votre site pour valider la commande.
Après ceci, la transaction sera mise comme payée et les services seront livrés.
### Transaction d'un client
La liste des transactions Stripe est disponible sur la page d'édition d'un utilisateur `Espace Administration` > `Utilisateur` > `Edition` > `Services/Transactions lié(e)`
![img](https://media.discordapp.net/attachments/926274245225504779/954712356057935943/unknown.png)