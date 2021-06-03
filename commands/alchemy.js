module.exports = {
	name: 'alchemy',
	description: 'shitty thing',
	async execute(message, args) {
        const Discord = require('discord.js');
        const fs = require('fs');
        const result = require("../potions.json")
        

        const Filter = (reaction, user) => user.id == message.author.id;


 const first = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTitle('Алхимические приколы')
            .setDescription('Над котлом поднялся пар, а вы понимаете, что стоит начать вашу работу.\nЧто же стоит добавить?')

           

            const reactionmessage = await message.channel.send(first)
		   
		 reactionmessage.react("🌹") // 1
		 reactionmessage.react("🥀") // 2
		 reactionmessage.react("🧂") // 3

         // reactionmessage.react("🥕") // 4
		//  reactionmessage.react("🐇") // 5
		 // reactionmessage.react("💎") // 6


         // 🌹 + 🥕 = ночное зрение 14
         // 🌹 + 🐇 = Зелье прыгучести 15
         // 🌹 + 💎 = огнестойкость 16

         // 🌹 + 🥀 // самогон) 12
         // 🥀 + 🧂 // - 23
         // 🌹 + 🧂  // невидимость 13

         // 🥀 + 🥕 = скорость 24
         // 🥀 + 🐇 = подводное дыхание 25
         // 🥀 + 💎 = лечение 26

         // 🧂 + 🥕 = отравление 34
         // 🧂 + 🐇 = сила 35
         // 🧂 + 💎 = слабость 36



		
      await   reactionmessage.awaitReactions(Filter, {max: 1, time: 90000, errors: ["time"]}).then(collected => {
		
			const reaction = collected.first();

			 switch (reaction.emoji.name) {
				case "🌹":

               global.a = "1"
               global.emodji1 = "🌹"

                break



                case "🥀":
                    global.a = "2"
                    global.emodji1 = "🥀"
                break



                case "🧂":
                    global.a = "3"
                    global.emodji1 = "🧂"
                break

          
            }

        })
        const second = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
        .setTitle('Алхимические приколы')
        .setDescription(`Отлично! Первый ингредиент добавлен!\n${emodji1} + ... = ...`)
       var reactionmessage1 = await reactionmessage.edit(second)

        reactionmessage1.react("🥕") // 4
		reactionmessage1.react("🐇") // 5
		reactionmessage1.react("💎") // 6

       await   reactionmessage1.awaitReactions(Filter, {max: 1, time: 90000, errors: ["time"]}).then(collected => {
		
        const reaction = collected.first();

         switch (reaction.emoji.name) {
            case "🥕":

           global.b = "4"
           global.emodji2 = "🥕"

            break



            case "🐇":
                global.b = "5"
                global.emodji2 = "🐇"
            break



            case "💎":
                global.b = "6"
                global.emodji2 = "💎"
            break

            case "🌹":

                global.b = "1"
                global.emodji2 = "🌹"
 
                 break
 
 
 
                 case "🥀":
                     global.b = "2"
                     global.emodji2 = "🥀"
                 break
 
 
 
                 case "🧂":
                     global.b = "3"
                     global.emodji2 = "🧂"
                 break

            

      
        }

    })
 // var legtitle = `**🌟ЛЕГЕНДАРНОЕ🌟** ${result[c].name}`

     var c = a+b
    var leg = Math.floor(Math.random() * 11)
    if (leg > 8) { 
        if (c==12) {
            var legtitle = "**🌟ЛЕГЕНДАРНОЕ🌟** зелье.. а нет, это качественный самогон"
        } else {
            var legtitle = `**🌟ЛЕГЕНДАРНОЕ🌟** ${result[c].name}`
        }
   
    } else {
        var legtitle = `${result[c].name}`
    }
    console.log(leg)
    const third = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
    .setTitle('Алхимические приколы')
    .setDescription(`Второй ингредиент добавлен. Котел закипел..\nВнезапно жидкость меняет свой окрас, и Вы получаете ${legtitle}\n${emodji1} + ${emodji2} = **${result[c].name}**`)
    var reactionmessage1 = await reactionmessage.edit(third)
  
    
        
        

	},
};