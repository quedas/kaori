require("dotenv").config();
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActivityType,
} = require("discord.js");

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

kaoribot.on("messageCreate", (message) => {
  if (message.author.bot) return;
  const lettertoarima = "dear arima kousei";
  const content = message.content.toLowerCase();
  if (content.includes(lettertoarima)) {
    const embed = new EmbedBuilder()
      .setTitle("Letter to Arima Kousei")
      .setColor("#0099ff")
      .addFields(
        {
          name: "",
          value:
            "Hey, you! I mean, Dear Kousei,\nYou were just here, and now I’m writing you a letter, kinda weird, right?\n\nYou’re a mess, you know that? You’re meek, and a quitter, and neurotic.",
        },
        {
          name: "",
          value:
            "The first time I ever saw you, I was five years old. It was at a recital for the piano school I went to back then. You marched out onto that stage, and then made us all laugh by knocking over the bench. You sat on that giant piano, and with the first note you played, the world became more colorful. It was like you found a deluxe box of crayons on the keys, and tossed them everywhere Suddenly, the girl next to me starts bawling her eyes out.\n\nAnd now you’re gonna give it up? Like you never played in the first place? Hearing you that day changed my life, what do you think of that?\n\nSo I switched, then and there, no regrets.",
        },
        {
          name: "",
          value:
            "When I found out we were at the same middle school, I was thrilled! How was I actually supposed to meet you, though? Buy egg sandwiches every day ‘til you notice me? In the end, all I could do was watch you guys. You were friends, and I was some stranger. It wasn’t my place to barge in, so I didn’t.",
        },
        {
          name: "",
          value:
            "I had surgery as a little kid, but I’ve never been totally well. After a bad fall in the seventh grade, I was in the hospital a bunch. Those hospitals stays got longer, bit by bit. I was hardly ever at school by then. Nobody said how sick I was exactly, but I knew it was bad.",
        },
        {
          name: "",
          value:
            "Then one night, I saw my mom and dad crying down in the lounge, when they thought I was asleep. That’s when I knew I didn’t have much time.\n\nI made a choice:\n\nI ran. And I didn’t look back!\n\nI started living life exactly how I wanted, so I wouldn’t be all mopey in heaven. Contacts are weird, but I tried ‘em. Tried eating a whole cake by myself too, because why not? Music that used to boss me around? I played it my way!",
        },
        {
          name: "",
          value:
            "And then…I told one single lie.\n\nAre you ready for it? Here it comes: “Kaori likes Watari!”\n\nShocking, right? But I’m glad I told it. After all, Kousei, that lie brought us together.",
        },
        {
          name: "",
          value:
            "Please tell Watari I’m sorry. Honestly though, I’m sure he’s moved on to some other girl by now. That’s just who he is. When it comes to friends, he’s a great guy, but romantically, I want someone sincere.",
        },
        {
          name: "",
          value:
            "Also, please tell Tsubaki that I’m sorry. It turns out I was just passing through. I didn’t wanna leave a big mess behind, so I couldn’t be totally be honest with her either. Think of it: “Hey Tsubaki, be a pal and introduce me to Arima, would ya?” That would have been a pretty messed up thing for me to ask for. I mean, everyone could tell that Tsubaki was crazy about you. Even before we were friends, I knew. The only ones who didn’t get the memo were you and her.",
        },
        {
          name: "",
          value:
            "When my life finally brought the two of us together, you were different than I’d imagined: stubborn, and passive, and pessimistic. Not to mention the fact that you stole my leggings. Your voice was lower than I thought. You were a guy, you know? And you were gentle, no surprise there.",
        },
        {
          name: "",
          value:
            "Remember when we jumped off that bridge? The river water felt amazing. And the moon shining down at the music room, like we could grab it on our tiptoes? When we raced that train, I really thought we could win! Singing “Twinkle Twinkle Little Star” with you late at night felt kinda perfect. Being at school after dark, it’s mysterious, right? And snow, it looks like cherry blossom petals!",
        },
        {
          name: "",
          value:
            "You must think I’m silly, finding wonder in the everyday things around us, things I saw with you.\n\nIsn’t it funny how the most unforgettable scenes can be so trivial, and vice versa?",
        },
        {
          name: "",
          value:
            "So what’s the verdict?\n\nWas I able to live inside someone’s heart?\n\nAnd this heart, it wouldn’t happen to be yours, would it?\n\nDo you think that…you’ll remember me a little from time to time?",
        },
        {
          name: "",
          value:
            "No hitting the reset button!\n\nDon’t you forget me, that’s a promise, okay?\n\nI’m glad we found each other.\n\nWill I reach you?\n\nI hope I can.",
        },
        {
          name: "",
          value:
            "Here’s the truth, Kousei:\n\nI love you!\n\nI love you!\n\nI love you!\n\nSorry that I never ate those canelés, and that I beat you up so much. I was such a brat to you.\n\nI’m sorry for…everything.\n\nThank you.\n\n P.S. I’m giving you one of my favorite pictures. You don’t have to keep it, but I hope you do.",
        }
      )
      .setImage(
        "https://coffeemonsterr.files.wordpress.com/2015/09/shigatsu-wa-kimi-no-uso-episode-22-37.jpg"
      );

    message.channel.send({ embeds: [embed] });
  }
});

kaoribot.login(process.env.DISCORD_TOKEN);
