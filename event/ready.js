const Discord = require('discord.js')
const chalk = require('chalk')
const config = require('../info/config.json')
const emote = require('../info/emote.json')
module.exports = (bot, message) => {

    console.log(`------------------------`)
    console.log(bot.user.username + " est en ligne !")



    var jeuxs = [
        config.status.one,
        config.status.two,
        config.status.three,
        config.status.four,
        `Prefixe : ${config.prefix}`
    ];

    
    setInterval(function () {

        var jeux = jeuxs[Math.floor(Math.random() * jeuxs.length)];

        bot.user.setActivity(jeux, 

            {type: config.status.type, 
            url: `https://twitch.tv/${bot.user.username}`}
        )
        

    }, 4000)
    console.log(`Le statut est optérationnel!`)




    if(config.deleteCommands === 'yes' || config.deleteCommands === 'no') {
    }else{
        console.error(chalk.red("la valeur 'deleteCommands' n'est pas définis sur 'yes' ou 'no', les commandes ne seront donc pas supprimé!"))
    }


    const suggestChannel = bot.channels.cache.get(config.suggestChannel);
    if(!suggestChannel) {
        console.error(chalk.red('Je ne trouve pas le salon de suggestion!'))
        console.log('Je vais faire un gâteau pour me faire pardonner')
    }


    const owner1 = bot.users.cache.get(config.owner1)
    const owner2 = bot.users.cache.get(config.owner2)

    if(!owner1 && !owner2) {
        console.error(chalk.red('Je ne trouve pas les owners 1 et 2!'))
    }else{

        if(!owner1) {
            console.error(chalk.red('Je ne trouve pas l\'owner1!'))
        }

        if(!owner2) {
            console.error(chalk.red('Je ne trouve pas l\'owner2!'))
        }
    }


    const logsChannel = bot.channels.cache.get(`${config.logsChannel}`);

	if(!logsChannel) {
		console.error(chalk.red("je ne trouve pas le salon de logs!"))
	}else{

        const embed = new Discord.MessageEmbed()
         .setColor(`GREEN`)
         .setDescription(`${emote.status.online} | Le bot est allumé!`)
         .setTimestamp()
        logsChannel.send(embed)
        .then(msg => {
            console.log('log de démarrage envoyé!')
        })
    }
    

    console.log(chalk.blue(`----------INFO----------`))

    console.log(`\nServeurs :`)

    bot.guilds.cache.forEach((guild) => {
        console.log(`   - ${guild.name} - ${guild.id} - admin : ${guild.me.hasPermission("ADMINISTRATOR") ? `oui` : `non`}`)
    })

    console.log(`\nBot:\n    ${bot.user.username} - ${bot.user.id}`)


    if(owner1 && owner2) {
        console.log(`\nConfiguration:\n   Préfixe: ${config.prefix} - Administrateur1: ${owner1.tag} (${owner1.id}) - Administrateur2: ${owner2.tag} (${owner2.id})`)
    }

    

    console.log(chalk.blue(`\n------------------------\n`))

}