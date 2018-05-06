import { EntityMap } from "colyseus";
import { Tetris} from "./tetris";

export class TetrisState {
    players: EntityMap<Tetris> = {};
    statoSfida: string;
    clientsNumber: number;


    constructor(){
        this.clientsNumber = 0;
        this.setStatoSfida();
    }

    addPlayer (client) {
        this.players[ client.id ] = new Tetris();
        this.clientsNumber++;
        this.setStatoSfida();
    }

    removePlayer (client) {
        this.clientsNumber--;
        delete this.players[ client.id ];
        this.setStatoSfida();
    }

    moveLeft (client){
        this.players[client.id].moveLeft();
    }

    moveRight (client){
        this.players[client.id].moveRight();
    }

    moveDown (client){
        this.players[client.id].moveDown();
    }

    rotate (client){
        this.players[client.id].rotate();
    }

    setStatoSfida(){
        if ( this.clientsNumber == 2) {
            this.statoSfida = "ready";
            for (let entityId in this.players) {
                this.players[entityId].paused = false;
            }
        }
        if (this.clientsNumber == 1) {
            this.statoSfida = "waiting";
        }
        if (this.clientsNumber == 0) {
            this.statoSfida = "init";
        }
        console.log("-> " + this.statoSfida);
    }

}


