const { Client, Attachment, Message, MessageEmbed, Guild } = require("discord.js");
const { Player } = require("discord-music-player");//Music player

module.exports.run = async (client, message, args) => {
    let guildQueue = client.player.getQueue(message.guild.id);
    let channel = message.member.voice.channel;
    
        if(!channel){
            let embed = new MessageEmbed()
            .setTitle(`Entra em um canal de voz ai!`)
            .setColor("#eb1616")
            .setDescription(`Assim não da neh!`)

            return message.channel.send({embeds: [embed]});
        }
        if(!guildQueue){
            let embed = new MessageEmbed()
            .setTitle(`Pular o que?`)
            .setColor("#eb1616")
            .setDescription(`Não tem musica para pular ue!`)

            return message.channel.send({embeds: [embed]});
        }
        if(guildQueue.songs.length > 1){
            guildQueue.skip()
            let embed = new MessageEmbed()
            .setColor('#eb1616')
            .setTitle('Pulando...')
            .setDescription('Aqui esta a proxima!')
            .setThumbnail(guildQueue.songs[1].thumbnail)
            .addFields(
              { name: `Música:`,inline: true, value: `${guildQueue.songs[1].name}`, inline: false },
              { name: `Autor:`,inline: true, value: `${guildQueue.songs[1].author}`,inline: false },
              { name: `Duração:`,inline: true, value: `${guildQueue.songs[1].duration}`,inline: false  },
            )
            .setTimestamp()
            .setFooter('🎶',`${client.user.displayAvatarURL({format: "png"})}`);

          message.channel.send({ embeds: [embed] });
        }else{
            guildQueue.skip()
            let embed = new MessageEmbed()
            .setTitle(`bye bye!`)
            .setColor("#eb1616")
            .setDescription(`Como as musicas acabaram estou vazando hshs...`)
            
            message.channel.send({embeds: [embed]});
        }
  };