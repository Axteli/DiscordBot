const fs = require('fs')
const chalk = require('chalk')
module.exports = (bot) => {

    fs.readdir("./event/", (error, f) => {
    	if (error) console.log(error);
    	let eventjsfile = f.filter(f => f.split(".").pop() === "js");
    	console.log(chalk.green(`Chargement des events...`))

    	if(eventjsfile.length <= 0){
    	console.log(chalk.bgGreen("Je ne trouve pas les events"));
    	return;
		};

		eventjsfile.forEach((f) =>{
			const evt = require(`../event/${f}`)
			const evtName = f.split(".")[0];
			bot.on(evtName, evt.bind(null, bot));
    		console.log(`${f} chargé!`);
    	});

    	console.log(chalk.bgGreen(`${eventjsfile.length} events chargées!`));
    });

}