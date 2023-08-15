---
sidebar_position: 2
---
# Environnement
![img](https://media.discordapp.net/attachments/475073153509490689/1041000466634506320/image.png)
## Changer depuis l'administration
Pour ceci, allez dans `Espace d'administration` > `Paramètres` au-dessus du bouton pour vider le cache de l'application pouvez sélectionner l'environnement que vous voulez (Production ou développement).

## Changer depuis les fichiers
Pour ceci, connectez vous à votre serveur via SFTP, FTP ou SSH et ouvrez le fichier `.env`

:::info Informations
Si ce fichier n'est pas affiché sur filezilla, WinSCP essayez de le créer avec un clique droit "Nouveau fichier" ".env", Il devrait vous l'afficher pour pouvoir l'éditer.
:::

### Mode développement vers production
Dans le fichier d'environnement, mettez la clé `APP_DEBUG` à `false` et `APP_ENV` à `prod`
### Mode production vers développement
Dans le fichier d'environnement, mettez la clé `APP_DEBUG` à `true` et `APP_ENV` à `dev`

## Vider le cache de l'application
Pour ceci, allez dans `Espace d'administration` > `Paramètres` et cliquez sur le bouton rouge pour vider le cache de l'application
``