const { Client, Attachment, Message, MessageEmbed, Guild } = require("discord.js");
const { Player } = require("discord-music-player");//Music player
const config = require("../config/config.json");

module.exports.run = async (client, message, args) => {
    let guildQueue = client.player.getQueue(message.guild.id);
    if(!guildQueue){
        let embed = new MessageEmbed()
        .setTitle(`Não Tem Nada Rolando!`)
        .setColor("#eb1616")
        .setDescription(`Não estou tocando nada para isso...`)

        return message.channel.send({embeds: [embed]});
    }
    let volume = '|';
        let embed = new MessageEmbed()
        .setTitle(`Volume Atual!`)
        .setColor("#eb1616")
        .setDescription(``)
        .addFields(
            { name: `Volume:`,inline: true, value: `${volume.repeat(guildQueue.volume)} ${guildQueue.volume}%`, inline: false },
        )
        .setTimestamp()
        .setFooter('🔊',`${client.user.displayAvatarURL({format: "png"})}`);
        return message.channel.send({embeds: [embed]});
};