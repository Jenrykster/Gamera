const discord = require("discord.js");
const https = require('https')
const axios  = require('axios')
async function execute(client, message, args) {
    axios.post('https://Gamera.jenrykster.repl.co/messages',{
      message: "Hello World",
      user: message.author.username
    });
    let lat = Math.abs(Date.now() - message.createdTimestamp);
    message.reply(`Pong! ${lat}ms https://giphy.com/gifs/tennis-4IAzyrhy9rkis`);
}

module.exports = {
    name: "ping",
    execute
}
