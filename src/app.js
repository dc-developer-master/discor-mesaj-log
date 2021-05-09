const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');
const { YamlDatabase } = require('wio.db');
const db = new YamlDatabase();
const boşluk = "_";//alt tire kısmı
const kanalstr = "kanal_adı=";//kanal_adı= kısmı

client.on('message', message=> {
    if(message.author.bot || message.content.startsWith(config.prefix))return;
    const date = new Date();
    db.set(date+boşluk+message.author.tag+boşluk+kanalstr+message.channel.name, message.content);
    if(message.content.toLowerCase() === config.bot.prefix+"logsil") {
        if(message.member.hasPermission('ADMINISTRATOR')){
            db.deleteAll()
        }else return;
    }
});

client.login(config.bot.token)
