const fs = require('fs')
const chalk = require('chalk')
module.exports = (bot) => {

	console.log(chalk.green(`Chargement des events...`))
    fs.readdirSync("./event/").map (category => {

		fs.readdirSync(`./event/${category}/`).map(files => {


			const evt = require(`../event/${category}/${files}`)
			const evtName = files.split(".")[0];
			bot.on(evtName, evt.bind(null, bot));
			console.log(`${files} chargé!`);

    	});

	});
	console.log(chalk.bgGreen(`events chargées!`));

}