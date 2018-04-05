var express = require('express');
var ws = require('ws');
var app = express();





app.get('/', function(req,res){
    res.send('Hello World.');
    console.log('something connected to express');
})

app.listen(5003, function () {
    console.log('test');

});