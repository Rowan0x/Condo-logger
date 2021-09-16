const express = require("express")
const disbut = require('discord-buttons');
const discord = require("discord.js")
const noblox = require("noblox.js")
const client = new discord.Client()
const pog = require('./fetch.js')
pog()

disbut(client);
const app = express()
const port = 9000

app.use(express.json())


//©Hidd3n Utilities 2021

app.listen(
    port,
    () => console.log(`app online`)
)
app.post('/data', async (req, res) => {
    const url = req.body;
    const serverName = req.body;
    
    if(!url){
       return res.send("when impostor is sus")
    }
    if(!serverName){
       return res.send("when impostor is sus")
    }
    

    let log = url.url.split("/");


    await noblox.getPlaceInfo(log[4]).then((res) => {
        const channel = client.channels.cache.find(channel => channel.id === "877955890618175558")

        const embed = new discord.MessageEmbed()

        .setAuthor("Game logged")
        .setDescription("Provided by [Hidd3n Utilities](https://discord.gg/hu5xvSJFWe)") //removing this line will kill 5 children
        .setURL(url.url)
        .setColor('#cf4848')
        .addField('Name', res.Name, true)
        .addField('Players', res.OnlineCount, true)
        .addField('Created at', res.Created, true)
        .addField('Max Players', res.MaxPlayers, true)
        .addField('Banned?', res.IsPlayable, true)
        .addField('Creator Name', res.Builder, true)

        
        const linkbutton = new disbut.MessageButton()
        linkbutton.setStyle("url")
        linkbutton.setLabel("Play")
        linkbutton.setURL(url.url)

        const row = new disbut.MessageActionRow()
        .addComponent([linkbutton])

        channel.send(embed, {component: row})

    })


});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})


client.login("")