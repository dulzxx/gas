/* SC IKYYOFC V8
BASE : HW MODS
RECODE : IKYYOFC
CREACOT : IKYYOFC
*/

const fs = require('fs')
const chalk = require('chalk')

global.owner = "62878183729633"
global.namabot = "SanZ art"
global.botname = "Bot push by SanZ"
global.autoJoin = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'ikyyoffc' //Gausah Juga
global.bugthomz = fs.readFileSync("./bugthomz.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By SanZ art"

global.namastore = "SanZ art"
global.nodana = "082154016437"
global.nogopay = "082154016437"
global.shopepay = "082154016437"
global.qris = "https://telegra.ph/file/c6daf0fb6c7c0ffc6abc2.jpg"

global.domain = 'https://private.thomvelz.my.id' // Isi Domain Lu
global.apikey = 'ptla_KoYJuL9VUVEDa4G3RF3YkwpYMAigGs2h70WXQfv4doB' // Isi Apikey Plta Lu
global.capikey = 'ptlc_7NVmZ4ynvB0KwBAxZId7kW8XSN4j4b25Z0uubiXxRmZ' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.antilink = false

const mess = {
   wait: "Tunggu Bang Lagi Saya Proses",
   success: "sukses✅ Bang",
   save: "𝕊𝕌𝕂𝕊𝔼𝕊 𝕊𝔸𝕍𝔼 ℕ𝕆𝕄𝔼ℝ 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Nya Cuman Bisa Di Dalem Grup Yah Bang Raihan ART",
       private: "Di Chat Pribadi Bang Raihan Art Biar Bisa Di Pake",
       owner: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang SanZ Art",
       admin: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang SanZ Art",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})