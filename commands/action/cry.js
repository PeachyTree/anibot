// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { cryP } = require('../../assets/json/actions.json');

module.exports = class CryCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cry',
            aliases: ['sob', 'waa'],
            group: 'action',
            memberName: 'cry',
            guildOnly: true,
            description: 'UWAA~',
            examples: ['~cry'],
            throttling: {
                usages: 1,
                duration: 5
            }
        });
    }

    run(message) {
        const embed = new MessageEmbed()
            .setColor('#FBCFCF')
            .setImage(cryP[Math.round(Math.random() * (cryP.length - 1))]);
        return message.channel.send(`${message.author} has started crying!`, { embed: embed });
    }
}