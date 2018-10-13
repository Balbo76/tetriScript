import { EntityMap } from "colyseus";
import { Tetris} from "./tetris";

export class TetrisState {
    players: EntityMap<Tetris> = {};
    playerA: String;
    playerB: String;
    statoSfida: string;
    clientsNumber: number;


    constructor(){
        this.clientsNumber = 0;
        this.setStatoSfida();
    }

    addPlayer (client) {
        if (!this.players[ client.id ]){
            this.players[ client.id ] = new Tetris();
            this.clientsNumber++;
            if (this.clientsNumber == 1){ this.playerA = client.id }
            if (this.clientsNumber == 2){ this.playerB = client.id; }
            this.setStatoSfida();
        }
    }

    removePlayer (client) {
        delete this.players[ client.id ];
        this.clientsNumber--;
        this.setStatoSfida();
    }

    moveLeft (client){
        this.players[client.id].moveLeft();
    }

    moveRight (client){
        this.players[client.id].moveRight();
    }

    moveDown (client){
        const nlinee = this.players[client.id].moveDown();
        if (nlinee > 1){
            if (client.id == this.playerA){
                this.aggiungiLinee(this.playerB, nlinee);
            } else {
                this.aggiungiLinee(this.playerA, nlinee);
            }
        }

    }

    rotate (client){
        this.players[client.id].rotate();
    }

    aggiungiLinee(player, nlinee){
        this.players[player].aggiungiLinee(nlinee);
    }

    setStatoSfida(){
        if ( this.clientsNumber == 2) {
            this.statoSfida = "ready";
            for (let entityId in this.players) {
                this.players[entityId].paused = false;
            }
        }
        if (this.clientsNumber == 1) { this.statoSfida = "waiting"; }
        if (this.clientsNumber == 0) { this.statoSfida = "init"; }
        //console.log("statoSfida -> " + this.statoSfida);
    }

}


