const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    const poubelle = new Discord.MessageEmbed()
     .setTitle("La poubelle")
     .setColor("#527a9e")
     .setDescription("La <#756273846092300370> permet de détruire des formes inutiles. Elle est souvent utililisée après avoir mis des formes dans un <#756273811598344344>, puis détruire la partie dont vous n’avez pas besoin.")
     .addField('Détails', "Item/s : infini\nTaille : 1x1\nRaccourci : 0\n Entrée : 4\nSortie : 0", false)
     .setThumbnail('https://cdn.discordapp.com/attachments/758707064251482162/764153258507108372/trash.png')
     .setImage("https://cdn.discordapp.com/attachments/758707064251482162/764153209202671616/trash.png")
     .setFooter('Infos tirées du fandom', 'https://cdn.discordapp.com/attachments/758707064251482162/759150748276621338/1_TtT_gbfvQ5LitUE9wfpkog.png')
message.channel.send(poubelle);
message.delete();
console.log(`commande : poubelle | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
     
}

module.exports.help = {
    name: "poubelle"
    }