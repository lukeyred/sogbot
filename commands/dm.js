const discord = require("discord.js");
const superagent = require("superagent");


module.exports.run = async (bot,message,args) =>{

if (!message.author.id === "120246971737833473") return;    

let tag = message.author.id;
let argss = args.slice(1);
let botmessage = argss.join(" ");


    
const embed = new discord.RichEmbed()
  .setTitle("RECRUITMENT")
  .setDescription(`**RECRUITMENT:** \n\nThe Special Forces equivelant for Sweden (SOG) is recruiting. It's easy to show your interest. Just DM me (the bot) with "Im Interested" and follow the instructions. Good luck.`)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x000000)
  .setThumbnail("https://ih1.redbubble.net/image.259305605.5285/raf,750x1000,075,t,charcoal_grey_lightweight_raglan_sweatshirt.jpg")


message.channel.send("@everyone");
message.channel.send({embed});

message.delete().catch();
    
    
    
};









module.exports.help = {
  name: "sog-announce-121"
}
