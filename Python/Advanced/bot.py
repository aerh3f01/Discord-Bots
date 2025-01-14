import os
import discord
from discord.ext import commands
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
TOKEN = os.getenv("TOKEN")

# Initialize bot
intents = discord.Intents.default()
intents.messages = True
intents.guilds = True

bot = commands.Bot(command_prefix="!", intents=intents)

# Load commands and events
bot.load_extension("commands.ping")
bot.load_extension("commands.purgeMessages")
bot.load_extension("events.ready")
bot.load_extension("events.interactionCreate")

# Run the bot
if __name__ == "__main__":
    bot.run(TOKEN)
