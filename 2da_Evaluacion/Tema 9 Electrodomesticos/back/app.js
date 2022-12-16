let http = require('http')
const fs = require('fs')


let fichero = fs.readFileSync('./electrodomesticos.json');
electrodomesticos = JSON.parse(fichero);

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(electrodomesticos))
}).listen(3000, "127.0.0.1")
console.log('Server running at http://127.0.0.1:3000/')
