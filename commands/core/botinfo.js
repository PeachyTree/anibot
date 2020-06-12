// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { version } = require('../../package.json');
const { BOT_INVITE } = process.env;

module.exports = class BotInfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'botinfo',
            aliases: ['stats', 'botstats'],
            group: 'core',
            memberName: 'botinfo',
            description: 'Shows some information about the running instance!',
            examples: ['~botinfo'],
            throttling: {
                usages: 1,
                duration: 5
            }
        });
    }

    async run(message) {
        const msg = await message.channel.send(`Fetching bot stats...`)

        const embed = new MessageEmbed()
            .setAuthor(`Anibot v${version}`, this.client.user.displayAvatarURL())
            .setURL(BOT_INVITE)
            .setThumbnail(this.client.user.displayAvatarURL())
            .setColor('#6C70EB')
            .setFooter('Made with ❤ by AzuraApple#0955 using Discord.js and Discord.js-Commando')
            .addField('❯\u2000\Miscellaneous', `•\u2000\**Commands:** ${this.client.registry.commands.size}`, true)
            .addField('❯\u2000\Links', `•\u2000\[GitHub](https://github.com/AzuraApple/anibot/)`)
        return msg.edit('🈯 **Here\'s my current info!**', { embed: embed });
    }
}