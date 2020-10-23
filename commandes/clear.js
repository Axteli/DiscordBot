const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    message.delete();

//vérifie les permissions
    if (!message.member.hasPermission("MANAGE_MESSAGES")) 
        return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, tu n'as pas la permission "gérer les messages"!`,
         console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.username} n'as pas la permission gérer les messages.`)
        );

    if (!message.guild.bot.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, je n'est pas la permission "gérer les message"!`,
         console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le bot n'as pas la permission gérer les messages.`)
        );


//vérifier qu'un nombre est entré
        if (!args[0]) {
            return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, merci d'entrer un nombre entre 1 et 100`),
             console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : aucun nombre rentré.`)
        };

//faire des calculs relou (⊙_⊙;)
        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true);

//envoyé l'embed de finalisation
        const clear = new Discord.MessageEmbed()

         .setTitle(`${message.author.username}`)
         .setDescription(`<a:tickgreen:764793938317803551> ${deleteAmount} messages ont été supprimés !`)
         .setFooter(message.author.username, message.author.displayAvatarURL())
         .setColor("#527a9e")

        const msg = await message.channel.send(clear)

//supprime l'embed au bout de 3sec
        await setTimeout(() => { msg.delete();}, 3000)
        console.log(`commande : clear | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| nb de msg supprimés : ${deleteAmount}`)
    
}

module.exports.help = {
name: "clear"
}