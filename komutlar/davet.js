const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Sunucuna Ekle ❤️")
  .setDescription("[__**Davet Et**__](https://discord.com/api/oauth2/authorize?client_id=727092647503855718&permissions=8&scope=bot) \n [__**Destek Sunucusu**__](https://discord.gg/7bNxQMhqDB)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};