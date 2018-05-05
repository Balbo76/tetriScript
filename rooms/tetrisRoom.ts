import { Room, Client } from "colyseus";
import {TetrisState} from "./tetrisState";

export class TetrisRoom extends Room {

    maxClients = 2;

    i: number;
    speedDivisor: number;
    stato: string;


    onInit (options) {
        this.setState(new TetrisState());
        this.setSimulationInterval(() => this.update(), 20);
        this.speedDivisor = 50;
        this.i = 0;
        this.stato = "started";
    }

    onJoin (client) {
        console.log("onJoin");
        //console.log(this.state);
    }

    onLeave (client) {
        console.log("onLeave");
        this.state.removePlayer(client);
        this.stato = "waiting";
    }

    onMessage (client, data) {
        if (data.start){
            this.state.addPlayer(client);
            if (this.clients.length == 2) {
                this.stato = "playing";
            }
            if (this.clients.length == 1) {
                this.stato = "waiting";
            }

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

        if (this.stato == "playing"){
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