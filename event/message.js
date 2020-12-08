const Discord = require('discord.js')
const config = require('../config/config.json')
const chalk = require('chalk')
module.exports = (bot, message) => {


    const prefix = config.prefix

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content === `<@!${bot.user.id}>`) {
        return message.channel.send(`Hey ! Mon préfixe est : \`${prefix}\``)
    }
    
    if (!message.content.startsWith(config.prefix)) return

    if(config.deleteCommands === 'yes') {
        message.delete().catch(err => {console.error(chalk.red('Je n\'est pas réussi à supprimer la commande! erreur: '+err))})
    }


    let content = message.content.split(" ");
    let command = content[0];
    let args = content.slice(1);
  
  
    let commandfile = bot.commands.get(command.slice(prefix.length)) || bot.aliases.get(command.slice(prefix.length))
    if(commandfile) commandfile.run(bot,message,args);

}