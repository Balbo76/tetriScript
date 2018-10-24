"use strict";
exports.__esModule = true;
var path = require("path");
var express = require("express");
var http_1 = require("http");
var colyseus_1 = require("colyseus");
var monitor_1 = require("@colyseus/monitor");
var tetrisRoom_1 = require("./rooms/tetrisRoom");
var port = Number(process.env.PORT || 2657);
var app = express();
var gameServer = new colyseus_1.Server({
    server: http_1.createServer(app)
});
gameServer.register("tetris", tetrisRoom_1.TetrisRoom);
app.use('/', express.static(path.join(__dirname, "static")));
app.use('/colyseus', monitor_1.monitor(gameServer));
gameServer.listen(port);
console.log("Ciao: http://localhost:" + port);
