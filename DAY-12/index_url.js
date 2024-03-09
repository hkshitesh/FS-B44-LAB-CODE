var url = require('url');
var adr = 'http://localhost:5000/default.htm?year=2024&month=february';
var data = url.parse(adr,true);
console.log(data)
console.log(data.host);
console.log(data.pathname)
console.log(data.query)
var dt = data.query;
console.log("Month is:" +dt.month)
console.table(data.query)