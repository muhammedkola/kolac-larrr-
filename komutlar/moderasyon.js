const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Kola V12 botuyla sizlerle.")
.setTitle(" Kola Bot Moderasyon Komutları ")
 .setTimestamp()
.setDescription("**k!sil** = Yazdığınız miktarda mesajı siler.  \n  **k!ban** = Etiketlediğiniz kişiyi banlarsınız.  \n  **k!kick** = Etiketlediğiniz kişiyi atarsınız. \n  **k!duyuru** = Bota duyuru yaptırırsınız.  \n **k!küfür** = Küfür engel sistemini açarsınız.  \n **k!reklam** = Reklam engel sistemi açarsınız.  \n **k!slowmode** = Yavaş modu ayarlarsınız. \n**k!forceban** = Birisine id ban atarsınız.  \n **k!unban** = Birisinin banını açarsınız.  \n **k!sa-as** = Bot biri sa dedimi cevap verir.  \n **k!sunucubilgi** = Sunucu bilgilerini görürsün.  \n **k!üyedurum** = Üyelerin durumlarını görürsün.\n **k!çekiliş** = Çekiliş başlatırsınız.")
.setImage("https://cdn.discordapp.com/avatars/727092647503855718/a3ecbb04c39e7c68da17f1f01d938721.webp")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}