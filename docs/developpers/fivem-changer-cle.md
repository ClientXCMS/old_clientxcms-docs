---
sidebar_position: 6
---
# Changer la clé FiveM par défault

Cette documentation vous guidera à travers les étapes pour modifier un Egg Pterodactyl existant et y ajouter une clé FiveM par défaut. L'objectif est de permettre aux utilisateurs de sélectionner l'option FiveM lorsqu'ils créent un serveur de jeu, tout en ayant une clé préconfigurée par défaut pour une meilleure expérience utilisateur.

**Étape 1: Accéder au panneau de contrôle Pterodactyl**

Connectez-vous à votre panneau de contrôle Pterodactyl en utilisant vos informations d'identification d'administrateur.

**Étape 2: Sélectionner l'Egg à modifier**

Naviguez vers la section "Eggs" dans le menu de gauche et sélectionnez l'Egg que vous souhaitez modifier pour ajouter la clé FiveM par défaut.

![Etape 1](/img/tutorial/step.png)

**Étape 3: Modifier les variables**

Dans la page de configuration de l'Egg, recherchez la section "Variables" qui contient les options configurables pour cet Egg.

**Étape 4: Modifier la variable de la clé FiveM**
Vous retrouvez la variable d'environement FiveM Licence ou vous pourrez modifier la valeur par default comme ceci

![Etape 4](/img/tutorial/step2.png)

**Étape 5: Enregistrer les modifications**

Une fois que vous avez ajouté la variable de la clé FiveM, cliquez sur le bouton "Save Egg" pour enregistrer les modifications apportées à l'Egg.

**Étape 6: Vérification**

Après avoir enregistré les modifications, assurez-vous de vérifier si la clé FiveM est correctement ajoutée par défaut lors de la création d'un nouveau serveur avec cet Egg. Lorsque les utilisateurs sélectionnent l'Egg, la variable de la clé FiveM doit être préremplie avec la valeur par défaut que vous avez spécifiée.

Assurez-vous également que la clé fonctionne correctement avec le serveur FiveM lorsqu'il est utilisé.

C'est tout ! Vous avez maintenant ajouté avec succès une clé FiveM par défaut à votre Egg Pterodactyl, offrant une meilleure expérience aux utilisateurs lors de la création de serveurs de jeu FiveM avec CLIENTXCMS.