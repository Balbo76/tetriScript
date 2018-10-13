import {Tetramino} from "./tetramino";
import {tetraminiCache} from "./tetramini";

export class Tetris {
    schermata : Array<any>;
    gameOver : boolean;
    winner: boolean;
    lineeFatte : number;
    tetramino : Tetramino;
    i: number;
    speedDivisor: number;
    paused: boolean;

    constructor ( ) {
        this.schermata = new Array();
        for (let i = 0; i<= 23; i++) {
            this.schermata.push(new Array(255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255));
        }
        this.schermata.push(new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255));
        this.gameOver = false;
        this.winner = null;
        this.lineeFatte = 0;
        this.tetramino = new Tetramino();
        this.i = 0;
        this.speedDivisor = 50;
        this.paused = true;
    }

    tick(){
        if (!this.paused ){
            if ((this.i % this.speedDivisor) == 0) {
                this.moveDown();
            }
            this.i++;
            if (this.i == (this.speedDivisor * 10)) {
                this.i = 0;
            }
        }
    }

    moveLeft(){
        if (!this.paused && this.canGoLeft()) { this.tetramino.x--; }
    }

    moveRight(){
        if (!this.paused && this.canGoRight()) { this.tetramino.x++; }
    }

    moveDown(){
        if (!this.paused){
            if (this.canGoDown()){
                this.tetramino.y++;
            }
            else {
                this.addToSchermata();
                const nLinee = this.checkForLines();
                this.lineeFatte = this.lineeFatte + nLinee;
                this.tetramino.corrente = this.tetramino.prossimo;
                for (; this.tetramino.prossimo == this.tetramino.corrente; ){
                    this.tetramino.prossimo = Math.floor(Math.random() * 7);
                }
                this.tetramino.x = 4;
                this.tetramino.y = 0;

                if (this.lineeFatte > 5){ this.speedDivisor = 40; }
                if (this.lineeFatte > 10){ this.speedDivisor = 30; }
                if (this.lineeFatte > 15){ this.speedDivisor = 20; }

                if (this.checkForGameOver()) {
                    this.gameOver = true;
                }

                return nLinee;
            }
        }
    }

    rotate(){
        if (!this.paused && this.canRotate()){ this.tetramino.rotazione = (this.tetramino.rotazione + 1 ) % 4; }
    }

    addToSchermata(){
        for (let i=0; i<=3; i++) {
            for (let j=0; j<=3; j++) {
                if (tetraminiCache[this.tetramino.corrente][this.tetramino.rotazione][j][i] == 1) {
                    let
                        lx = this.tetramino.x + i,
                        ly = this.tetramino.y + j;
                    this.schermata[ly][lx] = this.tetramino.corrente + 1;
                }
            }
        }
    }

    aggiungiLinee(nlinee){

        nlinee--;

        for (let k = 0; k < nlinee; k++) {
            for (let i = 1; i < 23; i++) {
                for (let j = 1; j <= 10; j++) {
                    this.schermata[i-1][j] = this.schermata[i][j];
                }
            }
        }

        for (let k = 0; k < nlinee; k++) {
            for (let j = 1; j <= 9; j++) {
                this.schermata[23 - k][j] = Math.floor(Math.random() * 7);
            }
        }

    }

    canGo(xx,yy,rr) {
        const
            mx = this.tetramino.x + xx,
            my = this.tetramino.y + yy,
            mr = (this.tetramino.rotazione + rr) % 4;
        let
            canMove = true;

        for (let i=0; i<=3; i++) {
            for (let j=0; j<=3; j++) {
                if (tetraminiCache[this.tetramino.corrente][mr][i][j] == 1) {
                    const
                        x = mx + j,
                        y = my + i;

                    if (this.schermata[y][x] > 0){
                        canMove = false;
                    }
                }
            }
        }
        return canMove;
    }

    canGoDown() {
        return this.canGo(0,1,0);
    }

    canGoLeft() {
        return this.canGo(-1,0,0);
    }

    canGoRight() {
        return this.canGo(1,0,0);
    }

    canRotate() {
        return this.canGo(0,0,1);
    }

    checkForLines(){
        let linee = [];
        for (let i = 4; i<= 23; i++) {
            let pieno = true;
            for (let j = 1; j <= 10; j++) {
                if (this.schermata[i][j] == 0){ pieno = false; }
            }
            if (pieno){ linee.push(i); }
        }
        for (let n = 0; n < linee.length; n++) {
            for (let i = linee[n] - 1; i >= 0; i--) {
                for (let j = 1; j <= 10; j++) {
                    this.schermata[i + 1][j] = this.schermata[i][j];
                }
            }
        }
        this.lineeFatte = this.lineeFatte + linee.length;

        return linee.length;
    };

    checkForGameOver(){
        return !this.canGo(0,0,0);
    };

}







