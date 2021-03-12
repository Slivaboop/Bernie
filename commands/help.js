module.exports = {
	name: 'help',
	description: 'shitty thing',
	execute(message, args) {
        const Discord = require('discord.js');





  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#1EBF8B')
	.addFields(
	{ name: ':crystal_ball: Комнады для РП :crystal_ball:', value: '**•police [add/remove] [@пинг] [Уровень розыска (Административный, уголовный)] [Причина розыска]** - внести игрока в розыск\n**•board** - увидеть список розыскиваемых игроков\n **•radio set [частота]** - поставить рацию на частоту. Любое число от 10 до 999\n**•radio on [сообщение]** - передать сообщение всем игрокам на частоте\n**•radio off** - выключить рацию\n**•weather** - случайная погода\n**•roll [значение]** - случайное число от 1 до n'},
	)
	

message.channel.send(exampleEmbed);


	},
};