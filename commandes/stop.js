const Discord = require('discord.js')
const config = require('../config/config.json')
const chalk = require('chalk')
const emote = require('../config/emote.json')
module.exports.run = async(bot, message, args) => {    
    

    if(message.author.id === config.owner1 || message.author.id === config.owner2) {

        //envoyer et éditer le message 
        const msg = await message.channel.send(`${emote.status.offline} Le bot vas s'éteindre dans 5 secondes `);
            setTimeout(() => { msg.edit(`${emote.status.offline} Le bot vas s'éteindre dans 4 secondes `); }, 1000);
            setTimeout(() => { msg.edit(`${emote.status.offline} Le bot vas s'éteindre dans 3 secondes `);}, 2000);
            setTimeout(() => { msg.edit(`${emote.status.offline} Le bot vas s'éteindre dans 2 secondes `);}, 3000);
            setTimeout(() => { msg.edit(`${emote.status.offline} Le bot vas s'éteindre dans 1 seconde `);}, 4000);
            setTimeout(() => { msg.edit(`${emote.status.offline} Le bot s'éteint...`);}, 5000)


        //changer le statut et envoyer un message dans la console
        setTimeout(() => { bot.user.setStatus('invisible'); }, 4900);
        console.log(chalk.bgRed(`le bot vas s'éteindre!`));


        const channel = bot.channels.cache.get(`${config.logsChannel}`);
        if (!channel) {
            message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne trouve pas le salon des logs!`)
        }else{
            const embed = new Discord.MessageEmbed()
             .setColor(`#00000`)
             .setDescription(`${emote.status.offline} | Le bot vas s'éteindre!`)
             .setTimestamp()
            await channel.send(embed);
        }

        //éteindre le bot
        setTimeout(() => { process.exit(); }, 5010);

    } else {

        //envoyer le message d'erreur si la personne n'est pas owner du bot
        message.channel.send(`${emote.cross} Erreur | ${message.author.username}, cette commande est réservé au administrateur du bot!`)
         console.log(`commande : stop | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.tag} n'est pas admin du bot`);
    }

}
module.exports.help = {
        name: "stop"
    }


