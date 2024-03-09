var fs = require('fs')
var http = require('http')

http.createServer(function (req,res){    
    fs.readFile('test.html', function (err, dt){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(dt);
        return res.end();
    })
}).listen(5000);