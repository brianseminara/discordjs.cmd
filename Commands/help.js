module.exports = {
  name:'help',
  description:'Help command',
  
  execute(client, message, args){
    message.channel.send({
      embed:{
        color:'RANDOM',
        title:'Help Command:',
        description:"**Help command:** \n `dj-creators` \n `dj-ping` \n `dj-ty` \n `dj-serverinfo` \n `dj-userinfo`",
        footer:'Help Command'
      }
    })
  }
}