const Discord = require('discord.js')
var config = require('../config.json')
const chalk = require('chalk')
const log = console.log;
module.exports.run = async(bot, message, args) => {    
    

    if(message.author.id === config.owner1 || message.author.id === config.owner2) {
//éditer le message 
        const msg = await message.channel.send(`<:offline:764845548103532615> Le bot vas s'éteindre dans 5 secondes `);
            await setTimeout(() => { msg.edit(`<:offline:764845548103532615> Le bot vas s'éteindre dans 4 secondes `); }, 1000);
            await setTimeout(() => { msg.edit(`<:offline:764845548103532615> Le bot vas s'éteindre dans 3 secondes `);}, 2000);
            await setTimeout(() => { msg.edit(`<:offline:764845548103532615> Le bot vas s'éteindre dans 2 secondes `);}, 3000);
            await setTimeout(() => { msg.edit(`<:offline:764845548103532615> Le bot vas s'éteindre dans 1 seconde `);}, 4000);
            await setTimeout(() => { msg.edit(`<:offline:764845548103532615> le bot s'éteint...`);}, 4090)

//changer le statut et envoyer un message dans la console
        await setTimeout(() => { bot.user.setStatus('invisible'); }, 4980);
        await log(chalk.bgRed(`le bot vas s'éteindre!`));
        
//éteindre le bot
        await setTimeout(() => { process.exit(); }, 5010);

    } else {
//envoyer le message d'erreur si la personne n'est pas owner du bot
        message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, tu ne peux pas éteindre le bot! \n||essayer d'éteindre le bot moi je dis ça mérite un ban,
            après j'dis ça j'dis rien||`)
            console.log(`commande : stop | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ne peux pas éteindre le bot`);
    }

}
module.exports.help = {
        name: "stop"
    }


