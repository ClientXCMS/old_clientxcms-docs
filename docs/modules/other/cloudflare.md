---
sidebar_position: 9
---

# Cloudflare
Réécrivez les adresses IP des visiteurs d'origine et ajoutez la prise en charge du SSL flexible lors de l'utilisation de Cloudflare.


:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module Cloudflare soit activé sur votre ClientXCMS et que vous utilisiez cloudflare. [cliquez ici pour l'activer](../modules.md)
:::

## Configuration
L'activation du module permet de réécrire les adresses IP, mais le module contient quelques configurations utiles
La configuration du module se trouve dans les paramètres `Panel Administration` > `Système` > `Paramètres`

![img](https://media.discordapp.net/attachments/475073153509490689/1041049162172596357/image.png)
- **Forwarded For Key** (texte) : Entête HTTP Forward. Valeur par défaut : X-Forwarded-For
- **Detected IP Address** (texte) : Adresse IP détectée qui doit être votre Adresse IP
- **Liste des IPs de Cloudflare** (Liste)
