module.exports = {
	name: 'post',
	description: 'shitty thing',
	execute(message, args) {
        const Discord = require('discord.js');

let MSG = message.content.split(`!post `).join("");
message.channel.bulkDelete(1, true)



  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#1EBF8B')
	.addFields(
	{ name: "``" + args[0] + "`` :newspaper:", value: `${MSG}\n\nАвтор: <@${message.author.id}>` },
	)
	

message.channel.send(exampleEmbed);


	},
};