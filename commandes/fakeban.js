const Discord = require('discord.js')
var config = require('../config.json')
module.exports.run = async(bot, message, args) => {

  message.delete();
  
//si aucune membre n'as été définis
  if (!args[0]) {
    return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, tu ne m'as pas dit qui je dois bannir !`),
     console.log(`commande : fakeban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : personne n'a été indiqué`)
  }

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
//vérifier qui est le membre
    if(user.id = config.owner1) return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, alors comme ça tu essaie de ban mon fondateur?`),
        console.log(`commande : fakeban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.username} a essayé de fakeban Axtéli`)
//si le membre est introuvable
    if (!user) return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, je ne trouve pas cet utilisateur :/`),
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