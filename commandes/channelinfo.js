const Discord = require('discord.js')
const emote = require('../info/emote.json')
const config = require('../info/config.json')
const moment = require('moment')
module.exports.run = async(bot, message, args) => {


   	const icon = message.guild.iconURL({ format: 'png', dynamic: true, size: 4096 })

	//défnir le channel
	if (!args[0]) {
		var channel = message.channel;
	}else{
		var channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
	}


	//si aucun channel n'a été définis alors erreur
	if (!channel) {
		return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne trouve pas le salon!`),
		console.log(`commande : channelinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}) | détails : salon introuvable`)
	}

	if(channel.type === 'text' || channel.type === 'news' || channel.type === 'store') {

	
   		const embed = new Discord.MessageEmbed()
    	 .setColor(config.embedColor)
    	 .setTitle(`Information sur le salon textuel : ${channel.name}`)
    	 .addField(`🔧 | Description`, channel.topic !== null ? channel.topic : 'Aucune', false)
    	 .addField(`📃 | Nom`, channel.name, true)
    	 .addField(`🆔 | Id`, channel.id, true)
		 .addField(`🔞 | NSFW`, channel.nsfw ? `oui` : `non`, true)
		 .addField(`📙 | Catégorie`, `${channel.parent !== null ? channel.parent : 'non-catégorisé'}
		 	${channel.parentID !== null ? `(${channel.parentID})` : ''}`, true)
		 .addField(`🎚 | Position dans la catégorie`, channel.position + 1, true)
		 .addField(`📆 | Date de création`, moment(channel.createdAt).format('[le] DD/MM/YYYY [à] HH:mm:ss'), false)
		 .setThumbnail(icon)
		 .setFooter(message.member.user.username, message.member.user.displayAvatarURL())
       
   		message.channel.send(embed)
   		return console.log(`commande : channelinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}) | salon textuel : ${channel.name}(${channel.id})`)
	}
	
	if (channel.type === 'category') {


		const embed = new Discord.MessageEmbed()
		 .setColor(blabla)
		 .setTitle(`Information sur la catégorie : ${channel.name}`)
		 .addField(`📃 | Nom`, channel.name, true)
		 .addField(`🆔 | Id`, channel.id, true)
		 .addField(`🛋 | Salons`, channel.children.size, false)
		 .addField(`🎚 | Position`, channel.rawPosition, false)
		 .addField(`📆 | Date de création`, moment(channel.createdAt).format('[le] DD/MM/YYYY [à] HH:MM:SS'))
		 .setThumbnail(icon)
		 .setFooter(message.member.user.username, message.member.user.displayAvatarURL())
		message.channel.send(embed)
		return console.log(`commande : channelinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}) | catégorie : ${channel.name}(${channel.id})`)
	}


	if(channel.type === 'voice') {


		const embed = new Discord.MessageEmbed()
		 .setThumbnail(icon)
		 .setColor(blabla)
		 .setTitle('Information sur le channel vocal : ' + channel.name)
		 .addField(`📃 | Nom`, channel.name, true)
		 .addField(`🆔 | Id`, channel.id, true)
		 .addField('📦 | Débit binaire (bitrate)', channel.bitrate / 1000 + 'kbps', true)
		 .addField(`🎤 | Membres connectés`, channel.members.size, false)
		 .addField(`⛔ | Limite d'utilisateur connecté`, channel.userLimit === 0 ? 'aucune' : channel.userLimit, true)
		 .addField(`📆 | Date de création`, moment(channel.createdAt).format('[le] DD/MM/YYYY [à] HH:MM:SS'), false)
		 .setFooter(message.member.user.username, message.member.user.displayAvatarURL())
		message.channel.send(embed)
		return console.log(`commande : channelinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}) | salon vocal : ${channel.name}(${channel.id})`)
	}


	return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne trouve pas le type du salon! Il m'est donc impossible d'affiché ses informations.`),
	 console.log(`commande : channelinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}) | détails : type du channel introuvable`)
}

module.exports.help = {
	name: "channelinfo",
	aliases: ["ci", "saloninfo"],
	description: "Affiche les informations sur un salon du serveur.",
	usage: "channelinfo [channel]",
	example: ["channelinfo", "channelinfo #support"]
}