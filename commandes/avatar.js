const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    message.delete()

//si personne n'a été précisé
    if (!args[0]) {
        const avatarembed = new Discord.MessageEmbed()
         .setTitle(`Ton avatar`)
         .setURL(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
         .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
         .setDescription(`${message.author.username}, voici ton avatar!`)
         .setColor("#527a9e")
        message.channel.send(avatarembed)
        return console.log(`commande : avatar | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
    }
    

//si args0 est égal a server alors montré l'avatar du serveur
    if (args[0] === 'server') {
        const avatar = new Discord.MessageEmbed()

         .setTitle(`Avatar du serveur`)
         .setURL(message.guild.iconURL({ format: 'png', dynamic: true, size: 4096 }))
         .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 4096 }))
         .setDescription(`Voici l'avatar du serveur ${message.guild.name}`)
         .setColor("#527a9e")
         .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png', dynamic: false, size: 512 }))

        message.channel.send(avatar)
        return console.log(`commande : avatar | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}| détails : avatar du server demandé`)
}



//ou alors envoyé l'avatar de la personne qui a été mentionné
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

//si l'utilsateur n'as pas été trouvé
        if (!user) {
            return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, je ne trouve pas cet utilisateur :/!`),
             console.log(`commande : avatar | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : utilisateur introuvable`)
            
            }else{

        const avatar = new Discord.MessageEmbed()

             .setTitle(`Avatar de ${user.user.tag}`)
             .setURL(user.user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
             .setImage(user.user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
             .setDescription(`Voici l'avatar de ${user.user.tag}`)
             .setColor("#527a9e")
             .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png', dynamic: false, size: 512 }))

        console.log(`commande : avatar | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}| membre visé : ${user})`)
        message.channel.send(avatar)
        }

 }

module.exports.help = {
name: "avatar"
}