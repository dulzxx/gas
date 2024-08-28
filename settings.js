const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6285788055721']
global.name = 'XYRO NESIA'
global.JEDA = 5000
global.namapush = ' CONTACT XYRO NESIA '

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
