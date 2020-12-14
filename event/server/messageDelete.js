const Discord = require('discord.js')
const config = require('../../config/config.json')
const chalk = require('chalk')
const moment = require('moment')
module.exports = (bot, message) => {



        const logsChannel = bot.channels.cache.get(config.logsChannel)

        if(!logsChannel) {
            console.error(chalk.red('Je ne trouve pas le salon de logs!'))
            return
        }

        if(`${logsChannel.guild.id}` === `${message.guild.id}`) {

            const embed = new Discord.MessageEmbed()
             .setColor('PURPLE')
             .setTitle('Message supprimé')
             .setAuthor(message.author.tag, message.author.displayAvatarURL())
             .addField('Salon', `${message.channel}\n(${message.channel.id})`, true)
             .addField('Auteur', message.author.tag+'\n('+message.author.id+')', true)
             .addField('Message', '`'+message.content+'`\n'+message.id, false)
             .addField('Date de suppression', moment(message.deletedAt).format('[le] DD/MM/YYYY [à] HH:mm:ss'))
             .setTimestamp()
            logsChannel.send(embed)
        }
}