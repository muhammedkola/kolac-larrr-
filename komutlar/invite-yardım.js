const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "k!";
  const embed = new Discord.MessageEmbed()
  .setAuthor(`Kola Bot İnvite Sistemi`, message.author.avatarURL)
    .setDescription(`Prefix: **${prefix}**`)
    .addField(
      `Davetler`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`, \`davetlerim\`, \`davet-oluştur\``
    )
    .addField(`Rütbeler`, `\`rütbe-ekle\`, \`rütbe-sil\`, \`rütbe-liste\``)
    .setColor("#0BF3B7")
  .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım-invite"
};
