module.exports = {
	name: 'radio',
	description: 'shitty thing',
	async execute(message, args) {
        const Discord = require("discord.js");
        const wave = require("../waves.json"); 
       
        const fs = require('fs');
        const path = require('path');
        const prefix = require("../config.json")
      
      

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

       if (args[0] === 'off') { 


wave[message.author.id] = { 
  guild: message.guild.id,
  currentwave: 0
};


fs.writeFileSync(path.resolve(__dirname, '../waves.json'), JSON.stringify(wave));



       }


       if (args[0] === 'set') { 

  

       wave[message.author.id] = { 
        guild: message.guild.id,
        currentwave: args[1]
      };



      fs.writeFileSync(path.resolve(__dirname, '../waves.json'), JSON.stringify(wave));


    }


    if (args[0] === 'on') { 
      const currentwave = require("../waves.json")
      let filter = m => m.author.id === message.author.id


    var nexta = wave[message.author.id].currentwave

    if (nexta > 9 && nexta < 99) { 

      const radioembed = new Discord.MessageEmbed()
      .setColor('#1EBF8B')
      .setThumbnail('https://media4.giphy.com/media/BJbt45dI6C2xSsL26n/giphy.gif')
      .addFields(
      { name: `Ваша текущая волна: ${nexta}`, value: `    ${nexta-10}    ‌‌‍‍    ‌‌‍‍${nexta-5}    ‌‌‍‍    ‌‌‍‍${nexta}\n ∎⋯⋯⋯⋯⋯∎⋯⋯⋯⋯⋯∎\n             ▲ ` },
      { name: "Вас все слышат!", value:"**Передавайте сообщение!**"}
      )
      message.channel.send(radioembed)

      await message.channel.awaitMessages(filter, {
        max: 1,
        time: 1000 * 60 * 60 * 2,
        errors: ['time']
      }).then(message => {
        message = message.first()
        newmessage = message.content.trim()
    })
  
        
  
        await message.guild.members.cache.forEach( (member) => {
          if (!wave[member.id]) return
          if(message.author.id === member.id) return
          if(wave[member.id].currentwave === wave[message.author.id].currentwave) {
              member.send(`**Рация:** ${newmessage}`); 
              message.react("✅")
              console.log(wave[member.id].currentwave)
          }
      })

      } else if (nexta > 99 && nexta < 999) {

        const radioembed = new Discord.MessageEmbed()
        .setColor('#1EBF8B')
        .setThumbnail('https://media4.giphy.com/media/BJbt45dI6C2xSsL26n/giphy.gif')
        .addFields(
        { name: `Ваша текущая волна: ${nexta}`, value: `${nexta-10}   ${nexta-5}   ‌‌‌‍‍‌‌‍‍${nexta}\n ∎⋯⋯⋯⋯⋯∎⋯⋯⋯⋯⋯∎\n             ▲ ` },
        { name: "Вас все слышат!", value:"**Передавайте сообщение!**"}
        )
        message.channel.send(radioembed)

        await message.channel.awaitMessages(filter, {
          max: 1,
          time: 1000 * 60 * 60 * 2,
          errors: ['time']
        }).then(message => {
          message = message.first()
          newmessage = message.content.trim()
      })
    
          
    
          await message.guild.members.cache.forEach( (member) => {
            if (!wave[member.id]) return
            if(message.author.id === member.id) return
            if(wave[member.id].currentwave === wave[message.author.id].currentwave) {
              member.send(`**Рация:** ${newmessage}`);  
              message.react("✅")
                console.log(wave[member.id].currentwave)
            }
        })

      }



   

    }

	},
};