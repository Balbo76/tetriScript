import { Room, Client } from "colyseus";
import {TetrisState} from "./tetrisState";

export class TetrisRoom extends Room {

    maxClients = 2;

    onInit (options) { console.log("Room - onInit"); this.setSimulationInterval(() => this.update(), 20); this.setState(new TetrisState()); }

    onJoin (client) { console.log("Room - onJoin"); }

    onLeave (client) { console.log("Room - onLeave"); this.state.removePlayer(client); }

    onMessage (client, data) { console.log("Room - onMessage");

        if (data.start){ this.state.addPlayer(client); }
        if (data.stop){ this.state.removePlayer(client); }

        // Input utente durante il gioco
        if (data.dir){
            if (data.dir == "left"){ this.state.moveLeft(client); }
            if (data.dir == "right"){ this.state.moveRight(client); }
            if (data.dir == "down"){ this.state.moveDown(client); }
            if (data.dir == "rotate"){ this.state.rotate(client); }
        }
    }

    onDispose () { console.log("Room - onDispose"); }

    update () {  // console.log("Room - update");

        const d = Math.random();
        let gameOver = false, cId  = null;

        if (this.state) {
            for (let entityId in this.state.players) {
                this.state.players[entityId].tick();
                if (this.state.players[entityId].gameOver == true){
                    gameOver = true;
                    cId = entityId;
                }
            }

            if (gameOver) {
                for (let entityId in this.state.players) {
                    this.state.players[entityId].gameOver = true;
                    if (entityId == cId){
                        this.state.players[entityId].winner = false;
                    } else {
                        this.state.players[entityId].winner = true;
                    }
                }

            }
        }
    }

}