module.exports = {
	name: 'board',
	description: 'shitty thing',
	execute(message, args) {
        const Discord = require('discord.js');
		const oldWarns = require('../warn.json')
        const fs = require('fs');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let newWarns = Object.keys(oldWarns).map((e) => ({
    id: e,
    warns: oldWarns[e].warns,
    reason: oldWarns[e].reason,
	guild: oldWarns[e].guild
  }))

const items = newWarns.filter(e => e.guild === message.guild.id)
console.log(message.guild.id)

  const warnBoard = new Discord.MessageEmbed()
  .setTitle("Государственный розыск")
  .setColor("#FF0000")
  .addFields(items.flatMap((e, i) => ( // flatMap will delete all the [] of the array after mapping it
    i >= 25 ? [] : { 
      name: "•",
      value: '[:performing_arts:] Имя: <@' + message.guild.members.cache.get(e.id) + '>\n' + '[:small_red_triangle:] Уровень розыска: ' + e.warns + '\n[:o:] Причина:' + e.reason,
      inline: true 
    }
  )))
  message.channel.send(warnBoard)

	},
};