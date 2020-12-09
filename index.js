const Discord = require("discord.js")
const config = require("./config/config.json")
const bot = new Discord.Client();
const chalk = require("chalk")

bot.commands = new Discord.Collection();
bot.description = new Discord.Collection();
bot.usage = new Discord.Collection();
bot.example = new Discord.Collection();
bot.aliases = new Discord.Collection();

console.log(chalk.bgBlue(`Le bot vas démarrer dans 3 secondes...`))

setTimeout(() => {

	["command", "event"].forEach(handler => {
		require(`./handlers/${handler}`)(bot);
	});



	bot.login(config.token)

}, 3000)
