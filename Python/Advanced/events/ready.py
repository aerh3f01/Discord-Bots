import discord
from discord.ext import commands

class Ready(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        print(f"{self.bot.user} is ready!")

        # Print guild info
        guilds = sorted(self.bot.guilds, key=lambda g: g.member_count, reverse=True)
        for guild in guilds:
            print(f"Guild: {guild.name} (ID: {guild.id}) - Members: {guild.member_count}")

        # Set bot presence
        await self.bot.change_presence(
            activity=discord.Activity(
                name="the highs and lows!",
                type=discord.ActivityType.watching,
            )
        )

def setup(bot):
    bot.add_cog(Ready(bot))
