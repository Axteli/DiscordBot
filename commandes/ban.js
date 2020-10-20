const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Tu ne peux pas bannir!'), console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.tag} n'as pas la permission de bannir`)
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Je n\'est pas la permission de bannir !'), console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le bot n'as pas la permission de bannir`)

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!args[0]) return message.channel.send('Indique qui je doit bannir !'),console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : n'as pas indiqué qui bannir`)

    if(!member) return message.channel.send('Je ne trouve pas cet utilisateur :/'),console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : l'utilisateur était introuvable`)
    if(member.id === message.author.id) return message.channel.send('Bruh, tu ne peux pas te ban toi-meme!'),console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de se ban sois-meme`)
    if(!member.bannable) return message.channel.send('Je ne peux pas bannir cet personne. soit car c\'est un modo/admin, soit car il a un role au dessus du miens'),console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : la personne ne peut pas etre banni`)

    let reason = args.slice(1).join(" ");


    member.ban({
        reason: `${reason}`,
        })
    .catch(err => {
        if(err) return message.channel.send('Something went wrong')
    })

    const banembed = new Discord.MessageEmbed()
    .setColor("#527a9e")
    .setTitle('Membre banni <a:bancat:764793999130886194> ')
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`Membre banni : ${member}\nPar : ${message.author}\nRaison : ${reason}`)

    message.channel.send(banembed);
    console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| membre banni : ${member}| raison : ${reason}`)

}

module.exports.help = {
name: "ban"
}