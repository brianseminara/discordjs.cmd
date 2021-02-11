module.exports = {
  name:'creators',
  description:'Mentions the creators',
  
  execute(client, message, args){
    message.channel.send({
      embed:{
        color:'FF0000',
        title: 'discordjs-cmd Developers:',
        description:`<@581855280770580490> & <@726481895961002065> & <@769133415118798848>`
      }
    })
  }
}