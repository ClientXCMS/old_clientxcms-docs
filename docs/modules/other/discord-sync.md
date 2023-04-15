---
sidebar_position: 13
---
# Discord sync
Ce module permet de synchroniser les rôles client avec votre espace client CLIENTXCMS.


CLIENTXCMS propose deux types de bot pour utiliser le module DiscordLink.

- Le [Discordlink Bot](https://clientxcms.com/ref/discordlinkbot) utilisable avec le module.

- Le [Discordlink Custom Bot](https://clientxcms.com/basket/add/45) achetable depuis la boutique et qui permet d'utiliser les fonctionnalités d'informations dans les tickets et ne pas être dépendant de notre bot communautaire.
![img](https://media.discordapp.net/attachments/1040375138320912464/1068590411569971221/image.png)


:::warning
Les Client Id et Secret Id ne sont pas vos identifiants discord.
:::

:::success 
En cas d'utilisation du Discordlink Custom Bot, vous devez avoir 2 applications DISCORD pour faire fonctionner correctement le module. La première permettra à vos clients de relier leur compte discord à votre espace client et le second permettra de l'utiliser en tant que bot Discord.
En cas d'utilisation du Discordlink Bot, vous devrez avoir qu'une seule application DISCORD pour faire fonctionner correctement le module pour permettre à vos clients de relier leur compte discord à votre espace client.
:::

## Création de l'application d'authentification
| DiscordLink Bot | Discordlink Custom Bot |
|-----------------|------------------------|
| ✅               | ✅                      |
1. Connectez-vous sur votre compte discord pour [accéder à l'espace développeur](https://discord.com/developers/applications) pour créer une application
![img](https://media.discordapp.net/attachments/475073153509490689/1045465691375030302/image.png)
2. Après avoir créé l'application, allez dans la section Oauth2 depuis le menu à gauche 
![img](https://media.discordapp.net/attachments/475073153509490689/1045467385064329236/discord_link.PNG)
3. Récupérer le **Client Id** et cliquez pour afficher votre **Secret Id** de votre application et insérez-les dans les paramètres > `Discord link`
![img](https://media.discordapp.net/attachments/475073153509490689/1096879643396669583/image.png)
4. Ajouter une URL de redirection `https://votrehebergeur.fr/discord/redirect`

5. Synchronisez votre compte depuis l'espace client et tester!

## Synchronisé au serveur discord

### DiscordLink bot
| DiscordLink Bot | Discordlink Custom Bot |
|-----------------|------------------------|
| ✅               | x                      |

Pour ce faire, rendez-vous sur votre administration dans la rubrique `Paramètres`.

Suivez les étapes de connexion ci-dessous :

1. Invitez le bot sur votre serveur Discord en cliquant [ici](https://clientxcms.com/ref/discordlinkbot)

2. Une fois le bot invité, inscrivez la commande inscrite à l'étape numéro 2 sur `votresite.fr/admin/settings` puis `Discord Link`. La commande devrait ressembler à ceci `/ctxlink https://votrehebergeur.fr CTXToken @votreRole`

3. Assurez-vous que le rôle que vous avez indiqué est en dessous du rôle que vous avez attribué au Bot.

4. Vérifiez que votre serveur Discord a activé l'option « Widget » et sélectionnez ensuite le canal d'invitation de votre Discord.

5. Rendez-vous sur vos `Paramètres` ClientXCMS pour insérer votre **Secret id** et **Client Id** de votre application discord

:::info
Le CTXToken n'est pas votre clé de licence.
:::

7. Une fois connecté il vous renverra ce message :

![img](https://media.discordapp.net/attachments/475073153509490689/1045483245812334592/image.png)

Après ceci toutes les minutes, le bot récupérera les comptes discord qui a un service et qui doivent recevoir le Grade pour leur ajouter.
###  Discordlink Custom Bot

| DiscordLink Bot | Discordlink Custom Bot |
|-----------------|-----------------------|
| x               | ✅                      |
### Création du bot Discord
1. Connectez-vous sur [votre compte discord](https://discord.com/developers/applications) pour accéder à l'espace développeur pour créer le bot discord
   ![img](https://media.discordapp.net/attachments/475073153509490689/1045465691375030302/image.png)
:::info Informations.
Vous pouvez personnaliser au mieux votre bot en changeant l'avatar, la description et le nom de votre bot avec le nom de votre hébergeur.
:::
2. Allez dans la section Bot depuis le menu à gauche
   ![img](https://media.discordapp.net/attachments/475073153509490689/1045472150817079327/image.png?width=1440&height=461)
3. Validez et récupérer votre jeton
4. Ajoutez votre bot avec les outils [discordapi](https://discordapi.com/permissions.html)
Permissions : Manage Roles, Manage channel, Send Message, Use Application Commands
5. Ajoutez les Intents dans la section Bot
![img](https://media.discordapp.net/attachments/475073153509490689/1045474127613546567/image.png)

### Configuration du bot 

1. Téléchargez l'archive après l'achat dans la section "Téléchargement"
2. Installer sur votre hébergement
3. Installer les dépendances NPM
4. Copier le fichier `.env.copy` dans un fichier `.env`

5. Remplissez le fichier .env comme ceci

```
## Token de bot bot discord
BOT_TOKEN=XXX
## Identifiant de votre application qui sert de bot
APPLICATION_ID=XX
## Identifiant de votre serveur discord
GUILD_ID=XX
## CTXToken donnée dans les paramètres
CTXTOKEN=XX
## Temps entre deux rectualisation
RELOAD_SECONDS=15
## Votre domaine sans https://
CTXDOMAIN=XXX
```

APPLICATION_ID est votre identifiant Application Discord : 

![img](https://media.discordapp.net/attachments/475073153509490689/1045482182929547334/image.png)

6. Lancez le bot `npm start` ou : `node --experimental-modules --es-module-specifier-resolution=node .\index.js` sur window
### Installation sur un hébergement Pterodactyl

Pour modifier le script de démarrage, allez dans votre `panel Administration Pterodactyl`, sélectionnez votre serveur et dans la section "Startup" modifiez la **Startup Command** : 
``
if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;if [ -f /home/container/package.json ]; then /usr/local/bin/npm start; fi;
``
Puis sauvegarder et lancer votre bot.
![img](https://media.discordapp.net/attachments/475073153509490689/1046583152270913658/image.png?width=1440&height=261)
### Modifications de la detection des tickets
Pour modifier la detection de création de salon "ticket". Rendez-vous le fichier "index.js" avec la méthode `isTicketChannel` (l37)
```js

function isTicketChannel(channel) {
    return channel.name.startsWith('ticket-');
}
```
## Captures d'écrans
![img](https://media.discordapp.net/attachments/794698865253154826/1014540512037965886/33.png)

## Cloudflare

Si vous utilisez Cloudflare il faut créer une règle pour désactiver les protections Cloudflare en allant dans Sécurité > WAF > Créer une custom rule
![img](https://media.discordapp.net/attachments/475073153509490689/1096882443983786095/image.png)
Puis sauvegarder.