module.exports = {
	name: 'map',
	description: 'shitty thing',
	async execute(message, args) {
        const Discord = require('discord.js');
        const fs = require('fs');
       

        const Filter = (reaction, user) => user.id == message.author.id;


 const first = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTitle('🗺️ Карта местности 🗺️')
            .setDescription('Выберите карту, которую хотите увидить:\n🗺️ - **Карта мира**\n❄️ - **Нирд**\n🌆 - **Лоуарч**\n 🐟 - **Ноттер Таун**')

            const reactionmessage = await message.channel.send(first)

            reactionmessage.react("🗺️") 
            reactionmessage.react("❄️") 
            reactionmessage.react("🌆") 
            reactionmessage.react("🐟") 

            await   reactionmessage.awaitReactions(Filter, {max: 1, time: 90000, errors: ["time"]}).then(collected => {
		
                const reaction = collected.first();
    
                 switch (reaction.emoji.name) {
                    case "🗺️":
                   global.a = "https://i.ibb.co/rphGnvr/Vitahion.png"
                   global.b = "Карта мира"

                    break
                    case "❄️":
                        global.a = "https://i.ibb.co/0c8cWVS/nird.png"
                        global.b = "**Великая, но довольно малая крепость Чарии:**\nНирд — город-крепость на севере Чарии, также один из самых древних городов. У этого города большая история: он был заложен ещё до завоеваний орков, после них он был разрешен на 91%, а потом отстроен. С приходом отца действующего короля город начал развиваться по полной: там строились казармы, возводились стены; был построен так называемый продовольственный путь **Ноттер-Нирд**, который обеспечивал крепости и её воинам пропитание. В Городе работают и сбывают свой товар дворфы, делая на этом большие деньги. Город расположен на холме. На его верху находиться замок, окружённый стенами; ниже идёт сам город, который тоже окружён стенами; следом идёт зона, где находятся тренировочные полигоны солдат и дома самых бедных слоёв населения. И всё это тоже окружено стенами. Все стены - каменные и сделанные на века. Нападение на этот город - самоубийство, но иногда такие армии смельчаков находятся, но их судьба очень печальна."
                       
                    break
                    case "🌆":
                        global.a = "https://i.ibb.co/0nbwC6R/lowarch.png"
                        global.b = "Все дороги когда- то вели в Ловарс. А сегодня они ведут всё так же в великий Ловрач.\n Великая область - самое населённое место, если не в мире, то в нашем пресном королевстве. Здесь ты свободен, здесь ты - часть общество. Наше основное занятие кончено же торговля. Чем мы торгуем? Лучшими мечами в мире, печатными книгами, картинами, и другим искусством и так далее. Нашими землями правит король Де Сантоа, замок которого, кстати, тоже находится здесь. А помогают ему в правление верные дома и лорды. Одни обеспечивают нам мир, а другие – торговлю. Здесь находится столица нашего Королевства- прекрасный град Ловрач. Огромная башня смотрят прямо в небо, а великие люди заправляют нами, смотря из окон этих башен. Тебе повезло, если ты родился здесь, ибо великий принимает в свои объятиях всех своих детей.\n**Из повести неизвестного мейстера**"
                      
                    break
                    case "🐟":
                        global.a = "https://i.ibb.co/NFMQx2F/notter-town.png"
                        global.b = "**Продовольственный город-центр Чарии:**\nНоттер — продовольственный центр Чарии. Он не имеет стен, но в округе стоят башни смотрителей с большими кострами. В случае приближении врага костры зажигают, и таким образом город узнаёт о нападении. Относительно рядом с городом находиться множество деревень, где живёт ещё больше фермеров. Периодически огромные поля разделяют дороги не только для поставок части продовольствия в город, а также для путников и торговцев. Действия настоящего управляющего городом делают так, что все безработные могут пойти работать на фермы и заработать там немного, но всё же денег."
                      
                    break
    
              
                }

                


    
            })

            const second = await new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                .setTitle('🗺️ Карта местности 🗺️')
                .setDescription(`${global.b}`)
                .setImage(`${global.a}`)

                var reactionmessage1 = await reactionmessage.edit(second)

	},
};