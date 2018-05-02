export class Tetramino {

    corrente : number;
    prossimo: number;
    rotazione: number;
    x: number;
    y: number;

    constructor(){
        this.corrente = Math.floor(Math.random() * 7);
        this.prossimo = Math.floor(Math.random() * 7);
        this.rotazione = 0;
        this.x = 4;
        this.y = 0;
    }

}