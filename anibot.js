// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

require('dotenv').config();
const { CommandoClient } = require('discord.js-commando');
const { version } = require('./package');
const { MessageEmbed } = require('discord.js');
const verificationLevels = ['None', 'Low', 'Medium', '(╯°□°）╯︵ ┻━┻', '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻']
const explicitContentFilters = ['None', 'Scan messages from those without a role', 'Scan all messages']
const { ANIBOT_PREFIX, ANIBOT_TOKEN, OWNER_ID, LOG_CHANNEL } = process.env;
// Client Settings
const client = new CommandoClient({
    commandPrefix: ANIBOT_PREFIX,
    owner: OWNER_ID,
    disableEveryone: true,
    unknownCommandResponse: false,
    //messageCacheMaxSize	= 50,
    disabledEvents: [
        'typingStart',
        'messageDelete',
        'messageUpdate',
        'userUpdate',
        'voiceStateUpdate',
        'guildMemberSpeaking'
    ]
});

// Command Categories
client.registry
.registerDefaultTypes()
.registerGroups([
	['action', 'Action'],
	['anime', 'Anime'],
	['fun', 'Fun'],
	['core', 'Core'],
	['utility', 'Utility'],
	['owner', 'Hidden + Owner']
])
.registerCommandsIn(__dirname + "/commands");

client.on('reconnecting', () => {
    console.log('I am reconnecting now!');
}).on('resume', () => {
    console.log('Reconnected! I\'m back on track!');
}).on('disconnect', () => {
    console.log('Disconnected from the server... just thought I\'d let you know!');
})

// Events
client.on("ready", () => {
    client.user.setActivity('with you | ~help')

    var channel = client.channels.get(LOG_CHANNEL);
    const embed = new MessageEmbed()
        .setAuthor('Anibot has (re)started!', client.user.displayAvatarURL({ format: 'png' }))
        .setColor('#727293')
        .setDescription(`•\u2000**Commands:** ${client.registry.commands.size}`)
        .setFooter(`v${version}`)
        .setTimestamp();
    channel.send({ embed });

    return console.log(`Anibot is live and ready!`);
});


client.on('guildCreate', guild => {
	var channel = client.channels.get(LOG_CHANNEL);

	const embed = new MessageEmbed()
		.setAuthor(`Added to ${guild.name}!`, guild.iconURL())
		.setDescription(`Server infomation for **${guild.name}**`)
		.setColor('#78AEE8')
		.setThumbnail(guild.iconURL())
		.addField('❯\u2000\Information', `•\u2000\**ID:** ${guild.id}\n\•\u2000\**${guild.owner ? 'Owner' : 'Owner ID'}:** ${guild.owner ? `${guild.owner.user.tag} (${guild.owner.id})` : guild.ownerID}\n\•\u2000\**Region:** ${guild.region}\n\•\u2000\**Verification:** ${verificationLevels[guild.verificationLevel]}\n\•\u2000\**Content Filter:** ${explicitContentFilters[guild.explicitContentFilter]}`)
		.addField('❯\u2000\Miscellaneous', `•\u2000\**Emojis:** ${guild.emojis.size}`, true)
		.setTimestamp()
	return channel.send({ embed });
});

client.on('guildDelete', guild => {
	var channel = client.channels.get(LOG_CHANNEL);

	const embed = new MessageEmbed()
		.setAuthor('Removed from a Server!', guild.iconURL())
		.setColor('#898276')
		.setThumbnail(guild.iconURL())
		.setDescription(`Server infomation for **${guild.name}**`)
		.addField('❯\u2000\Information', `•\u2000\**ID:** ${guild.id}\n\•\u2000\**${guild.owner ? 'Owner' : 'Owner ID'}:** ${guild.owner ? `${guild.owner.user.tag} (${guild.owner.id})` : guild.ownerID}\n\•\u2000\**Region:** ${guild.region}\n\•\u2000\**Verification:** ${verificationLevels[guild.verificationLevel]}\n\•\u2000\**Content Filter:** ${explicitContentFilters[guild.explicitContentFilter]}`)
		.addField('❯\u2000\Miscellaneous', `•\u2000\**Emojis:** ${guild.emojis.size}`, true)
		.setTimestamp()
	return channel.send({ embed });
});

// Basic Message Replies
client.on("message", async message => {
	if(message.author.bot) return undefined;

	if(message.channel.type == "dm") {
		if(message.content.startsWith('~')) return;
		var channel = client.channels.get(LOG_CHANNEL);

		const embed = new MessageEmbed()
			.setAuthor(message.author.tag, message.author.displayAvatarURL())
			.setDescription(message.content)
			.setColor('#D48AD8')
			.setTimestamp();
		return channel.send({ embed });
	}

	if (!message.channel.permissionsFor(client.user.id).has('SEND_MESSAGES')) return undefined;

	if(message.content.toUpperCase().includes('PRESS F')) {
		message.react('🇫');
		return null;
	}

	if(message.content.toUpperCase().includes('NYA')) {
		message.react('🐱');
		return null;
	}

	if(message.content.toUpperCase().includes('BAKA')) {
		message.react('💢');
		return null;
	}

	return null;
});

process.on('unhandledRejection', err => {
	console.error('Uncaught Promise Error! \n' + err.stack);
});

client.login(ANIBOT_TOKEN);