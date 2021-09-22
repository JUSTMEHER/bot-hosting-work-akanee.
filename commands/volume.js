const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

module.exports = {
    name: "volume",
    description: "Changes the Volume",
    usage: "<volume>",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["vol", "v"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        let player = await client.Manager.get(message.guild.id);
        if (!player) return client.sendTime(message.channel, "❌ | **Nothing is Playing Right Now...**");
        if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **You Must Join A Voice Channel To Use This Command.**");
        if (!parseInt(args[0])) return client.sendTime(message.channel, `**Please Choose A Number Between** \`1 - 100\``);
        let vol = parseInt(args[0]);
        player.setVolume(vol);
        client.sendTime(interaction, `🔉 | Patukaran's Volume Set To \`${player.volume}\``);
    },
    SlashCommand: {
        options: [
            {
                name: "number",
                value: "number 1 - 100",
                type: 4,
                required: true,
                description: "What do you want to change the volume to?",
            },
        ],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
        run: async (client, interaction, args, { GuildDB }) => {
            const guild = client.guilds.cache.get(interaction.guild_id);
            const member = guild.members.cache.get(interaction.member.user.id);

            if (!member.voice.channel) return client.sendTime(interaction, "❌ | You Must Join A Voice Channel To Use This Command.");
            if (guild.me.voice.channel && !guild.me.voice.channel.equals(member.voice.channel)) return client.sendTime(interaction, `❌ | You must be in ${guild.me.voice.channel} to use this command.`);
            let player = await client.Manager.get(interaction.guild_id);
            if (!player) return client.sendTime(interaction, "❌ | **Nothing Is Playing Right Now....**");
            if (!args.length) return client.sendTime(interaction, `🔉 | Current volume \`${player.volume}\`.`);
            let vol = parseInt(args[0].value);
            if (!vol || vol < 1 || vol > 100) return client.sendTime(interaction, `**Pls Choose A Number Between** \`1 - 100\``);
            player.setVolume(vol);
            client.sendTime(interaction, `🔉 | Patukaran's Volume Set To \`${player.volume}\``);
        },
    },
};
