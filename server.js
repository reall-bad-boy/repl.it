const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://protect-bot-for-philippe.glitch.me/`);
}, 280000);
 

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Iam Ready My Owner ${client.user.tag}!`);
});
//private krdni channel
client.on("message", fantic => {
  if (fantic.content === "lock") {
    if (!fantic.member.hasPermission("ADMINISTRATOR"))
      return fantic.react("❌");
    fantic.channel.overwritePermissions(fantic.guild.id, {
      VIEW_CHANNEL: false
    });
    fantic.react("🔒");
  }
});

//public krdni channel
client.on("message", fantic => {
  if (fantic.content === "open") {
    if (!fantic.member.hasPermission("ADMINISTRATOR"))
      return fantic.react("❌");
    fantic.channel.overwritePermissions(fantic.guild.id, {
      VIEW_CHANNEL: true
    });
    fantic.react("🔓");
  }
});


/////
client.on("message", message => {
if (message.content.split(" ")[0].toLowerCase() === prefix + "clear") {
const word = message.content;
const number = word.slice(7, word.length);
const int = Number(number);
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
return message.channel.send(
"تۆ ناتوانیت ئەم فرمانە ئەنجەم بدەیت `MANAGE_MESSAGE`چونکە ڕۆڵەکەی تۆ ئەمەی پێ نیە "
);
}
if (int >= 101) {
return message.channel.send(
"بۆتەکە توانایی نیەلە 100چات زیاتر بسڕێتەوە"
);
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



client.on("message", message => {
  if (message.content === prefix + "1") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" **__ليس لديك صلاحيات__**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**__✅🔒 بە سەرکەوتوی داخرا __**");
      });
  }
  //FIRE BOT
  if (message.content === prefix + "2") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("**__ليس لديك صلاحيات__**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**__✅🔓 بە سەرکەوتوی کرایەوە __**");
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "move all")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**لايوجد لديك صلاحية سحب الأعضاء**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**__ببورە رۆڵەکەی تۆ ناتوانێ ێەم کارە بکات__**");
    if (message.member.voiceChannel == null)
      return message.channel.send(
        `**__ تکایە برۆ ڤۆیس ئەک ئینجا کۆماندەکە بنوسە__**`
      );
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send(
      `✅ **بە سەرکەوتوی هەموو ئەوانەی لە ڤۆیس بون  موڤ کرانە لای خۆت **`
    );
  }
});

///////////


//////////

client.on('typingStart', (ch, user) => {
      if(user.presence.status === 'offline') {
 
          ch.send(`${user}(:    دەستەکەو کەشف بوو ئەوە خۆت ۆفلاین ئەکەی خێرا خۆت ۆنلاین کە`)    //lera chiw pe xosha bele
          .then(msg => {
              msg.delete(10000)
          })
      }
  })

////
client.on('message', message => {
 
if(message.content.includes("@everyone")){
if(!message.member.hasPermission('KICK_MEMBERS')){
message.delete(); 
message.reply("ئێڤری وەن لێمەدە دڵم")
}
 
}
 
});
 
 
client.on('message', message => {
 
if(message.content.includes("@everyone@everyone")){
if(!message.member.hasPermission('KICK_MEMBERS')){
message.delete(); 
message.reply("you can't use everyone")
}
 
}
 
});                          



////
client.on('message', message => {
 
if(message.content.includes("@here")){
if(!message.member.hasPermission('KICK_MEMBERS')){
message.delete(); 
message.reply("You can't use here")
}
 
}
 
});
 
 
client.on('message', message => {
 
if(message.content.includes("@here@here")){
if(!message.member.hasPermission('KICK_MEMBERS')){
message.delete(); 
message.reply("زۆرت ماوە گوڵم")
}
 
}
 
});                          


////

client.on("ready", () => {
  console.log(
  `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
    `Servers: ${client.guilds.size} | Users: ${client.users.size}`,
    `=help/security is here`,
     
  ];
  setInterval(function() {
    let PLAYING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(PLAYING, {
      type: "PLAYING",
      url: "https://www.twitch.tv/faith"
    });
  }, 1000);
});


client.on("message", message => {
    if (message.author.bot) return;
    if (message.content === prefix + "help") {
      
      message.channel.send(
        ` `
      );
  
        message.channel.sendMessage(`**__BOT SECURITY___**
  **__فەرمانی پاراستن__** 

 > **__prefix bot=(=)
✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫
> **__ settings limitsban [1 to 3]__ **
 > **__  settings limitskick [1 to 3]__**
 > ** __settings limitsroleD 1 to 3]__**  
 > ** __ settings limitsroleC [1 to 3]__ **
 > **__settings limitschannelD [1 to 3]__**
> **__ settings limitstime [1 to 3]__**
  > **__antibots on__**
 > **__ antibots off __**
 ✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫
> **__bot__**
> **__lock__**
> **__unlock__**
> **__move all__**
> **__invite__**
> **__@everyone and @here dlete__**
 ✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫✫
BY BLACK JACK

  `);
    }
  });

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content === prefix + "info") {
      message.channel.send(`  **__Premium Bot v1__**> 
  ** Help Menu**
  ----------------------------
  > =help ** بۆتي سكويريتي  **
   
  

 


   **__Done__** 
----------------------------
     `);
    }
  });

let vojson = JSON.parse(fs.readFileSync("vojson.json", "utf8")); 
 
client.on("message", message => {
if (message.content.startsWith(prefix + "setVc")) {
let channel = message.content
.split(" ")
.slice(1)
.join(" ");
if (!message.member.hasPermission("MANAGE_GUILD"))
return message.channel.send(
"**ADMINISTRATOR ليس لديك صلاحية :rolling_eyes: ** "
);
let channelfind = message.guild.channels.find(c => c.name == channel);
if (!channel)
return message.channel.send(
"Please Type The Voice Channel Name Example: " +
`${prefix}setVc <Channel name>`
);
if (!channelfind)
return message.channel.send(`I can't find this channel \`${channel}\``);
vojson[message.guild.id] = {
stats: "enable",
chid: channelfind.id,
guild: message.guild.id
};
channelfind.setName(
`Voice Online : ${message.guild.members.filter(m => m.voiceChannel).size}` 
);
message.channel.send("**Done The Voice Online Is Turned On**");
}
if (message.content.startsWith(prefix + "vc off")) {
// ايقاف الفويس اونلاين
if (!message.member.hasPermission("MANAGE_GUILD"))
return message.channel.send(
"ADMINISTRATOR ليس لديك صلاحية :rolling_eyes:"
);
 
message.guild.channels
.find(gg => gg.name === vojson[message.guild.id].chid)
.delete();
vojson[message.guild.id] = {
stats: "disable",
chid: "undefined",
guild: message.guild.id
};
message.channel.send("**Done The Voice Online Is Turned Off**");
}
fs.writeFile("./vojson.json", JSON.stringify(vojson), err => {
if (err) console.error(err);
});
});
 
client.on("voiceStateUpdate", (oldMember, newMember) => {
if (!vojson[oldMember.guild.id])
vojson[oldMember.guild.id] = {
stats: "disable",
chid: "undefined",
guild: "undefined"
};
if (vojson[oldMember.guild.id].stats === "enable") {
let ch = vojson[oldMember.guild.id].chid;
let channel = oldMember.guild.channels.get(ch);
if (!channel) return;
let guildid = vojson[oldMember.guild.id].guild;
channel.setName(
`Voice Online : ${
oldMember.guild.members.filter(m => m.voiceChannel).size
}`
);
}
if (vojson[oldMember.guild.id].stats === "disable") {
return;
}
});


 
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {
 
 
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | ژمارە دانێ ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | تەنھا ژمارە! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | کارەکە سەرکەوتو بوو: ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | ژمارە دانێ ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | تەنھا ژمارە ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | کارەکە سەرکەوتو بوو : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | ژمارە دانێ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | تەنھا ژمارە ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | کارەکە سەرکەوتو بوو: ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | ژمارە دانێ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | تەنھا ژمارە ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | کارەکە سەرکەوتو بوو : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | ژمارە دانێ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | تەنھا ژمارە ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | کارەکە سەرکەوتو بوو : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | ژمارە دانێ ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | تەنھا ژمارە! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | کارەکە سەرکەوتو بوو: ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} یەک لە رۆلدەرەکان ژور رەش دەکاتەوە`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }    
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} یەک لە رۆلدەرەکان رۆل رەش دەکاتەوە`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} یەک لە رۆلدەرەکابت رۆل دروست دەکا`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await user.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
           user.members.get(entry.id).ban().catch(e => user.owner.send(`**⇏ | ${entry.username} یەک لە رۆلددەرەکان میمبەر باند دەکا`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await user.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            user.members.get(entry.id).ban().catch(e => user.owner.send(`**⇏ | ${entry.username} `))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} یەک لە رۆلدەراەکان میمبەر کیک دەکا**`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }
 
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
 
})
///////////




////////////////

client.on("message", message => {
  if (message.content == prefix + "bot") {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle("``INFO Bot`` ")
        .addField(
          "``My Ping``",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField(
          "``RAM Usage``",
          `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`,
          true
        )
        .addField("``servers``", [client.guilds.size], true)
        .addField("``channels``", `[ ${client.channels.size} ]`, true)
        .addField("``Users``", `[ ${client.users.size} ]`, true)
        .addField("``My Name``", `[ ${client.user.tag} ]`, true)
        .addField("``My ID``", `[ ${client.user.id} ]`, true)
        .addField("``FOUNDER``", `[ Robot.Mo ]`, true)
        .addField("``Co.FOUNDER``", `[ Robot.PABLO ]`, true)
        .setFooter("")
    });
  }
});

let antibots = JSON.parse(fs.readFileSync('./antibots.json'  , 'utf8'));
   client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots on")) {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'On',
  }
  message.channel.send(`**antibots is on✅ٲیستا بۆت ناتوانێ جۆینی سێرڤەر بکات**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })

    client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots off")) {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
  message.channel.send(`**antibots is off ⛔ٲیستا بۆت دەتوانی جۆینی سێرڤەر بکات**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })
   client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.kick()
  })
  
  fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
  .catch(err => {
  console.error(err);
  });
  
  })

client
.on("message", async message => {
  if (message.content.startsWith(prefix + "invit")) {
    let invite = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTitle(
        "کلیک لێرە بکە بۆ ئەوەی بۆت ئەکە ئینڤاتی سێرڤەری خۆت بکەی:sparkling_heart:"
      )
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=758789473671577612&permissions=8&scope=bot`
      );
    message.channel.sendEmbed(invite);
  }
});

  
///by P A B L O AND pxPROFESSOR

