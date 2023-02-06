---
slug: fonctionalites-bot-discord-sync
title: Fonctionnalités Bot Discord sync
authors:
    name: MartinDev
    title: Président
    url: https://github.com/DarkIncognito85
    image_url: https://github.com/DarkIncognito85.png
tags: [nouvelle fonctionnalités, news, mise à jour, discordsync]
---
Nous sommes ravis de vous annoncer l'ajout d'une nouvelle fonctionnalité incroyable à notre bot Discord "Discord sync". Disponible d'abord pour les personnes ayant leur propre bot personnalisé (ceux ayant acheté : [Discordlink Bot](https://clientxcms.com/basket/add/45)), puis par la suite disponible sur notre bot communautaire pour des raisons techniques. Désormais, lorsque vous créez un ticket sur notre serveur Discord, un client synchronisé a la possibilité d'afficher ses services, transactions et détails de son compte, tout cela d'un simple clic sur un bouton. Il peut également refuser.

Cette fonctionnalité vous permet d'avoir les informations de vos clients directement dans le ticket discord, afin de pouvoir répondre rapidement et efficacement à leurs besoins. Plus besoin de parcourir l'espace administration ou de demander des informations supplémentaires, tout est disponible en quelques secondes.

De plus, pour une expérience utilisateur encore plus fluide, les messages envoyés par notre bot seront entièrement traduits dans la langue du compte client.
Nous sommes convaincus que cette nouvelle fonctionnalité facilitera grandement la gestion de vos clients et améliorera votre expérience utilisateur. N'hésitez pas à nous faire part de vos commentaires et suggestions pour continuer à améliorer notre bot.
:::info
Cette fonctionnalité require la version v1.7 du module "Discordsync". Mettez à jour pour avoir accès.
:::
## Aide / Informations transmit lors d'un ticket
Le bot va afficher les informations sur le compte du client synchronisé en utilisant un embed Discord. Il va envoyer les services, devis, commandes et transactions associés à ce compte. Vous pourrez également voir l'email et le nom et prénom du client, pour une meilleure identification.

Cependant, pour protéger la vie privée de vos clients, l'adresse postale ne sera pas transmise. Nous prenons la sécurité et la confidentialité de vos données très au sérieux.

### Ouverture d'un ticket
Le bot détecte la création d'un ticket et vérifie si le client est synchronisé. Le client a le choix d'afficher ses informations ou non. La page "plus d'informations" renvoie sur la page actuelle pour expliquer le fonctionnement de cette fonctionnalité.

![img](https://media.discordapp.net/attachments/1040375138320912464/1068590411569971221/image.png)
### Le client veut afficher les informations
Le bot va afficher les informations sous forme d'embed. Voici visuellement, quelles sont les données affichées
![img](https://media.discordapp.net/attachments/1040375138320912464/1068590554797047848/image.png)
### Le client refuse d'affiche les informations
Le bot va envoyer un message en disant que le client ne veut pas afficher les informations.


A bientôt sur les services [clientxcms.com](https://clientxcms.com) ! 
