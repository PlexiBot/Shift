const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => { 
  client.user.setActivity('!Help');
  console.log(`Logged in as ${client.user.tag}!`);
});
let prefix = "!";
client.on("message", (message) => {
 
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "Stats")) {
    message.channel.send({embed: {
      title: "Shift Statistics",
      description: 'Node: 9.3.0\n\nBot Version: 1.0.2\n\nLibrary: Discord.JS\n\nOwner: Alez#5858'
     }
    })
  } else
  
      if (message.content.startsWith(prefix + "Say")) {
        message.delete();
    message.channel.send(message.content.substring('!Say '.length));
  }
  
  if (message.content === '!Roll') {
		return message.reply(`You Got A ${Math.floor((Math.random() * 6) + 1)}`);
	  }

});

client.login("Your Token Here");
