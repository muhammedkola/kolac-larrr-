const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.bot || message.channel.type === "dm") return;

  if (!message.guild) {
    return message.author.send('`sil` **komutu sadece sunucularda kullanılabilir.**');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (isNaN(args[0])) {
            message.reply("**Kaç mesaj sileceğimi belirtmedin.**")
            return
        }
        
        if (args[0].length > 800) {
            message.channel.send("** 800'den fazla mesaj silemem.**")
            return
        }
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send('**__' + mesajsayisi + '__** **adet mesaj sildim! <a:5_:745306462858903693>  ** ')

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
