const discord = require("discord.js");
const superagent = require("superagent");


module.exports.run = async (bot,message,args) =>{

let tag = message.author.id;
let argss = args.slice(1);
let botmessage = argss.join(" ");

message.channel.send("Please note, we can not read your messages.");
const embed = new discord.RichEmbed()
  .setDescription(`MESSAGE FROM SOG TEAM:${botmessage}`)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x000000)


bot.fetchUser(`${args[0]}`).then((user) => {
        user.send(`${embed}`);
        message.channel.send("DM Sent");
    });

};









module.exports.help = {
  name: "dm"
}
