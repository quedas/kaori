require("dotenv").config();
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActivityType,
} = require("discord.js");

const tiktokHandler = require("./src/tiktok.js");
const twitterHandler = require("./src/twitter.js");

const kaoribot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

kaoribot.once("ready", () => {
  kaoribot.user.setPresence({
    status: "online", // online, idle, dnd, invisible
    activities: [
      {
        name: "A letter to Arima Kousei", // bot activity n stuff frfr
        type: ActivityType.Listening, // Playing, Streaming, Listening, Watching
      },
    ],
  });
});

tiktokHandler.setup(kaoribot);
twitterHandler.setup(kaoribot);

kaoribot.login(process.env.DISCORD_TOKEN);
