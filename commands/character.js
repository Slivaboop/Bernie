module.exports = {
	name: 'hero',
	description: 'shitty thing',
	async execute(message, args) {
        const fs = require('fs');
        const Discord = require('discord.js');
        const client = new Discord.Client();
        let everyone = message.guild.roles.cache.find(r => r.name === "@everyone");
        const characterdata = require(`./characterbase.json`)
        const heroes = require(`./characterbase.json`)
if (args[0] === 'add') {




const NameEmbed = new Discord.MessageEmbed()
	.setColor('#1EBF8B')
	.addFields(
	{ name: `Введите имя персонажа`, value: `Формат: **Имя** **Фамилия**\nПишите, пожалуйста, аккуратно.` },
	)




    const Ageembed = new Discord.MessageEmbed()
	.setColor('#1EBF8B')
	.addFields(
	{ name: `Введите возраст персонажа`, value: `Формат: **Возраст**\nПишите, пожалуйста, аккуратно.` },
	)
    

    const Raceembed = new Discord.MessageEmbed()
	.setColor('#1EBF8B')
	.addFields(
	{ name: `Введите расу персонажа`, value: `Формат: **Раса**\nПишите, пожалуйста, аккуратно.` },
	)


    const bioembed = new Discord.MessageEmbed()
	.setColor('#1EBF8B')
	.addFields(
	{ name: `Введите биографию персонажа`, value: `Формат: **...**\nПишите, пожалуйста, аккуратно. Этот тект пойдет полностью.` },
	)


    const linkembed = new Discord.MessageEmbed()
	.setColor('#1EBF8B')
	.addFields(
	{ name: `Введите ссылку на изображение персонажа`, value: `Формат: **http://..**\nПишите, пожалуйста, аккуратно. Неверно введенная ссылка может испорить все!` },
	)


  

  




 const createdchannel = await message.guild.channels.create(`${message.author.username}`, {
        type: 'text',
        permissionOverwrites: [
           {
             id: everyone.id,
             deny: ['VIEW_CHANNEL'],
          },
          {
              id: message.author.id,
              allow: ['VIEW_CHANNEL']
          }
        ],
      }) 
   
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     let filter = m => m.author.id === message.author.id
     createdchannel.send(`<@${message.author.id}>`);

      createdchannel.send(NameEmbed);
   


      await createdchannel.awaitMessages(filter, {
        max: 1,
        time: 1000 * 60 * 60 * 2,
        errors: ['time']
      }).then(message => {
          message = message.first()
          let uargs = message.content.trim().split(/ +/);
          Name = uargs[0]
          Surname = uargs[1]
          if (!Surname) {
              Surname = message.author.id
          }
      })

      await createdchannel.send(Ageembed)
      await createdchannel.awaitMessages(filter, {
        max: 1,
        time: 1000 * 60 * 60 * 2,
        errors: ['time']
      }).then(message => {
          message = message.first()
          let uargs = message.content.trim().split(/ +/);
          Age = uargs[0]
      })

      await createdchannel.send(Raceembed)
      await createdchannel.awaitMessages(filter, {
        max: 1,
        time: 1000 * 60 * 60 * 2,
        errors: ['time']
      }).then(message => {
          message = message.first()
          let uargs = message.content.trim().split(/ +/);
          Race = uargs[0]
      })

      await createdchannel.send(bioembed)
      await createdchannel.awaitMessages(filter, {
        max: 1,
        time: 1000 * 60 * 60 * 2,
        errors: ['time']
      }).then(message => {
          message = message.first()
          Bio = message.content.trim()
      })

      await createdchannel.send(linkembed)
      await createdchannel.awaitMessages(filter, {
        max: 1,
        time: 1000 * 60 * 60 * 2,
        errors: ['time']
      }).then(message => {
          message = message.first()
          
          Link = message.content.trim()
      })
      console.log(Name, Surname,Age, Race, Bio, Link)

      if (heroes[message.author.id] || !heroes[message.author.id]) { 
    
        heroes[message.author.id] = {
          name: Name,
          surname: Surname,
          age: Age,
          race: Race,
          bio: Bio,
          link: Link,
          Author: message.author.id
    
      }
        try {
          fs.writeFileSync(`./characterbase.json`, JSON.stringify(heroes));
          console.log('ЗАПИСАНО');
        } catch(err) {
          console.error('ЗАПИСАНО');
        }
      
    
    } 
    await createdchannel.delete();

} else if (args[0] === 'find') {


    var profile = message.mentions.users.first().id
    
    if (!profile) profile = message.author.id

    if (!heroes[profile]) {
      message.channel.send('Персонаж не найден!')
      return
    } else { 

      const characterembed = new Discord.MessageEmbed()
	.setColor('#1EBF8B')
  .setTitle(`Персонаж:`)
  .setAuthor(message.mentions.users.first().username)
  .setDescription('А вот так вот')
	.addFields(
	{ name: `Имя:`, value: `${heroes[message.mentions.users.first().id].name}` },
  { name: `Фамилия:`, value: `${heroes[message.mentions.users.first().id].surname}` },
  { name: `Возраст:`, value: `${heroes[message.mentions.users.first().id].age}` },
  { name: `Раса:`, value: `${heroes[message.mentions.users.first().id].race}` },
  { name: `Автор:`, value: `${message.mentions.users.first().username}` },
 )
  .setImage(`${heroes[message.mentions.users.first().id].link}`)
    
    console.log(profile)
    message.channel.send(characterembed);
    message.channel.send(` ``Биография:`` ${heroes[profile].bio}`)


 

}



} else if (args[0] === 'delete') {
  if (!heroes[message.author.id]) {
    message.channel.send('У вас нет действующих персонажей!')
  } else { 
delete heroes[message.author.id]
return
  }
}

	},
};