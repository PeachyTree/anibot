// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { disgustP } = require('../../assets/json/actions.json');

module.exports = class DisgustCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'disgust',
            aliases: ['gross', 'eww'],
            group: 'action',
            memberName: 'disgust',
            guildOnly: true,
            description: 'Absolutely **disgusting**, now which one of you likes handholding?',
            examples: ['~disgust'],
            throttling: {
                usages: 1,
                duration: 5
            }
        });
    }

    run(message) {
        const embed = new MessageEmbed()
            .setColor('#FBCFCF')
            .setImage(disgustP[Math.round(Math.random() * (disgustP.length - 1))]);
        return message.channel.send({ embed });
    }
}