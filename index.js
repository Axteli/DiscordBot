const Discord = require('discord.js')
const log = console.log

const bot = new Discord.Client();

bot.commands = new Discord.Collection();
const fs = require('fs')
const chalk = require("chalk");

const config = require('./config.json');
bot.commands = new Discord.Collection()

fs.readdir('./commandes/', (err, files) => {
    if(err) console.log(err);
   log(chalk.red(`Chargement de ${files.length} commandes en cours.`))
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
    console.log('commandes not found.');
    return;}
    jsfile.forEach((f, o) => {
        let props = require(`./commandes/${f}`);
        bot.commands.set(props.help.name, props);})})


fs.readdir("./event/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) return console.log("Aucun event trouvé");
    log(chalk.green(`Chargement de ${jsfiles.length} Event en cours. `));
    jsfiles.forEach((f, i) => {
        require(`./event/${f}`);
    });
  });


bot.on('ready', () => {
    console.log("Servers:")
    bot.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name + " - " + guild.id)})})

bot.on('ready', function(){
                    bot.user.setActivity("Comment hacker humour et musique en tout genre", {type: "WATCHING"})
                    log(chalk.bgRed('Chargement du bot en cours... '));})
                    bot.on('guildCreate' , async guild => {
                    bot.user.setActivity("Comment hacker humour et musique en tout genre", {type: "WATCHING"})})
                    bot.on('guildDelete', async guild => {
                    bot.user.setActivity("Comment hacker humour et musique en tout genre", {type: "WATCHING"})})

bot.login(config.token)
  bot.on('message', async message => {
    bot.emit('checkMessage', message);
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]
    let Args = messageArray.slice(1);
    var args = message.content.substring(prefix.length).split(" ");
    if(message.content.startsWith(prefix)){
    let commandeFile = bot.commands.get(cmd.slice(prefix.length));
    if(commandeFile) commandeFile.run(bot, message, Args, args)}
    ;})
  module.exports = {
    bot: bot
}