import { Events, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { chalk, logs, errlogs } from '../util/ez_log.js'; // Assuming you have custom logging functions
import { getDb, connectToDatabase } from '../util/dbConnect.js';
import { ObjectId } from 'mongodb';


export const event = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        

        // Slash Command Handling
        if (interaction.isChatInputCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`[ERROR] Command ${interaction.commandName} not found.`);
                await interaction.reply({ content: 'This command is not registered.', ephemeral: true });
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(`[ERROR] Error executing command: ${interaction.commandName}`, error);
                await interaction.reply({
                    content: 'There was an error while executing this command!',
                    ephemeral: true,
                });
            }
        }

        // Other Interaction Types (fallback)
        else {
            logs(chalk.yellow(`[WARN] Received an unhandled interaction type: ${interaction.type}`));
        }

        /*
        Other Interaction Types:
        - Button
        - Select Menu
        - Context Menu
        - Message Component
        - Application Command
        
        For example, to handle a button interaction:

        if (interaction.isButton()) {
            if (interaction.customId === 'my_button') {
                await interaction.reply({ content: 'Button clicked!', ephemeral: true });
            }
        }
        
        Buttons are likely to be used the most in interactions, so it's a good idea to handle them.
        They are most often used with Embeds to create polls or interactive forms over select menus.
        
        For more information, see the Discord.js documentation:
        Event Handling:
        https://discordjs.guide/creating-your-bot/event-handling.html#reading-event-files
        Button Interaction:
        https://discord.js.org/docs/packages/discord.js/stable#/docs/discord.js/main/class/ButtonInteraction
        */
    },
};