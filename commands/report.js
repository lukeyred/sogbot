const discord = require("discord.js");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot,message,args) =>{

  if(!message.member.roles.find(r => r.name === "Moderator")){
    if(!message.member.roles.find(r => r.name === "Administrator")){
      if(!message.member.roles.find(r => r.name === "Owner")){
        return message.channel.send("You do not have permission to run this command.");
      }
    }
  }


let dad = bot.guilds.get(message.guild.id).id;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let id = gtRndInteger(1000,10000)

  let name = args[0];
  const channel = await message.guild.createChannel(`Case-${id}`);

  channel.overwritePermissions(message.author, {
    VIEW_CHANNEL: true,
    SEND_MESSAGES: true
  })

  let testRole = message.guild.defaultRole;
  channel.overwritePermissions(
      testRole,
      { 'VIEW_CHANNEL': false },
      // optional 'reason' for permission overwrite
  )



  //await channel.setParent('569684930133753856');
  const embed = new discord.RichEmbed()
    .setTitle("New Case")
    .setDescription(`CASE TEMPLATE:
      \n**Case Type:** <Threat/Active Situation/Expired Situation/Etc..>
      \n**Case Name:** <i.e. Operation Snowflake>
      \n**Evidence:** Your Evidence
      \n**Extra Information:** Any additionals info.

      `)
    .setColor(0x42a7f4)
    .setTimestamp()
  channel.send({embed});
  channel.send(`<@&541045269362507797> <@&541047743540494349> <@&541045316787372033>`);


  message.channel.send("New case channel created.");

};







module.exports.help = {
    name: "case"
  }
