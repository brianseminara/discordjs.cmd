const Discord = require('discord.js');

module.exports = {
  name:'serverinfo',
  description:'Give all the information abot the server',
  
  execute(client, message, args){
    const embed = new Discord.MessageEmbed()
  .setTitle(`${message.guild.name}'s information`)
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor("RANDOM")
  .setDescription(`Owner: ${message.guild.owner}`)
  .addField('Member Count', `${message.guild.memberCount}`)
  .addField('AFK Timeout', `${message.guild.afkTimeout / 60} minutes`, true)
  .addField('AFK Channel', `${message.guild.afkChannelID === null ? 'No AFK Channel' : client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`, true)
  .addField('Location', message.guild.region, true)
  .addField('Created', message.guild.createdAt.toLocaleString(), true)
  .setTimestamp()
  .setFooter(client.user.username, client.user.avatarURL);
    
    message.channel.send(embed)
  }
}