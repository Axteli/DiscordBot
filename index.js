const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Le bot est prêt à être utilisé !');
    client.user.setActivity("Shapez.io", {type: 'PLAYING'});
})

//patron
client.on('message', (message) => {
    if (message.content === `${prefix}patron`){
        const monembed = new Discord.MessageEmbed()
         .setTitle("Les patrons")
         .setColor("#527a9e")
         .addField('Description', "Le système de <#758700843398070282> se débloque a partir du niveaux 13, qui permet de couper, copier et coller une sélection aux prix d'une forme spécial, le <#758700843398070282> (en anglais,'blueprints').", false)
         .addField('la forme', "Pour faire un patron, il faut un [rond bleu avec le l'angle supérieur droit étant un carré](https://viewer.shapez.io/?CbCbCbRb) superposé a un [rond blanc](https://viewer.shapez.io/?CwCwCwCw)(image si dessous)\nps : pour faire du blanc rendez-vous en <#756623417133760522>", false)
         .setThumbnail('https://cdn.discordapp.com/attachments/758707064251482162/758707092046872616/patron.png')
         .setImage('https://cdn.discordapp.com/attachments/758707064251482162/758707300470095903/calque_patron.png')
         .setFooter('Infos tirées du fandom', 'https://cdn.discordapp.com/attachments/758707064251482162/759150748276621338/1_TtT_gbfvQ5LitUE9wfpkog.png')
    message.channel.send(monembed);
    console.log('commande patron executé')
    }       
})
//generateur
client.on('message', (message) => {
    if (message.content === `${prefix}generateur`){
        const monembed = new Discord.MessageEmbed()
         .setTitle("générateur de forme")
         .setColor("#527a9e")
         .setDescription("Le <#756635002401194114> vous permet de générer n'importe quel forme ! De la plus farfelue au logo du jeu, tout est possible !\n[le générateur (clique ici!)](https://viewer.shapez.io/)")
    message.channel.send(monembed);
    console.log('commande generateur executé');
    }       
})
//poubelle
client.on('message', (message) => {
    if (message.content === `${prefix}poubelle`){
        const poubelle = new Discord.MessageEmbed()
         .setTitle("La poubelle")
         .setColor("#527a9e")
         .setDescription("La <#756273846092300370> permet de détruire des formes inutiles. Elle est souvent utililisée après avoir mis des formes dans un <#756273811598344344>, puis détruire la partie dont vous n’avez pas besoin.")
         .addField('Détails', "Item/s : infini\nTaille : 1x1\nRaccourci : 0\n Entrée : 4\nSortie : 0", false)
         .setThumbnail('https://cdn.discordapp.com/attachments/758707064251482162/764153258507108372/trash.png')
         .setImage("https://cdn.discordapp.com/attachments/758707064251482162/764153209202671616/trash.png")
         .setFooter('Infos tirées du fandom', 'https://cdn.discordapp.com/attachments/758707064251482162/759150748276621338/1_TtT_gbfvQ5LitUE9wfpkog.png')
    message.channel.send(poubelle);
    console.log('commande poubelle executé');
    }       
})
//stockage
client.on('message', (message) => {
    if (message.content === `${prefix}stockage`){
        const stockage = new Discord.MessageEmbed()
         .setTitle("Stockage")
         .setColor("#527a9e")
         .setDescription("Le <#764174142450696193> peut stocker une forme jusqu’à 5 000 items.Une propriété utile du stockage est qu’il peut être utilisé comme une porte de débordement. Si l’unité de stockage est vide, elle transmet toutes les entrées à la sortie gauche. Toutefois, s’il contient des éléments, ou si la sortie gauche est bloquée, il commencera à sortir vers la droite.")
         .addField('Détails', "Item/s\nTaille : 2x2\nRaccourci : y\nEntrée : 2\nSortie : 2")
         .setThumbnail('https://cdn.discordapp.com/attachments/758707064251482162/764176389993267210/storage.png')
         .setImage('https://cdn.discordapp.com/attachments/758707064251482162/764163179634229278/trash-storage.png')
         .setFooter('Infos tirées du fandom', 'https://cdn.discordapp.com/attachments/758707064251482162/759150748276621338/1_TtT_gbfvQ5LitUE9wfpkog.png')
    message.channel.send(stockage);
    console.log('commande stockage executé')
    }       
})

client.login(token);