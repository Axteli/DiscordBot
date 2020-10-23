const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    message.delete();
     
    //définir text qui est le texte que l'on vas envoyer
        var text = message.content.split(' ').slice(1).join(' ');

    //si aucun texte défini return
        if(!text) return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.tag}, tu ne m\'as pas dit ce que je devais écrire!`);
    
    //envoyer le text défini plus haut
        message.channel.send(text);

    console.log(`commande : say | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| texte : ${text}`)

}
    

module.exports.help = {
name: "say"
}