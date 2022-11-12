---
sidebar_position: 3
---

# Contact

Une page de contact pour permettre à vos clients ou clients potentiels de vous contacter.

:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module Contactez-nous soit activé sur votre ClientXCMS. [cliquez ici pour l'activer](../modules.md)
:::
Un email est envoyé à l'adresse e-mail configurée avec les détails de la demande de contact et sauvegarder dans la base de données.
## Page de contact
![img](https://media.discordapp.net/attachments/475073153509490689/1041052793533890630/image.png)

:::info
Si Hcaptcha ou Recapcha est configuré il affichera le challenge dans le formulaire.
:::
## Gestion des demandes
Les demande de contacts se trouvent dans `Panel Administration` > `Contact`
![img](https://media.discordapp.net/attachments/475073153509490689/1041053179334369331/image.png)

## Configurations
La configuration du module se trouve dans les paramètres `Panel Administration` > `Système` > `Paramètres`
- **Adresse E-mail de réception**(texte) : Adresse E-mail de reception
- **Temps en heure entre deux demandes** (nombre) : Temps qu'il faut attendre entre deux demandes
- **Lien Webhook** (url) : Lien d'une webhook qui va être appelé lors qu'une demande est postée