const Discord = require("discord.js")
const config = require("./config/config.json")
const bot = new Discord.Client();
const fs = require("fs");
const chalk = require("chalk")

bot.commands = new Discord.Collection();
bot.description = new Discord.Collection();
bot.usage = new Discord.Collection();
bot.example = new Discord.Collection();
bot.aliases = new Discord.Collection();

console.log(chalk.bgBlue(`Le bot vas démarrer dans 3 secondes...`))

setTimeout(() => {

	fs.readdir("./commandes/", (err, files) => {

  		if(err) console.log(err);

  		let jsfile = files.filter(f => f.split(".").pop() === "js");
  		console.log(chalk.magenta(`Chargement des commandes...`))


  		if(jsfile.length <= 0){
    	console.log(chalk.bgMagenta("Je ne trouve pas les commandes"));
    	return;
		}


		jsfile.forEach((f) =>{
  			let props = require(`./commandes/${f}`);
			bot.commands.set(props.help.name, props);
			bot.aliases.set(props.help.aliases, props)
			console.log(`${f} chargée!`);
		});

	console.log(chalk.bgMagenta(`${jsfile.length} commandes chargées!`));
	});



	fs.readdir("./event/", (error, f) => {
    	if (error) console.log(error);
    	let eventjsfile = f.filter(f => f.split(".").pop() === "js");
    	console.log(chalk.green(`Chargement des events...`))

    	if(eventjsfile.length <= 0){
    	console.log(chalk.bgGreen("Je ne trouve pas les events"));
    	return;
		};

		eventjsfile.forEach((f) =>{
			const evt = require(`./event/${f}`)
			const evtName = f.split(".")[0];
			bot.on(evtName, evt.bind(null, bot));
    		console.log(`${f} chargé!`);
    	});

    	console.log(chalk.bgGreen(`${eventjsfile.length} events chargées!`));
	});




	bot.login(config.token)

}, 3000)
