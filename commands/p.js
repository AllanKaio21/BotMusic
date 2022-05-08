const { Client, Attachment, Message, MessageEmbed, Guild } = require("discord.js");
const { Player } = require("discord-music-player");//Music player
const config = require('../config/config.json');

module.exports.run = async (client, message, args) => {
        if(args[0]===undefined) return message.channel.send(`Use ${config.prefix}play [Nome Musica]`);
        if(!message.member.voice.channel){
            let embed = new MessageEmbed()
            .setTitle(`Entre em um canal de voz!!`)
            .setThumbnail('https://3.bp.blogspot.com/-Ht6GDhPLkXM/WrfC848CXUI/AAAAAAAASeU/ElCzKraOlREPSOQcuTJ71wS4qICb0smOwCLcBGAs/s640/Kyoko.gif')
            .setColor("#eb1616")
            .setDescription(`Ué quer que eu toque para quem?`)
            return message.channel.send({embeds: [embed]});
        }
        if(args[0].substring(-5, 32) ==='https://www.youtube.com/playlist'){
            let embed = new MessageEmbed()
            .setTitle(`Este comando não aceita playlist!`)
            .setColor("#eb1616")
            .setDescription(`Use ${config.prefix}playlist [playlist]`)
            return message.channel.send({embeds: [embed]});
        }
        let guildQueue = client.player.getQueue(message.guild.id);
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(_ => {
            if(!guildQueue)
              queue.skip()
        });
        if(queue.songs[(queue.songs.length)-1].isLive){
          message.channel.send('Não posso reproduzir uma live!')
          return queue.remove((queue.songs.length)-1);
        }
        const embed = new MessageEmbed()
          .setColor('#eb1616')
          .setTitle('Tocando Música!')
          .setDescription('🎶🎵')
          .setThumbnail(queue.songs[(queue.songs.length)-1].thumbnail)
          .addFields(
            { name: `Música:`,inline: true, value: `${queue.songs[(queue.songs.length)-1].name}`, inline: false },
            { name: `Autor:`,inline: true, value: `${queue.songs[(queue.songs.length)-1].author}`,inline: false },
            { name: `Duração:`,inline: true, value: `${queue.songs[(queue.songs.length)-1].duration}`,inline: false  },
          )
          .setTimestamp()
          .setFooter('🎶',`${client.user.displayAvatarURL({format: "png"})}`);

          message.channel.send({ embeds: [embed] });
          message.delete().catch(O_o => {});
    };