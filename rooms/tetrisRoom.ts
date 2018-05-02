import { Room, Client } from "colyseus";
import {TetrisState} from "./tetrisState";

export class TetrisRoom extends Room {

    maxClients = 4;
    i = 0;

    speedDivisor: number;


    onInit (options) {
        this.setState(new TetrisState());
        this.setPatchRate(50);
        this.setSimulationInterval(() => this.update());
        this.speedDivisor = 50;
    }

    onJoin (client) {
        console.log("onJoin");
    }

    onLeave (client) {
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
            if (data.dir == "left"){ this.state.players[client.sesssionId].moveLeft(); }
            if (data.dir == "right"){ this.state.players[client.sesssionId].moveRight(); }
            if (data.dir == "down"){ this.state.players[client.sesssionId].moveDown(); }
            if (data.dir == "rotate"){ this.state.players[client.sesssionId].rotate(); }
        }
    }

    onDispose () {
        console.log("Dispose BasicRoom");
    }

    update () {
        const d = Math.random();
        if (this.state.players) {
            if ((this.i % this.speedDivisor) == 0) {
                for (let entityId in this.state.players) {
                    this.state.players[entityId].moveDown();
                }
            }
            this.i++;
            if (this.i == (this.speedDivisor * 10)) {
                this.i = 0;
            }
        }
    }

}