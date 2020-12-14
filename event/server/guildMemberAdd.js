const Discord = require('discord.js')
const config = require('../../config/config.json')
const chalk = require('chalk')
const moment = require('moment')
module.exports = async(bot, user) => {


    const logsChannel = bot.channels.cache.get(config.logsChannel)
    const welcomeChannel = bot.channels.cache.get(config.welcomeChannel)

    if(!logsChannel) {
        console.error(chalk.red('Je ne trouve pas le salon de logs!'))
    }else{

        if(!logsChannel.guild === user.guild) return

        const embed = new Discord.MessageEmbed()
         .setColor('GREEN')
         .setAuthor(user.user.tag, user.user.displayAvatarURL())
         .setTitle('Un membre à rejoint')
         .addField('🗣 | Membre', `${user}`, true)
         .addField(':id: | Id', user.id, true)
         .addField('📆 | Date de création du compte', moment(user.user.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'))
         .addField('📅 | Date d\'arrivée', moment(user.user.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'))
         .setTimestamp()
        welcomeChannel.send(embed).then(() => {
            console.log('Log de membre qui rejoint envoyé')
        })

    }
    if(!welcomeChannel) {
        console.log(chalk.red('Je ne trouve pas le salon de bienvenue!'))

    }else{

        if(!welcomeChannel.guild === user.guild) return

        welcomeChannel.send(config.welcomeMessage
            .replace('userMention', `${user}`).replace('userTag', user.user.tag)
            .replace('serverName', user.guild.name).replace('userId', user.user.id)
            .replace('memberCount', user.guild.memberCount)
        ).then(() => {
            console.log(`Bienvenue souhaiter à ${user.user.tag}`)
        })
    }
}