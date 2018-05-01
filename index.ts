import * as path from 'path';
import * as express from 'express';
import * as serveIndex from 'serve-index';
import { createServer } from 'http';
import { Server } from 'colyseus';
import { monitor } from '@colyseus/monitor';
import {TetrisRoom} from "./rooms/tetris-room";

const port = Number(process.env.PORT || 2657);
const app = express();
const gameServer = new Server({
    server: createServer(app)
});

gameServer.register("tetris", TetrisRoom);

app.use('/', express.static(path.join(__dirname, "static")));

app.use('/colyseus', monitor(gameServer));

gameServer.listen(port);

console.log(`Ciao: http://localhost:${ port }`);