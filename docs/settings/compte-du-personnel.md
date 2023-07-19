---
sidebar_position: 5
---

# Comptes du personnel 

L'espace d'administration est sécurisé par un système d'authentification par des comptes autorisés avec un mot de passe et un email. Vous pouvez ajouter des autorisations à votre personnel (support, développeur, technicien) en allant dans votre `Panel Administration > System > Personnel` (/admin/staffs).
![img](https://media.discordapp.net/attachments/926274245225504779/1001985181755912294/unknown.png?width=1200&height=199)
## Création
![img](https://media.discordapp.net/attachments/926274245225504779/1002000696670945300/unknown.png?width=1200&height=380)
**Nom d'utilisateur**(texte) : Nom d'utilisateur du compte.
**Nom de famille**(texte) : Nom de famille du compte.
**Prénom**(texte) : Prénom du compte.
**Adresse E-mail**(email) : Adresse E-mail du compte.
**Mot de passe**(texte) : Mot de passe du compte.
**Signature**(texte) : signature du compte.
Puis cliquez sur Créer
## Edition
![img](https://media.discordapp.net/attachments/926274245225504779/1002002716031197344/unknown.png?width=1200&height=344)
**Nom d'utilisateur**(texte) : Nom d'utilisateur du compte.
**Nom de famille**(texte) : Nom de famille du compte.
**Prénom**(texte) : Prénom du compte.
**Adresse E-mail**(email) : Adresse E-mail du compte.
**Mot de passe**(texte) : Mot de passe du compte.
**Signature**(texte) : signature du compte.
Puis cliquez sur Sauvegarder
## Suppression
Vous pouvez supprimer un compte personnel en cliquant sur le bouton rouge dans la colonne "Actions". Une confirmation vous sera demandé
Le personnel ne pourra plus s'authentifier au compte personnel.

## Réinitialiser le mot de passe
### Par force
- Connectez-vous à votre base de données MySQL (ex: phpmyadmin)
:::info
Vous pouvez retrouver vos identifiants dans le fichier .env de votre installation
:::
- Générez un mot de passe depuis [https://www.motdepasse.xyz](https://www.motdepasse.xyz/)

- Générez le hash du mot de passe depuis [https://www.bcrypt.fr](https://www.bcrypt.fr/)
- Executez cette requête SQL pour modifier le mot de passe `UPDATE admins SET password = 'HashDuMotdepass'`
### Depuis l'email
