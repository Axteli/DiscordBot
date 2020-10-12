const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {
 message.delete();
 const channelinfo = new Discord.MessageEmbed()
  .setTitle(`information sur ${message.channel.name}`)
  .addField(`id`, `${message.channel.id}`, true)
  .addField(`Date de création`, `${message.channel.createdAt}`, true)
  .addField(`Catégorie`, `${message.channel.parent} (${message.channel.parentID})`, true)
  .addField(`Position`, `${message.channel.rawPosition}`, true)
  .setColor("#527a9e")
  message.channel.send(channelinfo)

}

module.exports.help = {
name: "channelinfo"
}