var AYAR = require('./config.js');
var Twit = require('twit')
var T = new Twit(AYAR.twitter);


T.post('statuses/update', { status: 'Deneme reply!', in_reply_to_status_id: '665235981872836609' }, function(err, data, response) {
  console.log(data)
})
