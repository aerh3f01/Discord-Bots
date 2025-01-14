# Discord Bot Templates

This repository contains a collection of Discord bot templates written in multiple programming languages, primarily JavaScript and Python for now. Each language includes both basic and advanced templates, making it easier for developers at different skill levels to get started. Templates for some languages may not be tested or confirmed working, however you can always reach out to the owner or raise an issue to get assistance.

## Project Structure

The repository is organized into directories for each language, with subdirectories for the basic and advanced templates:
```bash
/javascript/
    /basic/
    /advanced/
/python/
    /basic/
    /advanced/
```
### Basic Templates

- Focus on simplicity, showcasing how to set up a basic bot with a few commands.
- Examples include:
 - Replying to a "ping" message.
 - Handling basic events like on_ready and on_message.

### Advanced Templates

- Demonstrate more complex bot structures.
- Features include:
 - Modularized commands and event handlers.
 - Support for slash commands and interactions.
 - More extensive usage of Discord API features (e.g., embeds, buttons, and role-based command restrictions).
---
## Current Templates

### JavaScript
#### Basic Template
- A simple bot that uses discord.js.
- Handles basic events like on_ready and on_message.
- Includes a ping command that replies with "Pong!".
#### Advanced Template
- Modularized structure using commands and events directories.
- Supports slash commands and buttons.
- Uses .env for secure token management.

**Documentation**:
- Detailed comments are included within each file to explain functionality.
- Example commands and events are provided to demonstrate best practices.

### Python
#### Basic Template
- A lightweight bot using discord.py.
- Handles basic events like on_ready and on_message.
- Includes a ping command that replies with "Pong!".
#### Advanced Template
- Modularized structure using commands and events directories.
- Uses Cogs to separate functionality.
- Includes slash command handling and a role-restricted purge command.

**Documentation**:
- Python templates include fewer comments than JavaScript templates due to author familiarity with JavaScript.
- Plans to add more detailed documentation as the project evolves.
---
## Getting Started
### Prerequisites
1. Install Node.js (for JavaScript bots) or Python (for Python bots).
2. Install the required dependencies for your chosen language (instructions below).
3. Create a Discord application and get your bot token from the [Discord Developer Portal](https://discord.com/developers/applications).
### Installation
#### JavaScript Bots
1. Navigate to the JavaScript directory (/javascript/basic or /javascript/advanced).
2. Install dependencies:
   ```bash
   npm install discord.js
   ```
3. Create a .env file and add your bot token:
   ```
   TOKEN=your-bot-token
   ```
4. Run the bot:
   ```bash
   node bot.js
   ```
#### Python Bots
1. Navigate to the Python directory (/python/basic or /python/advanced).
2. Install dependencies:
   ```bash
   pip install discord.py python-dotenv
   ```
3. Create a .env file and add your bot token:
   ```
   TOKEN=your-bot-token
   ```
4. Run the bot:
   ```bash
   python bot.py
   ```
---
## Future Plans
- Add templates in other programming languages (e.g., Java, C#, or Go).
- Improve documentation for Python templates to match the quality of JavaScript templates.
- Include more advanced features, such as database integration, music bots, and APIs.
- Add example usage for webhooks, embeds, and slash commands across all templates.
---
## Contributing
Contributions are welcome! If you'd like to add templates for other languages or improve existing ones:
- Fork the repository.
- Create a new branch for your changes.
- Submit a pull request with a description of your additions or modifications.
---
## License

This project is licensed under the MIT License. See the LICENSE file for details.

###Feedback
If you have any feedback, feature requests, or questions, feel free to open an issue or contact the repository owner.

