import { Room, Client } from "colyseus";
import {TetrisState} from "./tetrisState";

export class TetrisRoom extends Room {

    maxClients = 2;

    onInit (options) {
        this.setState(new TetrisState());
        this.setSimulationInterval(() => this.update(), 20);
    }

    onJoin (client) {
        console.log("onJoin");
        //console.log(this.state);
    }

    onLeave (client) {
        console.log("onLeave");
        this.state.removePlayer(client);
    }

    onMessage (client, data) {
        if (data.start){
            this.state.addPlayer(client);
        }
        if (data.stop){
            this.state.removePlayer(client);
            console.log("stop");
        }
        if (data.dir){
            if (data.dir == "left"){ this.state.moveLeft(client); }
            if (data.dir == "right"){ this.state.moveRight(client); }
            if (data.dir == "down"){ this.state.moveDown(client); }
            if (data.dir == "rotate"){ this.state.rotate(client); }
        }
    }

    onDispose () {
        console.log("Dispose BasicRoom");
    }

    update () {
        const d = Math.random();

        for (let entityId in this.state.players) {
            this.state.players[entityId].tick();
        }

    }

}