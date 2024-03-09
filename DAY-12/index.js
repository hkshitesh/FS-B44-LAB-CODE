var http = require('http')
var dt = require('./mymodule')
http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The Date of the day is '+dt.myDateTime());    
}).listen(5000)

