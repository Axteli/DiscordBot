const { bot } = require("..");

module.exports.run = async(bot, message, args) => {

    if (message.author.id !== '703613634420670556') {
        return message.channel.send(`Tu ne peux pas éteindre le bot !`)
    }
    await message.channel.send(`Le bot est éteint <:offline:764845548103532615> `);
    console.log("Bot off");
    process.exit();
}

module.exports.help = {
        name: "stop"
    }