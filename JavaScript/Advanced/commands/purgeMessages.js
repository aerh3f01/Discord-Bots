// A simple but powerful command that can be used to clear messages in a channel.

import {SlashCommandBuilder} from '@discordjs/builders';

// Either define allowed roles or remove the if statement to allow everyone to use the command.
const allowedRoles = ['Admin', 'Moderator'];

export const command = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Deletes a specified number of messages.')
        // You can add options and inputs to the command to make it more versatile.
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('The number of messages to delete.')
                .setRequired(true)),
    async execute(interaction){
        if (allowedRoles.some(role => interaction.member.roles.cache.some(r => r.name === role))){
            const amount = interaction.options.getInteger('amount');
            if (amount < 1 || amount > 100){
                return await interaction.reply({content: 'You must provide a number between 1 and 100.', ephemeral: true});
            }
            // use bulkDelete to delete messages in bulk
            /* This method has a limit of 100 messages per call and messages older than 14 days cannot be deleted.
               If you need to delete more than 100 messages, you can use a loop to delete messages in batches of 100. 
            */
            await interaction.channel.bulkDelete(amount, true);
            await interaction.reply({content: `Deleted ${amount} messages.`, ephemeral: true});
        } else {
            await interaction.reply({content: 'You do not have permission to use this command.', ephemeral: true});
        }
    }
}

