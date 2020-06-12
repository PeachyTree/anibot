# anibot
A Discord Bot using the discord.js-commando framework with heavy focus on Anime. 

## Filling out the .env.example file
*Note: Remove the .example part when you're done.*

### Bot-related Information:
* `ANIBOT_TOKEN=` Is the token of the bot. You can get it [here](https://discord.com/developers/applications/).
* `ANIBOT_PREFIX=` is the prefix of the bot. You can change it to anything you want. Default is ~
* `OWNER_ID=` is the ID of the Bot Owner. As example your ID.
* `BOT_INVITE=` is an invite link for the bot. Not just the code, the entire thing. Example: `https://discord.com/oauth2/authorize?client_id=0000000000000006&scope=bot&permissions=0000000`

### API KEYS, Secrets, and more:
* `GIPHY_KEY=` can be obtained by going to the [Giphy API](https://developers.giphy.com/).

### Channel IDs:
*Note: Those are optional. If you don't want to use them, remove them from the files they're used in, and use `message.channel.send` instead `channel.send` (this also applies just in the files they are used in).*

* `LOG_CHANNEL=` channel ID for logging. Such as bot starting up, whenever the bot joins/leaves a server etc.
* `SUPPORT_CHANNEL=` channel ID for the `support` command.

## License
See more Information in `LICENSE`.
