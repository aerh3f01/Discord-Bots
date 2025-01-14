import { Events, ActivityType } from 'discord.js';

export const event = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready as: ${client.user.tag}`);
        
        // Get all guilds the bot is part of and sort them by member count
        const guilds = client.guilds.cache;
        const tabData = guilds.map(guild => ({
            name: guild.name,
            id: guild.id,
            memberCount: guild.memberCount,
        }));
        tabData.sort((a, b) => b.memberCount - a.memberCount);
        
        // Log guilds info in a table format
        console.table(tabData, ['name', 'id', 'memberCount']);
        
        // Set the bot's presence (activity and status)
        /*
        The avaliable status are:
        - Playing
        - Streaming
        - Listening
        - Watching
        - Custom
        - Competing

        Example:
            
            client.user.setPresence({
                activities: [{ name: 'Coding a Discord bot', type: ActivityType.Custom }],
                status: 'online',
            });
        
            */

        client.user.setPresence({
            activities: [{ name: `the highs and lows! `, type: ActivityType.Watching }],
            status: 'online',
        });

    },
};
 