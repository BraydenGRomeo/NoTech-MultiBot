let Discord = require("discord.js")
let client = new Discord.Client()

console.log('Booting up....')
console.log('Successfully Booted!')

if(message.content.toLowerCase() === "Insert here") {
let role = message.guild.roles.cache.find(role => role.name === "the name of the role")
message.member.roles.add(role)
}
if (message.content === 'Insert here') {
 message.reply(message.author.id());
}
if(message.content.startsWith("command here")) {
 const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('Provide a user!')
if(!whattosend[1]) return message.channel.send('what to send')
member.send(whattosend.slice(1).join(" "))
}
if(message.content.startsWith("badword here")) {
message.delete()
message.channel.send("bots reply")
}



})

 client.login("paste your token here")
