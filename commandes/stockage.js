const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    const stockage = new Discord.MessageEmbed()
     .setTitle("Stockage")
     .setColor("#527a9e")
     .setDescription("Le <#764174142450696193> peut stocker une forme jusqu’à 5 000 items.Une propriété utile du stockage est qu’il peut être utilisé comme une porte de débordement. Si l’unité de stockage est vide, elle transmet toutes les entrées à la sortie gauche. Toutefois, s’il contient des éléments, ou si la sortie gauche est bloquée, il commencera à sortir vers la droite.")
     .addField('Détails', "Item/s : Infinie\nTaille : 2x2\nRaccourci : y\nEntrée : 2\nSortie : 2")
     .setThumbnail('https://cdn.discordapp.com/attachments/758707064251482162/764176389993267210/storage.png')
     .setImage('https://cdn.discordapp.com/attachments/758707064251482162/764163179634229278/trash-storage.png')
     .setFooter('Infos tirées du fandom', 'https://cdn.discordapp.com/attachments/758707064251482162/759150748276621338/1_TtT_gbfvQ5LitUE9wfpkog.png')
message.channel.send(stockage);
message.delete();
console.log(`commande : stockage | par : ${message.author} | dans : ${message.channel} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)

}

module.exports.help = {
    name: "stockage"
    }