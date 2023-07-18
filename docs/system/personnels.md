---
sidebar_position: 5
---

# Personnels

L'espace d'administration est sécurisé par un système d'authentification par des comptes autorisés avec un mot de passe et un email. Vous pouvez ajouter des autorisations à votre personnel (support, développeur, technicien) en allant dans votre `Espace Administration` > `Système` > `Personnel`.
## 
![img](https://media.discordapp.net/attachments/926274245225504779/1001985181755912294/unknown.png?width=1200&height=199)
## Création
![img](https://media.discordapp.net/attachments/926274245225504779/1002000696670945300/unknown.png?width=1200&height=380)
- **Nom d'utilisateur**(texte) : Nom d'utilisateur du compte
- **Nom de famille**(texte) : Nom de famille du compte
- **Prénom**(texte) : Prénom du compte
- **Adresse E-mail**(email) : Adresse E-mail du compte
- **Mot de passe**(texte) : Mot de passe du compte
- **Signature**(texte) : signature du compte**

Puis cliquez sur Créer
## Edition
![img](https://media.discordapp.net/attachments/926274245225504779/1002002716031197344/unknown.png?width=1200&height=344)
- **Nom d'utilisateur**(texte) : Nom d'utilisateur du compte
- **Nom de famille**(texte) : Nom de famille du compte
- **Prénom**(texte) : Prénom du compte
- **Adresse E-mail**(email) : Adresse E-mail du compte
- **Mot de passe**(texte) : Mot de passe du compte
- **Signature**(texte) : signature du compte**

Puis cliquez sur Sauvegarder

**La signature sera utilisée dans les réponses tickets

## Suppression

Vous pouvez supprimer un compte personnel en cliquant sur le bouton rouge dans la colonne "Actions". Une confirmation vous sera demandé
La personne ne pourra plus s'authentifier au compte.

## Réinitialiser le mot de passe
### Par force
- Connectez-vous à votre base de données MySQL (ex: phpmyadmin)
  :::info
  Vous pouvez retrouver vos identifiants dans le fichier .env de votre installation
  :::
- Générez un mot de passe depuis [ByPass](https://pass.byh.fr)

- Générez le hash du mot de passe depuis [https://www.bcrypt.fr/](https://www.bcrypt.fr/)
- Executez cette requête SQL pour modifier le mot de passe `UPDATE admins SET password = 'HashDuMotdepass' WHERE email = 'VotreEmail' `
### Depuis l'email
Vous pouvez demander à CLIENTXCMS d'envoyer l'email de réinitialisation depuis l'authentification coté Panel administration. Suivez le lien envoyé par email et redéfinissiez votre mot de passe administrateurs.

## Profil administrateur

Vous pouvez changer l'avatar de votre compte administrateur depuis votre profil disponible depuis le menu déroulant en haut
![img](https://media.discordapp.net/attachments/475073153509490689/1041019677041758218/image.png)
### Edition
Vous pouvez importer votre avatar, changer votre thème en sombre ou modifier les informations de votre compte administrateurs. 
![img](https://media.discordapp.net/attachments/475073153509490689/1041020230807330957/image.png)
### Double Authentification
Pour plus de sécurité, vous pouvez activer d'authentication à deux facteurs. Il vous suffit de scanner le QRCode ou entrer la clé secrète et valider en entrant le code pour l'activer. Après ceci, à chaque connexion, vous devriez valider votre connexion avec l'2FA
![img](https://media.discordapp.net/attachments/475073153509490689/1041021414393778308/image.png)

#### Re initialisation de l'2FA
En cas de perte de votre téléphone, vous pouvez retirer la double authentification de votre compte administrateur depuis la base de données. Pour ceci, Executez cette commande :
`UPDATE admins SET topt_key = NULL WHERE email = 'VotreEmail'`

### Permissions
Les permissions que vous avez sont affichées en ligne dans cette section.
![img](https://media.discordapp.net/attachments/475073153509490689/1041022039051477074/image.png)
### Historique des connexions
L'historique de vos connexions est affiché en ligne dans cette section avec l'heure et l'addresse IP de connexion
![img](https://media.discordapp.net/attachments/475073153509490689/1041022852704518214/image.png)
