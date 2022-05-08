const { Client, Attachment, Message, MessageEmbed, Guild } = require("discord.js");
const { Player } = require("discord-music-player");//Music player

module.exports.run = async (client, message, args) => {
    if(!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('Não vou sair!');
    let guildQueue = client.player.getQueue(message.guild.id);
    if(!guildQueue){
        let embed = new MessageEmbed()
        .setTitle(`To em nenhum canal ue!`)
        .setColor("#eb1616")
        .setDescription(`Acho que você se enganou..`)

        return message.channel.send({embeds: [embed]});
    }
    guildQueue.stop();
        let embed = new MessageEmbed()
        .setTitle(`Pronto vazei!`)
        .setColor("#eb1616")
        .setDescription(`Espero poder tocar mais depois!`)

        message.channel.send({embeds: [embed]});
};