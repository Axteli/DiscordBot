![logo](https://cdn.discordapp.com/attachments/758707064251482162/765492998586630174/git200.png)
# WikiBot
Bot pour le serveur discord wiki shapez.io

# Sommaire
Voici les différentes étapes pour utiliser le bot
- [Sommaire](#Sommaire)
- [Créer un bot](#Créer-un-bot)
- [Inviter son bot](#Inviter-son-bot)
- [Utiliser le code fourni sur github](#Utiliser-le-code)
- [lancer le bot](#lancer-le-bot)
- [Problèmes/Paramètres](#Problèmes/Paramètres)

## Créer-un-bot
Avant toute choses, il vous faut créer un bot sur [le portail développeur de discord](https://discord.com/developers/).
Pour ce faire, connectez-vous puis aller dans applications -> nouvelle application et donnez lui un nom.
Désormais créer un bot via le bouton bot a droite. Faite-le. Ça y est vous avez créer un bot !

## Inviter-son-bot
Pour inviter son bot, aller dans OAuth2 et cocher la case "Bot". Un nouveau tableau avec plein de coche aparait. 
Chaque coche represente une permission, cocher donc les permission de vous voulez que votre bot ait. Cocher chaque permission de vous voulez que votre bot ait et
![image_exemple](https://cdn.discordapp.com/attachments/758707064251482162/765529936697229322/Capture_decran_31.png)
vous obtiendrez un lien que vous pouvez ouvrir pour inviter le bot sur un serveur !

## Utiliser-le-code
pour utiliser le code, vous devz au préalable avoir installer [node.js](https://nodejs.org/fr/) (prennez la version lts, l'autre est une version beta) 
Ce logiciel vas vous permettre de lancer le code. Vous devez aussi installer [visual studio code](https://code.visualstudio.com/) qui lui vas vous permettre d'éditer le code.
Une fois ces 2 logiciels installés, vous aller pouvoir ouvrr le fichier contenant le code avec visal studio code (file, open folder)
Vous retrouver sur la gauche de l'écran la liste des fichier que contient le code. Vous avez simplement besoin d'ouvrir le fichier config.json
Désormais rempalcer "your token" par votre token (pour trouver son token,rendez-vous ici : [Trouver son token](#Trouver-son-token)

## lancer-le-bot
Pour lancer le bot, vous devez écrire cette commande dans le terminal `node index.js` (pour avoir accès au terminal dans visual faite terminal -> nouveau terminal

Si vous avez bien installez [node.js](https://nodejs.org/fr/)

## Problèmes/Paramètres
Voici quelque aide qui pourrait résoudre vos problème/ vous aider a configurer le bot
-[trouver son token](#Trouver-son-token)
-[Changer de préfixe](#Changer-de-préfixe)
-[Bot publique](#Bot-publique)

### Trouver-son-token
retourner sur [le portail développeur de discord](https://discord.com/developers/) et sélectionner votre application puis -> bot
En dessous du nom de votre bot, vous avez votre token. Vous pouvez l'afficher, le copier ou le régénérer en cas de publication sur internet par exemple.
Et voila votre token !

### Changer-de-préfixe
pour changer le prefixe, ouvrer le fichier config.json et remplacer le "$" pr votre prefixe, tout simplement !

### Bot-publique
Dans bot, vous pouvez tout d'abord désactiver l'option "bot publique" qui fera en sorte que seul vous puisse ajouter le bot.
