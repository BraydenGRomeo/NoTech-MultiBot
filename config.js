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
})

 client.login("paste your token here")
