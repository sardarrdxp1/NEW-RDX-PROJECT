module.exports.config = {
  name: "pair",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "D-Jukie (Xuyên get)",
  description: "Pairing",
  commandCategory: "Love", 
  usages: "pair", 
  cooldowns: 15
};
module.exports.run = async function({ api, event,Threads, Users }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];

        var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
        var tle = Math.floor(Math.random() * 101);
        var namee = (await Users.getData(event.senderID)).name
        const botID = api.getCurrentUserID();
        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
        var id = listUserID[Math.floor(Math.random() * listUserID.length)];
        var name = (await Users.getData(id)).name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

  
        let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

        let gifLove = (await axios.get( `https://i.ibb.co/wC2JJBb/trai-tim-lap-lanh.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );

        let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

        var imglove = [];
              
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

       var msg = {body: `┏━•❃°•°❀°•°❃•━┓\n\n𝐎𝐰𝐧𝐞𝐫 ·˚ ༘₊·꒰➳: ̗̀➛    🍓  𝐂𝐇𝐔𝐙𝐈 𝐊𝐀 𝐂𝐀𝐑𝐓𝐎𝐎𝐍 \n\n┗━•❃°•°❀°•°❃•━┛ \n\n ✦ ━━━━ ༺♡༻ ━━━━ ✦\n\n [❝ 𝑇𝑢𝑗ℎ𝑘𝑜 𝑑𝑒𝑘ℎ 𝑘𝑒 𝑏𝑎𝑠 𝑒𝑘 𝑘ℎ𝑦𝑎𝑎𝑙 𝑎𝑎𝑡𝑎 ℎ𝑎𝑖,\n𝐷𝑖𝑙 𝑘𝑎ℎ𝑡𝑎 ℎ𝑎𝑖 𝑘𝑎𝑠ℎ 𝑡𝑢 𝑠𝑎𝑎𝑡ℎ ℎ𝑜... ❞]\n\n✦ ━━━━ ༺♡༻ ━━━━ ✦\n\n[❝ 𝐸𝑘 𝑊𝑎𝑞𝑡 𝑎𝑎𝑦𝑒 𝑍𝑖𝑛𝑑𝑎𝑔𝑖 𝑚𝑒𝑖𝑛...\n\n 𝐽𝑎ℎ𝑎𝑎𝑛 𝑡𝑢 𝑣𝑖 𝑚𝑒𝑟𝑒 𝑝𝑦𝑎𝑟 𝑚𝑒𝑖𝑛 ℎ𝑜 ❞]\n\n✦ ━━━━ ༺♡༻ ━━━━ ✦\n\n┌──═━┈━═──┐\n\n➻ 𝐍𝗔ɱɘ ✦  ${namee} \n\n➻ 𝐍𝗔ɱɘ ✦  ${name} \n\n└──═━┈━═──┘\n\n✦ ━━━━ ༺♡༻ ━━━━ ✦\n\n🌸🍁𝐘𝐎𝐔𝐑 𝐋𝐎𝐕𝐄 𝐋𝐄𝐕𝐄𝐋💝 : ╰┈➤ ${tle}%\n`+namee+" "+"🌺"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
}
