const fs = require('fs')
const chalk = require('chalk')
module.exports = (bot) => {


	fs.readdir("./commandes/", (err, files) => {

    	if(err) console.log(err);

    	let jsfile = files.filter(f => f.split(".").pop() === "js");
    	console.log(chalk.magenta(`Chargement des commandes...`))


    	if(jsfile.length <= 0){
  			console.log(chalk.bgMagenta("Je ne trouve pas les commandes"));
  			return;
  		}


  	jsfile.forEach((f) =>{
        let props = require(`../commandes/${f}`);
      	bot.commands.set(props.help.name, props);
      	bot.aliases.set(props.help.aliases, props)
      	console.log(`${f} chargée!`);
  	});

	console.log(chalk.bgMagenta(`${jsfile.length} commandes chargées!`));
	});


}