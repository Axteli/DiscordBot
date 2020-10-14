const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {


 if (!message.member.hasPermission('KICK_MEMBERS')) {
    return message.channel.send(`Tu n'as pas la permission de kick!`)
}
if (!args[0]) {
    return message.channel.send(`Mentionne quelqu'un !`)
}
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

try {
    await member.kick();
    await message.channel.send(`${member} a été kické!`)
    await console.log(`commande : kick| par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
} catch (e) {
    return message.channel.send(`Cet utilisateur n'est pas sur le serveur!`)
}

}

module.exports.help = {
name: "kick"
}
