let fs = require('fs')
console.log(JSON.parse(fs.readFileSync('./wd-dotmm/world.json', 'utf8')).version)