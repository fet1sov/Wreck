const express = require('express');
const app = express();

let http = require('http');

app.use(express.static('client'));
app.use(express.static('game'));

if (process.env.NODE_ENV != "test")
{
    let httpServer = http.createServer(app).listen(3000);
    console.log(`Listening on port ${httpServer.address().port}`); 
}

module.exports.app = app;