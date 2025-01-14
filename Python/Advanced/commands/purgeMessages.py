from discord.ext import commands

class PurgeMessages(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="purge")
    async def purge(self, ctx, amount: int):
        allowed_roles = ["Admin", "Moderator"]

        # Check user permissions
        if not any(role.name in allowed_roles for role in ctx.author.roles):
            await ctx.send("You do not have permission to use this command.", delete_after=5)
            return

        # Validate amount
        if amount < 1 or amount > 100:
            await ctx.send("Please provide a number between 1 and 100.", delete_after=5)
            return

        # Bulk delete messages
        deleted = await ctx.channel.purge(limit=amount)
        await ctx.send(f"Deleted {len(deleted)} messages.", delete_after=5)

def setup(bot):
    bot.add_cog(PurgeMessages(bot))
