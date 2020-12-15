const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setAuthor(`Kola Bot`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(` Kola Botumuzu eklemek için \`k!davet\` yazabilirsiniz.`)  
.addField(`__BotEkle__`,` \`k!ekle <link>\` Botunuzu Eklersiniz`,true)
.addField(`__BotSay__`,` \`k!botsay\` Kaç Tane Bot Eklenmiş Onu Görürsünüz `,true)
.addField(`__Bilgilendirme__`,` \`k!davet\` |  Kola Botu Sunucunuza Davet Edersiniz `)
  .setImage(`https://cdn.discordapp.com/attachments/768944652303859753/784421408478068746/standard_1.gif`)
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'uptime',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}