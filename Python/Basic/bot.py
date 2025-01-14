import os
import discord
from discord.ext import commands
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
TOKEN = os.getenv('TOKEN')

# Create a new client with intents
intents = discord.Intents.default()
intents.messages = True
intents.guilds = True

client = discord.Client(intents=intents)

# When the client is ready, run this code
@client.event
async def on_ready():
    print(f'{client.user.name} has connected to Discord!')

# When a message is sent, run this code
@client.event
async def on_message(message):
    # Ignore messages from the bot itself
    if message.author == client.user:
        return

    # If the message is 'ping', reply with 'pong'
    if message.content == 'ping':
        await message.reply('pong')

    # Process commands if command_prefix is used
    await client.process_commands(message)

# Login to Discord with your bot's token
client.run(TOKEN)
