---
sidebar_position: 2
---

# Functions & Filtre

Les functions permet de récupérer des données plus facilement pour les afficher ou permet d'aider le développeur au développement.
Pour les utiliser ```{{ nomdelafunction(parametre1, parametre2) }}```. Pour les filtres il faut utiliser comme ceci `{{ valeur | nomdufiltre(parametre1, parametre2) }}`
## Helper de génération d'URL d'assets

| Functions       | Paramètres                    | Dossier                        |
|-----------------|-------------------------------|--------------------------------|
| theme_global    | file:string                   | /public/global                 |
| theme_plugin    | file:string                   | /public/Themes/Fake/plugins    |
| theme_asset     | file:string                   | /public/Themes/Fake/assets     |
| theme_component | file:string                   | /public/Themes/Fake/components |

## Helper global


| Functions         | Paramètres               | Description                                                                              |
|-------------------|--------------------------|------------------------------------------------------------------------------------------|
| request           |                          | Récupére sous forme de classe PSR-7 la requete                                           |
| is_dark           |                          | Vérifie si l'utilisateur est en mode sombre (comme pour le thème Argon)                  |
| build_query       | query:string             | Génère une chaîne de requête                                                             |
| setting           | key:string, default:null | Récupère un paramètre dans la base de données                                            |
| config            | key:string, default:null | Récupère un paramètre le container                                                       |
| include           | file:string              | Include un fichier twig                                                                  |
| recaptcha         |                          | Permet de générer l'element HTML pour un captcha Recaptcha ou HCaptcha                   |
| recaptcha_scripts |                          | Rajoute le script requis pour faire fonctionner le captcha (à mettre dans le block body) |
| flash             | type:string              | Récupère les informations flash du type demandes (success, error, warning, info)         |


## Csrf

| Functions  | Dossier                        |
|-------------------------------------------------|
| csrf_input |  Génére l'input HTML Csrf             |
| csrf_token |  Donne uniquement le jeton CSRF             |
| csrf_name |  Donne la clé CSRF (généralement '_csrf')             |


## Filtre

| Filtr                  | Paramètres                               | Description                                                 |
|------------------------|------------------------------------------|-------------------------------------------------------------|
| formatted_price        | price:string, currency:bool              | Formatte la valeur en prix                                  |
| formatted_date         | date:timestamps ou string, format:string | Formatte la date selon le format                            |
| formatted_payment_name | paymentname:string                       | Renvoie le nom de la méthode de paiement                    |
| formatted_payment_icon | paymentname:string                       | Renvoie l'icone de la méthode de paiement                   |
| strpad                 | number:int, padlenght:int, string:string | Complète une chaîne jusqu'à une taille donnée               |
| ucwords                | string:string                            | Met en majuscule la première lettre de tous les mots        |
| html_decode            | content:string                           | Convertit les entités HTML à leurs caractères correspondant |
| symbol_for             | symbol:string                            | Formate EUR en €                                            |
| formatBytes            | type:string                              | Format des bytes en MO,GB, TB                               |
| to_int                 | type:string                              | Formatte en integer                                         |
| markdown               | markdown:string                          | Formatte en markdown                                        |

### formatted_price

`{{ formatted_price(prix,currency, trans, currencycode)`
Prix : valeur à formatter
Currency : par default false mais si true affiche le symbole par défault après le prix
trans : par default free, mais peut-être également 'none' pour afficher "Aucun"
currencycode : Pour afficher une autre symbole que celui par default
