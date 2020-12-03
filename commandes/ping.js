const Discord = require('discord.js')
const config = require('../info/config.json')
module.exports.run = async(bot, message, args) => {


    const embedPing = new Discord.MessageEmbed()
     .setColor(config.embedColor)
     .setDescription(`:ping_pong: Latence du bot : ${Date.now() - message.createdTimestamp}ms \n :heart: Latence de l'API : ${Math.round(bot.ws.ping)}ms`)
    message.channel.send(embedPing)
    
    console.log(`commande : ping | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)  

};

module.exports.help = {
    name: "ping",
    description: "Affiche le ping du bot.",
    usage: "ping",
    example: "ping"
}