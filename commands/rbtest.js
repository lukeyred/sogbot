const discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot,message,args) =>{

let tag = message.author.id;
let botmessage = args.join(" ");
let {body} = await superagent
 .get(`https://api.roblox.com/users/${args[0]}/groups`)





  var str = "";
  var i;

  for (i = 0; i < body.length; i++) {

  str += `\n${i+1} - ${body[i].Name} | RANK: ${body[i].Role}`;







}
const embed = new discord.RichEmbed()
  .setTitle("BACKGROUND CHECK")
  .setDescription(str)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x000000)
message.channel.send({embed});
};







module.exports.help = {
  name: "bgcheck"
}
