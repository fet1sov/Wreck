const express = require('express');
const app = express();

let http = require('http');

app.use(express.static('client'));
app.use(express.static('game'));

if (process.env.NODE_ENV != "test")
{
    let port = 3000;
    http.createServer(app).listen(port);
    console.log(`Listening on port ${port}`); 
}

module.exports.app = app;