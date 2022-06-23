//initialazing bot and declaring itents
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 

const fetch = require("node-fetch") //adding api

//api fuction
function getMap() { 
  return fetch("https://api.mozambiquehe.re/maprotation?auth=2c496202bca67e44cff23a294f5cc964")
  .then(res => {
    return res.json()
  })
  .then(data => {
    return data [0] ["map"]
  })
}

//making the bot online
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
} )

client.on("message", msg => {
  if (msg.author.bot) return
  
  if (msg.content === "#map") {
    getMap().then(map => msg.channel.send(map))
  }
})

const mySecret = process.env['TOKEN']
client.login(process.env.TOKEN)