const Discord = require('discord.js');
const config = require('../../config/config.json')
const emote = require('../../config/emote.json')
module.exports.run = async(bot, message, args) => {


    const prefix = config.prefix

    //si il y a un argument alors chercher une commande
    if(args[0]) {


        const command =  bot.commands.get(args[0]) || bot.aliases.get(args[0])

        if(!command) {
            return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne trouve pas cette commande!`),
            console.log(`commande : avatar | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id} | détails : commande introuvable`)
        }


        //si la commande est trouvé alors envoyé l'embed avec les infos de la commande
        const example = '`'+prefix + command.help.example + '`'
        const embed = new Discord.MessageEmbed()
         .setTitle('Information sur la commande : ' + command.help.name)
         .addField('Description', command.help.description)
         .addField('Alias', command.help.aliases ? command.help.aliases : "aucun")
         .addField('Utilisation', '\`' + prefix + command.help.usage + `\``)
         .addField('Exemple',  example.replace(',', `\n${prefix}`))
         .setColor(config.embedColor)
         .setFooter(message.member.user.username, message.member.user.displayAvatarURL())
        message.channel.send(embed)
        console.log(`commande : help | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})|commandes: ${command.help.name}`)


    }else{


        //définir la liste des commandes
        var commandlist = []
        bot.commands.forEach(cmd => {
            const description = cmd.help.description ? cmd.help.description: "aucune description"
            commandlist.push(`***${cmd.help.name}***・`+description)
        })


        //envoyer l'embed
        const embed = new Discord.MessageEmbed()
         .setTitle(`Help`)
         .setDescription(`-vous pouvez utiliser \`${config.prefix}help <commande>\` pour afficher les détails d'une commande\n`)
         .addField(`Liste des commandes de ${bot.user.username}`, commandlist.join('\n'))
         .setColor(config.embedColor)
         .setFooter(message.member.user.username, message.member.user.displayAvatarURL())
        message.channel.send(embed)
        console.log(`commande : help | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
    }


}
module.exports.help = {
    name: "help",
    aliases: "h",
    description: "Affiche la liste de toute les commandes.",
    usage: "help <commande>",
    example: ["help", "help ban"]
}