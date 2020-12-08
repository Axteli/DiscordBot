const Discord = require('discord.js')
const emote = require('../config/emote.json')
const config = require('../config/config.json')
const moment = require('moment')
module.exports.run = async(bot, message, args) => {

    /*
        S'il te plaît, essaye de modifier cette commande au minimum,
        en laissant ceci : 
        l'auteur
        le footer
        le lien github
        la licence
        et potentiellement le lien github mais ce n'est pas obligatoire 
        étant donné que le lien de la licence (qui est sur le github) est présent.
        Merci a toi 😀.
    */


    const uptime = Date.now() - bot.uptime
    const embed = new Discord.MessageEmbed()
     .setColor(config.embedColor)
     .setTitle(`Information sur le bot`)
     .setDescription(`DiscordBot est un bot discord entièrement développé et maintenu par Axtéli, un jeune développeur souhaitant partager son projet à toutes les `+
     `personnes intéréssées par le fait d'avoir la base d'un bot de modération que tout le monde peut modifier pour en faire le sien.\n `)
     .setAuthor('Axtéli', 'https://cdn.discordapp.com/attachments/759782245354962975/759782276274978816/IMG_20200830_221605.jpg')
     .addField(`📕 | Préfixe`, '`'+config.prefix+'`', true)
     .addField(`📆 | Dernier redémarrage`, moment(uptime).format('[le] DD/MM [à] HH:mm'), true)
     .addField(emote.logo.github + ' | Github', '[[lien]](https://github.com/Axteli/DiscordBot)', true)
     .addField('⚖ | Licence', `[MIT](https://github.com/Axteli/DiscordBot/blob/master/LICENSE)`, true)
     .addField(emote.logo.nodejs + ' | Version de nodejs', '`'+process.version.replace('v','')+'`', true)
     .addField(emote.logo.discordjs + ' | Version de discord.js', '`'+Discord.version+'`', true)
     .setFooter('Copyright © 2020 Axtéli')
     .setThumbnail(bot.user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
    message.channel.send(embed)
    console.log(`commande : botinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
    
}
module.exports.help = {
    name: "botinfo",
    aliases: "binfo",
    description: "Affiche les informations sur le bot.",
    usage: "botinfo",
    example: "botinfo"
    
}