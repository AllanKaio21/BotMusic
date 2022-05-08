const config = require('../config/config.json');//Config 

module.exports.run = async (client) => {
  client.on("ready", () => {
    let activities = [
      `Use ${config.prefix}help !`,
      `Estou em ${client.guilds.cache.size} servidores!`,
      `Use ${config.prefix}help e receba ajuda!`,
      `Bora ouvir uma musica? use ${config.prefix}play`
    ],
      i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
      type: "LISTENING",
    }), 1000 * 60);
    console.log("Estou Online!");
  });
};