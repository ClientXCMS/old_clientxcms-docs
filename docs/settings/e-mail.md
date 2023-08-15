---
sidebar_position: 3
---

# E-Mail
**ClientXCMS** met en place des paramètres pour envoyer les e-mails de manière sécurisés à vos clients.

## Configuration
**Adresse E-mail utilisée pour envoyer les e-mails**(email) : Adresse qui sera affiché en dessus des informations de l'envoie. Valeur par défaut : contact@clientxcms.com

**Domaine**(domaine) : Domaine qui sera utilisé pour créer les liens dans les emails. Valeur par défaut : Domaine d'installation

**Salutation**(texte) : Message de salutation sur chaque e-mail.
Valeur par default : Bonjour `{{ current_user(user_id).name }},`

**Greeting**(texte) : Message cordial sous chaque email.
Valeur par default : Cordialement `{{ config('app.name') }}` 

Pour le Greeting et les Salutations il est possible d'utiliser les informations de l'utilisateur connecté.
```
{{ current_user().name }} Prénom + Nom de famille de l'utilisateur

{{ current_user().firstname }} Prénom de l'utilisateur

{{ current_user().lastname }} Nom de famille de l'utilisateur
```
[Plus d'informations ici](../developpers/modules/Utilitaire/Emails/variables.md)

## Gestion d'envoi d'email
Vous pouvez gérer l'envoie de vos emails depuis votre `Espace Administration` > `Envoi d'email` disponible depuis le menu de navigation.
![img](https://media.discordapp.net/attachments/475073153509490689/957065809396641883/unknown.png)
Vous pouvez voir la date de l'envoi de l'e-mail, son destinataire ou son sujet. Le premier bouton permet de renvoyer manuellement l'e-mail s'il n'est pas encore envoyé.
Le second bouton permet de visionner dans un nouvel onglet le contenu de l'email comme envoyé dans la boite de messagerie.

### Envoi d'email à un client
Vous pouvez directement envoyer un message personnalisé à un/des client(s) en particulier

![img](https://media.discordapp.net/attachments/475073153509490689/957067741293072384/unknown.png)
Vous pouvez utiliser des variables avec les informations de l'utilisateur. [Plus d'informations ici](../developpers/modules/Utilitaire/Emails/variables.md)

### Envoi d'email de masses
Vous pouvez envoyer des emails personnalisés pour chaque utilisateur inscrit. Pour ceci, Sélectionnez "Envoyez à tous les clients". ClientXCMS s'occupera d'envoyer un email à chaque client.

### Envoie d'email en tâche cron
En cas d'échec d'envoi de l'email, l'email est sauvegardé en base de données pour l'envoyé plus tard.

### Via sendmail
Par défaut, ClientXCMS envoie par sendmail. Il est recommandé d'utiliser des serveurs SMTP pour un envoi d'e-mail plus sécurisé et éviter que les e-mails soient directement mis dans les spams des messageries.
### Via serveurs SMTP
**Mot de passe SMTP**(mot de passe) : Mot de passe du serveur SMTP

**Nom d'utilisateur SMTP**(texte) : Nom d'utilisateur du serveur SMTP

**Nom d'hôte SMTP**(hostname) : Nom d'hôte du serveur SMTP

**Port SMTP**(texte) : Port du serveur SMTP (Valeur par défaut : 1025)

**Cryptage**(Select) : Cryptage d'envoi du serveur SMTP (Valeur par défaut : TLS)
![img](https://media.discordapp.net/attachments/475073153509490689/957091158134235236/unknown.png)
Après ceci vous pouvez tester la connexion en envoyant un E-mail de test.
### Email de test

Vous pouvez tester que vos emails partent correctement en appuyant sur le bouton gris "Test connection". Il enverra un e-mail de test à l'adresse email du compte administrateur connecté.
Il vous alerta si l'email est bien partie ou s'il y a des problèmes à l'envoie. 

## Personnalisation

Vous pouvez personnaliser vos e-mails en ajoutant des thèmes d'e-mail disponible à l'achat ou modifier les modèles [ici](../system/Modele-Email)
![img](https://media.discordapp.net/attachments/475073153509490689/1037870848670973962/unknown.png)

Après votre achat, vous pouvez créer un fichier `/Emails/custom.html.twig` avec le contenu de l'archive.
Vous pourrez après tester ce que les changements visuels des e-mails ont eux lui.