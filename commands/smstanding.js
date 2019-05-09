const discord = require("discord.js");
module.exports.run = async (bot,message,args) =>{
const botconfig = require("../botconfig.json");
let dad = bot.guilds.get(message.guild.id).id;



  if (args[0] === "non-existent"){
    const embed = new discord.RichEmbed()
      .setTitle("Threat Level Updated")
      .setDescription(`This case's threat level has been updated to: **Non Existent**.`)
      .setColor(0x40e57c)
      .setFooter(`By, ${message.author.username}`)
      .setTimestamp()
      message.channel.send({embed});
  } else if (args[0] === "prevelant") {
    const embed = new discord.RichEmbed()
      .setTitle("Threat Level Updated")
      .setDescription(`This case's threat level has been updated to: **Prevelant**.`)
      .setColor(0xedb53d)
      .setFooter(`By, ${message.author.username}`)
      .setTimestamp()
    message.channel.send({embed});
  }else if (args[0] === "severe"){
    const embed = new discord.RichEmbed()
      .setTitle("Threat Level Updated")
      .setDescription(`This case's threat level has been updated to: **Severe**`)
      .setColor(0xef4a5a)
      .setFooter(`By, ${message.author.username}`)
      .setTimestamp()
    message.channel.send({embed});
    let channel = message.channel;
    let channelname = message.channel.name;
    channel.setName(`${channelname}-🔴`)
  }else if (args[0] === "critical"){
        const embed = new discord.RichEmbed()
      .setTitle("Threat Level Updated")
      .setDescription(`This case's threat level has been updated to: **Critical**`)
      .setColor(0x000000)
      .setFooter(`By, ${message.author.username}`)
      .setTimestamp()
    message.channel.send({embed});
    let channel = message.channel;
    let channelname = message.channel.name;
    channel.setName(`${channelname}-⚫`)
  }
    else{
    message.channel.send("THREAT LEVEL NOT RECOGNISED: **non-existent/prevelant/severe/critical.**");
  }


}







module.exports.help = {
    name: "threatlevel"
  }
