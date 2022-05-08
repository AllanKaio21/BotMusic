const { Client, Attachment, Message, MessageEmbed, Guild } = require("discord.js");
const { Player } = require("discord-music-player");//Music player
const { RepeatMode } = require('discord-music-player');//Music Bot

module.exports.run = async (client, message, args) => {
    let guildQueue = client.player.getQueue(message.guild.id);
    if(!guildQueue){
        let embed = new MessageEmbed()
        .setTitle(`Não Tem Nada Rolando!`)
        .setColor("#eb1616")
        .setDescription(`Não estou tocando nada para isso...`)

        return message.channel.send({embeds: [embed]});
    }
    guildQueue.setRepeatMode(RepeatMode.SONG); // or 1 instead of RepeatMode.SONG
    let embed = new MessageEmbed()
      .setColor('#eb1616')
      .setTitle('Loop!')
      .setDescription('Olha parece que temos uma preferência!?')
      .setThumbnail(guildQueue.songs[0].thumbnail)
      .addFields(
      { name: `Música:`,inline: true, value: `${guildQueue.songs[0].name}`, inline: false },
      { name: `Autor:`,inline: true, value: `${guildQueue.songs[0].author}`,inline: false },
      { name: `Duração:`,inline: true, value: `${guildQueue.songs[0].duration}`,inline: false  },
      )
      .setTimestamp()
      .setFooter('🎶',`${client.user.displayAvatarURL({format: "png"})}`);

      message.channel.send({ embeds: [embed] });
};