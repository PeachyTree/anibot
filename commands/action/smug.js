// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.
// Powered by smugs.safe.moe!!

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class SmugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'smug',
            group: 'action',
            memberName: 'smug',
            guildOnly: true,
            description: 'the epitome of arguments: smug anime girls.',
            examples: ['~smug'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    async run(message) {
        var smugID = Math.floor(Math.random() * 58) + 1

        var embed = new MessageEmbed()
            .setColor('#727293')
            .setImage(`http://smug.moe/smg/${smugID}.png`);
        return message.channel.send({ embed });
    }
}