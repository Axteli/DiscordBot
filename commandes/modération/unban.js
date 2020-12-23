const Discord = require('discord.js');
const emote = require('../../config/emote.json');
const config = require('../../config/config.json');
module.exports.run = async (bot, message, args) => {



	//vérifie les permission
	if (!message.member.hasPermission("BAN_MEMBERS")) {
		return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu ne peux pas dé-bannir!`),
			console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.username} n'as pas la permission de dé-bannir`);
	};

	if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
		return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je n\'ai pas la permission de dé-bannir !`),
			console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le bot n'as pas la permission de dé-bannir`);
	};



	if (!args[0]) {
		return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, il faut préciser un utilisateur!`),
			console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le bot n'as pas la permission de dé-bannir`);
	};



	let member;

	try {
		member = await bot.users.fetch(args[0]);
	} catch (_e) {
		return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne trouve pas l'utilisateur!`),
			console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : utilisateur introuvable`);
	};



	const reason = args.slice(1).join(' ') ? args.slice(1).join(' ') : 'non-fourni';



	message.guild.fetchBans().then(bans => {

		const user = bans.find(ban => ban.user.id === member.id);

		if (user) {


			const embed = new Discord.MessageEmbed()
				.setThumbnail(user.user.displayAvatarURL({ size: 1024 }))
				.setTitle(`Membre unban`)
				.setColor(config.embedColor)
				.setDescription(
					`Membre : ${user.user}\nPar : ${message.author.tag}\n Raison de ban :` +
					user.reason != null ? user.reason : 'aucune' + `\nRaison de deban : ` + reason
					);

			message.guild.members.unban(user.user.id, reason + `| Par : ${message.author.tag} (${message.author.id})`)
				.then(() => {

					message.channel.send(embed);
					console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`);
				
				});


		} else {

			message.channel.send(`${emote.cross} Erreur | ${member.tag} n'est pas banni!`),
			console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : l'utilisateur n'est pas banni`);

		};


	}).catch(e => {

		message.channel.send('Une erreur s\'est produite!'),
		console.log(`commande : unban | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| erreur: `+ e);

	});



};

module.exports.help = {
	name: "unban",
	aliases: "deban",
	description: "Deban un membre banni.",
	usage: "unban <user> [reason]",
	example: ["unban @Axtéli", "unban @Axtéli excuse accepté"],
	categories: "moderation"
};