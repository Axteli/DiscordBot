# Configuration
Avant de commencer, vous devez renommer les 3 fichiers dans le dossier config et enlever le `example.` de devant chaque fichier.
## Sommaire
- [config.json](#config.json)
- [emote.json](#emote.json)
- [logs.json](#logs.json)

### config.json

#### sommaire
- [prefix et token](#prefix-et-token)
- [embedColor](#embedColor)
- [Owners](#Owners)
- [suggest et logs channel](#suggest-et-logs-channel)
- [welcome et goodbye](#welcome-et-goodbye)
- [deleteCommands](#deleteCommands)
- [Status](#Status)

##### prefix et token
**prefixe** : le préfixe est le caractère qui précède une commande. Exemple : dans `!ping` `!` est le préfixe et `ping` la commande./!\ Si vous rentré des lettres en minuscule, cela ne marchera pas si vous tapper le prefixe en majusucule dans discord!  
  
**token** : le token est le mot de passe qui permet de se connecter à son bot discord. **attention! Il ne dois être partagé avec personne!**. Pour trouver son token, rendez vous sur [le portail développeur de discord](https://discord.com/developers/applications) puis séléctionné votre application. Ensuite, allez dans bot puis cliquer sur "copy" pour le copier. Vous pouvez maintenant le coller dans le config.json. 

##### embedColor
C'est la couleur de la barre sur la droite d'un embed [[image]](https://raw.githubusercontent.com/Axteli/DiscordBot/master/docs/images/embed_color.png). Vous devez rentrer un code HEX (avec ou sans le #). Pour en générer, vous pouvez utiliser [ce site](https://htmlcolorcodes.com/fr/).

##### Owners
Ce sont les gérants du bot. Ils sont les seuls à pouvoir exécuter les commandes de la catégorie owner.  
Vous devez simplement rentrer votre id discord. Si vous gérer le bot à deux, il vous suffit de mettre votre id dans `owner1` et l'id de la deuxième personne dans `owner2`.

##### suggest et logs channel
**suggestChannel**: c'est le salon où arriveront les suggestion envoyé avec la commande `suggest`. Vous devez simplement rentrer l'id du salon.  
    
**logsChannel**: c'est le salon de logs. Vous y retrouverez les logs de démarrage/extinction du bot et tout les logs cité dans [logs.json](#logs.json). Vous devez aussi rentrer l'id du salon.

##### welcome et goodbye
**welcome**: c'est le message de bienvenue à l'arrivée d'un membre. Vous pouvez choisir le salon de ce message avec `welcomeChannel` où il suffit de rentrer l'id du salon. Pour customiser le message, utilisez `welcomeMessage`, pour info :
- `userMention` sera remplacé par une mention du membre
- `userName` par son pseudo
- `userTag` par son tag
- `userId` par son id
- `memberCount` par le nombre de membre du serveur depuis qu'il a rejoint
- `serverName` par le nom du serveur  
  
**goodbye**:c'est le message d'au revoir au départ d'un membre. Vous pouvez choisir le salon avec `goodbyeChannel` où il suffit de rentrer l'id du salon. Pour customiser le message, utilisez `welcomeMessage`. Vous pouvez utiliser les mêmes variables que pour le welcome **à l'exception de userMention**!

##### deleteCommands
C'est la suppression des commandes (`!ban @Axtéli` est une commande). Si vous mettez sur "yes" les commandes seront supprimé, si vous ne voulez pas mettez sur "no".

##### Status
**type**: il y a 5 type de status : 
- `STREAMING` stream 
- `PLAYING` joue
- `WATCHING` regarde
- `LISTENING` écoute
- `COMPETING` participe à:  
Si vous mettez un statut invalide, le bot n'aura aucun statut! Avec le statut streaming, vous aurez un bouton "regarder", cela menera sur ce lien : https://twitch.tv/le_nom_de_votre_bot  
  
**status**: c'est ce qui se trouve après le type, il change toute les 4 secondes. Si vous ne voulez pas qu'il change, il vous suffit de mettre 4 fois le même statut. 

## emote.json
### Introduction
Dans ce fichier, vous allez définir quelles émojis le bot vas utiliser. Vous pouvez soit mettre l'id d'un emoji (par exemple : `<a:tick:724688652608864376>`) ou bien mettre des émojis de base de discord (par exemple: ✅). Il seront utilisé par quasiment chaque message du bot, autant bien les choisir!

### Obtenir l'id d'un émoji

## logs.json

###### [retour au README](https://github.com/Axteli/DiscordBot#readme)