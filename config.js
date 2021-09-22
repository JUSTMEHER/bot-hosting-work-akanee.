module.exports = {
  Admins: ["757188572167143464", "UserID"], //Admins of the bot
  DefaultPrefix: ".", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://dsc.gg/patukaran", //Support Server Link
  Token: "ODkwMDkyMDE5MDg5ODAxMjQ2.YUqwyg.iHozQshbyetQYQ41drrPbZ1UgyM" || process.env.Token, //Discord Bot Token
  ClientID: "890092019089801246", //Discord Client ID
  ClientSecret: "DeRu8Pj-nxZtI4kExOv2SqMyDYupFABM", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "bester mann", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/attachments/852566722720038952/890098233295118396/PATUKARAN.png", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: "Main",
    host: "lava.link", 
    port: 80, 
    pass: "nmrpuyir", 
  },
  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: "ce1644e6fe1e43ccb41d23892b8dc5d8", //Spotify Client ID
    ClientSecret: "4b71ce770f5043a1b0563542e215efb0", //Spotify Client Secret
  },
};
//copyright by Mr_Wasp
