const Discord = require('discord.js')
const config = require('../../config/config.json')
const chalk = require('chalk')
const moment = require('moment')
module.exports = async(bot, user) => {


    const logsChannel = bot.channels.cache.get(config.logsChannel)
    const goodbyeChannel = bot.channels.cache.get(config.goodbyeChannel)

    if(!logsChannel) {
        console.error(chalk.red('Je ne trouve pas le salon de logs!'))
    }else{

        if(logsChannel.guild.id === user.guild.id) {

            const embed = new Discord.MessageEmbed()
             .setColor('RED')
             .setAuthor(user.user.tag, user.user.displayAvatarURL())
             .setTitle('Un membre à quitté')
             .addField('🗣 | Membre', `${user}`, true)
             .addField(':id: | Id', user.id, true)
             .addField('📆 | Date de création du compte', moment(user.user.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'))
             .addField('📅 | Date d\'arrivée', moment(user.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'))
             .addField('🗓 | à quitté', moment(Date.now()).format('[Le] DD/MM/YYYY [à] HH:mm:ss'))
             .setTimestamp()
            logsChannel.send(embed).then(() => {
                console.log('Log de membre qui quitte envoyé')
            })
        }

    }
    if(!goodbyeChannel) {
        console.log(chalk.red('Je ne trouve pas le salon d\'au revoir!'))

    }else{

        if(goodbyeChannel.guild === user.guild) {

            goodbyeChannel.send(config.goodbyeMessage
                .replace('userTag', user.user.tag).replace('memberCount', user.guild.memberCount)
                .replace('serverName', user.guild.name).replace('userId', user.user.id)
                .replace('userName', user.user.username)
            ).then(() => {
                console.log(`Au revoir souhaiter à ${user.user.tag}`)
            })
        }
    }
}