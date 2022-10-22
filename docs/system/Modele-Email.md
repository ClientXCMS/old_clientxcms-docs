---
sidebar_position: 6
---

# Modèles d'e-mail

**ClientXCMS** permet de modifier le contenu des messages des e-mail comme bon vous semble. Pour le faire, allez dans `Espace Administration` > `Système` >`Modèles d'emails`.
Vous retrouverez tous les modèles disponibles et donc modifiable. Des variables sont mises à disposition plus d'information [ici](../developpers/variables)
![img](https://media.discordapp.net/attachments/475073153509490689/957083543442427934/unknown.png)


# Modèles d'email personnalisé
Nous proposons différents modèles d'email [à l'achat](https://clientxcms.com/store/email-templates).
Pour installer votre achat, suivez ceci : 

- Téléchargez l'archive sur l'espace client clientxcms.com (Section Téléchargement)
- Connectez-vous en SFTP/FTP à votre serveur
- Importer le fichier .twig qui est dans l'archive
- Renommez le de cette façon : custom.html.twig
- Videz le cache de votre CMS depuis `Espace administration` > `Système`  > `Paramètres` > `Vider le cache de l'application`


Vous pouvez verifier que le modèle est bien installé en vérifiant le résultat depuis : `Espace administration` > `Système`  > `Modèles d'emails` 

![img](https://cdn.discordapp.com/attachments/939840146507989003/967115696423206942/unknown.png)
