module.exports = {
  name:'ty',
  description:'Thanks for using the NPM package!',
  
  execute(client, message, args){
    message.channel.send({
      embed:{
        color:'RANDOM',
        description:`Thanks for using our package! Have a nice day.`
      }
    })
  }
}