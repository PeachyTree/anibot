// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fortune = require('../../assets/json/fortune.json');

module.exports = class FortuneCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fortune',
            aliases: ['ft', 'fortunecookie'],
            group: 'fun',
            memberName: 'fortune',
            guildOnly: true,
            description: 'Get a random fortune!',
            examples: ['~fortune'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    run(message) {
        const embed = new MessageEmbed()
            .setAuthor(`${message.author.username}'s fortune`)
            .setDescription(fortune[Math.round(Math.random() * (fortune.length - 1))])
            .setColor('#FAC193');
        return message.channel.send({ embed });
    }
}