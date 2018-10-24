"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var colyseus_1 = require("colyseus");
var tetrisState_1 = require("./tetrisState");
var TetrisRoom = /** @class */ (function (_super) {
    __extends(TetrisRoom, _super);
    function TetrisRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxClients = 2;
        return _this;
    }
    TetrisRoom.prototype.onInit = function (options) {
        var _this = this;
        console.log("Room - onInit");
        this.setSimulationInterval(function () { return _this.update(); }, 20);
        this.setState(new tetrisState_1.TetrisState());
    };
    TetrisRoom.prototype.onJoin = function (client) { console.log("Room - onJoin"); };
    TetrisRoom.prototype.onLeave = function (client) { console.log("Room - onLeave"); this.state.removePlayer(client); };
    TetrisRoom.prototype.onMessage = function (client, data) {
        console.log("Room - onMessage");
        if (data.start) {
            this.state.addPlayer(client);
        }
        if (data.stop) {
            this.state.removePlayer(client);
        }
        // Input utente durante il gioco
        if (data.dir) {
            if (data.dir == "left") {
                this.state.moveLeft(client);
            }
            if (data.dir == "right") {
                this.state.moveRight(client);
            }
            if (data.dir == "down") {
                this.state.moveDown(client);
            }
            if (data.dir == "rotate") {
                this.state.rotate(client);
            }
        }
    };
    TetrisRoom.prototype.onDispose = function () { console.log("Room - onDispose"); };
    TetrisRoom.prototype.update = function () {
        var d = Math.random();
        var gameOver = false, cId = null;
        if (this.state) {
            for (var entityId in this.state.players) {
                this.state.players[entityId].tick();
                if (this.state.players[entityId].gameOver == true) {
                    gameOver = true;
                    cId = entityId;
                }
            }
            if (gameOver) {
                for (var entityId in this.state.players) {
                    this.state.players[entityId].gameOver = true;
                    if (entityId == cId) {
                        this.state.players[entityId].winner = false;
                    }
                    else {
                        this.state.players[entityId].winner = true;
                    }
                }
            }
        }
    };
    return TetrisRoom;
}(colyseus_1.Room));
exports.TetrisRoom = TetrisRoom;
