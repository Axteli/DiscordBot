![logo](https://repository-images.githubusercontent.com/302569921/d277ff00-0a46-11eb-957e-a941641c2d40)
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
Avant toutes choses, il vous faut créer un bot sur [le portail développeur de discord](https://discord.com/developers/).
Pour ce faire, connectez-vous puis allez dans applications -> nouvelle application et donnez lui un nom.
Désormais vous pouvez créer un bot via le bouton bot à droite. Ça y est vous avez créer un bot !

## Inviter-son-bot
Pour inviter son bot, aller dans OAuth2 et cocher la case "Bot". Un nouveau tableau avec plein de coche apparait. 
Chaque coche représente une permission, cocher donc les permission de vous voulez que votre bot ait et
![image_exemple](https://cdn.discordapp.com/attachments/758707064251482162/765529936697229322/Capture_decran_31.png)
vous obtiendrez un lien que vous pouvez ouvrir pour inviter le bot sur un serveur !

## Utiliser-le-code
Pour utiliser le code, vous devez au préalable avoir installer [node.js](https://nodejs.org/fr/) (prennez la version lts, l'autre est une version beta) 
Ce logiciel vas vous permettre de lancer le code. Vous devez aussi installer [visual studio code](https://code.visualstudio.com/) qui lui vas vous permettre d'éditer le code.
Une fois ces 2 logiciels installés, vous aller pouvoir ouvrir le fichier contenant le code avec visal studio code (file, open folder)
Vous retrouver sur la gauche de l'écran la liste des fichiers que contient le code. Vous avez simplement besoin d'ouvrir le fichier config.json
Désormais remplacer "your token" par votre token (pour trouver son token,rendez-vous ici : [Trouver son token](#Trouver-son-token))

## lancer-le-bot
Pour lancer le bot, vous devez écrire cette commande dans le terminal `node index.js` (pour avoir accès au terminal dans visual faite terminal -> nouveau terminal

Si vous avez bien installez [node.js](https://nodejs.org/fr/) et [rentrez votre token](#Trouver-son-token), le bot devrait ce lancer !

## Problèmes/Paramètres
Voici quelques aides qui pourraient résoudre vos problèmes/ vous aidez à configurer le bot
- [trouver son token](#Trouver-son-token)
- [Changer de préfixe](#Changer-de-préfixe)
- [Bot publique](#Bot-publique)
- [Activer les logs](#Activer-les-logs)

### Trouver-son-token
Retournez sur [le portail développeur de discord](https://discord.com/developers/) et sélectionner votre application puis -> bot
En dessous du nom de votre bot, vous avez votre token. Vous pouvez l'afficher, le copier ou le régénérer en cas de publication sur internet par exemple.
Et voilà votre token !

### Changer-de-préfixe
Pour changer le prefixe, ouvrer le fichier config.json et remplacer le "$" par votre prefixe, tout simplement !

### Bot-publique
Dans bot, vous pouvez tout désactiver l'option "bot publique" qui fera en sorte que seul vous puisse ajouter le bot.

### Activer-les-logs
Pour activer les logs, vous devez créer un webhook et récupérer son ID et son token. Pour ce faire, allez dans les paramètres de votre serveur puis dans intégrations faite consulter les webhooks et créez-en un. Vous pouvez simplement lui donner un nom pour vous y retrouver si vous avez plusieurs webhooks. Aussi dans ces paramètres, choisissez votre salon de logs. Une fois votre webhooks créer, copiez son lien et rentrer le dans votre navigateur. vous devriez avoir quelque chose dans ce style : 
```
{"type": 1, "id": "ID DU WEBHOOK", "name": "Non du webhook", "avatar": null, "channel_id": "346356444346", "guild_id": "3463463434646", "application_id": null, "token": "TOKEN DU WEBHOOK"}
```
Recopier simplement les informations après `"token":` (vous récuperez donc le token) et après `"id":`(vous récuperez l'id)
Allez dans config.json et rentrer le token après `"webhookID":` et rentrez l'id après `"webhookToken":`
Redémarrez votre bot et dès le démarrage vous devriez voir un logs dans votre salon logs ! Vous avez réussi !
