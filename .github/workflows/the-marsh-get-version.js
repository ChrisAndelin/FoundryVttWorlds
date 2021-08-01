let fs = require('fs')
console.log(JSON.parse(fs.readFileSync('./the-marsh/world.json', 'utf8')).version)