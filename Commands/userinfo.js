const Discord = require('discord.js');

module.exports = {
  name:'userinfo',
  description:'Give all the information about a user',
  
  execute(client, message, args){
    const member = message.mentions.users.first()
    
    if(!member){
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}'s information`)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor('RANDOM')
    .addField('Username with tag', `${message.author.tag}`)
    .addField('User ID', `${message.author.id}`)
    .addField('Created', message.author.createdAt.toLocaleString(), true)
    .addField('User is a Bot or Not a bot', `${message.author.bot}`)
    .addField('User default avatar URL', `${message.author.defaultAvatarURL}`)
    .addField('User\'s last message', `${message.author.lastMessage}` )
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
    
    message.channel.send(embed)
      return
  }
    if(member){
    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.username}'s information`)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor('RANDOM')
    .addField('Username with tag', `${member.tag}`)
    .addField('User ID', `${member.id}`)
    .addField('Created', member.createdAt.toLocaleString(), true)
    .addField('User is a Bot or Not a bot', `${member.bot}`)
    .addField('User default avatar URL', `${member.defaultAvatarURL}`)
    .addField('User\'s last message', `${member.lastMessage}` )
    .setTimestamp()
    .setFooter(member.username, member.avatarURL);
    
    message.channel.send(embed)
      return
  }
  }
}