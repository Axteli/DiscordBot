const { MessageEmbed } = require('discord.js');
const config = require('../../config/config.json');
const { bgRed } = require('chalk');
const emote = require('../../config/emote.json');

module.exports.run = async(bot, message) => {    
	

	if(message.author.id === config.owner1 || message.author.id === config.owner2) {

		console.log(bgRed(`Le bot s'éteint`));
		bot.user.setStatus('invisible');



		const offline = emote.status.offline;


		//envoyer le log d'extinction
		const channel = bot.channels.cache.get(`${config.logsChannel}`);

		if (!channel) {

			message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je ne trouve pas le salon des logs!`);
		
		}else{

			const embed = new MessageEmbed()
				.setColor(`#00000`)
				.setDescription(`${offline} | Le bot s'éteint`)
				.setTimestamp();


			await channel.send(embed).then(

				console.log('log d\'extinction envoyé!')

			);
		};

		



		//envoyer le message 
		message.channel.send(`${offline} | Le bot s'éteint`).then( () => {
			process.exit();
		});


	} else {

		//envoyer le message d'erreur si la personne n'est pas owner du bot
		message.channel.send(`${emote.cross} Erreur | ${message.author.username}, cette commande est réservé au administrateur du bot!`);
		 console.log(`commande : stop | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.tag} n'est pas admin du bot`);
	};


};


module.exports.help = {
		name: "stop",
		description: "Eteint le bot.",
		usage: "stop",
		example: "stop",
		categories: "owner"
	}


