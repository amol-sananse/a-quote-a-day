var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

var port = process.env.port || 8080;

var server = app.listen(port, function(req, res){
    console.log('Server is listening on http://localhost:' + port);
})