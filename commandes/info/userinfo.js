const { MessageEmbed } = require('discord.js');
const { embedColor } = require('../../config/config.json');
const moment = require('moment');
const emote = require('../../config/emote.json');

module.exports.run = async (message, args) => {


	//si aucun utilisateur recherché alors member = l'auteur du message
	//sinon chercher le membre et le définir
	if (!args[0]) {

		var member = message.member;

	} else {

		var member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

	}


	if (!member) {
		return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne trouve pas cet utilisateur!`),
			console.log(`commande : userinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}) | détails : utilisateur introuvable`);
	}



	const getPresenceStatus = status => {
		let presence = '';

		if (member.user.presence.clientStatus) {

			switch (Object.keys(status)[0]) {
				case 'desktop':
					presence = 'Ordinateur';
					break;
				case 'mobile':
					presence = 'Mobile';
				case 'web':
					presence = 'Internet';
					break;
			};
		};
		return presence;
	};


	const status = {
		online: emote.status.online + " en ligne",
		offline: emote.status.offline + " hors ligne",
		dnd: emote.status.dnd + " ne pas déranger",
		idle: emote.status.idle + " inactif",
		streaming: emote.status.streaming + " en stream"
	};




	const embed = new MessageEmbed()
		.setFooter(message.member.user.username, message.member.user.displayAvatarURL())
		.setColor(embedColor)
		.setTitle(`Information sur l'utilisateur : ${member.user.username}`)
		.setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))


		.addFields(
			{
				name: "🛡 | tag",
				value: member.user.tag,
				inline: true
			},
			{
				name: "😀 | Surnom",
				value: member.nickname !== null ? member.nickname : "Aucun",
				inline: true
			},
			{
				name: "🆔 | ID",
				value: member.user.id,
				inline: true
			},
			{
				name: '💭 | type',
				value: member.user.bot ? 'robot' : 'humain',
				inline: true
			},
			{
				name: '😴 | Statut',
				value: status[member.user.presence.status],
				inline: true
			},
			{
				name: '📡 | Plateforme',
				value: getPresenceStatus(member.user.presence.clientStatus) ? getPresenceStatus(member.user.presence.clientStatus) : 'aucune',
				inline: true
			},
			{
				name: "📅 | Date de création du compte",
				value: moment(member.user.createdAt).format('[le] DD/MM/YYYY [à] HH:mm:ss'),
				inline: true
			},
			{
				name: "📆 | Date d'arrivée",
				value: moment(member.user.joinedAt).format('[le] DD/MM/YYYY [à] HH:mm:ss'),
				inline: true
			}
		);


	message.channel.send(embed);
	console.log(`commande : userinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}) | membre visé : ${member.user.username} (${member.id})`);



};

module.exports.help = {
	name: "userinfo",
	aliases: "ui",
	description: "Affiche les informations d'un utilisateur.",
	usage: "userinfo [user]",
	example: "userinfo",
	categories: "info"
};