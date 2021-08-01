let fs = require('fs')
console.log(JSON.parse(fs.readFileSync('./lmop/world.json', 'utf8')).version)