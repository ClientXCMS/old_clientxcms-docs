---
sidebar_position: 3
---

# SocialAuth+

Le module SocialAuth+ permet de faciliter les connexions avec OAuth2 pour les plateformes suivantes : [Google](#google), [Discord](#discord), [GitHub](#github) et [Facebook](#facebook).
> Facilitez l'accès à votre plateforme pour vos clients potentiels avec SocialAuth+. Cette solution utilise la technologie OAuth+ pour une connexion rapide et sécurisée. Vos utilisateurs peuvent s'inscrire et se connecter en un clic via leurs comptes, sans craindre de perdre leur mot de passe. Simplifiez leur expérience utilisateur et augmentez votre taux de conversion grâce à ce module d'authentification avancé.

## Configuration dans ClientXCMS

Le module **SocialAuth+** est disponible __gratuitement__, et activable depuis la page "Modules" de votre espace d'administration de votre site ClientXCMS.

## Activation du module

Pour activer le module SocialAuth+ gratuitement, procédez comme suit :
github.com/ClientXCMS/clientxcms-docs/edit/master/docs/modules/other/socialauthplus.md
1. Connectez-vous à l'espace d'administration de ClientXCMS.
2. Accédez à la page "Modules" dans le menu principal.
3. Recherchez le module "SocialAuth+" dans la liste des modules disponibles.
4. Cliquez sur le bouton "Télécharger" en dessous du module "SocialAuth+" pour l'installer' gratuitement.

## Configuration des identifiants OAuth sur ClientXCMS

Une fois le module SocialAuth+ téléchargé, installé et activé depuis la page "Modules" de votre espace d'administration ClientXCMS, allez dans l'onglet de votre espace admin.

![Image: SocialAuth+ Onglet](https://media.discordapp.net/attachments/693203267009904680/1135683397881172018/image.png?width=141&height=35)

Sur cette page, vous pourrez gérer les différentes méthodes d'authentification en fonction des plateformes que vous souhaitez intégrer. Pour en configurer une, cliquez sur le bouton "Configurer" en dessous du logo de la plateforme ou sur l'écrou violet de réglage en haut.
![Image: SocialAuth+ Config](https://media.discordapp.net/attachments/693203267009904680/1135685185757790270/image.png?width=1439&height=647)

## Exemple de configuration OAuth2

Voici à quoi ressemble la configuration OAuth d'une plateforme d'authentification sur ClientXCMS, il suffit d'avoir **Client ID** et **Secret ID** généré et fournit par la plateforme, suivez la suite de cette documentation afin de savoir comment procéder en fonction des plateformes afin d'[obtenir ces fameuses clés d'authentification OAuth2](#obtenir-les-clés-dauthentification-oauth2) :
![Image : Exemple page configuration OAuth](https://media.discordapp.net/attachments/842821920901693531/1135719012769210479/image.png?width=1439&height=188)

## Redirect URI
Copiez bien la **Redirect URI** (unique) donné par ClientXCMS => **pour CHAQUE plateforme, la redirection URI sera différente**.  Elle est importante car elle permet derediriger l'utilisateur sur votre site après l'authentification du compte sur la plateforme cible, afin de finaliser l'authentification. Elle fait en sorte que l'utilisateur puisse se connecter si il a déjà un compte sur votre site, ou qu'il s'inscive si il n'a pas encore de compte.

![Image: Redirect URI](https://media.discordapp.net/attachments/693203267009904680/1135686328588185761/image.png?width=573&height=93)

## Obtenir les clés d'authentification OAuth2

Pour pouvoir utiliser ce module, vous devez obtenir les clés d'authentification OAuth2 pour chaque plateforme que vous souhaitez prendre en charge.

## Voici comment procéder pour chaque plateforme :

### Google 

**1.** Rendez-vous sur la [console développeur Google](https://console.cloud.google.com/) et connectez-vous à votre compte Google.

**2.** Créez un nouveau projet en cliquant sur le bouton "**Sélectionner un projet**".
![Image: Google Config - Bouton "Sélectionner le projet"](https://media.discordapp.net/attachments/693203267009904680/1135687100872802374/image.png?width=450&height=100)

**3.** Donnez un nom à votre projet et suivez les étapes de configuration.

**4.** Une fois votre projet créé, cliquez sur le raccourci d'accès rapide "**API et services**"
![Image: Google Config - Raccourci accès rapide "API et services"](https://media.discordapp.net/attachments/693203267009904680/1135688155463422003/image.png?width=1254&height=671)

**5.** Accèdez à la section "**Ecran de consentement OAuth**" dans la colonne de gauche.
![Image: Google Config - Section "Ecran de consentement OAuth"](https://media.discordapp.net/attachments/842821920901693531/1135697269312729178/image.png?width=281&height=441)

**6.** Sélectionnez l'option "**Externes**", cliquez ensuite sur le bouton "**Créer**".
![Image: Google Config - Bouton "Externes" consentement](https://media.discordapp.net/attachments/842821920901693531/1135698845980954684/image.png?width=815&height=576)

**7.** Gérez les niveaux d'accès du consentement OAuth de l'application. Cliquez sur le bouton "**Ajouter ou Supprimer des Champs d'application**"
![Image : Google Config - Niveaux d'accès consentement](https://media.discordapp.net/attachments/693203267009904680/1135704686440222730/image.png?width=920&height=312)
Sélectionnez toutes les champs et cliquez sur le bouton bleu en dessous "**Mettre à jour**"
![Image : Google Config - Champs de niveaux d'accès consentement](https://media.discordapp.net/attachments/693203267009904680/1135706130002231356/image.png?width=700&height=671)
![](https://media.discordapp.net/attachments/693203267009904680/1135707100945846372/image.png?width=771&height=407)

**8.** Remplissez les informations requises pour le consentement OAuth, veillez a bien définir le domaine autorisé par le domaine de votre site ClientXCMS (domaine de premier niveau, pas de sous domaine requis, le domaine suffira)
![Image : Google Config - "Domaines autorisés"](https://media.discordapp.net/attachments/842821920901693531/1135701946309816431/image.png?width=630&height=271)

**9.** Accédez à la section "**Identifiants**" dans la colonne de gauche.

![Image: Google Config - Section "Identifiants"](https://media.discordapp.net/attachments/842821920901693531/1135697269602127972/image.png?width=279&height=415)

**10.** Cliquez sur "**Créer des identifiants**" et choisissez "ID client OAuth".
![Image: Google Config - Bouton "ID client OAuth"](https://media.discordapp.net/attachments/693203267009904680/1135691359106388049/image.png?width=547&height=317)

**11.** Sélectionnez le type d'application approprié (ici : **Application Web**) et définissez le nom de votre application
![Image : Google Config - Type d'applications](https://media.discordapp.net/attachments/693203267009904680/1135715802834808862/image.png?width=640&height=343)

**12.** En dessous, dans "URI de redirection autorisés", cliquez sur le bouton "**Ajouter un URI**" et définissez l'[URI de redirection donné par ClientXCMS dans la page de configuration](#redirect-uri) dans le champs "__URI 1__", cliquez ensuite sur le bouton bleu "**Créer**".
![Image : Google Config - Redirect URI Google](https://media.discordapp.net/attachments/693203267009904680/1135716665317933076/image.png?width=597&height=565)

**13.** Une fois que vous avez créé l'application OAuth, vous obtiendrez les clés d'authentification OAuth2 nécessaires.
![Google Config - API Send](https://media.discordapp.net/attachments/842821920901693531/1135717547921133718/image.png?width=548&height=586)

**14.** Insérez-les dans la [configuration OAuth de la plateforme](#exemple-de-configuration-oauth2) sur ClientXCMS.

### Discord

**1.** Rendez-vous sur le [portail développeur Discord](https://discord.com/developers/applications) et connectez-vous à votre compte Discord.

**2.** Cliquez sur le bouton bleu "New Application" en haut à droite pour créer une nouvelle application.
![Image : Discord Config - Nouvelle Application](https://media.discordapp.net/attachments/693203267009904680/1135721671207178250/image.png?width=1316&height=671)

**3.** Donnez un nom à votre application, cochez pour approuver les conditions générales d'utilisation et les politiques pour les développeurs de Discord. Cliquez ensuite sur le bouton "Create" en bas à droite pour enregistrer la nouvelle application.
![Image : Discord Config - Créer l'Application](https://media.discordapp.net/attachments/693203267009904680/1135723504730386442/image.png?width=491&height=407)

**4.** Rendez vous dans la section "**OAuth2**" dans le menu de navigation à gauche.

![Image : Discord Config - Menu Navigation "OAuth2"](https://media.discordapp.net/attachments/693203267009904680/1135724516279074917/image.png?width=376&height=625)
![Image : Discord Config - Interface OAuth2"](https://media.discordapp.net/attachments/693203267009904680/1135725465315856496/image.png?width=1439&height=541)

**5.** Révélez le "**Client Secret**" en cliquant sur le bouton bleu "**Reset Secret**", si vous avez activer l'A2F (Authentification A 2 Facteurs) sur votre compte Discord, utilisez votre application de génération de codes à 6 chiffres pour confirmer l'action
![Image : Discord Config - Révéler le Client Secret"](https://media.discordapp.net/attachments/693203267009904680/1135727063748317275/image.png?width=408&height=121)

**6.** En dessous, dans "**Redirects**", cliquez sur le bouton "**Add Redirect**" pour ajouter l'URI de redirection et définissez l'[URI de redirection donné par ClientXCMS dans la page de configuration](#redirect-uri) dans le champs "__URI 1__", cliquez ensuite sur le bouton bleu "**Créer**".
![Image : Discord Config - Redirect URI Discord](https://media.discordapp.net/attachments/693203267009904680/1135727658542583808/image.png?width=1227&height=181)

**7.** Cliquez sur le bouton "Save Changes" en bas pour sauvegarder les changements. Copiez les clés "Client ID" et "Client Secret". 
![Discord Config - API Send](https://media.discordapp.net/attachments/693203267009904680/1135726014140530719/image.png?width=1080&height=671)

**8.** Insérez-les dans la [configuration OAuth de la plateforme](#exemple-de-configuration-oauth2) sur ClientXCMS.

### GitHub

**1.** Connectez-vous à votre compte [GitHub](https://github.com/login).

**2.** Accédez à la page "[**Paramètres**](https://github.com/settings/profile)" de votre profil.

**3.** Dans le menu de gauche, cliquez sur "[**Developer settings**](https://github.com/settings/apps)".

![Image : GitHub Config - "Developer Settings"](https://media.discordapp.net/attachments/693203267009904680/1135730117960814622/image.png?width=212&height=669)

**4.** Cliquez sur le bouton "[**New GitHub App**](https://github.com/settings/apps/new)" pour enregistrer une nouvelle application.
![Image : GitHub Config - "New GitHub App"](https://media.discordapp.net/attachments/693203267009904680/1135734508038148116/image.png?width=1313&height=148)

**5.** Remplissez les informations de base de votre application
![Image : GitHub Config - Informations de base](https://media.discordapp.net/attachments/693203267009904680/1135732008618840154/image.png?width=811&height=524)

**6.** En dessous, dans le champs "**Callback URL**", définissez l'[URI de redirection donné par ClientXCMS dans la page de configuration](#redirect-uri) et cochez l'option "**Request user authorization (OAuth) during installation**" pour demander l'utilisation d'OAuth2 lors de l'installation.
![Image : GitHub Config - Redirect URI GitHub](https://media.discordapp.net/attachments/693203267009904680/1135732270792196156/image.png?width=825&height=396)

**7.** Encore en dessous, décocher la case "Active" de la section "**Webhook**", car dans pour notre utilisation, nous n'en aurons pas besoin. En décochant cette case, le champs "**Webhook URL**" deviendra optionnel et non obligatoire. Egalement pour la section "**Permissions**", il sera inutile d'accorder des permissions, GitHub met déjà a disposition toutes les informations que ClientXCMS a besoin afin de créer le compte ou de se connecter, ajouter des privilièges requis pour votre application peut repousser certains utilisateurs à s'inscire sur votre site.

![Image : GitHub Config - Désactiver Webhook et autres paramètres](https://media.discordapp.net/attachments/693203267009904680/1135733062412542012/image.png?width=790&height=531)
![Image : GitHub Config - Permissions](https://media.discordapp.net/attachments/693203267009904680/1135738219015700620/image.png?width=790&height=465)

**8.** A la toute fin du formulaire de création de l'application GitHub, sélectionner bien "Any accounté pour autoriser tout les comptes a installer votre application, qui permettra a vos utilisateurs de s'authentifier avec GitHub. Enregistrez ensuite l'application avec le bouton vert en dessous "**Create GitHub App**".
![Image : GitHub Config - Qui peut installé cette application](https://media.discordapp.net/attachments/693203267009904680/1135738693009805362/image.png?width=801&height=226)

**9.** Retrouver Client ID et Secret ID

Voici la page de gestion de votre application OAuth2 dans laquelle vous avez été automatiquement redirigé après avoir créé l'application GitHub.

![Image : GitHub Config - Page de gestion de l'application](https://media.discordapp.net/attachments/693203267009904680/1135744665870680156/image.png?width=953&height=671)
-  **Client Secret :** Vous pouvez trouver le **Client Secret** dans la section "**Client secrets**" de la page de gestion de l'application GitHub. Cliquez sur le bouton "Generate a client secret" pour générer une clé **Secret Id**.
![Image : GitHub Config - Section "Client secrets"](https://media.discordapp.net/attachments/693203267009904680/1135739873203073074/image.png?width=927&height=120)
- **Client Id :** Vous pouvez facilement trouver le **Client Id** en haut de la page de gestion de l'application, dans la section "**About**"
![Image : GitHub Config - Section "About" Client ID](https://media.discordapp.net/attachments/693203267009904680/1135743390709985363/image.png?width=739&height=235)

**10.** Vous disposerez ensuite des clés "Client ID" et "Client Secret" pour votre application que vous devrez spécifier dans la [configuration OAuth de la plateforme](#exemple-de-configuration-oauth2) sur ClientXCMS.
![Image : GitHub Config - API Send](https://media.discordapp.net/attachments/693203267009904680/1135744001312559254/image.png?width=804&height=671)

### Facebook

**1.** Rendez-vous sur le [portail développeur Facebook](https://developers.facebook.com/async/registration/) et connectez-vous ou inscrivez-vous afin de créer un compte développeur Meta. Entrez vos informations personnelles

**2.** Créez une nouvelle application en cliquant sur le bouton vert en haut à droite "[**Créer une app**](https://developers.facebook.com/apps/creation/)".
![Image : Facebook Config - Bouton "Créer une app"](https://media.discordapp.net/attachments/693203267009904680/1135747874760699904/image.png?width=1439&height=536)

**3.** Sélectionnez l'option "**Autoriser les utilisateurs à se connecter avec leur compte Facebook**", cliquez ensuite sur le bouton bleu ci-dessous "**Suivant**"
![Image : Facebook Config - Option "Autoriser les utilisateurs à se connecter avec leur compte Facebook"](https://media.discordapp.net/attachments/693203267009904680/1135748378093948959/image.png?width=861&height=671)

**4.** Spécifiez les informations relatives à l'application, tel que son nom et l'email de contact. Cliquez sur le bouton vert ci-dessous "**Créer une application**" afin d'enregistrer l'application.
![Image : Facebook Config - Informations relatives à l'application](https://media.discordapp.net/attachments/693203267009904680/1135749280020304012/image.png?width=1140&height=534)

**5.** Une fois l'application créé, vous serez automatiquement redirigé vers le panneau de gestion de l'application.
![Image : Facebook Config - Panneau de gestion de l'application](https://media.discordapp.net/attachments/693203267009904680/1135750533395796039/image.png?width=1364&height=671)

**6.** Dans la section "**Produits**" du tableau de bord de votre application, sélectionnez "Facebook Login" et configurez les paramètres requis à l'aide du bouton "**Configurer**".
![Image : Facebook Config - Page "Produits"](https://media.discordapp.net/attachments/693203267009904680/1135751000561549362/image.png?width=1439&height=631)
Dans le petit menu déroulant du bouton "**Configurer**", sélectionnez "**Paramètres**"
![Image : Facebook Config - Menu déroulant Paramètres Facebook Login "](https://media.discordapp.net/attachments/693203267009904680/1135751473276403733/image.png?width=1120&height=341)

**7.** Dans la section "**URI de redirection OAuth valides**", spécifiez la valeur de l'[URI de redirection donné par ClientXCMS dans la page de configuration](#redirect-uri), cliquez en suite sur le bouton bleu, en bas à droite, "**Enregistrer les modifications**".

![Image : Facebook Config - Redirect URI Facebook](https://media.discordapp.net/attachments/693203267009904680/1135752494232911933/image.png?width=798&height=671)

**9.** Dans le menu de navigation du panneau de l'application, allez dans "**Paramètres**" puis dans la sous catégorie "**Général**". Sur la première ligne, vous trouvez, et l'identifiant de l'application (**Client Id**), et la clé secrète (**Secret Id**), cliquez sur le bouton "**Afficher**" afin de copier la clé générée.
![Image : Facebook Config - API Send](https://media.discordapp.net/attachments/693203267009904680/1135755193967972412/image.png?width=1439&height=613)
Vous disposerez ensuite des clés "Client ID" et "Client Secret" pour votre application que vous devrez spécifier dans la [configuration OAuth de la plateforme](#exemple-de-configuration-oauth2) sur ClientXCMS.

**10.** Publiez l'application afin de la rendre publique : Dans le menu du panneau de gestion de l'application Facebook, dans la catégorie "**Publier**" cliquez sur le bouton "**Lancer en direct**" pour lancer l'application OAuth2 en mode production afin qu'elle puisse être utilisée par vos utilisateurs.

![Image : Facebook Config - Publier l'application](https://media.discordapp.net/attachments/693203267009904680/1135755755165851758/image.png?width=237&height=671)

## Problème Erreur 403

Pour régler ce problème, rendez vous sur votre panel de gestion Plesk, puis Web Application Firewall. Dans le mode du pare-feu changez en "Detection only". Il devrait être initialement à "On".
![img](https://media.discordapp.net/attachments/926274245225504779/1165298446748635347/image.png)
Re testez la connexion via google.


**Félicitations 👏** ! Vous avez maintenant configuré le module SocialAuth+ avec les clés d'authentification OAuth2. Vos clients pourront désormais se connecter et s'incrire plus facilement, plus rapidement et en toute sécurité sur votre espace client !
