module.exports = {
        TOKEN: 'OTM4MjQxMzUxMjY1NDIzNDAw.G5ezcQ.p-RalpHGY_GK60fmRTAR2G0S0Zvns2nqSI6P3I',
        px: '!',
        playing: 'Madona in X-Factor!',

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