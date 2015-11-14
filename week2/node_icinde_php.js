var child_process = require('child_process');

child_process.exec('ls',function(err,out){
    console.log(out);
})