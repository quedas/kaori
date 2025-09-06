const { execFile, spawn } = require("child_process");
const { AttachmentBuilder } = require("discord.js");
const fs = require("fs");
const path = require("path");
const os = require("os");

const YTDLP_PATH = "C:/yt-dlp/yt-dlp.exe";

module.exports = {
  setup(client) {
    client.on("messageCreate", async (message) => {
      if (message.author.bot) return;
      if (!message.content.includes("instagram.com")) return;

      console.log("Twitter link detected:", message.content);

      const url = message.content.trim();
      const tempVideoPath = path.join(os.tmpdir(), `Twitter_${Date.now()}.mp4`);

      execFile(
        YTDLP_PATH,
        ["-f", "best[vcodec!=h265]/best", "-o", tempVideoPath, url],
        async (err) => {
          if (err) {
            console.error("Error downloading Twitter video:", err);
            return message.channel.send("⚠️ Failed to download Twitter video.");
          }

          const attachment = new AttachmentBuilder(tempVideoPath, {
            name: "twitter.mp4",
          });

          try {
            await message.channel.send({ files: [attachment] });

            await message.suppressEmbeds(true);
          } catch (sendErr) {
            console.error("Error sending video:", sendErr);
          } finally {
            fs.unlink(tempVideoPath, () => {});
          }
        }
      );
    });
  },
};
