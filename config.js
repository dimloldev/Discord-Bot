module.exports = {
        TOKEN: 'HERE GOES YOUR TOKEN!',
        px: '!',
        playing: '',

    opt: {
        DJ:{
            enabled: false,
            roleName: 'DJ',
            commands: ['loop', 'pause', 'resume', 'skip', 'leave', 'volume']
        },
        maxVol: 1000,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
