// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { lewdP } = require('../../assets/json/actions.json');

module.exports = class LewdCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lewd',
            aliases: ['thatslewd'],
            group: 'action',
            memberName: 'lewd',
            guildOnly: true,
            description: 'That\'s lewd!',
            examples: ['~lewd'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    run(message) {
        const embed = new MessageEmbed()
            .setColor('#FBCFCF')
            .setImage(lewdP[Math.round(Math.random() * (lewdP.length - 1))]);
        return message.channel.send('L-Lewd!', { embed: embed });
    }
}