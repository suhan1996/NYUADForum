var express = require('express');
//var jquery = require('jquery');
//var app2 = jquery();
var app = express();

app.listen(8001, function() {console.log('we have started the server')});

app.use(express.static('public'));

app.get('/', function(request, response, error)
{
  console.log('hey, someone requested something');
  console.log(request.connection.remoteAddress);
//  response.send('hello there from Alia');
});
