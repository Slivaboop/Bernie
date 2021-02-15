module.exports = {
	name: 'roll',
	description: 'Ping!',
	execute(message, args) {

		
		     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



			 const Discord = require('discord.js');

			 const amount = parseInt(args[0]);
			 if (!args.length || (isNaN(amount))) {
				const error = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
				.setTitle('Ошибка')
				.setDescription('Во время исполнения произошла ошибка.\n Число недействительно')
	
				message.channel.send(error)
				return
			 }

			const roll = new Discord.MessageEmbed()
			.setColor('#C02639')
			.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
	        .setDescription(`:game_die: Вам выпало **${Math.floor(Math.random() * args[0] + 1)}**`)

			message.channel.send(roll)
			
			
				////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





				
	},
};