const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    message.delete();
//vérifie les permissions
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, tu n'as pas la permission "gérer les messages"!`,
         console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.username} n'as pas la permission gérer les messages.`)
        )};

    if (!message.channel.permissionsFor(bot.user).has('MANAGE_MESSAGES')) {
        return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, je n'est pas la permission "gérer les message"!`,
         console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le bot n'as pas la permission gérer les messages.`)
        )};


//vérifier qu'un nombre est entré
    if (!args[0]) {
        return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, merci d'entrer un nombre entre 1 et 100`),
         console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : aucun nombre rentré.`)
        };

//créer deleteAmount
        let deleteAmount;
//si nb de message a supprimé(args0) est plus grand que 100 alors le réduire a 100
        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
//ou alors nb de message supprimé est égal a args0
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });

//envoyé le message de finalisation
    const msg = await message.channel.send(`<a:tickgreen:764793938317803551> | ${message.author.username}, \`${deleteAmount} messages\` ont été supprimés!`)

//supprime l'embed au bout de 3sec
        await setTimeout(() => { msg.delete();}, 3000)
        console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| nb de msg supprimés : ${deleteAmount}`)
    
}

module.exports.help = {
name: "clear"
}