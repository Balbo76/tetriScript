"use strict";
exports.__esModule = true;
var tetramino_1 = require("./tetramino");
var tetramini_1 = require("./tetramini");
var Tetris = /** @class */ (function () {
    function Tetris() {
        this.schermata = new Array();
        for (var i = 0; i <= 23; i++) {
            this.schermata.push(new Array(255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255));
        }
        this.schermata.push(new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255));
        this.gameOver = false;
        this.winner = null;
        this.lineeFatte = 0;
        this.tetramino = new tetramino_1.Tetramino();
        this.i = 0;
        this.speedDivisor = 50;
        this.paused = true;
    }
    Tetris.prototype.tick = function () {
        if (!this.paused) {
            if ((this.i % this.speedDivisor) == 0) {
                this.moveDown();
            }
            this.i++;
            if (this.i == (this.speedDivisor * 10)) {
                this.i = 0;
            }
        }
    };
    Tetris.prototype.moveLeft = function () {
        if (!this.paused && this.canGoLeft()) {
            this.tetramino.x--;
        }
    };
    Tetris.prototype.moveRight = function () {
        if (!this.paused && this.canGoRight()) {
            this.tetramino.x++;
        }
    };
    Tetris.prototype.moveDown = function () {
        if (!this.paused) {
            if (this.canGoDown()) {
                this.tetramino.y++;
            }
            else {
                this.addToSchermata();
                var nLinee = this.checkForLines();
                this.lineeFatte = this.lineeFatte + nLinee;
                this.tetramino.corrente = this.tetramino.prossimo;
                for (; this.tetramino.prossimo == this.tetramino.corrente;) {
                    this.tetramino.prossimo = Math.floor(Math.random() * 7);
                }
                this.tetramino.x = 4;
                this.tetramino.y = 0;
                if (this.lineeFatte > 5) {
                    this.speedDivisor = 40;
                }
                if (this.lineeFatte > 10) {
                    this.speedDivisor = 30;
                }
                if (this.lineeFatte > 15) {
                    this.speedDivisor = 20;
                }
                if (this.checkForGameOver()) {
                    this.gameOver = true;
                }
                return nLinee;
            }
        }
    };
    Tetris.prototype.rotate = function () {
        if (!this.paused && this.canRotate()) {
            this.tetramino.rotazione = (this.tetramino.rotazione + 1) % 4;
        }
    };
    Tetris.prototype.addToSchermata = function () {
        for (var i = 0; i <= 3; i++) {
            for (var j = 0; j <= 3; j++) {
                if (tetramini_1.tetraminiCache[this.tetramino.corrente][this.tetramino.rotazione][j][i] == 1) {
                    var lx = this.tetramino.x + i, ly = this.tetramino.y + j;
                    this.schermata[ly][lx] = this.tetramino.corrente + 1;
                }
            }
        }
    };
    Tetris.prototype.aggiungiLinee = function (nlinee) {
        nlinee--;
        for (var k = 0; k < nlinee; k++) {
            for (var i = 1; i < 23; i++) {
                for (var j = 1; j <= 10; j++) {
                    this.schermata[i - 1][j] = this.schermata[i][j];
                }
            }
        }
        for (var k = 0; k < nlinee; k++) {
            for (var j = 1; j <= 9; j++) {
                this.schermata[23 - k][j] = Math.floor(Math.random() * 7);
            }
        }
    };
    Tetris.prototype.canGo = function (xx, yy, rr) {
        var mx = this.tetramino.x + xx, my = this.tetramino.y + yy, mr = (this.tetramino.rotazione + rr) % 4;
        var canMove = true;
        for (var i = 0; i <= 3; i++) {
            for (var j = 0; j <= 3; j++) {
                if (tetramini_1.tetraminiCache[this.tetramino.corrente][mr][i][j] == 1) {
                    var x = mx + j, y = my + i;
                    if (this.schermata[y][x] > 0) {
                        canMove = false;
                    }
                }
            }
        }
        return canMove;
    };
    Tetris.prototype.canGoDown = function () {
        return this.canGo(0, 1, 0);
    };
    Tetris.prototype.canGoLeft = function () {
        return this.canGo(-1, 0, 0);
    };
    Tetris.prototype.canGoRight = function () {
        return this.canGo(1, 0, 0);
    };
    Tetris.prototype.canRotate = function () {
        return this.canGo(0, 0, 1);
    };
    Tetris.prototype.checkForLines = function () {
        var linee = [];
        for (var i = 4; i <= 23; i++) {
            var pieno = true;
            for (var j = 1; j <= 10; j++) {
                if (this.schermata[i][j] == 0) {
                    pieno = false;
                }
            }
            if (pieno) {
                linee.push(i);
            }
        }
        for (var n = 0; n < linee.length; n++) {
            for (var i = linee[n] - 1; i >= 0; i--) {
                for (var j = 1; j <= 10; j++) {
                    this.schermata[i + 1][j] = this.schermata[i][j];
                }
            }
        }
        this.lineeFatte = this.lineeFatte + linee.length;
        return linee.length;
    };
    ;
    Tetris.prototype.checkForGameOver = function () {
        return !this.canGo(0, 0, 0);
    };
    ;
    return Tetris;
}());
exports.Tetris = Tetris;
