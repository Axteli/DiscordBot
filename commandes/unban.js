const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    const member = args[0];

    if (!member) {
         return message.channel.send(`merci de donner un id!`)
    }

    try {
        message.guild.fetchBans().then(bans => {
            message.guild.members.unban(member)
        })
        await message.channel.send(`${member} a été unban !`)
        await console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
    } catch (e) {
        return message.channel.send(`Une erreur s'est produite :/`)
    }

}

module.exports.help = {
    name: "unban"
    }