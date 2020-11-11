const Discord = require('discord.js')
var emote = require('../emote.json')
module.exports.run = async(bot, message, args) => {

    message.delete();


    const time = {
        0: "00", 1:"01", 2:"02", 3:"03", 4:"04", 5:"05", 6:"06", 7:"07", 8:"08", 9:"09",
        10:"10", 11:"11", 12:"12", 13:"13", 14:"14", 15:"15", 16:"16", 17:"17", 18:"18", 19:"19",
        20:"20", 21:"21", 22:"22", 23:"23", 24:"24", 25:"25", 26:"26", 27:"27", 28:"28", 29:"29",
        30:"30", 31:"31", 32:"32", 33:"33", 34:"34", 35:"35", 36:"36", 37:"37", 38:"38", 39:"39",
        40:"40", 41:"41", 42:"42", 43:"43", 44:"44", 45:"45", 46:"46", 47:"47", 48:"48", 49:"49",
        50:"50", 51:"51", 52:"52", 53:"53", 54:"54", 55:"55", 56:"56", 57:"57", 58:"58",59:"59"
    }



        var a = new Date(message.guild.createdTimestamp);
        var months = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var serverCreated = (`le ${time[date]} ${month} ${year} à ${time[hour]}:${time[min]}:${time[sec]}`)


        var b = new Date(message.guild.joinedTimestamp);
        var months = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
        var year = b.getFullYear();
        var month = months[b.getMonth()];
        var date = b.getDate();
        var hour = b.getHours();
        var min = b.getMinutes();
        var sec = b.getSeconds();
        var botJoinedAt = (`le ${time[date]} ${month} ${year} à ${time[hour]}:${time[min]}:${time[sec]}`)



    var AFK = [];
    if(!message.guild.afkChannel) {
        AFK.push('aucun')
    }else{
        AFK.push(`${message.guild.afkChannel}`)
    }

    const icon = message.guild.iconURL()

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
     .setColor("#527a9e")
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
     .addField(`📅 | Date de création`, serverCreated, true)
     .addField(`📆 | Date d'arrivé du bot`, botJoinedAt, true)
     .setThumbnail(icon)
    message.channel.send(serverinfo);
    console.log(`commande : serverinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)

}

module.exports.help = {
    name: "serverinfo"
    }