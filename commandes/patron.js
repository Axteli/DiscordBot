const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    const patron = new Discord.MessageEmbed()
     .setTitle("Les patrons")
     .setColor("#527a9e")
     .addField('Description', "Le système de <#758700843398070282> se débloque a partir du niveaux 13, qui permet de couper, copier et coller une sélection aux prix d'une forme spécial, le <#758700843398070282> (en anglais,'blueprints').", false)
     .addField('la forme', "Pour faire un patron, il faut un [rond bleu avec le l'angle supérieur droit étant un carré](https://viewer.shapez.io/?CbCbCbRb) superposé a un [rond blanc](https://viewer.shapez.io/?CwCwCwCw)(image si dessous)\nps : pour faire du blanc rendez-vous en <#756623417133760522>", false)
     .setThumbnail('https://cdn.discordapp.com/attachments/758707064251482162/758707092046872616/patron.png')
     .setImage('https://cdn.discordapp.com/attachments/758707064251482162/758707300470095903/calque_patron.png')
     .setFooter('Infos tirées du fandom', 'https://cdn.discordapp.com/attachments/758707064251482162/759150748276621338/1_TtT_gbfvQ5LitUE9wfpkog.png')
message.channel.send(patron);
console.log('commande patron executé')
  
}

module.exports.help = {
name: "patron"
}