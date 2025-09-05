# Kaori Discord Bot

## Prerequisites

Before running this bot, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.11.0 or higher)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/quedas/kaori.git
   cd kaori
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install the following packages:
   - `discord.js` - Discord API wrapper for Node.js
   - `dotenv` - Loads environment variables from .env file

   Edit `.env.example` and add your Discord bot token:

## Getting a Discord Bot Token

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to the "Bot" section in the sidebar
4. Click "Add Bot"
5. Under "Token", click "Copy" to get your bot token
6. Paste this token into your `.env` file

## Bot Permissions

Make sure your bot has the necessary permissions when inviting it to your server. You can generate an invite link in the Discord Developer Portal under OAuth2 > URL Generator.

Needed permissions:
Go to the [Discord Developer Portal](https://discord.com/developers/applications)
-  Enable Presence Intent
- Enable Message Content Intent

## Running the Bot

Start The Bot Using:
```bash
node index.js
```
