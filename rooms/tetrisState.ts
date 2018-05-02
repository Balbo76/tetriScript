import { EntityMap } from "colyseus";
import { Tetris} from "./tetris";

export class TetrisState {
    players: EntityMap<Tetris> = {};

    addPlayer (client) {
        this.players[ client.sesssionId ] = new Tetris();
    }

    removePlayer (client) {
        delete this.players[ client.sessionId ];
    }
}


