"use strict";
exports.__esModule = true;
var tetris_1 = require("./tetris");
var TetrisState = /** @class */ (function () {
    function TetrisState() {
        this.players = {};
        this.clientsNumber = 0;
        this.setStatoSfida();
    }
    TetrisState.prototype.addPlayer = function (client) {
        if (!this.players[client.id]) {
            this.players[client.id] = new tetris_1.Tetris();
            this.clientsNumber++;
            if (this.clientsNumber == 1) {
                this.playerA = client.id;
            }
            if (this.clientsNumber == 2) {
                this.playerB = client.id;
            }
            this.setStatoSfida();
        }
    };
    TetrisState.prototype.removePlayer = function (client) {
        delete this.players[client.id];
        this.clientsNumber--;
        this.setStatoSfida();
    };
    TetrisState.prototype.moveLeft = function (client) {
        this.players[client.id].moveLeft();
    };
    TetrisState.prototype.moveRight = function (client) {
        this.players[client.id].moveRight();
    };
    TetrisState.prototype.moveDown = function (client) {
        var nlinee = this.players[client.id].moveDown();
        if (nlinee > 1) {
            if (client.id == this.playerA) {
                this.aggiungiLinee(this.playerB, nlinee);
            }
            else {
                this.aggiungiLinee(this.playerA, nlinee);
            }
        }
    };
    TetrisState.prototype.rotate = function (client) {
        this.players[client.id].rotate();
    };
    TetrisState.prototype.aggiungiLinee = function (player, nlinee) {
        this.players[player].aggiungiLinee(nlinee);
    };
    TetrisState.prototype.setStatoSfida = function () {
        if (this.clientsNumber == 2) {
            this.statoSfida = "ready";
            for (var entityId in this.players) {
                this.players[entityId].paused = false;
            }
        }
        if (this.clientsNumber == 1) {
            this.statoSfida = "waiting";
        }
        if (this.clientsNumber == 0) {
            this.statoSfida = "init";
        }
        //console.log("statoSfida -> " + this.statoSfida);
    };
    return TetrisState;
}());
exports.TetrisState = TetrisState;
