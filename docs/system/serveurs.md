---
sidebar_position: 4
---

# Serveurs

Chaque produit/services de vos clients est relié un serveur ClientXCMS qui permet de faire la jointure entre votre ClientXCMS et votre Plesk (Ou autres). Pour y accéder `Panel d'administration` > `Système` > `Serveurs` (/admin/servers)
![img](https://media.discordapp.net/attachments/475073153509490689/957595619369824286/unknown.png)
## Création
### Détails du serveur
![img](https://media.discordapp.net/attachments/475073153509490689/957604236793872465/unknown.png)

**Nom du serveur**(texte) : Nom qui sera affiché à titre d'information.

**Adresse IP**(ip/hostname) : Adresse IP ou nom d'hôte qui sera utilisé pour se connecter à votre serveur.

**Coût mensuel**(nombre) : Coût de votre serveur mensuel à titre d'information. Ne (sera) jamais affiché à vos clients.

**No. Maximum de compte**(nombre) : Nombre maximum de compte à titre d'information. Ne (sera) jamais affiché à vos clients.

**Localisation**(texte) : Localisation de votre serveur à titre d'information. Sera affiché à vos clients.

**Type de serveur**(select) : Type de serveur. Sera utilisé pour tester la connexion et se connecter à votre serveur.

**Caché**(checkbox) : Permet de cacher le serveur ou non. [se référer ici pour plus d'informations](serveurs#test-de-connexion)

### Serveurs de nom
![img](https://media.discordapp.net/attachments/475073153509490689/957604370189533185/unknown.png)
:::info
Les champs suivants sont utilisés pour les serveurs de revente d'hébergement Web (Plesk, cPanel). Ils peuvent être laissés vide si cela n'est pas utile.
:::

**Premier serveur de nom**(ip/hostname) : Premier serveur de nom

**Second serveur de nom**(ip/hostname) : Second serveur de nom

**Troisième serveur de nom**(ip/hostname) : Troisième serveur de nom

**Quatrième serveur de nom**(ip/hostname) : Quatrième serveur de nom

**Cinquième serveur de nom**(ip/hostname) : Cinquième serveur de nom

Ces champs seront affichés dans le panel de gestion avancé de vos clients.
Vous pouvez laisser vider ils ne seront pas affichés.
### Authentification
![img](https://media.discordapp.net/attachments/475073153509490689/957604546371272744/unknown.png)

:::info
Les champs suivants sont spécifiques à chaque type de serveur. Veuillez-vous référez à la page du module pour plus d'information.
:::
**Sécurité**(select) : Activez le si vous votre serveur est protégé par un certificat HTTPS

### Port personnalisé
![img](https://media.discordapp.net/attachments/475073153509490689/957605207053840394/unknown.png)
:::info
Certain module ne supporte pas cette fonctionnalité
:::
Vous pouvez personnaliser le port utilisé
Valeur par défaut : 

Module         | Port           |
|------------  | ------------   |
| Proxmox      | 8806           |
| Wisp         | 80             |
| Pterodactyl  | 80             |
| cPanel       | 2083           |
| Plesk        | 80             |
| Virtualizor  | 4083           |
| VirtualizorCloud | 4085      |

## Suppression
Vous pouvez supprimer un serveur en cliquant sur le bouton rouge dans la colonne "Actions". Une confirmation vous sera demandé, après ceci il supprimera le serveur et toutes les données attachées à celui-là.
## Edition
Pour éditer un serveur, appuyez sur le bouton Bleu dans la colonne "Actions".
Modifiez les informations comme vous le souhaitez puis [Tester la connexion](serveurs#Test-de-connexion) pour être sûr de pas avoir désynchronisé quelque chose.
:::danger
Il est fortement déconseillé de modifier le type de serveur. Cela pourrait provoquer des graves répercussions s'il y a des produits/services déjà configurés sur le serveur.
[Vous pouvez créer un autre serveur pour éviter tout problème.](serveurs#Création)
:::
![img](https://media.discordapp.net/attachments/475073153509490689/957599353571250196/unknown.png)

## Serveur caché
Cette option permet de décider si le serveur ne doit pas être utilisé par défaut pour créer les services de vos clients. Pour cacher un serveur, cochez la checkbox dans la colonne "#", le voyant rouge passera à vert.

**Vert** : Non caché, les services peuvent être créés dessus.

**Rouge** : Caché, les services peuvent être créés dessus (Il peut quand même être utilisé quand un service déjà existant est dessus).

## Test de connexion
Pour vérifier que ClientXCMS puisse bien se connecter à l'API de votre serveur distant (Plesk par exemple). Un bouton est disponible pour tester la connexion et vous donne un retour.

En cas de succès, il vous sera affiché **Success** en retour avec un statut de **200**. Sinon en cas d'échec, il vous répondra ce qu'il pose problème avec un statut de **500**.

Après ce test, vous pouvez créer/sauvegarder votre serveur ClientXCMS avec tranquillité, il est bien connecté.
![img](https://media.discordapp.net/attachments/475073153509490689/957598827563606047/unknown.png)