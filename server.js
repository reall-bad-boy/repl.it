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
  if (fantic.content === "Qfl bda") {
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
  if (fantic.content === "Bkawa") {
    if (!fantic.member.hasPermission("ADMINISTRATOR"))
      return fantic.react("❌");
    fantic.channel.overwritePermissions(fantic.guild.id, {
      VIEW_CHANNEL: true
    });
    fantic.react("🔓");
  }
});
//////
client.on('message', function(message){
    if(message.content.toLowerCase().includes("Maza")) {
        message.delete();
        message.author.send("That word is banned, don't use it!");
    }
 
    if(message.content.toLowerCase().includes("Ker")) {
        message.delete();
        message.author.send("That word is banned, don't use it!");
    }
 
    if(message.content.toLowerCase().includes("qwz")) {
        message.delete();
        message.author.send("That word is banned, don't use it!");
    }
 
    if(message.content.toLowerCase().includes("Gawad")) {
        message.delete();
        message.author.send("That word is banned, don't use it!");
    }
 
    if(message.content.toLowerCase().includes("Qwndar")) {
        message.delete();
        message.author.send("That word is banned, don't use it!");
    }
 
    if(message.content.toLowerCase().includes("Qndar")) {
        message.delete();
        message.author.send("That word is banned, don't use it!");
    }
 
    if(message.content.toLowerCase().includes("daykt bgem")) {
        message.delete();
        message.author.send("That word is banned, don't use it!");
    }
 
    if(message.content.toLowerCase().includes("xwshkt bgem")) {
        message.delete();
        message.author.send("That word is banned, don't use it!");
    }
 
});
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "create logs")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "OwnerShip Only~"
      );
      message.guild.id.createChannel("Logs.", "category").then(catg =>{
      message.guild.id.createChannel("log-pic", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.id.createChannel("log-message", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.id.createChannel("log-ban", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.id.createChannel("log-join", "text").then(chat => { chat.setParent(catg.id) })
      message.guild.id.createChannel("log-leave", "text").then(chat => { chat.setParent(catg.id) })
  message.channel.sendMessage(':white_check_mark: **Done Create.**')
      })
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
////////2
client.on('message', message => {
  if (message.content.startsWith("1botinfo")) {
  message.channel.send({
  embed: new Discord.RichEmbed()
  
     .setColor('BLACK')
     .addField('``Servers``', [client.guilds.size], true)
     .addField('``Users``' ,`[ ${client.users.size} ]` , true)
           
  })
  }
  });


  client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` 🔒تۆ میوتکرای بەھۆی دانانی سێرڤەر `');
 
 
    }
})


client.on("message", message => {
  if (message.content === prefix + "lock") {
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
  if (message.content === prefix + "unlock") {
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
 
          ch.send(`${user}(:    کا خۆت ۆنلاین کەوە با بە ۆونێر نەلێم  hhhhhhh`)    //lera chiw pe xosha bele
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
message.reply("You can't use everyone")
}
 
}
 
});
 
 
client.on('message', message => {
 
if(message.content.includes("@everyone@everyone")){
if(!message.member.hasPermission('KICK_MEMBERS')){
message.delete(); 
message.reply("You can't use everyone")
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
message.reply("You can't use here")
}
 
}
 
});                          


////

client.on("ready", () => {
  console.log(
  `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
    `b/help security is here `,
    
     
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
  if (message.content === prefix + "help") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail()
      .setColor("#000000").setDescription(`   __  commands SECURITY __
      
  ${prefix}anti ban  

  ${prefix}anti kick 
  ${prefix}anti roleD
  ${prefix}anti roleC 
  ${prefix}anti channelD 
  ${prefix}anti channelC  

  ${prefix}anti time   

  ${prefix}antibots on 
  ${prefix}antibots off
  ${prefix}antijoin on
  ${prefix}antijoin off
--------------------------

  ${prefix}lock
  ${prefix}unlock
  ${prefix}move all
  ${prefix}about
  ${prefix}invite
  ${prefix}ban
  ${prefix}unban
  ${prefix}
  1botinfo

@everyone and @here delete Link=mute
-------------------------


 Created by ==> [BLACK JACK] 
`);
    message.channel.sendEmbed(embed);
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
        "**:closed_lock_with_key: SORRY YOU DONT HAVE PERMISSION**"
      );
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارە! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**:lock: | کارەکە سەرکەوتو بوو: ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ  ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارر! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**:lock: | کارەکە سەرکەوتو بوو : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارە! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**:lock: | کارەکە سەرکەوتو بوو: ${config[message.guild.id].roleDelLimit}**`
      );

    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارە ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**:lock: | کارەکە سەرکەوتو بوو: ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارە! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**:lock: | کارەکە سەرکەوتو بوو: ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارە! **");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**:lock: | کارەکە سەرکەوتو بوو: ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num) return message.channel.send("**:1234: | ژمارە دانێ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | تەنھا ژمارە! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**:lock: | کارەکە سەرکەوتو بوو: ${config[message.guild.id].time}**`
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
          channel.guild.owner.send(
            `**⇏ | ${entry.username} یەک لە رۆلدەرەکان ژور دەسرێتەوە**`
          )
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
      time: 30
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
          channel.guild.owner.send(
            `**⇏ | ${entry.username} یەک لە رۆلدەرەکان ژوور دروست دەکات**`
          )
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
          channel.guild.owner.send(
            `**⇏ | ${entry.username} یەک لە رۆلدەرەکان رۆل رەشدەکاتەوە **`
          )
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
          channel.guild.owner.send(
            `**⇏ | ${entry.username} یەک لە رۆلدەرەکان رۆل دروست دەکات**`
          )
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
          guild.owner.send(`**⇏ | ${entry.username} یەک لە رۆلدەرەکان میمبەر باند دەکات**`)
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
          guild.owner.send(`**⇏ | ${entry.username} یەک لە رۆلدەرەکان میمبەر کیک دەکات **`)
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
            member.owner.send(
              `**⇏ | ${entry.username} یەک لە رۆلدەرەکان میمبەر کیک دەکات **`
            )
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

let antijoin = JSON.parse(fs.readFileSync('./antijoin.json' , 'utf8'));
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "antijoin on")) {
        if(!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**يجب ان يكون معك صلاحية*** `MANAGE_GUILD`' );
antijoin[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiJoin Is __𝐎𝐍__ !**`)
          fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) return console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 
 

 
client.on('message', message => {
    if(message.content.startsWith(prefix + "antijoin off")) {
        if(!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**يجب ان يكون معك صلاحية** `MANAGE_GUILD`' );
antijoin[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiJoin Is __𝐎𝐅𝐅__ !**`)
          fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) return console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
         client.on('message', message => {
          if (!message.channel.guild) return;
 
 
   if(message.content.startsWith(prefix + "setJoin")) {
          let time = message.content.split(" ").slice(1).join(" ");
       if(!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**');
       if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**يجب ان يكون معك صلاحية** `MANAGE_GUILD`' );
if (!time) return message.channel.send('برجاء كتابهة مدة الحساب الممنوع دخولة للسيرفر [Days]');
let embed = new Discord.RichEmbed()
.setTitle('**تم خاصية من دخول الحسبات الوهمية**')
.addField('تريخ عمل الحساب:', `${time}.`)
.addField('بطلب من :', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
antijoin[message.guild.id] = {
created: time,
onoff: 'On',
}
fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
if (err) console.error(err)
})
   }})
 
client.on("guildMemberAdd", async member => {
  if(!antijoin[member.guild.id]) antijoin[member.guild.id] = {
    onoff: 'Off'
  }
  if(antijoin[member.guild.id].onoff === 'Off') return;
  if(!member.user.bot) return;
    let accounttime = `${antijoin[member.guild.id].created}`
    let moment2 = require('moment-duration-format'),
        moment = require("moment"),
        date = moment.duration(new Date() - member.user.createdAt).format("d");
 
    if(date < accounttime) {
      member.ban(`يجب ان يكون عمر الحسبات اقل من  ${antijoin[member.guild.id].created} days.`)
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
  message.channel.send(`**antibots is on✅**`)
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
  message.channel.send(`**antibots is off ⛔**`)
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
  if (message.content.startsWith(prefix + "invit")) {
    let invite = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTitle(
        "کلیک لێرە بکە بۆ ئەوەی بۆت ئەکە ئینڤاتی سێرڤەری خۆت بکەی:sparkling_heart:"
      )
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=761486131715506187&permissions=8&scope=bot`
      );
    message.channel.sendEmbed(invite);
  }
});

client.on('message', message => {
if (message.author.x5bz) return;
if (!message.content.startsWith(prefix)) return;
 
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
 
let args = message.content.split(" ").slice(1);
 
if (command == "ban") {
             if(!message.channel.guild) return message.reply('** هذا الأمر شغال فقط في السيرفرات**');
       
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return 
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("** `BAN_MEMBERS` البوت لا يملك خاصية**");
let user = message.mentions.users.first();
let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.channel.send(":rolling_eyes: - **I can't find this member**");
if (!message.guild.member(user)
.bannable) return message.reply("**رتبه العضو اعلي من البوت لا يمكن طرده**");
message.channel.send(' :white_check_mark: **' + `${user.tag}` + ' banned from the server! :airplane:** ').catch(WoW => {});
message.guild.member(user).ban(7, user);
 
let embed = new Discord.RichEmbed()
      .setDescription("**NEW BAN**")
      .setColor("BLACK")
.addField("**BANNED**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**BY:**", '**[ ' + `${message.author.tag}` + ' ]**')
.addField("**REASON:**", '**[ ' + `${reason}` + ' ]**')
     .setTimestamp()
      let channel = message.guild.channels
          .find("name", "ban-log")
        channel.send(embed)
};
});

client.on('message', message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(args == 'all') {message.guild.fetchBans().then(zg => {
  zg.forEach(NoNo => {message.guild.unban(NoNo);})});
  return message.channel.send('**✅ Unbanned all members **')}
  if(!args) return message.channel.send('**Please Type the member ID / all**');
  message.guild.unban(args).then(m =>{message.channel.send(`**✅ Unbanned ${m.username}**`);
  }).catch(stry =>{message.channel.send(`**🙄 - I can't find \`${args}\` in the ban list**`)});
  }});
  
///by BLACK JACK

