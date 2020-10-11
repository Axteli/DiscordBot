const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    const icon = message.guild.iconURL()
    const serverinfo = new Discord.MessageEmbed()
    .setColor("#527a9e")
    .setTitle("Information sur le serveur")
    .addField(`Nom du serveur`, `${message.guild}`, true)
    .addField(`owner`, `${message.guild.owner}`, true)
    .addField(`Region`, `${message.guild.region}`, true)
    .setThumbnail(icon)
    message.channel.send(serverinfo);
    message.delete();
    console.log(`commande : serverinfo | par : ${message.author} | dans : ${message.channel} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)

}

module.exports.help = {
    name: "serverinfo"
    }