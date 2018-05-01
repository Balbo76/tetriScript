import { Room } from "colyseus";

export class TetrisRoom extends Room {
    // this room supports only 4 clients connected
    maxClients = 4;

    i = 0;

    onInit (options) {
        const state = gameData();

        this.setState(state);
        this.setPatchRate(50);
        this.clock.setInterval(()=>{
            if ((this.i % 10) == 0){
                moveDown(this.state);
            }
            this.i++;
            if (this.i == 100){ this.i = 0; }
        },50);
        console.log("BasicRoom created!", options);
    }

    onJoin (client) {
        // this.broadcast(`${ client.sessionId } joined.`);
    }

    onLeave (client) {
        // this.broadcast(`${ client.sessionId } left.`);
    }

    onMessage (client, data) {
        //let state = this.state;
        if (data.dir){
            if (data.dir == "left"){ moveLeft(this.state); }
            if (data.dir == "right"){ moveRight(this.state); }
            if (data.dir == "down"){ moveDown(this.state); }
            if (data.dir == "rotate"){ rotate(this.state); }
        }

        this.broadcast({"state": this.state});




        //console.log("BasicRoom received message from", client.sessionId, ":", data);
        //this.broadcast(`(${ client.sessionId }) ${ data.message }`);
    }

    onDispose () {
        console.log("Dispose BasicRoom");
    }

}

const tetramini = [
    [
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ],
        [
            [0,1, 0, 0],
            [0,1, 0, 0],
            [0,1, 0, 0],
            [0,1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0,1, 0, 0],
            [0,1, 0, 0],
            [0,1, 0, 0],
            [0,1, 0, 0]
        ]
    ],

    [
        [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0,1, 1, 0],
            [0,1, 0, 0],
            [0,1, 0, 0],
            [0,0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0,0, 1, 0],
            [0,0, 1, 0],
            [0,1, 1, 0],
            [0,0, 0, 0]
        ]
    ],

    [
        [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0,1, 0, 0],
            [0,1, 0, 0],
            [0,1, 1, 0],
            [0,0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0,1, 1, 0],
            [0,0, 1, 0],
            [0,0, 1, 0],
            [0,0, 0, 0]
        ]
    ],


    [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    ],

    [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0]
        ]
    ],

    [
        [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0]
        ]
    ],

    [
        [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0]
        ]
    ],
];

var moveLeft = function(partita) {
    if (canGoLeft(partita)) { partita.tetramino.x = partita.tetramino.x - 1; }
};
var moveRight = function(partita){
    if (canGoRight(partita)) { partita.tetramino.x = partita.tetramino.x + 1; }
};
var moveDown = function(partita){
    if (canGoDown(partita)){
        partita.tetramino.y = partita.tetramino.y + 1;
    }
    else {
        var nLinee, gameOver;

        addToSchermata(partita);
        nLinee = checkForLines(partita);

        partita.tetramino.corrente = partita.tetramino.prossimo;
        partita.tetramino.prossimo = Math.floor(Math.random() * 7);
        partita.tetramino.x = 4;
        partita.tetramino.y = 0;

        if (checkForGameOver(partita)) {
            console.log("GAME OVER !!!!");
            partita.gameOver = true;
        }
    }
};

var	rotate = function(partita){
    if (canRotate(partita)){ partita.tetramino.rotazione = (partita.tetramino.rotazione + 1 ) % 4; }
};
var canGo = function(xx,yy,rr,partita) {
    var
        canMove = true,
        mx = partita.tetramino.x + xx,
        my = partita.tetramino.y + yy,
        mr = (partita.tetramino.rotazione + rr) % 4;

    for (var i=0; i<=3; i++) {
        for (var j=0; j<=3; j++) {
            if (tetramini[partita.tetramino.corrente][mr][i][j] == 1) {
                var
                    x = mx + j,
                    y = my + i;

                if (partita.schermata[y][x] > 0){
                    canMove = false;
                }
            }
        }
    }
    return canMove;
};
var canGoDown = function(partita) {
    return canGo(0,1,0,partita);
};
var canGoLeft = function(partita) {
    return canGo(-1,0,0,partita);
};
var canGoRight = function(partita) {
    return canGo(1,0,0,partita);
};
var canRotate = function(partita) {
    return canGo(0,0,1,partita);
};

var addToSchermata = function(partita) {
    for (var i=0; i<=3; i++) {
        for (var j=0; j<=3; j++) {
            if (tetramini[partita.tetramino.corrente][partita.tetramino.rotazione][j][i] == 1) {
                var
                    lx = partita.tetramino.x + i,
                    ly = partita.tetramino.y + j;
                partita.schermata[ly][lx] = partita.tetramino.corrente + 1;
            }
        }
    }
}

var checkForLines = function(partita){
    var linee = [];
    for (var i = 4; i<= 23; i++) {
        var pieno = true;
        for (var j = 1; j <= 10; j++) {
            if (partita.schermata[i][j] == 0){ pieno = false; }
        }
        if (pieno){ linee.push(i); }
    }
    for (var n = 0; n < linee.length; n++) {
        for (var i = linee[n] - 1; i >= 0; i--) {
            for (var j = 1; j <= 10; j++) {
                partita.schermata[i + 1][j] = partita.schermata[i][j];
            }
        }
    }
    partita.lineeFatte = partita.lineeFatte + linee.length;
    console.log("fatte linee n: " + partita.lineeFatte);
    return linee.length;
};

var checkForGameOver = function(partita){
    return !canGo(0,0,0,partita);
};

var gameData = function(){
    var data = {
        lineeFatte: 0,
        schermata: [],
        gameOver: false,
        tetramino: {
            corrente : Math.floor(Math.random() * 7),
            rotazione: 0,
            prossimo: Math.floor(Math.random() * 7),
            x: 4,
            y: 0,
        }
    }
    for (var i = 0; i<= 23; i++) {
        data.schermata[i] = new Array(255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255);
    }
    data.schermata[24] = new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255);

    return data;
};
