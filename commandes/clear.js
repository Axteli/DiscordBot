const Discord = require('discord.js')
const emote = require('../config/emote.json')
module.exports.run = async(bot, message, args) => {


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
    if (!args[0] || args[0] === '0') {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, merci d'entrer un nombre entre 1 et 100`),
         console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : aucun nombre rentré`)
        };

    if(isNaN(args[0])) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, il faut rentrer un nombre!`),
        console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : la valeur rentrée n'est pas un nombre`)
    }

    let deleteAmount;
    //si nombre de message a supprimé(args0) est plus grand que 100 alors le réduire a 100
    if (parseInt(args[0]) > 100 ) {
        deleteAmount = 100;

    }else{
        //ou alors nombre de message supprimé est égal a args0
        deleteAmount = parseInt(args[0]);
    }



    message.delete().catch(err => {}).then(useless => {
        message.channel.bulkDelete(deleteAmount, true)
        .catch(err => {
            return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, je n'ai pas réussi à clear les messages!`),
            console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
        }).then((messages) => {

            //envoyé le message de finalisation
            message.channel.send(`${emote.tick} | ${message.author.username}, \`${messages.size} messages\` ont été supprimés!`).then(msg => {
    
            //supprime le message au bout de 3sec
            console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| nombre de message supprimé : ${messages.size}`)
            setTimeout(() => {msg.delete();}, 3000)
            })

        })
    })


}

module.exports.help = {
    name: "clear",
    aliases: ["purge", "prune"],
    description: "Supprime des messages en masse.",
    usage: "clear <number>",
    example: "clear 10"
}