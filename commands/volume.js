const { Client, Attachment, Message, MessageEmbed, Guild } = require("discord.js");
const { Player } = require("discord-music-player");//Music player
const config = require("../config/config.json");

module.exports.run = async (client, message, args) => {
    let guildQueue = client.player.getQueue(message.guild.id);
    if(args[0]===undefined){
      let volume = '|';
        let embed = new MessageEmbed()
        .setTitle(`Volume!`)
        .setColor("#eb1616")
        .setDescription(``)
        .addFields(
            { name: `Volume:`,inline: true, value: `${volume.repeat(guildQueue.volume)} ${guildQueue.volume}%`, inline: false },
        )
        .setTimestamp()
        .setFooter('🔊',`${client.user.displayAvatarURL({format: "png"})}`);
        return message.channel.send({embeds: [embed]});
    }
    if(isNaN(args[0])) return message.reply("Isto não é uma valor valido!");
    if(args[0]>100||args[0]<0) return message.reply("Volume precisa ser entre 0 e 100!");
    if(!guildQueue){
        let embed = new MessageEmbed()
        .setTitle(`Não Tem Nada Rolando!`)
        .setColor("#eb1616")
        .setDescription(`Não estou tocando nada para isso...`)

        return message.channel.send({embeds: [embed]});
    }
    guildQueue.setVolume(parseInt(args[0]));
      let volume = '|';
        let embed = new MessageEmbed()
        .setTitle(`Volume!`)
        .setColor("#eb1616")
        .setDescription(`Volume Alterado!`)
        .addFields(
            { name: `Volume:`,inline: true, value: `${volume.repeat(args[0])} ${args[0]}%`, inline: false },
        )
        .setTimestamp()
        .setFooter('🔊',`${client.user.displayAvatarURL({format: "png"})}`);
        message.channel.send({embeds: [embed]});
};