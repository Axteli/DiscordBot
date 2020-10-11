const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {


     {
      var text = message.content.split(' ').slice(1).join(' ');
      if(!text) return message.channel.send('Please use it like this example:\n**!say Bottom Text**');
       message.channel.send(text);
      message.delete();
      message.channel.stopTyping()
      console.log(`commande : say | par : ${message.author} | dans : ${message.channel} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
     }
    };
    

module.exports.help = {
name: "say"
}