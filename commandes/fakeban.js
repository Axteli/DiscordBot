const Discord = require('discord.js')
var config = require('../config.json')
var emote = require('../emote.json')
module.exports.run = async(bot, message, args) => {

  	message.delete();

  	//si aucune membre n'as été définis
  	if (!args[0]) {
    	return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu ne m'as pas dit qui je dois bannir !`),
    	 console.log(`commande : fakeban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : personne n'a été indiqué`)
  	}

  	const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);


  	//si le membre est introuvable
  	if (!user) {
    	return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne trouve pas cet utilisateur :/`),
    	 console.log(`commande : fakeban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : utilisateur introuvable`)
  	}


  	//vérifier qui est le membre
  	if(user.id === config.owner1 || user.id === config.owner2) {
    	return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, alors comme ça tu essaie de fakeban ${user.user.username}, mon fondateur? ${emote.nani}`),
    	 console.log(`commande : fakeban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de fakeban un fonda`)
  	}


  	if(user.id === bot.user.id) {
    	return message.channel.send(`${message.author.username}, pourquoi essaye tu de me ban? :cry:`),
    	 console.log(`commande : fakeban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de fakeban le bot`)
  	}


  	//envoyer le message de fakeban
  	message.channel.send(`${user} a bien été banni !`);
   	 return console.log(`commande : fakeban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| membre visé : ${user}`)


}

module.exports.help = {
	name: "fakeban"
}