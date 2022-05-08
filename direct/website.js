const { Client, Attachment, Message, MessageEmbed, Guild } = require("discord.js");
const config = require('../config/config.json');

module.exports.run = async (client, message, args) => {
  let embed = new MessageEmbed()
    .setColor('#eb1616')
    .setTitle('Website!')
    .setDescription('Poxa ainda está sendo feito!')
    .setImage('')
    .addFields(
      { name: `Website:`,inline: true, value: '[www.cielbot.com? um dia talvez!](https://discord.com/oauth2/authorize?client_id=883028516881465377&scope=bot&permissions=8)', inline: false },
    )
    .setTimestamp()
    .setFooter('🎈🎉',`${client.user.displayAvatarURL({format: "png"})}`);
    return message.channel.send({ embeds: [embed] });
};