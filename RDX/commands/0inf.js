module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "RDX ZAIN",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/Kj2CmiZ.jpegv" , "https://i.imgur.com/yiNOiVU.jpeg","https://i.postimg.cc/Sx7Yk5D0/ef81664323554dd5c8f17f0826e26e5e.jpg","https://i.postimg.cc/DwqYrqPQ/b123e2cb78bcb4fa5dcb53dfdeed2611.jpg"];
var callback = () => api.sendMessage({body:`╭━☆━╮
🇵🇰 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 🇵🇰
╰━☆━╯

🤖☾︎𝗕𝗢𝗧 𝗡𝗔𝗠𝗘☽︎🤖 ${global.config.BOTNAME}
══════════════════

🔥𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 シ︎🔥☞︎︎︎☜︎︎︎✰ ℤ𝔸̃𝕀̨ℕ̃ ℙℝ𝕀̨ℕ̃ℂ̧𝔼́💔🥀
══════════════════

🫰♕︎B̸O̸T̸ A̸D̸M̸I̸N̸ F̸A̸C̸E̸B̸O̸O̸K̸ A̸C̸C̸O̸U̸N̸T̸ L̸I̸N̸K̸ ♕︎🫰https://www.facebook.com/profile.php?id=61566479789589💞🕊️
══════════════════

👋For Any Kind Of Help Contact On Telegram  Username 👉@Zainijutt7 😇
══════════════════
♥︎═════•❁❀❁•═════♥︎

🌸𝔹𝕆𝕋 ℙℝ𝔼𝔽𝕀𝕏 🌸☞︎︎︎.☜︎︎︎✰ ${global.config.PREFIX}

♥️𝔹𝕆𝕋 𝕆𝕎ℕ𝔼ℝ♥️ ☞︎︎︎ᘔᗩIᑎ ᒍᑌTT☜︎︎︎✰ 
❤︎═════•❁❀❁•═════❤︎

☞︎︎︎𝚄𝙿 𝚃𝙸𝙼𝙴 ☘︎⏳☘︎☜︎︎︎

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ 
╔═════════╗
${juswa} 
╚═════════╝
⚡𝘽𝙊𝙏 𝙄𝙎 𝙍𝙐𝙉𝙄𝙉𝙄𝙂⚡ 
╭──🌟━━━━━━━━━━━━━━━━━🌟──╮
${hours}:${minutes}:${seconds}.
╰──🌟━━━━━━━━━━━━━━━━━🌟──╯
✅Thanks for using ${global.config.BOTNAME} Bot🖤

🎀💞•••𝗛𝗲𝗿𝗲 𝗜𝘀 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲•••💖🌷
╔═══❖•ೋ° °ೋ•❖═══╗
✨❤️‍🔥 𝒁𝑨𝑰𝑵 𝑱𝑼𝑻𝑻 ❤️‍🔥✨
╚═══❖•ೋ° °ೋ•❖═══╝


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
