const { Client, Attachment, Message, MessageEmbed, Guild } = require("discord.js");
const { Player } = require("discord-music-player");//Music player

module.exports.run = async (client, message, args) => {
    let guildQueue = client.player.getQueue(message.guild.id);
    if(!guildQueue){
        let embed = new MessageEmbed()
        .setTitle(`Que musica?`)
        .setColor("#eb1616")
        .setDescription(`Acho que não tem musica rolando...`)

        return message.channel.send({embeds: [embed]});
    }
    guildQueue.stop();
        let embed = new MessageEmbed()
        .setTitle(`Ta Parei!`)
        .setColor("#eb1616")
        .setDescription(`Poxa parar porque?`)

        message.channel.send({embeds: [embed]});
};