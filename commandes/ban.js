const Discord = require('discord.js')
const config = require('../info/config.json')
const emote = require('../info/emote.json')
module.exports.run = async(bot, message, args) => {

    message.delete()

    //vérifie les permissions
    if (!message.member.hasPermission('BAN_MEMBERS')) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu n'as pas la permission de ban!`),
         console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.name} n'as pas la permission de kick`)
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je n\'est pas la permission de ban!`), 
         console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le bot n'as pas la permission de ban`)
    }



    //vérifie que quelqu'un a été mentionné
    if (!args[0]) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu n'as pas précisé qui je dois ban!`),
        console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : personne n'a été précisé`)
        }

    //définir member
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);


    //si member est = a rien return
    if(!member) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne trouve pas cet utilisateur :/`),
         console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : l'utilisateur est introuvable`)
    }


    //vérifie qui est la personne a ban
    if(member.id === `${bot.user.id}`) {
        return message.channel.send(`${message.author.username}, pourquoi veut tu me ban? tu ne m\'aime pas? :cry:`),
         console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de ban le bot`)
    }

    if(member.id === message.author) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu ne peux pas te ban toi-meme!`),
         console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.username} a essayé de se ban sois-meme`)
    }

    if(member === config.owner1 || member === config.owner2) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu essaye de ban mon fondateur? ${emote.nani}`),
         console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de ban un fondateur`)
    }

    //verifie si la personne est banable
    if(!member.banable) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne peux pas bannir cette personne probablement car elle a un rôle au dessus du miens`),
         console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : la personne ne peut pas etre kick par le bot`)
    }

    //vérifie si la personne à ban n'est pas plus haut gradé
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu ne peux pas ban quelqu'un plus haut gradé que toi!`)
         console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de ban un membre plus haut gradé`)
    }


    //définir la raison
    let reason = args.slice(1).join(" ");
         
    // si raison = a rien alors reason = non fourni
    if (reason === "") reason = "Non-fourni"


    //envoie le mp au membre banni
    const banmp = new Discord.MessageEmbed()

     .setColor(config.embedColor)
     .setTitle(`Tu a été ban du serveur : ${message.guild}`)
     .setDescription(`Par : ${message.author.tag}\nRaison : ${reason}`)
     .setThumbnail(message.guild.iconURL())
     .setTimestamp()

    member.send(banmp);

    //ban le membre après 500ms
    setTimeout(() => { member.ban(`${reason} | Par : ${message.author.tag} (${message.author.id})`).catch(err => {
        if(err) return message.channel.send('keskicpace')
    })}, 500);


    const banembed = new Discord.MessageEmbed()

     .setColor(config.embedColor)
     .setTitle('Membre banni')
     .setThumbnail(member.user.displayAvatarURL())
     .setDescription(`Membre banni : ${member}\nPar : ${message.author.tag}\nRaison : ${reason}`)

    message.channel.send(banembed);
    console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| membre visé : ${member}`)



}

module.exports.help = {
    name: "ban"
}