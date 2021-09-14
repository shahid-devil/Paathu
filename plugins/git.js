const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/UCCrYk1.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*
┈┏━╮╭━┓┈╭━━━━╮
┈┃┏┗┛┓┃╭┫ B O T ┃
┈╰┓▋▋┏╯╯╰━━━━╯
╭━┻╮╲┗━━━━╮╭╮┈
┃▎▎┃╲╲╲╲╲╲┣━╯┈
╰━┳┻▅╯╲╲╲╲┃┈┈┈
┈┈╰━┳┓┏┳┓┏╯┈┈┈
┈┈┈┈┗┻┛┗┻┛┈┈┈┈
*

*💖⸔ιтѕ мє мαηαναㄥαη⸕🌿

```Type``` *.help* ```for commands```

```Manavalan```🍁

```coded by shahanad k```

*ＭＡＮＡＶＡＬＡＮ* ᴄʀᴇᴀᴛᴇᴅ ʙʏ *SHAHANAD*
┌─────❲ *MANAVALAN* ❳
┊
```MANAVALAN BOT OWNER :-https://www.instagram.com/```
 ~*BOT MAKE BY :-SHAHANAD K❣️*~
*https://github.com/shahanad-k/Manavalan_*
└─────────────────❋ཻུ۪۪⸙  ┌─────❲ *ᴀʙᴏᴜᴛ* ❳
┊☞ ᴏᴡɴᴇʀ : *SHAHANAD*
┊☞ wa.me/+919645090649 
┊☞ ᴘʀᴇꜰɪx : ᴍᴜʟᴛɪ ᴘʀᴇꜰɪx 
┊☞ʙᴏᴛ ɴᴀᴍᴇ : мαηαναㄥαη
┊☞ ᴠᴇʀꜱɪᴏɴ : ᴠ1 
┊☞  ~*MANAVALAN*~
└─────────────────❋ཻུ۪۪⸙*

`}) 

}));
        
