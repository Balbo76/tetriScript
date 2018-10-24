"use strict";
exports.__esModule = true;
var Tetramino = /** @class */ (function () {
    function Tetramino() {
        this.corrente = Math.floor(Math.random() * 7);
        this.prossimo = Math.floor(Math.random() * 7);
        this.rotazione = 0;
        this.x = 4;
        this.y = 0;
    }
    return Tetramino;
}());
exports.Tetramino = Tetramino;
