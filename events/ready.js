module.exports = async (client) => {
    console.log(`${client.user.username} Online!`);

    client.user.setActivity(client.config.playing);
};