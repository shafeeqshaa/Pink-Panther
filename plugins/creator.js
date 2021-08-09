const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═══🧞‍♂️Pink Panther🧞‍♂️═══╗*\n           \n*⚜═Pink Panther═⚜*\n\n*owner Shefiq - http://Wa.me/+919526128516*\n* *\n🔰instagram:- https://youtube.com/c/ICHUTECH*            *\n*╚════🌺🌺🌺🌺🌺═══╝*\n\n*▷Creator: Shefiq*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Pink Panther Owner Shefiq═💥*\n\n*💘 https://github.com/shafeeqshaa/Pink-Panther*\n*     *\n💓Sophia═Owner Hisham-Muhammed═*\n\n*⚜https://github.com/Hisham-Muhammed/Sophia*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'creator', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═══🧞‍♂️Pink Panther🧞‍♂️═══╗*\n           \n*⚜═Pink Panther═⚜*\n\n*owner Shefiq - http://Wa.me/+919526128516*\n* *\n🔰Youtube: https://youtube.com/c/ICHUTECH*            *\n**╚════🌺🌺🌺🌺🌺═══╝*\n\n*▷Creator: Shefiq*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Pink Panther Owner Shefiq═💥*\n\n*💘 https://github.com/shafeeqshaa/Pink-Panther*\n*     *\n💓Sophia═Owner Hisham-Muhammed═*\n\n*⚜https://github.com/Hisham-Muhammed/Sophia*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

