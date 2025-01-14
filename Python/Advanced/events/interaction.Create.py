import discord
from discord.ext import commands

class InteractionCreate(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_interaction(self, interaction: discord.Interaction):
        if interaction.type == discord.InteractionType.application_command:
            # Handle Slash Commands (not required here since we're using message-based commands)
            pass

        elif interaction.type == discord.InteractionType.component:
            # Example for handling a button interaction
            if interaction.custom_id == "my_button":
                await interaction.response.send_message("Button clicked!", ephemeral=True)

def setup(bot):
    bot.add_cog(InteractionCreate(bot))
