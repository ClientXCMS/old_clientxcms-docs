---
sidebar_position: 1
---

# Sécurité
**ClientXCMS** met en place des paramètres pour améliorer la sécurité de votre espace client pour votre propre sécurité et celle de vos usagés.

## Authentication & Limitation
**E-Mails bannis ou domaines à l'inscription**(texte) : Séparé par des virgules, permet de refuser l'inscription à certain utilisateur/groupes d'utilisateurs. N'affecte que les nouvelles inscriptions, les comptes déjà existants ne sont bannis.

Exemple : `fake@clientxcms.com, protonmail.com`

**Nb. de tentative**(nombre) : Lorsqu'un utilisateur essaie de se connecter un certain nombre de fois avec échec, le ClientXCMS bloque toutes les connexions de l'utilisateur pendant X minutes. Utilisez la valeur 0 (Zero) pour désactiver cette fonctionnalité. Valeur par défaut : 3

**Minutes limitant la connexion**(minutes) : Temps que l'utilisateur doit attendre pour se faire débloquer. Valeur par défaut : 30

**Lien vers les conditions générales d'utilisation**(lien) : Lien vers les CGU de votre société, chaque utilisateur devra certifier qu'il a pris connaissance de ce document en validant une checkbox à l'inscription.

**Demande la confirmation de compte utilisateur**(boolean) : Permet d'envoyer un e-mail de confirmation lors d'une inscription pour valider l'adresse e-mail de l'utilisateur. Valeur par défaut : activé

**Autorise l'inscription aux utilisateurs**(boolean) : Permet d'autoriser l'inscription de vos clients. Si cette option est désactivée, Vous devriez créer le compte utilisateurs depuis l'espace de gestion des utilisateurs. Valeur par défaut : activé

**Autorise la réinitialisation de mot de passe aux utilisateurs**(boolean) : Permet d'autoriser le processus de réinitialisation des mots de passes utilisateurs. Valeur par défaut : activé
## Recaptcha
Il est important de vous protéger des potentiels Spams/compte indésirable créer par des robots.
### Configurer ReCaptcha
Après vous êtes inscrit ou connecter à votre [console google](https://www.google.com/recaptcha/admin/), vous devez [créez un site](https://www.google.com/recaptcha/admin/create).

**Libellé** Nom de votre site internet 

**Type de reCAPTCHA**: ReCAPTCHA version 2 > Case à cocher "Je ne suis pas un robot"

**Domaines**: Domaine de votre CLIENTXCMS (sous domaine inclus)

![img](https://media.discordapp.net/attachments/475073153509490689/957054073738248212/registered.png)

Une fois votre site enregistré, les clefs API apparaîtront. Vous sélectionnerez "Configurer la protection Google reCaptcha" puis pour terminer remplir les champs dans vos paramètres
![img](https://media.discordapp.net/attachments/475073153509490689/957054632042070016/unknown.png)
### Configurer HCaptcha
Après vous êtes inscrit ou connecter à votre [dashboard Hcaptcha](https://dashboard.hcaptcha.com/overview), vous devez [nouveau site](https://dashboard.hcaptcha.com/sites/new).

**Nom** Nom de votre site internet

**Difficulté**:Modérer

**Domaines**: Domaine de votre CLIENTXCMS (sous domaine inclus)

**Filtre**: Business and industry

![img](https://media.discordapp.net/attachments/475073153509490689/957056521865404446/registering.png)
Une fois votre site enregistré, les clefs API apparaîtront. Vous sélectionnerez "Configurer la protection Hcaptcha" puis pour terminer remplir les champs dans vos paramètres
![img](https://media.discordapp.net/attachments/475073153509490689/957059536232022068/unknown.png)
### None
Vous pouvez désactiver tout Captcha en sélectionner "None" dans les champs "Validation via"
