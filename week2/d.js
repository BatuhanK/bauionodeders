var fs = require('fs');
fs.stat('asd1.txt',function(err,stat){
    console.log(stat);
})