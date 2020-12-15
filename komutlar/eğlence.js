const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Kola Bot")
.setTitle(" Kola Bot   Eğlence Komutları")
 .setTimestamp()
.setDescription(" **k!tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n **k!mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **k!fbi** = Bot FBi Gif Atar.  \n  **k!fadness** = Ne Olduğunu Öğrenmek İstemezmisin?  \n **k!düello** = Düello Atarsın. \n **k!wasted** = Polis tarafından yakalanırsın. \n **k!atatürk** = Dene ve gör... (1881-1938)")
.setImage("https://cdn.discordapp.com/avatars/727092647503855718/a3ecbb04c39e7c68da17f1f01d938721.webp")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}