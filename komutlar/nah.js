const Discord = require("discord.js")


exports.run = async (client, message, args) => {
  
  const nah = new Discord.MessageEmbed()
  .setColor("RED")
  .setImage("https://cdn.discordapp.com/attachments/770943885055754240/784414561608532018/CreepyWeightyBittern-max-1mb.gif")
  .setTitle("nah")
  message.channel.send(nah)
}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['nah-gif'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: "nah",
  description: "Nah gif atar",
  usage:"!Nah"
}