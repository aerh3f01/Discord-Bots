import {SlashCommandBuilder} from '@discordjs/builders'; 
// In this import builder is called instead of discord.js to reduce the size of the final build.

export const command ={
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction){
        await interaction.reply('Pong!');
    }
}

/*
    * This is a simple ping command that replies with "Pong!" when called.

    This follows a rigid structure that is required for the command to function.
    It must be exported as a constant named "command" and must contain the following properties:
    - data: A SlashCommandBuilder object that defines the command's name and description.
    - execute: An async function that takes an interaction object as a parameter and sends a reply to the interaction.

    All logic for any commands to work should be placed in the execute function.
*/