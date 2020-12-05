const Discord = require('discord.js')
const config = require('../info/config.json')
const emote = require('../info/emote.json')
module.exports.run = async(bot, message, args) => {

    if(message.author.id === config.owner1 || message.author.id === config.owner2) {

        
        if(!args.slice(0).join(" ")) {
            return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, il faut préciser une valeur!`),
             console.log(`commande : eval | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : aucune valeur précisé`);
        }

        const input = args.slice(0).join(" ")
        const thumbnail = bot.user.displayAvatarURL({size: 1024})

        const wait = new Discord.MessageEmbed()
        .setThumbnail(thumbnail)
        .setTitle('Eval')
        .setDescription('évalue une valeur!')
        .addField('Entrée', input)
        .setColor(config.embedColor)
        const msg = await message.channel.send(wait)


        try {
            const output = eval(args.slice(0).join(" ").replace(/```/g, ''));

            const embed = new Discord.MessageEmbed()
             .setThumbnail(thumbnail)
             .setTitle('Eval')
             .setDescription('évalue une valeur!')
             .addField('Entrée', input)
             .addField('Sortie', output)
             .setColor(config.embedColor)
            msg.edit(embed)
            console.log(`commande : eval | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| valeur : ${args.slice(0).join(" ")}`);


        }catch(err) {
            const error = new Discord.MessageEmbed()
             .setThumbnail(thumbnail)
             .setTitle('Eval')
             .setDescription('Une erreur s\'est produite!')
             .addField('Entrée', input)
             .addField('Erreur',  err)
             .setColor(config.embedColor)
            msg.edit(error)
            console.log(`commande : eval | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| valeur : ${args.slice(0).join(" ")}`);
        }
    }else{
        message.channel.send(`${emote.cross} Erreur | ${message.author.username}, cette commande est réservé au administrateur du bot!`)
         console.log(`commande : eval | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.tag} n'est pas admin du bot`);
    }

}
module.exports.help = {
    name: "eval",
}