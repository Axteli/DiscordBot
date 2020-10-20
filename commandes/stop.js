const { bot } = require("..");

module.exports.run = async(bot, message, args) => {

    if (message.author.id !== '703613634420670556') {
        return message.channel.send(`Tu ne peux pas éteindre le bot !`)
    }
    const msg = await message.channel.send(`<:offline:764845548103532615> Le bot vas s'éteindre dans 5 secondes `);
    await setTimeout(() => { msg.edit(`<:offline:764845548103532615> Le bot vas s'éteindre dans 4 secondes `); }, 1000);
    await setTimeout(() => { msg.edit(`<:offline:764845548103532615> Le bot vas s'éteindre dans 3 secondes `);}, 2000);
    await setTimeout(() => { msg.edit(`<:offline:764845548103532615> Le bot vas s'éteindre dans 2 secondes `);}, 3000);
    await setTimeout(() => { msg.edit(`<:offline:764845548103532615> Le bot vas s'éteindre dans 1 seconde `);}, 4000);
    await setTimeout(() => { msg.edit(`<:offline:764845548103532615> le bot s'éteint...`);}, 5000)
    await setTimeout(() => { bot.user.setStatus('invisible'); }, 4900);
    await setTimeout(() => { console.log("Bot off"); }, 4950);
    await setTimeout(() => { process.exit(); }, 5001);
}

module.exports.help = {
        name: "stop"
    }