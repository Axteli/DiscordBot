const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    const extracteur = new Discord.MessageEmbed()
     .setColor("#527a9e")
     .setTitle("Les extracteurs")
     .setDescription("L’<#756272018357485620> est un bâtiment utilisé pour extraire des formes ou des couleurs à partir de tuiles source. Il est débloqué dès le début du jeu.Leur vitesse de base est de 0,4 article/s (24 articles/min), qui peuvent être mis à niveau à 6 articles /s (360 articles/min).Les extracteurs ne produisent qu’une fois placés sur une couleur ou une vignette. S'ils sont placés sur une tuile vierge, ils ne feront rien.")
     .addField("Variante normal", "Les extracteurs normaux ont une bordure blanche. Ils vont sortir leurs matériaux un <#756273448766013480> en face d’eux, ou dans une entrée applicable.", false)
     .addField("Variante chaîne", "Les extracteurs de chaînes ont une bordure sombre. Comme les extracteurs normaux, ils vont sortir des formes ou des couleurs. Toutefois, si un extracteur de chaîne fait face à un autre extracteur de chaîne, il va le stimuler, augmentant la vitesse à laquelle il produit des formes ou des couleurs. Cela permet une génération beaucoup plus efficace.", false)
     .setImage("https://cdn.discordapp.com/attachments/758707064251482162/764478649365299210/extracteur.png")
     .setThumbnail("https://cdn.discordapp.com/attachments/758707064251482162/764484994475098182/miner.png")
     .setFooter('Infos tirées du fandom', 'https://cdn.discordapp.com/attachments/758707064251482162/759150748276621338/1_TtT_gbfvQ5LitUE9wfpkog.png')
    message.channel.send(extracteur);
    message.delete();
    console.log(`commande : extracteur | par : ${message.author} | dans : ${message.channel} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})`)

}

module.exports.help = {
name: "extracteur"
}