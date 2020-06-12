// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const snekfetch = require('snekfetch');

module.exports = class AdviceCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'advice',
            group: 'fun',
            memberName: 'advice',
            guildOnly: true,
            description: 'Get some advice!',
            examples: ['~advice'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    async run(message) {
        var res = await snekfetch.get("http://api.adviceslip.com/advice");
        var advice = JSON.parse(res.body)

        try {
            const embed = new MessageEmbed()
                .setAuthor(`Here's some advice!`)
                .setDescription(advice.slip.advice)
                .setColor('#727684');
            return message.channel.send({ embed });

        } catch (err) {
            return message.channel.send(`Sorry! My API isn't working!`)
        }
    }
}