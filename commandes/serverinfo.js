const Discord = require('discord.js')
const moment = require('moment')
const config = require('../config.json')
const emote = require('../emote.json')
module.exports.run = async(bot, message, args) => {

    message.delete();


    var AFK = [];
    if(!message.guild.afkChannel) {
        AFK.push('aucun')
    }else{
        AFK.push(`${message.guild.afkChannel}`)
    }


    const notif = {
        MENTIONS: "Mentions uniquement",
        ALL: "Tous les messages"
    }
    const verif = {
        NONE: "Aucune vérification",
        LOW: "E-mail vérifié requis",
        MEDIUM: "Inscription sur discord depuis plus de 5min requise",
        HIGH: "Doit être membre depuis plus de 10 min",
        VERY_HIGH: "Numéro de téléphone vérifié requis"
    }

    const serverinfo = new Discord.MessageEmbed()
     .setColor(config.embedColor)
     .setTitle(`Information sur : ${message.guild.name}`)
     .addField(`📃 | Nom du serveur`, `${message.guild.name}`, true)
     .addField(`👑 | Fondateur`, `<@${message.guild.ownerID}>\n(${message.guild.ownerID})`, true)
     .addField(`🌍 | Region`, `${message.guild.region}`, true)
     .addField(`👤 | Membres`, `${message.guild.memberCount}`, true)
     .addField(`🛋 | Salons`, `${message.guild.channels.cache.size}`, true)
     .addField(`👨‍💻 | Rôles`, `${message.guild.roles.cache.size}`, true)
     .addField(`👮‍♂️ | Niveau de vérification`, `${verif[message.guild.verificationLevel]}`, true)
     .addField(`🔔 | Paramètres de notifications`, `${notif[message.guild.defaultMessageNotifications]}`, true)
     .addField(`${emote.partner} | Partenaire`, message.guild.partnered ? 'Oui' : 'Non', true)
     .addField(`${emote.verified} | Vérifié`, message.guild.verified ? `Oui` : `Non`, true)
     .addField(`${emote.boost} | Nombre de boost`, `${message.guild.premiumSubscriptionCount}`, true)
     .addField(`💤 | Salon vocal AFK`, `${AFK}`, true)
     .addField(`📅 | Date de création`, moment(message.guild.createdAt).format('[le] DD/MM/YYYY [à] HH:mm:ss'), true)
     .addField(`📆 | Date d'arrivé du bot`, moment(message.guild.joinedAt).format('[le] DD/MM/YYYY [à] HH:mm:ss'), true)
     .setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true, size: 512 }))
    message.channel.send(serverinfo);
    console.log(`commande : serverinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)

}

module.exports.help = {
    name: "serverinfo"
    }