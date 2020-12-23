const { MessageEmbed } = require('discord.js');
const { embedColor } = require('../../config/config.json');
const moment = require('moment');
const emote = require('../../config/emote.json');

module.exports.run = async (message) => {


	var AFK = [];

	if (!message.guild.afkChannel) {

		AFK.push('aucun');

	} else {

		AFK.push(`${message.guild.afkChannel}`);

	};


	const notif = {
		MENTIONS: "Mentions uniquement",
		ALL: "Tous les messages"
	};


	const verif = {
		NONE: "Aucune vérification",
		LOW: "E-mail vérifié requis",
		MEDIUM: "Inscription sur discord depuis plus de 5min requise",
		HIGH: "Doit être membre depuis plus de 10 min",
		VERY_HIGH: "Numéro de téléphone vérifié requis"
	};



	//créer l'embed
	const embed = new MessageEmbed()
		.setColor(embedColor)
		.setTitle(`Information sur : ${message.guild.name}`)
		.setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true, size: 512 }))


		.addFields(
			{
				name: `📃 | Nom du serveur`,
				value: message.guild.name,
				inline: true
			},
			{
				name: `👑 | Fondateur`,
				value: `<@${message.guild.ownerID}>\n(${message.guild.ownerID})`,
				inline: true
			},
			{
				name: `🌍 | Region`,
				value: message.guild.region,
				inline: true
			},
			{
				name: `👤 | Membres`,
				value: message.guild.memberCount,
				inline: true
			},
			{
				name: `🛋 | Salons`,
				value: `${message.guild.channels.cache.size}`,
				inline: true
			},
			{
				name: `👨‍💻 | Rôles`,
				value: `${message.guild.roles.cache.size}`,
				inline: true
			},
			{
				name: `👮‍♂️ | Niveau de vérification`,
				value: verif[message.guild.verificationLevel],
				inline: true
			},
			{
				name: `🔔 | Paramètres de notifications`,
				value: notif[message.guild.defaultMessageNotifications],
				inline: true
			},
			{
				name: emote.partner + ` | Partenaire`,
				value: message.guild.partnered ? 'Oui' : 'Non',
				inline: true
			},
			{
				name: emote.verified + ` | Vérifié`,
				value: message.guild.verified ? `Oui` : `Non`,
				inline: true
			},
			{
				name: emote.boost + ` | Nombre de boost`,
				value: message.guild.premiumSubscriptionCount,
				inline: true
			},
			{
				name: `💤 | Salon vocal AFK`,
				value: AFK,
				inline: true
			},
			{
				name: `📅 | Date de création`,
				value: moment(message.guild.createdAt).format('[le] DD/MM/YYYY [à] HH:mm:ss'),
				inline: true
			},
			{
				name: `📆 | Date d'arrivé du bot`,
				value: moment(message.guild.joinedAt).format('[le] DD/MM/YYYY [à] HH:mm:ss'),
				inline: true
			}
		);


	message.channel.send(embed);
	console.log(`commande : serverinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`);

};

module.exports.help = {
	name: "serverinfo",
	aliases: "sinfo",
	description: "Affiche les informations du serveur.",
	usage: "serverinfo",
	example: "serverinfo",
	categories: "info"
};