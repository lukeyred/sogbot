const discord = require("discord.js");

module.exports.run = async (bot,message,args) =>{

let dad = bot.guilds.get(message.guild.id).id;



let channel = message.channel.name;


if (channel.indexOf("case-") !== -1){
  let tag = message.author.id;
  message.channel.send(`<@${tag}> HAS CLOSED THE CASE. Channel will be deleted in 5 minutes.`);


function deletec(){
message.channel.delete();
}

setTimeout(deletec,5 * 60 * 1000);


}else{
  message.channel.send("This is not a case channel, it may not be closed.")
}
};




module.exports.help = {
    name: "close"
  }
