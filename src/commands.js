const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  SlashCommandBuilder,
} = require("discord.js");
const tiktok = require("./socials/tiktok");

const commands = [
  new SlashCommandBuilder()
    .setName("tiktok")
    .setDescription("embeds a tiktok video")
    .addStringOption((option) =>
      option
        .setName("link")
        .setDescription("the link of the video")
        .setRequired(true)
    ),
];

module.exports = {
  commands,
};
