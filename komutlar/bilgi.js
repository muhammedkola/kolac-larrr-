const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Kola Bot v12 Sürümü")
.setTitle("Kola Bot Bilgi Menüsüne Hoş Geldin ! ")
 .setTimestamp()
.setDescription(" **k!korona** = __k!korona turkey.__ \n  **k!deprembilgi** = __En Son Deprem Yerlerini Gösterir komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/783309533434085388/783448042951016508/kolabot.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'bilgi',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}