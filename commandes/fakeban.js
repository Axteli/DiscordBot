const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {
    
    let user = message.mentions.members.first()
    message.delete();

    //si aucune membre n'as été définis
      if (!args[0]) {
          return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.name}, tu ne m'as pas dit qui je dois bannir !`),
           console.log(`commande : fakeban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : personne n'a été indiqué`)
      }

    //si le memvre est introuvable
      if(!user) return message.channel.send('<a:tickred:764793956813766687> Erreur | Je ne trouve pas cet utilisateur :/'),console.log(`commande : ban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : l'utilisateur était introuvable`)
       console.log(`commande : fakeban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : l'utilisateur n'as pas été trouvé`)

  //envoyer le message de fakeban
  message.channel.send(
    `${user} a bien été banni !<a:bancat:764793999130886194>` 
    );
    console.log(`commande : fakeban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| membre visé : ${user}`)
}

module.exports.help = {
name: "fakeban"
}