// A very simple bot using discord.js

// Import modules
import { Client, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';

// Load environment variables
config();
TOKEN = process.env.TOKEN;

// Create a new client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ],
    });

// When the client is ready, run this code
client.once('ready', () => {
    console.log('Ready!');
});

// When a message is sent, run this code
client.on('messageCreate', message => {
    // If the message is 'ping', reply with 'pong'
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

// Login to Discord with your app's token
client.login(TOKEN);