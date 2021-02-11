0//Package Configs:
const fetch = require("node-fetch");
const Discord = require("discord.js");
const fs = require("fs");

//Bot Client:
const client = new Discord.Client();

//Making a new discord collection
client.commands = new Discord.Collection();

//File Configs:
const config = require("./Configs/config.json");
const PREFIX = config.prefix;
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
  const command = require(`./Commands/${file}`)
  client.commands.set(command.name, command);
}

//Bot Status
client.once('ready', () => {
    client.user.setActivity(config.status, { type: config.status_type });
    console.log(`Logged in as ` + `\x1b[34m\x1b[4m${client.user.tag}\x1b[0m`);
});

client.on('message', message => {
  const args = message.content.slice(PREFIX.length).trim().split(/ +/)
  const command = args.shift().toLowerCase();
  
  if(!message.content.startsWith(PREFIX)) return;
  if(!client.commands.has(command)) return;
  
  try{
    client.commands.get(command).execute(client, message, args)
  } catch (error){
    console.error(error)
    const erroremb = new Discord.MessageEmbed()
    .setTitle('Error:')
    .setDescription(`An error happened when trying to run this command. It has been reported to the developers. Here is the info: \n  \```${error}\````)
    .setFooter('ERROR')
    message.channel.send(erroremb);
  }
})

client.login(config.token);