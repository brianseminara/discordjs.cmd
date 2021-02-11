module.exports = {
  name:'ping',
  description:'Give a ping to the user',
  
  execute(client, message, args){
    message.channel.send({
      embed:{
        color:'GREEN',
        description:`Pong!...${client.ws.ping}`
      }
    })
  }
}