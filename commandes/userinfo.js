const { MessageEmbed } = require('discord.js');
const moment = require('moment');
module.exports.run = async(bot, message, args) => {
const status = {
    online: "<:online:764845529380290581> En ligne",
    idle: "<:idle:764845572020502558> Inactif",
    dnd: "<:dnd:764845508907892736> Ne pas déranger",
    offline: "<:offline:764845548103532615> Hors ligne / invisible",
    streaming: "<:streaming:764845486653833250> En Stream"
}
        
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
const getPresenceStatus = status => {
    let presence = ''
 
    switch(Object.keys(status)[0]) {
        case 'desktop': 
          presence = 'Ordinateur';
          break;
        case 'mobile':
          presence = 'Mobile';
        case 'web':
          presence = 'Internet';
          break;
    }
   return presence
 }

    let userinfo = new MessageEmbed()
        .setColor("#527a9e")
        .setAuthor(member.user.username, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .addField("Nom d'utilisateur complet", `${member.user.tag}`, true)
        .addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : "Aucun"}`, true)
        .addField("ID", `${member.user.id}`, true)
        .addField('Bot', member.user.bot ? '🤖 Oui' : '👤 Non', true)
        .addField("Status", `${status[member.user.presence.status]}`, true)
        .addField("Platforme", getPresenceStatus(member.user.presence.clientStatus), true)
        .addField("Compte crée le", moment(member.user.createdAt).format('DD/MM/YYYY HH:mm:ss'), true)
        .addField("A rejoint le serveur", moment(member.joinedAt).format('DD/MM/YYYY HH:mm:ss'), true)
        .setFooter(`Information utilisateur `)
        .setTimestamp()
        message.channel.send(userinfo);

}
module.exports.help = {
    name: "userinfo"
    }