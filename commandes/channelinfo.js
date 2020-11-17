const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {
   

   message.delete();
   const icon = message.guild.iconURL({ format: 'png', dynamic: true, size: 4096 })

   const time = {
      0: "00", 1:"01", 2:"02", 3:"03", 4:"04", 5:"05", 6:"06", 7:"07", 8:"08", 9:"09",
      10:"10", 11:"11", 12:"12", 13:"13", 14:"14", 15:"15", 16:"16", 17:"17", 18:"18", 19:"19",
      20:"20", 21:"21", 22:"22", 23:"23", 24:"24", 25:"25", 26:"26", 27:"27", 28:"28", 29:"29",
      30:"30", 31:"31", 32:"32", 33:"33", 34:"34", 35:"35", 36:"36", 37:"37", 38:"38", 39:"39",
      40:"40", 41:"41", 42:"42", 43:"43", 44:"44", 45:"45", 46:"46", 47:"47", 48:"48", 49:"49",
      50:"50", 51:"51", 52:"52", 53:"53", 54:"54", 55:"55", 56:"56", 57:"57", 58:"58",59:"59"
   }


   var topic = [];

   if(!message.channel.topic) {
      topic.push('aucune')
   }else{
      topic.push(`${message.channel.topic}`)
   }
      

   var a = new Date(message.channel.createdTimestamp);
   var months = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
   var year = a.getFullYear();
   var month = months[a.getMonth()];
   var date = a.getDate();
   var hour = a.getHours();
   var min = a.getMinutes();
   var sec = a.getSeconds();
   var createdAt = (`le ${time[date]} ${month} ${year} à ${time[hour]}:${time[min]}:${time[sec]}`)


   const embed = new Discord.MessageEmbed()
    .setColor("#527a9e")
    .setTitle(`Information sur le salon : ${message.channel.name}`)
    .addField(`🔧 | Description`, topic, false)
    .addField(`📃 | Nom`, message.channel.name, true)
    .addField(`🆔 | Id`, message.channel.id, true)
    .addField(`🔞 | NSFW`, message.channel.nsfw ? `oui` : `non`, true)
    .addField(`📙 | Catégorie`, `${message.channel.parent}\n(${message.channel.parentID})`, true)
    .addField(`📆 | Date de création`, createdAt, false)
    .setThumbnail(icon)
       
   message.channel.send(embed)
   return console.log(`commande : channelinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
   }

module.exports.help = {
name: "channelinfo"
}