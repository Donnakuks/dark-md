

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: davvy0989" //ur yt chanel name
global.socialm = "GitHub: Donnakuks" //ur github or insta name
global.location = "Nigeria, Lagos" //ur location

//new
global.botname = '𝕯𝖆𝖗𝖐 𝕸𝖉🦇⃟.' //ur bot name
global.ownernumber = ['2349137178897'] //ur owner number, dont add more than one
global.ownername = '𝖃𝖊𝖓𝖕𝖆𝖎 𝕯𝖆𝖗𝖐 ' //ur owner name
global.websitex = "https://youtube.com/@davvy0989"
global.wagc = "https://chat.whatsapp.com/DI2Gi3bEWlrGQHTqfkskYg"
global.themeemoji = '🦇'
global.wm = "Dark Bot Inc."
global.botscript = 'https://github.com/Donnakuks/dark-md' //script link
global.packname = "🦇"
global.author = "MΛDΣ BY 𝖃𝖊𝖓𝖕𝖆𝖎 𝕯𝖆𝖗𝖐"
global.creator = "2349137178897@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2349137178897"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.antidelete = false //set anti delete 


global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'



global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
