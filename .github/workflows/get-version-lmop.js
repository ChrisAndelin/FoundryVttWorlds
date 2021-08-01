let fs = require('fs')
console.log(JSON.parse(fs.readFileSync('./lmop/module.json', 'utf8')).version)