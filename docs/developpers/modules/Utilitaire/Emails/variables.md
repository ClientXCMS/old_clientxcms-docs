---
sidebar_position: 1
---

# Variables
**ClientXCMS** utilise le moteur de rendu [twig](https://twig.symfony.com) pour afficher les pages de l'espace client.
## Syntaxe simple
Plus d'informations [ici](https://twig.symfony.com/doc/3.x/templates.html)
### Boucle
```twig
{% for user in users %}
    * {{ user.name }}
{% else %}
    No users have been found.
{% endfor %}
```
### Condition
```twig
{% if 'ClientXCMS' ends with 'S' %}

{% endif %}
{% if 'ClientXCMS' ends with 'S' %}

{% else %}

{% endif %}

```
### Ternaire
```twig
{{ current_user() ? "Vous êtes actuellment connecté" : "Veuillez vous connecter ! " }}
```
### Afficher une valeur
```twig
{{ current_user().email }}
```
Vous pouvez personnaliser avec des variables qui prennent la valeur des informations de l'utilisateur actuellement connecté.

Liste complète des variables est disponible depuis la page "Variables" quand on modifie un modèle d'email.

## Variables utilisateurs
| Variable                                                 | Exemple              |
|----------------------------------------------------------|----------------------|
| {{ current_user().id }}                                  | 10                   |
| {{ current_user().email }}                               | fake@clientxcms.com  |
| {{ current_user().firstname }}                           | Martin               |
| {{ current_user().lastname }}                            | Dev.                 |
| {{ current_user().phonenumber }}                         | 0701020304           |
| {{ current_user().companyName }}                         | ClientXCMS           |
| {{ current_user().address }}                             | 3, rue Pierre Mauroy |
| {{ current_user().address2 }}                            | Chambre 403          |
| {{ current_user().city }}                                | Lille                |
| {{ current_user().state }}                               | Haut-de-France       |
| {{ current_user().country }}                             | France               |
| {{ current_user().postcode }}                            | 59000                |
| {{ current_user().newsletter }}                          | 1                    |
| {{ current_user().wallet }}                              | 0.3                  |
| {{ current_user().locale }}                              | fr_FR                |
| {{ current_user().status }}                              | 1                    |
| {{ current_user().passwordReset }}                       | XXXXX                |
| {{ current_user().loginIpsToIgnore }}                    |                      |
| {{ current_user().confirmationToken }}                   | XXXX                 |
| {{ current_user().statusReason }}                        | Banned               |
| {{ current_user().lastSignIp }}                          | 127.0.0.1            |
| {{ current_user().passwordResetAt.format("d/m/y H:i") }} | 26-12-21             |
| {{ current_user().createdAt.format("d/m/y H:i") }}       | 26-12-21             |
| {{ current_user().confirmedAt.format("d/m/y H:i") }}     | 26-12-21             |
| {{ current_user().lastSignAt.format("d/m/y H:i") }}      | 26-12-21             |

## Variables Log
| Variable                                | Exemple                                  |
|-----------------------------------------|------------------------------------------|
| {{ log.id }}                            | 10                                       |
| {{ log.userId }}                        | 10                                       |
| {{ log.ipaddress }}                     | 127.0.0.1                                |
| {{ log.sent }}                          | 1                                        |
| {{ log.localization }}                  | France Provence-Alpes-Côte d'Azur Orange |
| {{ log.createdAt.format("d/m/y H:i") }} | 26-12-21                                 |

## Variables Serveur
| Variable                         | Exemple             |
|----------------------------------|---------------------|
| {{ server.id }}                  | 10                  |
| {{ server.type }}                | pterodactyl         |
| {{ server.ipaddress }}           | game.clientxcms.com |
| {{ server.name }}                | Pterodactyl node    |
| {{ server.noc }}                 | Location            |
| {{ server.primarynameserver }}   | ns1.clientxcms.com  |
| {{ server.secondarynameserver }} | ns2.clientxcms.com  |
| {{ server.thirdnameserver }}     | ns3.clientxcms.com  |
| {{ server.fourthnameserver }}    | ns4.clientxcms.com  |
| {{ server.fifthnameserver }}     | ns5.clientxcms.com  |

## Variables Service 
| Variable                                          | Exemple   |
|---------------------------------------------------|-----------|
| {{ service.id }}                                  | 10        |
| {{ service.userId }}                              | 10        |
| {{ service.state }}                               | Online    |
| {{ service.price }}                               | 10        |
| {{ service.recurringname }}                       | Monthly   |
| {{ service.paymenttype }}                         | Recurring |
| {{ service.createdAt.format("d/m/y H:i") }}       | 26-12-21  |
| {{ service.autoterminateAt.format("d/m/y H:i") }} | 26-12-21  |
| {{ service.expireAt.format("d/m/y H:i") }}        | 26-12-21  |
| {{ service.suspendAt.format("d/m/y H:i") }}       | 26-12-21  |
| {{ service.refundAt.format("d/m/y H:i") }}        | 26-12-21  |
| {{ service.terminateAt.format("d/m/y H:i") }}     | 26-12-21  |
| {{ service.lastrenewAt.format("d/m/y H:i") }}     | 26-12-21  |
| {{ service.nextrenewAt.format("d/m/y H:i") }}     | 26-12-21  |
| {{ service.serverId }}                            | 10        |
| {{ service.currentcycle }}                        | 2         |
| {{ service.maxcycles }}                           | 3         |
| {{ service.transactionItemId }}                   | 10        |
| {{ service.renewtype }}                           | wallet    |
| {{ service.renewToken }}                          | XXXXX     |