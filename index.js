
let server = require('ws').Server;
let s = new server({port: 5003});

s.on('connection', function connection(ws) {
      ws.on('message', function(message) {
        let obj = JSON.parse(message);
        console.log(obj.id);
        console.log(obj.text);
        //console.log('received: %s', message);
      });
 
});



