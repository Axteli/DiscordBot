const { prefix, deleteCommands } = require('../../config/config.json');
const { red } = require('chalk');

module.exports = (bot, message) => {



	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;


	if (message.content === `<@!${bot.user.id}>`) {
		return message.channel.send(`Hey ! Mon préfixe est : \`${prefix}\``);
	};



	if (!message.content.startsWith(prefix)) return;


	let content = message.content.split(" ");
	let command = content[0];
	let args = content.slice(1);


	let commandfile = bot.commands.get(command.slice(prefix.length)) || bot.aliases.get(command.slice(prefix.length));
	
	if (commandfile) {


		if (deleteCommands === 'yes') {

			message.delete().catch(err => { console.error(red('Je n\'est pas réussi à supprimer la commande! erreur: ' + err)); });

		};

		commandfile.run(bot, message, args);


	};
};