
const botconfig = require("./botconfig.json");
const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: false});
const fs = require("fs");

bot.commands = new discord.Collection();




bot.on("ready",async () => {
  console.log(`${bot.user.username} is online!`)
  bot.user.setActivity("Labour is the best.")
});




bot.on('guildMemberAdd', member => {
    member.send("Hey there! If you're not in the labour group you can run the command !override and it will give you your roles. If you are in the labour group do !verify . If you'd like to join, click this link and join the group! https://www.roblox.com/groups/2655177/UK-Labour-Party-of-the-UK#!/about");
});


bot.on("message", async message =>{



//MESSAGE SHIT

if (message.author.bot) return;

if(message.channel.type === "dm"){
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(/ +/);
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);





let messaged = message.content.toLowerCase();

  if (messaged === "i'm interested" || messaged === "im interested" ){
	
	message.channel.send("By submitting your interest, you agree that you will keep any future contacts with SOG confidential and also agree failure to do so will result in your blacklist and termination, say 'confirm' to confirm.")

// END OF MESSAGE SHIT
  }else if (messaged === "confirm"){
	  message.channel.send("Understood.")
	  const embed = new discord.RichEmbed()
  .setDescription(`${message.author.username} has expressed interest in being a part of SOG.
    `)

  .setColor(0x000000)
	  let guild = bot.guilds.get('565551348750352384');
	  channel = guild.channels.get('565551348750352388');
	  channel.send({embed});
  }
}else{

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(/ +/);
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  var d = cmd.startsWith(prefix);
  if (d === false && cmd !== "hello") return;
  console.log(d);



}
}

);



bot.login(process.env.token);
