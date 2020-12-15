const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Kola V12 sürümüyle yeniden sizlerle.")
.setTitle("<a:Yldz:770210728278884362> Kola Bot Logo Komutları <a:Yldz:770210728278884362>")
 .setTimestamp()
.setDescription("<a:yan:770210728278884362> **k!dinamik** = Dinamik logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!altın** = Altın logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!banner** = Banner logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!basit** = Basit logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!elmas** = Elmas logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!sarı** = Sarı logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!neonmavi** = Neon mavi logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!kalın** = Kalın logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!anime** = Anime yazı tipinde logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!habbo** = Habbo yazı tipinde logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!arrow** = Ok işaretli logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!green** = Yeşil logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!alev** = Alevli logo oluşturur. <a:developeremoji:770210728278884362> \n <a:yan:770210728278884362> **k!red** = Kırmızı logo oluşturur. <a:developeremoji:770210728278884362>")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}