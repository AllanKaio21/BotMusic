const { Client, Attachment, Message, MessageEmbed, Guild } = require("discord.js");
const { Player } = require("discord-music-player");//Music player
const { RepeatMode } = require('discord-music-player');//Music Bot
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
    guildQueue.setRepeatMode(RepeatMode.DISABLED); // or 0 instead of RepeatMode.DISABLED
        let embed = new MessageEmbed()
        .setTitle(`Loop finalizado!`)
        .setColor("#eb1616")
        .setDescription(`Eu também ja estava enjoado...`)

        message.channel.send({embeds: [embed]});
};