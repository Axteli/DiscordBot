const { readdirSync } = require('fs');
const chalk = require('chalk');
const logs = require('../config/logs.json');

module.exports = (bot) => {

	console.log(chalk.green(`Chargement des events...`));
	readdirSync("./event/").map(category => {

		readdirSync(`./event/${category}/`).map(files => {


			const evt = require(`../event/${category}/${files}`);
			const evtName = files.split(".")[0];


			if (logs[evtName]) {

				if (logs[evtName] === 'true') {


					bot.on(evtName, evt.bind(null, bot));
					console.log(`${files} chargé!`);


				} else {

					console.log(files + ` non chargé!`)

				};

			} else {

				bot.on(evtName, evt.bind(null, bot));
				console.log(`${files} chargé!`);

			};


		});

	});
	console.log(chalk.bgGreen(`events chargées!`));

};