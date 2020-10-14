const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    const coupeur1 = new Discord.MessageEmbed()
     .setTitle("Le coupeur")
     .setColor("#527a9e")
     .addField("__Variante normal__", "Le <#756273811598344344> récupère une forme par derrère et la coupe en deux verticalement.Il met toujours la moitié gauche sur le côté avec le virage et la moitié droite directement vers l’avant.", false)
     .addField('Détails', "Item/s : 0.5\nTaille : 2x1\nRaccourci : 5\n Entrée : 1\nSortie : 2", false)
     .setImage("https://cdn.discordapp.com/attachments/758707064251482162/764432870168854558/cutter2.png")
     .setThumbnail("https://cdn.discordapp.com/attachments/758707064251482162/764432882139136010/cutter.png")
     .setFooter('Infos tirées du fandom', 'https://cdn.discordapp.com/attachments/758707064251482162/759150748276621338/1_TtT_gbfvQ5LitUE9wfpkog.png')
    
     const coupeur2 = new Discord.MessageEmbed()
     .setColor("#527a9e")
     .addField("__Variante quad__", "Le <#756273811598344344> quad prend 1 entrée de l’arrière et coupe les formes en 4 quarts. il  met toujours les forme coupées dans cet ordre : en haut à droite, en bas à droite, en bas à gauche, en haut à gauche ; de gauche à droite (en supposant son face vers le haut).", false)
     .addField('Détails', "Item/s : 0.5\nTaille : 4x1\nRaccourci : 5\n Entrée : 1\nSortie : 4", false)
     .setImage("https://cdn.discordapp.com/attachments/758707064251482162/764432857980469258/cutter-quad.png")
     .setThumbnail("https://cdn.discordapp.com/attachments/758707064251482162/764432882139136010/cutter.png")
     .setFooter('Infos tirées du fandom', 'https://cdn.discordapp.com/attachments/758707064251482162/759150748276621338/1_TtT_gbfvQ5LitUE9wfpkog.png')
     message.channel.send(coupeur1);
     message.channel.send(coupeur2);
     message.delete();
     console.log(`commande : coupeur | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)

}

module.exports.help = {
name: "coupeur"
}