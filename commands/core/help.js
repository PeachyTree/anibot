// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { BOT_INVITE } = process.env;

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            aliases: ['hello', 'hi', 'hey'],
            group: 'core',
            memberName: 'help',
            description: 'Displays basic information or help for a command!',
            examples: ['~help <command>'],
            args: [{
                key: 'command',
                prompt: 'Please provide me a command to search for!',
                type: 'string',
                default: ''
            }]
        });
    }

    run(message, args) {
        const { command } = args;
        const commands = this.client.registry.findCommands(command, false);
        if (command) {

            if (commands.length === 1) {
                const embed = new MessageEmbed()
                    .setAuthor(commands[0].name)
                    .setColor('#727293')
                    .setThumbnail(this.client.user.displayAvatarURL({ format: 'png' }))
                    .setDescription(`${commands[0].description}\n${commands[0].details || ''}`)
                    .addField('__Usage:__', commands[0].examples[0] ? commands[0].examples[0] : '`None`', true)
                    .addField('__Aliases:__', commands[0].aliases.join(', ') || 'None', true)
                    .setFooter(`${commands[0].group.name} | Any message from me can be removed by reacting with a 🎴 emoji!`);
                return message.channel.send({ embed });

            } else if (commands.length > 1) {

                return message.channel.send(`Multiple commands found! \`${commands.map(c => c.name).join(', ')}\``);

            } else {
                const embed = new MessageEmbed()
                    .setAuthor('Anibot')
                    .setUrl(BOT_INVITE)
                    .setColor('#727293')
                    .setThumbnail(this.client.user.displayAvatarURL({ format: 'png' }))
                    .setFooter(`(c) 2020 | Azura Apple#0955`)
                    .setDescription(`Hi! I\'m ${this.client.user.username} and I am a bot based around anime!\n\All my commands start with the prefix "~"!`)
                    .addField(`__Support:__`, `\`~support [message]\``, true)
                    .addField(`__Commands:__`, `Use \`~commands\` to see a list of my commands.\n\You can also use \`~help [command]\` to get help on a specific command.`);
                return message.channel.send(`The command **${command}** was not found!`, { embed: embed });
            }

        } else {
            const embed = new MessageEmbed()
                .setAuthor('Anibot')
                .setColor('#727293')
                .setThumbnail(this.client.user.displayAvatarURL({ format: 'png' }))
                .setFooter(`(c) 2020 | AzuraApple#0955`)
                .setDescription('Hi! I\'m Anibot and I am a bot based around anime!\n\All my commands start with the prefix "~"!')
                .addField(`__Support:__`, `\`~support [message]\``, true)
                .addField(`__Commands:__`, `Use \`~commands\` to see a list of my commands.\n\You can also use \`~help [command]\` to get help on a specific command.`);
            return message.channel.send({ embed });
        }
    };
};