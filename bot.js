// Load up the discord.js library
const Discord = require("discord.js");
function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

const client = new Discord.Client();

var food = 0;

const config = require("./config.json");
client.on("ready", () => {
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`Being Bry`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});


client.on("message", async message => {

  if(message.author.bot) return;
  
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  
  if(message.channel.name.includes(config.nochannel)) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  
  const command = args.shift().toLowerCase().replace(/[^a-z0-9]/g, '');
   
  for(var i = 0; i < config.censors.length; i++) {
    if(message.content.indexOf(config.censors[i]) != -1) {
      message.channel.send("Bry does not condone this foul language on his good Bryrish server.");
    }
  }
  
  if(message.content.indexOf(config.prefix) !== 0) return;

  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit("Bry has ponged with a latency of ${m.createdTimestamp - message.createdTimestamp}ms.");
  }
  
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  } 

  if(command === "eat") {
    const n = args.join(" ");
    const m = await message.channel.send("```\n   BRY   " + n + "\n   C  \\o/\n```");
    await sleep(500);
    m.edit("```\n    BRY  " + n + "\n    c \\o/\n```");
    await sleep(500);
    m.edit("```\n     BRY " + "\n     C\\o/\n```");
    await sleep(500);
    m.edit("```\n     BRY " + "\n      Co/\n```");
    await sleep(500);
    m.edit("```\n     BRY " + "\n       c/\n```");
    await sleep(500);
    m.edit("```\n     BRY " + "\n        C\n```");
    await sleep(500);
    food++;
    m.edit("```\n     BRY " + "burp..." + "\n         C\nBry has eaten " + food + " times.``` ");
    lastDate = newDate();
  }

  if(command === "pickup") {
    var id = 42;
    var args1 = args;
    if (!isNaN(parseInt(args[0])) && parseInt(args[0]) < config.pickups.length) {
      id = parseInt(args[0]);
      args1 = args.slice(1,args.length);
    } else {
      id = Math.random();
      id = config.pickups.length * id;
      id = id - id%1;
    }
    var line = config.pickups[id];
    var lines = line.split("BRYBOTSEP");
    var m = "";
    if(args1.length != 0) {
      m = args1.join(" ") + ", ";
    }
    for(var i = 0; i < lines.length; i++) {
      m += lines[i]
      message.channel.send(m);
      await sleep(config.pwait);
      m = "";
    }
  }

  if(command === "lennybomb") {
    message.channel.send("Bry has detonated a Lennybomb: ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)");
  }

  if(config.ynwords.includes(command)) {
    if (message.content.indexOf("bloat") != -1) {
      message.channel.send("If you're asking if something is bloat, it probably is.");
    } else if (Math.random() > 0.5) {
      message.channel.send("no");
    } else {
      message.channel.send("yes");
    }
  }

  if(config.qwords.includes(command)) {
    message.channel.send(config.words[parseInt(Math.random() * config.words.length)]);
  }

  if(command === "siton") {
    const n = args.join(" ");
    const m = await message.channel.send("```Bry sits on " + n + "\n C\n\n\n\\o/ - " + n + "```");
    await sleep(500);
    m.edit("```Bry sits on " + n + "\n\n C\n\n\\o/ - " + n + "```");
    await sleep(500);
    m.edit("```Bry sits on " + n + "\n\n\n C\n\\o/ - " + n + "```");
    await sleep(500);
    m.edit("```Bry sits on " + n + "\n\n\n\n\\C/ - oof```");
    await sleep(500);
  }

  if(command === "roast") {
    var id = 42;
    var args1 = args;
    if (!isNaN(parseInt(args[0])) && parseInt(args[0]) < config.roasts.length) {
      id = parseInt(args[0]);
      args1 = args.slice(1,args.length);
    } else {
      id = Math.random();
      id = config.roasts.length * id;
      id = id - id%1;
    }
    if (args1.length == 0) args1.push(message.author);
    message.channel.send(args1.join(" ") + config.roasts[id]);
  }

  if(command === "die") {
    message.channel.send("no");
  }

});

client.login(config.token);
