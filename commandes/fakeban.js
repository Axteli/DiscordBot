const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {
    
    let user = message.mentions.members.first()
    message.delete();
    if (!args[0]) {
        return message.channel.send(`Tu ne m'as pas dit qui je dois bannir !`)
    }
    message.channel.send(
      `${user} a bien été banni !` 
    );
    console.log(`commande : fakeban | par : ${message.author} | dans : ${message.channel} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| membre visé : ${user}`)
}

module.exports.help = {
name: "fakeban"
}