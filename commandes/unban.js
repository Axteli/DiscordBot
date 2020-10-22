const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    const member = args[0];

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Tu ne peux pas dé-bannir!'), console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.tag} n'as pas la permission de dé-bannir`)
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Je n\'est pas la permission de dé-bannir !'), console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le bot n'as pas la permission de dé-bannir`)

    if (!member) {
         return message.channel.send(`merci de donner un id!`)
    }

    try {
        message.guild.fetchBans().then(bans => {
            message.guild.members.unban(member)
        })
        if(!member.unbannable) return message.channel.send('Une erreur c\'est produite. Soit car l\'id est invalide, soit car cette personne n\'est pas banni.'),console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : la personne ne peut pas etre unbanni`)
        await message.channel.send(`${member} a été unban !`)
        await console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| membre visé : ${member}`)
    } catch (e) {
        return message.channel.send(`Une erreur s'est produite :/`)
    }

}

module.exports.help = {
    name: "unban"
    }