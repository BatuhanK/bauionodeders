var fs = require('fs');

fs.readFile('message.txt', function (err, data) {
  if (err) throw err;
  var mesaj = data.toString();
  console.log(mesaj);
});


