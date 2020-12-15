const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Kola Bot V12 sürümüyle yeniden sizlerle.")
.setTitle(" Kola Bot  Kullanıcı Komutları ")
 .setTimestamp()
.setDescription(" **k!avatar** = Avatarınıza bakarsınız.  \n  **k!yetkilerim** = Yetkilerini görürsün.  \n  **k!profil** = Profilini görürsün.  \n  **k!sunucuresmi** = Sunucu resmini gösterir.  \n  **k!ping** = Botun Pingine Bakarsın. \n **k!id** = Birisinin id'sine Bakarsın. \n **k!davet** = Beni Sunucuna Ekle.\n  **k!botbilgi** = Bot istatistiklerini görürsünüz.\n **k!bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir.")
.setImage("https://cdn.discordapp.com/avatars/727092647503855718/a3ecbb04c39e7c68da17f1f01d938721.webp")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}