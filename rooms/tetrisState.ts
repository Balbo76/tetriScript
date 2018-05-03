import { EntityMap } from "colyseus";
import { Tetris} from "./tetris";

export class TetrisState {
    players: EntityMap<Tetris> = {};

    addPlayer (client) {
        this.players[ client.id ] = new Tetris();
    }

    removePlayer (client) {
        delete this.players[ client.id ];
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


}


