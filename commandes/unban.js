const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {



//vérifie les permission
    if(!message.member.hasPermission("BAN_MEMBERS")) 
        return message.channel.send('<a:tickred:764793956813766687> Erreur | Tu ne peux pas dé-bannir!'), 
         console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.username} n'as pas la permission de dé-bannir`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) 
        return message.channel.send('<a:tickred:764793956813766687> Erreur | Je n\'est pas la permission de dé-bannir !'),
         console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le bot n'as pas la permission de dé-bannir`)

//définir le membre a unban
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

//si aucun membre reconnu
    if (!member) {
        return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, je ne trouve pas cet utilisateur !`),
         console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : l'utilisateur est introuvable`)
    }

//s la personne ne peut pas etre unban
    if(!member.unbannable) 
        return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, Je ne peux pas dé-bannir ce membre! Soit car l\'id est invalide, soit car cette personne n\'est pas banni.`),
         console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : la personne ne peut pas etre unban`)
    
    
        try {
        message.guild.fetchBans().then(bans => {
            message.guild.members.unban(member)
        })
        await message.channel.send(`<a:tickgreen:764793938317803551> | ${member} a été unban !`)
        await console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| membre visé : ${member}`)
    } catch (e) {
        return message.channel.send(`Une erreur s'est produite :/`)
    }

}

module.exports.help = {
    name: "unban"
    }