const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Tu ne peux pas bannir!')
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Je n\'est pas la permission de bannir !')

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!args[0]) return message.channel.send('Indique qui je doit bannir !');

    if(!member) return message.channel.send('Je ne trouve pas cet utilisateur :/');
    if(!member.bannable) return message.channel.send('Je ne peux pas bannir cet personne. soit car c\'est un modo/admin, soit car il a un role au dessus du miens');

    if(member.id === message.author.id) return message.channel.send('Bruh, tu ne peux pas te ban toi-meme!');

    let reason = args.slice(1).join(" ");

    if(reason === undefined) reason = 'Unspecified';

    member.ban({
        reason: `${reason}`,
        })
    .catch(err => {
        if(err) return message.channel.send('Something went wrong')
    })

    const banembed = new Discord.MessageEmbed()
    .setTitle('Member Banned')
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`Membre banni : ${member}\nPar : ${message.author}\nRaison : ${reason}`)

    message.channel.send(banembed);


}

module.exports.help = {
name: "ban"
}