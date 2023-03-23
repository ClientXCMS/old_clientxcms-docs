
## Assets
Pour avoir des meilleures organisations des assets, CLIENTXCMS permet d'utiliser plusieurs dossiers pour les assets de vos thèmes. Voici un récap
## Globale
Des assets sont globaux à tous les thèmes (exemple : le système de panier en ajax ou l'auto reload d'un service) ces scripts javascript ou images sont dans le dossier `/public/global`


| Fichier        | Description                                                                     |
|----------------|---------------------------------------------------------------------------------|
| autogrow.js    | (CustomElement) Fait grandir un `<textarea>` rapidement                           |
| basket.js      | Gère en ajax le système de panière                                              |
| clientx.css    | Ajoute du CSS qui sont fortement conseillé dans le CMS                          |
| event.js       | Gére les évemements Halloween ou Noel                                           |
| fund.js        | Ajoute du javascript requis pour le module Fond                                 |
| halloween.js   | Ajoute du javascript requis pour halloween (automatiquement ajouté dans le CMS) |
| popupwindow.js | (CustomElement) Crée un fenêtre facilement (les preview email par exemple)      |
| scripts.js     | (CustomElement) Ajoute du javascript requis dans le CMS globalement             |
| SecurityPwd.js | (CustomElement) Permet de générer un mot de passe sécurisé à l'inscription      |
| service.js     | Rafraichis le panel service régulièrement                                       |
| uploader.js    | (CustomElement) Uploader js                                                     |

## Différents dossiers themes
### /assets
Ce dossier sera l'hôte de nombreux fichiers, il supportera votre style.css ou autre fichier CSS de votre thème.

### /plugins
Ce dossier pourra héberger vos dépendances ou plugins (jquery, bootstrap).

## Themes/Fake/componants

Ce dossier sera moins utilisé, mais permettra d'y mettre vos components personnalisés (CustomElement ou autre).