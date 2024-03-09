var fs = require('fs');

fs.writeFile('test2.txt','Hello GFG!', function (err){
    if (err) throw err;
    console.log('Saved')
})