const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    const embedPing = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`:ping_pong: Latence du bot : ${Date.now() - message.createdTimestamp}ms \n :heart: Latence de l'API : ${Math.round(bot.ws.ping)}ms`)
    message.channel.send(embedPing)
    message.delete();
    console.log(`commande : ping | par : ${message.author} | dans : ${message.channel} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)  
};


module.exports.help = {
name: "ping"
}