---
sidebar_position: 15
---

# Webhooks

:::info Culture générale
Les Webhooks constituent un moyen simple d'envoyer des messages automatisés et des mises à jour de données à un canal de texte (Discord, Slack, etc)
:::

Vous pouvez être tenu informer depuis votre serveur discord ou serveur slack lorsqu'un client passe commande chez vous ou lorsqu'il ouvre une demande d'aide auprès de votre support technique . Un message personnalisé sera envoyé avec les détails de la commande ou les détails du ticket.
### Récupérer un lien webhook depuis discord
1. Ouvrez l'onglet Webhook de vos paramètres de serveur :
2. Cliquez sur le bouton pour créer un nouveau webhook !

![img](https://support.discord.com/hc/article_attachments/1500000463501/Screen_Shot_2020-12-15_at_4.41.53_PM.png)
Vous aurez quelques options ici. Vous pouvez :

- **Modifier l'avatar** : En cliquant sur l'avatar à côté du Nom en haut à gauche
- **Choisir le salon dans lequel le Webhook sera publié** : En sélectionnant le salon textuel souhaité dans le menu déroulant.
- **Nommer votre Webhook** : bon pour distinguer plusieurs webhooks pour plusieurs services différents.
3. Cliquez sur le bouton pour copier l'URL de la webhook
Vous avez maintenant votre propre URL pratique
![img](https://support.discord.com/hc/article_attachments/360101553853/Screen_Shot_2020-12-15_at_4.51.38_PM.png)


### Configurer la webhook sur ClientXCMS

#### Achat
Dans les paramètres section "Shop" cochez **Executer une webhook lors d'une commande**
![img](https://media.discordapp.net/attachments/926274245225504779/1001895436585537687/unknown.png)
- **URl de la webhook** : Lien copié précédemment
- **Message** : Message à envoyer

Variables disponibles:
- **%id%** : l'identifiant unique de la commande
- **%price%** : Total de la commande
- **%user%** : Nom et prénom du client
- **%paymentType%** : Passerelle de paiement de la commande (PayPal, Stripe, Wallet, ...)
- **%transactionId%** : l'identifiant unique de la transaction
- **%comment%** : Commentaire du client sur la commande
- **%url%** : Lien vers la facture

### Ticket
:::info
Cette fonctionnalité require le module "Support Webhook", il est gratuit et disponible au téléchargement depuis la page des modules.
:::
### Exemple de webhook
Dans les paramètres section "Support Webhook" (Si vous ne l'avez pas vérifié qu'il est bien activé sur votre installation)
![img](https://media.discordapp.net/attachments/926274245225504779/1001897411804934174/unknown.png)
- **URl de la webhook** : Lien copié précédemment
- **Actions** : Evénement où envoyer
- **Message** : Message à envoyer

:::info Conseil de pro 
Vous pouvez ajouter plusieurs webhook pour un seul événement.
:::

Variables disponibles:
- **%subject%** : Sujet de la demande
- **%departmentName%** : Nom du département de la demande
- **%user%** : Nom et prénom du client
- **%priority%** : Priorité de la commande
- **%created_at%** : Date de création
- **%action%** : Action (Reply, Submit, Close)
- **%url%** : Lien vers le ticket
- **%content%** : Contenu du ticket
- **%relatedUri%** : Lien vers la resource relative
- **%related%** : Nom la resource relative
#### Achats

```
:pushpin:Nouvelle commande n• %id%
:moneybag:**Prix : ** %price%
:credit_card: ** Plateforme : ** %paymentType%
:bust_in_silhouette:**Client : ** %user%
:link:**Lien :** %url%
:envelope:**Commentaire : ** %comment% **
```

#### Ticket

```
:pushpin: Un nouveau ticket vient d'être créer ! 

:department_store: **Département** : 
:speech_balloon:**Sujet** : Test
:vertical_traffic_light:**Priorité**: High
:arrow_right:Cliquez ici pour y répondre : 
```

