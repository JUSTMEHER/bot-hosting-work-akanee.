const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();
const keepAlive = require('./server.js');

client.build();

module.exports = client; 


keepAlive();
