---
sidebar_position: 2
---

# Support Webhook
**ClientXCMS** permet d'envoyer des messages webhook lors d'évènements du support client. Vous pouvez personnaliser le message pour chaque évènement.
## Évènements supportés
- Création d'un ticket
- Réponse d'un client
- Fermeture d'un ticket

Une intégration avec **ClientXCMS** facile qui offre une gestion du support technique sans failles.

## Configuration
Pour configurer les webhooks, rendez-vous dans les paramètres  `Espace Administration` > `Paramètres` > `Support Webhook`.
Vous pouvez en ajouter autant que vous voulez.

**URL de la webhook**(texte) : URL de la webhook discord/slack.
**Action**(dropdown) : Actions pour envoyer la webhook
**Message**(texte) : Message qui sera affiché dans le salon discord/slack. Supporte les emoji discord et les variables ClientXCMS
![img](https://media.discordapp.net/attachments/1033142197102592131/1033143377652363284/unknown.png)
## Variables
| Variable          | Exemple                                             |
|-------------------|-----------------------------------------------------|
| %relatedUrl%      | https://clientxcms.com/admin/store/services/1       |
| %relatedId%       | 1\|null                                             |
| %userid%          | 1                                                   |
| %username%        | Martin Dev (Nom et prénom)                          |
| %email%           | admin@clientxcms.com                                |
| %subject%         | Remboursement                                       |
| %departmentName % | Technique                                           |
| %priority%        | High                                                |
| %created_at%      | 22/11/22 00:30                                      |
| %action%          | Submit\|Reply\|Close                                |
| %url%             | https://clientxcms.com/support/tickets/1            |
| %content%         | Bonjour,  Voici ma demande de remboursement         |
## Exemples

### Création
```
:pushpin: Un nouveau ticket vient d'être crée ! 
:busts_in_silhouette: Utilisateur : %username%
:e_mail: Email : %email%
:passport_control: Id : %userId%
:department_store: Département : %departmentName%
:speech_balloon: Sujet : %subject%
:vertical_traffic_light: Priorité: %priority%
:arrow_right:Cliquez ici pour y répondre %url% 
```

### Réponse 
```
:mailbox_with_mail: Une réponse vient d'être postée ! 
:busts_in_silhouette: Utilisateur : %username%
:department_store: Département : %departmentName%
:speech_balloon: Sujet : %subject%
:vertical_traffic_light: Priorité: %priority%
:arrow_right:Cliquez ici pour y répondre %url% 
```

### Fermeture
```
:mailbox_with_mail: Un ticket d'être fermé ! 
:busts_in_silhouette: Utilisateur : %username%
:department_store: Département : %departmentName%
:speech_balloon: Sujet : %subject%
:vertical_traffic_light: Priorité: %priority%
```