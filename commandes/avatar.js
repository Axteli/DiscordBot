const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    message.delete()
    if(!message.mentions.users.first()){
        const avatar = new Discord.MessageEmbed()
         .setTitle("Ton avatar")
         .setURL(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
         .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
         .setDescription("Voici ton avatar")
         .setColor("#527a9e")
        return message.channel.send(avatar)
    }else{
        const user = message.mentions.users.first()
        const avatar1 = new Discord.MessageEmbed()
         .setTitle(`Avatar de ${user.tag}`)
         .setURL(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
         .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
         .setDescription(`Voici l'avatar de ${user.tag}`)
         .setColor("#527a9e")
         .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png', dynamic: false, size: 1024 }))
         console.log(`commande : avatar | par : ${message.author} | dans : ${message.channel} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
        return message.channel.send(avatar1)
        
    }
}

module.exports.help = {
name: "avatar"
}