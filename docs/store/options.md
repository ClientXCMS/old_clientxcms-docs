---
sidebar_position: 4
---

# Options
Vous pouvez ajouter des options supplémentaires à vos offres ou demandé des informations complémentaires pour traiter la commande de vos clients lors de l'achat.
Pour y accéder : `Espace Administration` > `Boutique` > `Options additionnelles`
## Modules supportés
| Module           | Support |
|------------------|-------|
| Proxmox          | ✅     |
| PteroBox         | ✅     |
| Virtualizor      | ✅      |
| VirtualizorCloud | ✅     |
| Pterodactyl      | ✅     |
| Wisp             | ✅     |

## Rendu espace client
![img](https://media.discordapp.net/attachments/475073153509490689/1049104331049291816/image.png?width=1440&height=243)

## Liste des options
![img](https://media.discordapp.net/attachments/475073153509490689/1048642844962853058/image.png?width=1440&height=442)
Dans le premier tableau se trouve vos options et dans le second, les types personnalisés utilisables.

## Création
### Nouvelle option
![img](https://media.discordapp.net/attachments/475073153509490689/1049099841415950398/image.png)
- **Produits** (select) : Sélectionnez les produits qui demanderont l'option
- **Type**(select) : Type d'option (vos options personnalisées apparaîtront ici)
- **Prix unitaire**(nombre) : Prix unitaire qui sera multiplié par la quantité choisie par le client.
- **Valeur minimum**(nombre) : Valeur minimum que le client peut choisir dans sa commande
- **Valeur maximum**(nombre) : Valeur maximum que le client peut choisir dans sa commande
:::info Information
Pour des options requises pour traité la commande (exemple installation d'un panel sur le VPS, où adresse IP d'un serveur plesk) nous conseillons de mettre un prix à 0. Dans le cas d'une option avec de la mémoire en plus, vous pouvez mettre le prix que vous voulez facturer.
:::
### Nouvelle option personnalisée
![img](https://media.discordapp.net/attachments/475073153509490689/1049089892854018058/image.png?width=1440&height=233)
- **Type**(select) : Type de champ (Choose, Text, Number)
- **Label du champ**(select) : Label qui sera affiché
- **Valeurs autorisées**(Text) : Valeurs sélectionnable

## Suppression
Vous pouvez supprimer une option en cliquant sur le bouton rouge dans la colonne "Actions". Une confirmation vous sera demandée puis le produit sera supprimé.
## Edition
![img](https://media.discordapp.net/attachments/475073153509490689/1049105790981644298/image.png)
- **Produits** (select) : Sélectionnez les produits qui demanderont l'option
- **Type**(select) : Type d'option (vos options personnalisées apparaîtront ici)
- **Prix unitaire**(nombre) : Prix unitaire qui sera multiplié par la quantité choisie par le client.
- **Valeur minimum**(nombre) : Valeur minimum que le client peut choisir dans sa commande
- **Valeur maximum**(nombre) : Valeur maximum que le client peut choisir dans sa commande
## Informations additionnelles d'une commande
Vous retrouverez sur la facture les informations additionnelles d'une commande 
![img](https://media.discordapp.net/attachments/475073153509490689/1049129649994731551/image.png)