const { Client, Attachment, Message, MessageEmbed, Guild } = require("discord.js");
const { Player } = require("discord-music-player");//Music player
const config = require("../config/config.json");

module.exports.run = async (client, message, args) => {
    let guildQueue = client.player.getQueue(message.guild.id);
    if(!guildQueue){
        let embed = new MessageEmbed()
        .setTitle(`Que musica?`)
        .setColor("#eb1616")
        .setDescription(`Acho que não tem musica rolando...`)

        return message.channel.send({embeds: [embed]});
    }
    guildQueue.setPaused(true);
      let embed = new MessageEmbed()
      .setColor('#eb1616')
      .setTitle('Pausar!')
      .setDescription('Opa! parei a música para você.')
      .setThumbnail(guildQueue.songs[0].thumbnail)
      .addFields(
      { name: `Música:`,inline: true, value: `${guildQueue.songs[0].name}`, inline: false },
      { name: `Autor:`,inline: true, value: `${guildQueue.songs[0].author}`,inline: false },
      )
      .setTimestamp()
      .setFooter('🎶',`${client.user.displayAvatarURL({format: "png"})}`);

      message.channel.send({ embeds: [embed] });
};