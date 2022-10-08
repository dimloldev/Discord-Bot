module.exports = {
    name: 'leave',
    aliases: ['st'],
    utilisation: '{prefix}leave',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, There is no music currently playing!. ❌`);

        queue.destroy();

        message.channel.send(`Leaving!👍`);
    },
};