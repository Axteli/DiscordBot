const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    const icon = message.guild.iconURL()
    message.delete();
    let suggestion = args.slice(0).join(" ");
        console.log(`commande : suggest | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
        let SuggestionChannel = message.guild.channels.cache.find(channel => channel.name === "shapez-dev");
        if (!SuggestionChannel) return message.channel.send("Je ne trouve pas le salon suggestion :/");
        if (!args[0]) return message.channel.send("Tu ne m'as pas dit quel étais ta suggestion!") 
            console.log(`commande : suggest | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| suggestion : ${suggestion}`);
        const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setDescription(suggestion)
            .setColor("#527a9e")
            .setFooter(`${message.guild.name}`, icon)
            .setTimestamp()
        SuggestionChannel.send(embed).then(msg => {
            msg.react('764793938317803551');
            msg.react('764793956813766687');
                message.channel.send("<a:tickgreen:764793938317803551> ta suggestion a bien été envoyer dans ${SuggestionChannel} !");
                console.log(`commande : suggest | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| suggestion : ${suggestion}`)
        });

    }

    module.exports.help = {
    name: "suggest"
    }