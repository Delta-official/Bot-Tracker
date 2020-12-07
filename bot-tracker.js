const Discord = require("discord.js")
const kBot_ID = "782297343827378216"
const kServer_ID = "777175140647174154"
const kLog_Channel_ID = "782960870337544212"

const client = new Discord.Client()

client.on("ready", () => {
    console.log("Bot-Tracker is online!")
})

client.on("presenceUpdate", (oldPresence, newPresence) => {
    if(newPresence.user.id === kBot_ID) {
        console.log("Check 2 passed")
    if(newPresence.guild.id === kServer_ID) {
        console.log("Check 3 passed")
        if (newPresence.status === "online") {
            console.log(`K-bot is ${kBot_ID.newPresence.status}!`)
            botOnline()
        } else if(newPresence.status === "offline") {
            console.log(`K-bot is ${kBot_ID.newPresence.status}!`)
            botOffline()
        }
    }
}
});

function botOnline() {
    client.guild.channels.id.get(kLog_Channel_ID).send("<@508632222245322793> Bot is online!")
}
function botOffline() {
    client.guild.channels.id.get(kLog_Channel_ID).send("<@508632222245322793> Bot is offline")
}

client.login(process.env.token)