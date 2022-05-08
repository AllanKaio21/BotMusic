const Discord = require("discord.js");// Import discord.js vRecent
const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES',
    'DIRECT_MESSAGES', 'GUILD_MESSAGE_TYPING', 'GUILD_VOICE_STATES'], partials: ["CHANNEL"]
})// Client intents
const { Player } = require("discord-music-player");// Music player
const player = new Player(client, { leaveOnEmpty: false, });
// Define Player
client.player = player;
client.on("ready", ()=>{
  console.log('Estou online!')
})
// Import files
const ready = require("./events/ready.js");
const message = require('./events/message.js');
const direct = require('./events/direct.js');

// Init Bot
ready.run(client);

// Commands 
message.run(client);
direct.run(client);

// Initialize
client.login(process.env.TOKEN)