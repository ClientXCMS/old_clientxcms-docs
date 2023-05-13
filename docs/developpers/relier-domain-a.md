---
sidebar_position: 5
---
# Relier son domaine en A


Lorsque vous possédez un nom de domaine, il est essentiel de le relier à un hébergeur afin de rendre votre CLIENTXCMS accessible en ligne. Dans cet article, nous allons vous guider à travers le processus de liaison d'un domaine en A (adresse IP) avec les services OVH, LWS et Cloudflare.

## 1. OVH

1. Connectez-vous à votre compte OVH et accédez à la section "Domaines".
2. Sélectionnez le domaine que vous souhaitez relier et cliquez sur "Zone DNS".
3. Ajoutez un nouvel enregistrement de type "A".
4. Dans le champ "Nom", entrez "@" pour représenter votre domaine principal.
5. Dans le champ "cible", entrez l'adresse IP de votre hébergement OVH.
6. Enregistrez les modifications et attendez la propagation DNS, qui peut prendre jusqu'à 24 heures.

Une fois la propagation DNS terminée, votre domaine sera relié à votre hébergement OVH.

## 2. LWS

1. Connectez-vous à votre compte LWS et accédez à votre panneau de contrôle.
2. Recherchez l'option "Gestion de domaines" ou "Domaines".
3. Sélectionnez le domaine que vous souhaitez relier.
4. Accédez à la section "Gestion des DNS" ou "Zone DNS".
5. Ajoutez un nouvel enregistrement de type "A".
6. Dans le champ "Nom", entrez "@" ou laissez-le vide pour représenter votre domaine principal.
7. Dans le champ "Adresse IP", saisissez l'adresse IP de votre hébergement LWS.
8. Enregistrez les modifications et attendez la propagation DNS.

Après la propagation DNS, votre domaine sera lié à votre hébergement LWS.

## 3. Cloudflare


1. Créez un compte sur Cloudflare et ajoutez votre domaine à votre tableau de bord.
2. Cloudflare vous fournira deux serveurs de noms (name servers) à utiliser pour votre domaine.
3. Accédez à votre registraire de domaine (OVH ou LWS) et mettez à jour les serveurs de noms pour votre domaine avec les serveurs de noms fournis par Cloudflare.
4. Une fois les serveurs de noms mis à jour, retournez sur votre tableau de bord Cloudflare.
5. Dans la section "DNS", ajoutez un nouvel enregistrement de type "A".
6. Dans le champ "Nom", entrez "@" pour représenter votre domaine principal.
7. Dans le champ "Adresse IP", saisissez l'adresse IP de votre hébergement.
8. Enregistrez les modifications.

Après la propagation DNS, votre domaine sera relié à Cloudflare, qui agira comme un proxy entre vos visiteurs