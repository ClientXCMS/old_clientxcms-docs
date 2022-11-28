---
sidebar_position: 13
---

# Discord sync

## Création de l'application sur discord
1. Connectez-vous sur [votre compte discord](https://discord.com/developers/applications) pour accéder à l'espace développeur pour créer une application
![img](https://media.discordapp.net/attachments/475073153509490689/1045465691375030302/image.png)
2. Allez dans la section Oauth2 
![img](https://media.discordapp.net/attachments/475073153509490689/1045467385064329236/discord_link.PNG)
3. Récupérer le **Secret Id** et **Client Id**
4. Ajouter une URL de redirection `https://votrehebergeur.fr/discord/redirect`

## Installation 
**ClientXCMS** vous propose d'ajouter un bot sur votre serveur Discord qui ajoutera directement un rôle à vos clients.

Pour ce faire, rendez-vous sur votre site dans la rubrique `Paramètres` de votre Espace Administratif.

Suivez les étapes de connexion ci-dessous :

1. Invitez le bot sur votre serveur Discord en cliquant [ici](https://clientxcms.com/ref/discordlinkbot) ou suivez l'étape [d'installation du bot personnalisé](./#installation-du-bot-personnalisé)

2. Une fois le bot invité, inscrivez la commande inscrite à l'étape numéro 2 sur `votresite.fr/admin/settings` puis `Discord Link`

3. Assurez-vous que le rôle que vous avez indiqué est en dessous du rôle que vous avez attribué au Bot.

4. Vérifiez que votre serveur Discord a activé l'option « Widget » et sélectionnez ensuite le canal d'invitation de votre Discord.

5. Rendez-vous sur vos `Paramètres` ClientXCMS pour insérer votre **Secret id** et **Client Id** de votre application discord

6. Allez sur votre serveur discord avec un compte ayant les permissions ADMINISTRATEUR et executez la commande qui est dans les paramètres du module : 
La commande devrait ressembler à ceci `/ctxlink https://votrhebergeur.fr UnToken @votrRole`
7. Une fois connecté il vous renverra ce message :

![img](https://media.discordapp.net/attachments/475073153509490689/1045483245812334592/image.png)

Après ceci toutes les minutes, le bot récupérera les comptes discord qui a un service et qui doivent recevoir le Grade pour leur ajouter.
## Installation du bot personnalisé
### Création du bot Discord
1. Connectez-vous sur [votre compte discord](https://discord.com/developers/applications) pour accéder à l'espace développeur pour créer une application
   ![img](https://media.discordapp.net/attachments/475073153509490689/1045465691375030302/image.png)
:::info Informations.
Vous pouvez personnaliser au mieux votre bot en changeant l'avatar, la description et le nom de votre bot avec le nom de votre hébergeur.
:::
2. Allez dans la section Bot
   ![img](https://media.discordapp.net/attachments/475073153509490689/1045472150817079327/image.png?width=1440&height=461)
3. Valider et récupérer votre jeton
4. Ajouter votre bot avec les outils [discordapi](https://discordapi.com/permissions.html)
Permissions : Manage Roles
5. Ajouter les Intents dans la section Bot
![img](https://media.discordapp.net/attachments/475073153509490689/1045474127613546567/image.png)

### Configuration du bot 

1. Téléchargez l'archive après l'achat dans la section "Téléchargement"
2. Installer sur votre hébergement
3. Installer les dépendances NPM
4. Copier le fichier `.env.copy` dans un fichier `.env`

5. Remplissez le fichier .env

![img](https://media.discordapp.net/attachments/475073153509490689/1045475001857491025/image.png)

```
BOT_TOKEN=XXX
APPLICATION_ID=XX
```

APPLICATION_ID est votre identifiant Application Discord : 

![img](https://media.discordapp.net/attachments/475073153509490689/1045482182929547334/image.png)

6. Lancez le bot `npm start` ou : `node --experimental-modules --es-module-specifier-resolution=node .\index.js`
### Installation sur un hébergement Pterodactyl

Pour modifier le script de démarrage, allez dans votre `panel Administration Pterodactyl`, sélectionnez votre serveur et dans la section "Startup" modifiez la **Startup Command** : 
``
if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;if [ -f /home/container/package.json ]; then /usr/local/bin/npm start; fi;
``
Puis sauvegarder et lancer votre bot.
![img](https://media.discordapp.net/attachments/475073153509490689/1046583152270913658/image.png?width=1440&height=261)

## Captures d'écrans
![img](https://media.discordapp.net/attachments/794698865253154826/1014540512037965886/33.png)