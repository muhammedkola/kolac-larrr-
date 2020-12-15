const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Kola Bot v12 Sürümü")
.setTitle("Kola Bot Yardım Menüsüne Hoş Geldin ! ")
 .setTimestamp()
.setDescription(" **k!eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n  **k!moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n  **k!kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n **k!logo** = __Logo komutlarını görüntülersiniz.__\n  **k!bilgi** = __Bilgi komutlarını görüntülersiniz.__\n **k!uptime** = __Uptime komutlarını görüntülersiniz.__\n **k!yardım-invite** = __İnvite Beta Aşaması komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/783309533434085388/783448042951016508/kolabot.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}