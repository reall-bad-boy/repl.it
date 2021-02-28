const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://gossamer-ambiguous-globeflower.glitch.me`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Iam Ready My Owner ${client.user.tag}!`);
});
//private krdni channel

//////
client.on("message", function(msg) {
  if (msg.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`sᴇʀᴠᴇʀ ᴅᴀᴛᴀ  **${msg.guild.name}**`)
      .addField(
        "**region**",
        `[ __${msg.guild.region}__ ]`,
        true
      )
      .addField(
        "**Role**",
        `[ __${msg.guild.roles.size}__ ]`,
        true
      )
      .addField(
        "**Number of mimber**",
        `[ __${msg.guild.memberCount}__ ]`,
        true
      )
      .addField(
        "**Online Numbers**",
        `[ __${
          msg.guild.members.filter(m => m.presence.status == "online").size
        }__ ]`,
        true
      )
      .addField(
        "**text chanel**",
        `[__${msg.guild.channels.filter(m => m.type === "text").size}__]`,
        true
      )
      .addField(
        "**voice chanel**",
        `[ __${
          msg.guild.channels.filter(m => m.type === "voice").size
        }__ ]`,
        true
      )
      .addField("**Owner server**", `__${msg.guild.owner}__`, true)
      .addField("**ID server**", `__${msg.guild.id}__`, true)
      .addField(
        "**Created on**",
        msg.guild.createdAt.toLocaleString()
      )
      .setImage(
        ""
      )
      .setFooter("");
    msg.channel.send({ embed: embed });
  }
});


client.on("message", function(message) {
  if (message.content.toLowerCase().includes("ker")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }

  if (message.content.toLowerCase().includes("Gawad")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }

  if (message.content.toLowerCase().includes("gawad")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }

  if (message.content.toLowerCase().includes("qn")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }

  if (message.content.toLowerCase().includes("qwz")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }

  if (message.content.toLowerCase().includes("dakt")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }

  if (message.content.toLowerCase().includes("xwshkt")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }
  if (message.content.toLowerCase().includes("qwn")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }
  if (message.content.toLowerCase().includes("cher")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }
  if (message.content.toLowerCase().includes("cherm")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }
  if (message.content.toLowerCase().includes("kerm")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }

  if (message.content.toLowerCase().includes("bgem")) {
    message.delete();
    message.author.send("That word is banned, don't use it!");
  }
});

client.on("message", async message => {
  if (message.content.includes("@everyone")) {
    if (message.member.hasPermission("MENTION_EVREYONE")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "BLACK",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
      .addField(`**  You Have Been Muted **`, `**Reason : Type everyone**`)
      .setColor("BLACK")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
    message.author.send("` You're shut up.`");
    message.channel.send("` I hope it will not happen again   `");

    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    message.member.addRole(muterole);
    const Embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
      .addField(`**  You Have Been Muted **`, `**Reason : Type everyone**`)
      .setColor("BLACK")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
    message.author.send("` You're shut up.`");
    message.channel.send("` I hope it will not happen again   `");
  }
});
client.on("message", async message => {
  if (message.content.includes("@here")) {
    if (message.member.hasPermission("MENTION_EVREYONE")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000001",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
      .addField(`**  You Have Been Muted **`, `**Reason : Types here**`)
      .setColor("BLACK")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
    message.channel.send("` I hope it will not happen again   `");
    message.author.send("`You're shut up.`");
  }
});

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix + "support")) {
    msg.author.send(`|| https://discord.gg/MQs2Wc74 ||`);
    msg.channel.send(`Sent in private DM`);
    msg.react("✅");
  }
});

/////
client.on("message", message => {
  if (message.content.split(" ")[0].toLowerCase() === prefix + "clear") {
    const word = message.content;
    const number = word.slice(7, word.length);
    const int = Number(number);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("You can't do this command.");
    }
    if (int >= 101) {
      return message.channel.send("supply A Number to Delete");
    }
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "Looks like you dont have the permissions to do that"
      );
    }
    if (int == "1000") {
      return message.channel.send("supply A Number to Delete");
    } else if (isNaN(int)) {
      return message.reply("Must be a number");
    }
    message.channel.bulkDelete(int).then(() => {
      return message.channel
        .send(`Cleared ${int} messages.`)
        .then(m => m.delete(5000));
    });
  }
});

//the main function for the anti spam
////////2
client.on("message", message => {
  if (message.content.startsWith("servers")) {
    message.channel.send({
      embed: new Discord.RichEmbed()

        .setColor("BLACK")
        .addField("``Servers``", [client.guilds.size], true)
        .addField("``Users``", `[ ${client.users.size} ]`, true)
        .setFooter("Creadet by Mr.BAD")
    });
  }
});

client.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("Sorry you dont have permission");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**🔒 Locked chat**");
      });
  }
  //BLACK JACK
  if (message.content === prefix + "unlock") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("Sorry you donst have permisssion");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**🔓 Unlock chat**");
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "move all")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**You don't have the power to withdraw organs.**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**__Sorry, you can't do this command.__**");
    if (message.member.voiceChannel == null)
      return message.channel.send(
        `**__Please go voice and do this.__**`
      );
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send(
      `✅ **Done**`
    );
  }
});

///////////

//////////

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [`${prefix}help | security is here `];
  setInterval(function() {
    let PLAYING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(PLAYING, {
      type: "PLAYING",
      url: "https://www.twitch.tv/faith"
    });
  }, 1000);
});

client.on("message", message => {
  var addserver = `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`;
  var SUPPORT = `https://discord.gg/6ASrSeG`;
  if (message.content === prefix + "help") {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .setFooter("")
      .setColor("BLACK").setDescription(` 
**${prefix}anti ban  [Number]**
** ${prefix}anti kick [Number]**
**  ${prefix}anti roleD [Number]**
**  ${prefix}anti roleC [Number]**
**  ${prefix}anti channelD [Number]**
** ${prefix}anti channelC  [Number]**
**  ${prefix}anti time   [Number]**
** ${prefix}antibots on/off**
 ** ${prefix}antijoin on/off**
<:0748FF57E1044EBCAEE7A8D2412C21F1:767348725088911391>

 ** ${prefix}lock**
<a:CE86A855718C452085E3AD65628F8A66:759386730637426708>
 ** ${prefix}unlock**
<a:CE86A855718C452085E3AD65628F8A66:759386730637426708>
**  ${prefix}move all**
<a:CE86A855718C452085E3AD65628F8A66:759386730637426708>
 ** ${prefix}about**
<a:CE86A855718C452085E3AD65628F8A66:759386730637426708>
**  ${prefix}invite**
<a:CE86A855718C452085E3AD65628F8A66:759386730637426708>
  **${prefix}ban**
<a:AE2E03CC62B042789DCA86477134D77E:759386727881113610>
 ** ${prefix}unban**
<a:AE2E03CC62B042789DCA86477134D77E:759386727881113610>
 ** ${prefix}server**
<a:4AC4416A79A24118B9CFA688239AB4E2:759386728989065238>
 ** ${prefix}setLog <channel name>**
<a:30BFE5FEEC8C4C6CB9E2923F7373A69F:759386730557341706>
 **${prefix}support**
<a:30BFE5FEEC8C4C6CB9E2923F7373A69F:759386730557341706>
**  servers**
<a:30BFE5FEEC8C4C6CB9E2923F7373A69F:759386730557341706>

**@everyone and @here and Link server=mute**



** Created by ==> [<@670647563627659306>] **
`);
    message.channel.sendEmbed(embed);
  }
});

let anti = JSON.parse(fs.readFileSync("./antigrefff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: SORRY YOU DONT HAVE OWNERSHIP**"
      );
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارە! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**:lock: | CHANGED FOR: ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ  ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارر! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**:lock: | CHANGED FOR: ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارە! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**:lock: | CHANGED FOR: ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ ! **");
      if (isNaN(num))
        return message.channel.send("**:1234: | تەنھا ژمارە ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**:lock: | CHANGED FOR: ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارە! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**:lock: | CHANGED FOR: ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارە! **");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**:lock: | CHANGED FOR: ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارە! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**:lock: | CHANGED FOR : ${config[message.guild.id].time}**`
      );
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(`**⇏ | ${entry.username}  ژوور دەسرێتەوە.`)
        );

      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("channelCreate", async channel => {
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(` | ${entry.username} ژوور دروست دەکات`)
        );

      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
    ////////////////mrfix
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(`**⇏ | ${entry.username} رۆل دەسرێتەوە`)
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(`**⇏ | ${entry.username} رۆل دروست دەکات`)
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });

      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username}  میمبەر باند دەکات**`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username}  میمبەر کیک دەکات **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000 || 30000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(`**⇏ | ${entry.username}  میمبەر کیک دەکات **`)
          );
        anti[member.guild.id + entry.id].actions = 0;
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
////////////////
const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));

client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;
  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});
client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});
client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});
client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`اسمه الاصلي`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اسمه الاصلي`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };

      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});

let antijoin = JSON.parse(fs.readFileSync("./antijoin.json", "utf8"));

client.on("message", message => {
  if (message.content.startsWith(prefix + "antijoin on")) {
    if (!message.channel.guild)
      return message.reply("**هذا الامر للسيرفرات فقط**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("**يجب ان يكون معك صلاحية*** `MANAGE_GUILD`");
    antijoin[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**✅ The AntiJoin Is __𝐎𝐍__ !**`);
    fs.writeFile("./antijoin.json", JSON.stringify(antijoin), err => {
      if (err)
        return console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

const AntiSpam = require("discord-anti-spam");
const antiSpam = new AntiSpam({
  warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
  kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
  banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
  maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
  warnMessage: "{@user}, please stop spamming .", // Message that will be sent in chat upon warning a user.
  kickMessage: "**{user_tag}**, kicked for spam .", // Message that will be sent in chat upon kicking a user.
  banMessage: "**{user_tag}**, banned for spam .", // Message that will be sent in chat upon banning a user.
  maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
  exemptPermissions: ["ADMINISTRATOR"], // Bypass users with any of these permissions.
  ignoreBots: true, // Ignore bot messages.
  verbose: true, // Extended Logs from module.
  ignoredUsers: [] // Array of User IDs that get ignored.
  // And many more options... See the documentation.
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "antijoin off")) {
    if (!message.channel.guild)
      return message.reply("**هذا الامر للسيرفرات فقط**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("**يجب ان يكون معك صلاحية** `MANAGE_GUILD`");
    antijoin[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**⛔ The AntiJoin Is __𝐎𝐅𝐅__ !**`);
    fs.writeFile("./antijoin.json", JSON.stringify(antijoin), err => {
      if (err)
        return console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + "setJoin")) {
    let time = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.channel.guild)
      return message.reply("**هذا الامر للسيرفرات فقط**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("**يجب ان يكون معك صلاحية** `MANAGE_GUILD`");
    if (!time)
      return message.channel.send(
        "برجاء كتابهة مدة الحساب الممنوع دخولة للسيرفر [Days]"
      );
    let embed = new Discord.RichEmbed()
      .setTitle("**تم خاصية من دخول الحسبات الوهمية**")
      .addField("تريخ عمل الحساب:", `${time}.`)
      .addField("بطلب من :", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    antijoin[message.guild.id] = {
      created: time,
      onoff: "On"
    };
    fs.writeFile("./antijoin.json", JSON.stringify(antijoin), err => {
      if (err) console.error(err);
    });
  }
});

client.on("guildMemberAdd", async member => {
  if (!antijoin[member.guild.id])
    antijoin[member.guild.id] = {
      onoff: "Off"
    };
  if (antijoin[member.guild.id].onoff === "Off") return;
  if (!member.user.bot) return;
  let accounttime = `${antijoin[member.guild.id].created}`;
  let moment2 = require("moment-duration-format"),
    moment = require("moment"),
    date = moment.duration(new Date() - member.user.createdAt).format("d");

  if (date < accounttime) {
    member.ban(
      `يجب ان يكون عمر الحسبات اقل من  ${antijoin[member.guild.id].created} days.`
    );
  }
});

let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots on")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("Ownership")) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**➕ | The antibots is \`ON\`.**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
////////////////mrfix////////////////mrfix
client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots off")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("Ownership")) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**➖ | The antibots is \`OFF\`.**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
////////////////mrfix
client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "on"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});
////////////////mrfix
fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});

client.on("message", message => {
  if (message.content === prefix + "about") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("#00000")
      .addField(
        "✽ **Bot Ping** : ",
        `» ${Date.now() - client.createdTimestamp}` + " ms",
        true
      )
      .addField("**Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**Channels** : ", `» ${client.channels.size} `, true)
      .addField("**Users** : ", `» ${client.users.size} `, true)
      .addField("**Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**Bot Owner** :  ", `» <@!670647563627659306> `, true) // تعديل اساسي غير الايدي لايدي حسابك
      .setImage("")
      .setFooter(message.author.username, message.client.avatarURL);
    message.channel.send(bot);
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    let invite = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTitle("کلیک لێرە بکە بۆ ئەوەی بۆتەکە ئینڤایت بکەیت")
      .setFooter("BY BLACK JACK")
      .setURL(
        `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`
      ); ///link bot
    message.channel.sendEmbed(invite);
    message.react("✅");
  }
});

client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply("** هذا الأمر شغال فقط في السيرفرات**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return;
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("** `BAN_MEMBERS` البوت لا يملك خاصية**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1)
      return message.channel.send(
        ":rolling_eyes: - **I can't find this member**"
      );
    if (!message.guild.member(user).bannable)
      return message.reply("**رتبه العضو اعلي من البوت لا يمكن طرده**");
    message.channel
      .send(
        " :white_check_mark: **" +
          `${user.tag}` +
          " banned from the server! :airplane:** "
      )
      .catch(WoW => {});
    message.guild.member(user).ban(7, user);

    let embed = new Discord.RichEmbed()
      .setDescription("**NEW BAN**")
      .setColor("BLACK")
      .addField("**BANNED**", "**[ " + `${user.tag}` + " ]**")
      .addField("**BY:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**REASON:**", "**[ " + `${reason}` + " ]**")
      .setTimestamp()
      .setFooter("By black Jack");
    let channel = message.guild.channels.find("name", "ban-log");
    channel.send(embed);
  }
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(NoNo => {
          message.guild.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///by BLACK JACK
