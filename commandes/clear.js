const Discord = require('discord.js')
const emote = require('../emote.json')
module.exports.run = async(bot, message, args) => {

    message.delete();
    
    //vérifie les permissions
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu n'as pas la permission "gérer les messages"!`),
         console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.username} n'as pas la permission gérer les messages.`)
    };

    if (!message.channel.permissionsFor(bot.user).has('MANAGE_MESSAGES')) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je n'est pas la permission "gérer les message"!`),
         console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le bot n'as pas la permission gérer les messages.`)
    };


    //vérifier qu'un nombre est entré
    if (!args[0]) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, merci d'entrer un nombre entre 1 et 100`),
         console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : aucun nombre rentré.`)
    };


    let deleteAmount;
    //si nb de message a supprimé(args0) est plus grand que 100 alors le réduire a 100
    //ou alors nb de message supprimé est égal a args0
    if (parseInt(args[0]) > 100 ) {
        deleteAmount = 100;

    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true).catch(err => {
        console.error(err);
        message.channel.send(`${emote.cross} Erreur | ${messages.author.username}, Je n'ai pas réussi à clear les messages`);
        return
    });

    //envoyé le message de finalisation
    const msg = await message.channel.send(`${emote.tick} | ${message.author.username}, \`${deleteAmount} messages\` ont été supprimés!`)

    //supprime l'embed au bout de 3sec
    setTimeout(() => { msg.delete();}, 3000)
    console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| nb de msg supprimés : ${deleteAmount}`)
    
}

module.exports.help = {
name: "clear"
}