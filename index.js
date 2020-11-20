const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const fs = require("fs");
const chalk = require("chalk")
const emote = require('./emote.json')
bot.commands = new Discord.Collection();
bot.description = new Discord.Collection();
bot.usage = new Discord.Collection();


console.log(chalk.bgBlue(`Le bot vas démarrer dans 3 secondes...`))

setTimeout(() => {

	fs.readdir("./commandes/", (err, files) => {

  		if(err) console.log(err);

  		let jsfile = files.filter(f => f.split(".").pop() === "js");
  		console.log(chalk.red(`Chargement des commandes...`))


  		if(jsfile.length <= 0){
    	console.log(chalk.bgRed("Je ne trouve pas les commandes"));
    	return;
		}


		jsfile.forEach((f, i) =>{
  			let props = require(`./commandes/${f}`);
  			console.log(`${f} chargée!`);
  			bot.commands.set(props.help.name, props);
		});

        console.log(chalk.bgRed(`${jsfile.length} commandes chargées!`));
	});



	fs.readdir("./event/", (error, f) => {
    	if (error) console.log(error);
    	let eventjsfile = f.filter(f => f.split(".").pop() === "js");
    	console.log(chalk.green(`Chargement des events...`))

    	if(eventjsfile.length <= 0){
    	console.log(chalk.bgGreen("Je ne trouve pas les events"));
    	return;
		};

		eventjsfile.forEach((f, i) =>{
    		console.log(`${f} chargée!`);
    	});

    	console.log(chalk.bgGreen(`${eventjsfile.length} events chargées!`));
	});




	bot.on("ready", () => {
    	console.log(`------------------------`)
    	console.log(bot.user.username + " est en ligne !")

    	var jeuxs = [
        	`En cours de développement`,
        	`Jeux & Discussions`,
        	`Aucune commande help pour l'instant`,
        	`Version Alpha`,
        	`Prefixe : ${config.prefix}`
        ];


    	setInterval(function () {

        	var jeux = jeuxs[Math.floor(Math.random() * jeuxs.length)];

        	bot.user.setActivity(jeux, 

        		{type: "STREAMING", 
				url: `https://twitch.tv/${bot.user.username}`}
			);

        }, 4000);
    	console.log(`Le status est optérationnel!`)


		console.log(chalk.blue(`----------INFO----------`))

		console.log(`\nServeurs :`)

        bot.guilds.cache.forEach((guild) => {
        console.log(`   - ${guild.name} - ${guild.id} - admin : ${guild.me.hasPermission("ADMINISTRATOR") ? `oui` : `non`}`)})

        console.log(`\nBot:\n    ${bot.user.username} - ${bot.user.id}`)

        console.log(`\nConfiguration:\n   Préfixe: ${config.prefix} - Administrateur1: ${config.owner1} - Administrateur2: ${config.owner2}`)

        console.log(chalk.cyan(`\nLogs de commandes:\n`))

        const channel = bot.channels.cache.get(`${config.logsChannel}`);
        const embed = new Discord.MessageEmbed()
         .setColor(`GREEN`)
         .setDescription(`${emote.status_online} | Le bot est allumé!`)
         .setTimestamp()
        channel.send(embed);
	})


	bot.on("message", async message => {

  	if(message.author.bot) return;
  	if(message.channel.type === 'dm') return;
  	if (!message.content.startsWith(config.prefix)) return
  	let content = message.content.split(" ");
  	let command = content[0];
	let args = content.slice(1);


  	let commandfile = bot.commands.get(command.slice(config.prefix.length))
  	if(commandfile) commandfile.run(bot,message,args);
	})





	bot.login(config.token)

}, 3000)
