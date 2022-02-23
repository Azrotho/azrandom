const Discord = require('discord.js');
const fs = require('fs');

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_BANS
    ]
});

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

generate = 0;

Client.on("messageCreate", message => {
    if(message.content.startsWith("Donne moi un Discord Aléatoire")){
        message.reply("discord.gg/" + makeid(7));
        generate ++;
        console.log("Un discord a été généré, " + generate + " ont déjà été généré !")
    }
    if(message.content.startsWith("Donne moi 10 Discord Aléatoire")){
        for(let i = 0; i < 10; i++){
            message.reply("discord.gg/" + makeid(7));
            generate ++;
            console.log("Un discord a été généré, " + generate + " ont déjà été généré ! (+10)")
        }
        
    }
    if(message.content.startsWith("Donne moi 100 Discord Aléatoire")){
        for(let i = 0; i < 100; i++){
            message.reply("discord.gg/" + makeid(7));
            generate ++;
            console.log("Un discord a été généré, " + generate + " ont déjà été généré ! (+100)")
        }
        
    }
        
}
)

Client.login("TOKEN")