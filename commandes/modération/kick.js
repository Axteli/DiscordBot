const Discord = require('discord.js')
const config= require('../../config/config.json')
const emote = require('../../config/emote.json')
module.exports.run = async(bot, message, args) => {


    //vérifie les permissions
    if (!message.member.hasPermission('KICK_MEMBERS')) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu n'as pas la permission de kick!`),
         console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.username} n'as pas la permission de kick`)
    }

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je n\'est pas la permission de kick !`), 
         console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le bot n'as pas la permission de kick`)
    }



    //vérifie que quelqu'un a été mentionné
    if (!args[0]) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu n'as pas précisé qui je dois kick!`),
         console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : personne n'a été précisé`)
    }


    //définir member
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);


    //si member est = a rien return
    if(!member) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne trouve pas cet utilisateur :/`),
         console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : l'utilisateur est introuvable`)
    }


    //vérifie qui est la personne a kick
    if(member.id === `${bot.user.id}`) {
        return message.channel.send(`${message.author.username}, pourquoi veut tu me kick? tu ne m\'aime pas? :cry:`),
         console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de kick le bot`)
    }

    if(member.id === message.author) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu ne peux pas te kick toi-meme!`),
         console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de se kick sois-meme`)
    }

    if(member === config.owner1 || member === config.owner2) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu essaye de kick mon fondateur? ${emote.nani}`),
         console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de kick un fondateur`)
    }

    //verifie si la personne est kickable
    if(!member.kickable) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne peux pas kicker cet personne probablement car il a un role au dessus du miens`),
         console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : la personne ne peut pas etre kick par le bot`)
    }

    //vérifie si la personne à kick n'est pas plus haut gradé
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu ne peux pas kick quelqu'un plus haut gradé que toi!`),
         console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de kick un membre plus haut gradé`)
    }



    //définir la raison
    let reason = args.slice(1).join(" ");

    // si raison = a rien alors reason = non fourni
    if (reason === "") reason = "Non-fourni"


    //envoie le mp au membre kické
    const kickmp = new Discord.MessageEmbed()

     .setColor(config.embedColor)
     .setTitle(`Tu a été kick du serveur : ${message.guild}`)
     .setDescription(`Par : ${message.author.tag}\nRaison : ${reason}`)
     .setThumbnail(message.guild.iconURL())
     .setTimestamp()

    member.send(kickmp).then(_msg => {

        member.kick(`${reason} | Par : ${message.author.tag} (${message.author.id})`)
         .catch(err => {if(err) return message.channel.send('je n\'ai pas réussi à kick le membre! Tu ne devrais jamais recevoir une erreur comme celle-ci...')})
    
    }).then(() => {

        const kickembed = new Discord.MessageEmbed()

         .setColor(config.embedColor)
         .setTitle('Membre kické')
         .setThumbnail(member.user.displayAvatarURL())
         .setDescription(`Membre kické : ${member}\nPar : ${message.author.tag}\nRaison : ${reason}`)

        message.channel.send(kickembed);
        console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| membre visé : ${member}`)
    })


}

module.exports.help = {
    name: "kick",
    aliases: "expulser",
    description: "Expulse un membre.",
    usage: "kick <member> [reason]",
    example: ["kick @Axtéli", "kick @Axtéli flood"]
}