const fetch = require("node-fetch")
const discord = require('discord.js-selfbot-v11')
const client = new discord.Client()
const noblox = require("noblox.js")
async function go(){
    client.login("") // ACCOUNT TOKEN NOT >BOT TOKEN

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}`)
    })
    
    client.on('message', async boba => {
        if (boba.author.bot) return;
            if(boba.content.includes("https://www.roblox.com/games/")){
                const string = boba.content;
                var match = string.match(/\bhttps?:\/\/\S+/gi);
                var string2 = match[0]
                let log = string2.split("/");
                console.log(log[4])
    
                const data = `{"url": "${match}", "serverName": "${boba.guild.name}"}`
    
                fetch('http://localhost:9000/data', {
                    method: 'post',
                    body: data,
                    headers: {'Content-Type': 'application/json'}
                })
        }
    
    })
}

module.exports = go;

