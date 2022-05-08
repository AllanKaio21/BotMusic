const { Client, Attachment, Message, MessageEmbed, Guild } = require("discord.js");
const { Player } = require("discord-music-player");//Music player
const config = require('../config/config.json')

module.exports.run = async (client, message, args) => {
      if(args[0]===undefined) return message.channel.send(`Use ${config.prefix}playlist [link da playlist]`);
      if(!message.member.voice.channel){
        let embed = new MessageEmbed()
          .setTitle(`Entre em um canal de voz!!`)
          .setThumbnail('https://3.bp.blogspot.com/-Ht6GDhPLkXM/WrfC848CXUI/AAAAAAAASeU/ElCzKraOlREPSOQcuTJ71wS4qICb0smOwCLcBGAs/s640/Kyoko.gif')
          .setColor("#eb1616")
          .setDescription(`Ué quer que eu toque para quem?`)
          return message.channel.send({embeds: [embed]});
            }
            if(!(args[0].substring(-5, 32) ==='https://www.youtube.com/playlist')){
            let embed = new MessageEmbed()
            .setTitle(`Não é uma playlist!`)
            .setColor("#eb1616")
            .setDescription(`Preciso de um link da playlist!`)
            return message.channel.send({embeds: [embed]});
        }
        let guildQueue = client.player.getQueue(message.guild.id);
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.playlist(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });
        let embed = new MessageEmbed()
            .setColor('#eb1616')
            .setTitle('PlayList!')
            .setDescription('Ebaaa!')
            .setURL(song.url)
            .addFields(
              { name: `Nome da PlayList:`,inline: true, value: `${song.name}`, inline: false },
              { name: `Autor:`,inline: true, value: `${song.author}`,inline: false },
              { name: `Quantidade:`,inline: true, value: `Temos ${song.songs.length} músicas!`,inline: false  },
            )
            .setTimestamp()
            .setFooter('🎶',`${client.user.displayAvatarURL({format: "png"})}`);

          message.channel.send({ embeds: [embed] });
};