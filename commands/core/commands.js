// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class CommandsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'commands',
            aliases: ['command', 'cmds', 'cmd'],
            group: 'core',
            memberName: 'commands',
            description: 'Sends a list of all commands!',
            details: 'For additional command info use \`~help [command]\`.',
            examples: ['~commands'],
            throttling: {
                usages: 1,
                duration: 10
            }
        });
    };

    async run(message) {
        const embed = new MessageEmbed()
            .setAuthor("**Commands**")
            .setDescription(`Use \`~help [command]\` for more details.`)
            .setColor('#72729')
            .setThumbnail(this.client.user.displayAvatarURL({ format: 'png' }))
            .setFooter(`${this.client.registry.commands.size} Total`)
            .addField("__Action:__", "`cry` `digust` `grope` `hand` `hug` `kiss` `lewd` `nobully` `noswearing` `pat` `slap` `smug` `wasted` `wink`", true)
            .addField("__Anime:__", "`anime` `booru` `manga` `moe` `tsundere` `waifu`", true)
            .addField("__Core:__", "`botinfo` `commands` `help` `invite` `ping` `support` `uptime`", true)
            .addField("__Fun:__", "`8ball` `advice` `fortune` `garfield` `giphy` `horoscope` `kaomoji` `meme` `mock` `pickup` `rate` `rightthere`")
            .addField("__Utility:__", "`avatar` `color` `github` `jisho` `math` `say` `steam` `urban`", true)
        message.channel.send({ embed: embed });
    }
}