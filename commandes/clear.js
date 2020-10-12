const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

message.delete();
if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
            return message.channel.send(
                `${message.author.username}, tu n'as pas la permission de faire ça` // returns this message to user with no perms
            );
        if (!args[0]) {
            return message.channel.send(`Merci d'entrer un chiffre entre 1 et 100`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true);

        const embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setDescription(`<a:tickgreen:764793938317803551> ${deleteAmount} messages ont été supprimés !`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor("#527a9e")
        await message.channel.send(embed)
        console.log(`commande : clear | par : ${message.author} | dans : ${message.channel} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)
    }


module.exports.help = {
name: "clear"
}