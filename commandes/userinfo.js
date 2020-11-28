const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const emote = require('../emote.json')
const config = require('../config.json')
module.exports.run = async(bot, message, args) => {

    message.delete();
        
    //si aucun utilisateur recherché alors member = l'auteur du message
    //sinon chercher le membre et le définir
    if (!args[0]) {
        var member = message.member;
    }else{
    var member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    }

    if (!member) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne trouve pas cet utilisateur!`),
         console.log(`commande : userinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}) | détails : utilisateur introuvable`)
    }


    let embed = new MessageEmbed()
     .setColor(config.embedColor)
     .setTitle(`Information sur l'utilisateur : ${member.user.username}`)
     .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
     .addField("🛡 | tag", member.user.tag, true)
     .addField("😀 | Surnom", `${member.nickname !== null ? `${member.nickname}` : "Aucun"}`, true)
     .addField("🆔 | ID", member.user.id, true)
     .addField('💭 | type', member.user.bot ? 'robot' : 'humain', false)
     .addField("📅 | Date de création du compte", moment(member.user.createdAt).format('[le] DD/MM/YYYY [à] HH:mm:ss'), true)
     .addField("📆 | Date d'arrivée", moment(member.user.joinedAt).format('[le] DD/MM/YYYY [à] HH:mm:ss'), true)
     .setFooter(message.member.user.username, message.member.user.displayAvatarURL())
    message.channel.send(embed);
    console.log(`commande : userinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}) | membre visé : ${member.user.username} (${member.id})`)

}
module.exports.help = {
    name: "userinfo"
    }