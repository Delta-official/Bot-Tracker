const Discord = require("discord.js")
const kBot_ID = "782297343827378216"
const kServer_ID = "777175140647174154"

const client = new Discord.Client()

client.on("ready", () => {
    console.log("Bot-Tracker is online!")
})

client.on("presenceUpdate", (oldPresence, newPresence) => {
    if(newPresence.user.id === KBot_ID) {
        if(newPresence.server.id === kServer_ID) {
            if (oldPresence.status !== newPresence.status) {
                if(newPresence.status === "online") {
                    client.guild.channels.id.get("782960870337544212").send("<@508632222245322793> Bot is online!")
                }
                if(newPresence.status === "offline") {
                    client.guild.channels.id.get("782960870337544212").send("<@508632222245322793> Bot is offline")
                }
            }
        }
    }
});

client.login(process.env.token)