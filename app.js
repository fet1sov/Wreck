const express = require('express');
const router = express.Router();
const app = express();

let http = require('http');
let fs = require('fs');

app.use(express.static('client'));

if (process.env.NODE_ENV != "test")
{
    let httpServer = http.createServer(app).listen(3000);
    console.log(`Listening on port ${httpServer.address().port}`); 
}

module.exports.app = app;