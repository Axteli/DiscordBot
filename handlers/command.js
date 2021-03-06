const { readdirSync } = require('fs');
const chalk = require('chalk');

module.exports = (bot) => {


	console.log(chalk.magenta(`Chargement des commandes...`));
	readdirSync("./commandes/").map(category => {

		readdirSync(`./commandes/${category}/`).map(files => {


			let props = require(`../commandes/${category}/${files}`);
			bot.commands.set(props.help.name, props);
			bot.aliases.set(props.help.aliases, props);
			console.log(`${files} chargée!`);


		});

	});
	console.log(chalk.bgMagenta(`commandes chargées!`));

};