module.exports = {
	name: 'weather',
	description: 'shows the weather',
	execute(message, args) {
        const Discord = require('discord.js');

        if(!message.member.permissions.has("MANAGE_MESSAGES")) {


            const error = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTitle('Ошибка')
            .setDescription('Во время исполнения произошла ошибка.\n Недостаточно прав')

            message.channel.send(error)
            return


        }
        else {
          if (args[0] === 'start') {
            global.intervalid = setInterval(()=>{
            


            var temp = Math.floor(Math.random()*20 - 10) 

            if (temp > 0) {
              var name = new Array( // Объявление массива name и занесение в него большого количества имён
                'Дождь',
                'Дождь с грозой',
                'Проливной дождь',
                'Ветер',
                'Гроза',
                'Град',
                'Дождь с градом',
                'Пасмурно',
                'Солечно',
                'Солечно',
                'Переменная облачность',
                'Облачно',
                'Туман'
          
                
            
            );
            } else {
              var name = new Array( // Объявление массива name и занесение в него большого количества имён
                'Ветер',
                'Град',
                'Пасмурно',
                'Солечно',
                'Переменная облачность',
                'Облачно',
                'Туман',
                'Снег',
                'Изморозь',
                'Снежная буря'
          
                
            
            );
            }
          
          
          var osad = name[Math.floor(Math.random()*(name.length))];
          var veter = Math.floor(Math.random()*14)
          var vlvoz = Math.floor(Math.random()*98)
          if (vlvoz < 50) {
            vlvoz = vlvoz + 50
          }


          const weather = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
          .setTitle('Погода на день:')
          .setThumbnail('https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/weather-icon.png')
          .addFields(
            { name: 'Температура воздуха:', value: `${temp}°С` },
            { name: 'Ветер:', value: `${veter} м/с` },
            { name: 'Погода на день:', value: `${osad}`, inline: true },
            { name: 'Влажность воздуха:', value: `${vlvoz}%`, inline: true },
        )
 
             
              message.channel.send(weather); // the `TextChannel` class
            },1000*60*60*24) // setting the time to 24 hours in ms


          }

        
        if (args[0] === 'break') {
          clearInterval(global.intervalid);
          console.log("ОСТАНОВЛЕНО!")
        }
        if (args[0] === 'once') {



          var temp = Math.floor(Math.random()*20 - 10) 
          
          if (temp > 0) {
            var name = new Array( // Объявление массива name и занесение в него большого количества имён
              'Дождь',
              'Дождь с грозой',
              'Проливной дождь',
              'Ветер',
              'Гроза',
              'Град',
              'Дождь с градом',
              'Пасмурно',
              'Солечно',
              'Солечно',
              'Переменная облачность',
              'Облачно',
              'Туман'
        
              
          
          );
          } else {
            var name = new Array( // Объявление массива name и занесение в него большого количества имён
              'Ветер',
              'Град',
              'Пасмурно',
              'Солечно',
              'Переменная облачность',
              'Облачно',
              'Туман',
              'Снег',
              'Изморозь',
              'Снежная буря'
        
              
          
          );
          }

          var osad = name[Math.floor(Math.random()*(name.length))];
          var veter = Math.floor(Math.random()*14)
          var vlvoz = Math.floor(Math.random()*98)
          if (vlvoz < 50) {
            vlvoz = vlvoz + 50
          }


          const weather = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
          .setTitle('Погода на день:')
          .setThumbnail('https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/weather-icon.png')
          .addFields(
            { name: 'Температура воздуха:', value: `${temp}°С` },
            { name: 'Ветер:', value: `${veter} м/с` },
            { name: 'Погода на день:', value: `${osad}`, inline: true },
            { name: 'Влажность воздуха:', value: `${vlvoz}%`, inline: true },
        )

        message.channel.send(weather)

          
          console.log("ОСТАНОВЛЕНО!")
        }
      }
				
	},
};