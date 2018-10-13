export class Tetramino {

    corrente : number;
    x: number;
    y: number;
    rotazione: number;

    prossimo: number;

    constructor(){
        this.corrente = Math.floor(Math.random() * 7);
        this.prossimo = Math.floor(Math.random() * 7);
        this.rotazione = 0;
        this.x = 4;
        this.y = 0;
    }

}