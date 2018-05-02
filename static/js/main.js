var
    canvas = document.getElementById("tetrisCanvas"),
    context = canvas.getContext("2d"),
    canvasHeight = canvas.height,
    canvasWidth = canvas.width,
    blockSize = 22,
    offsetX = 110,
    offsetY = 40,
    tetramini = [
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
    ],

    System = function() {
        var that = this;
        this.output = new Screen();
        this.input = function(event) {
            if (that.output.gameState == "intro") {
                if(event.keyCode == 32) {
                    room.send({start: true});
                    that.output.gameState = "partita";
                }
            } else if (that.output.gameState == "partita") {
                if(event.keyCode == 37) {
                    room.send({ dir: "left"});

                }
                if(event.keyCode == 39) {
                    room.send({ dir: "right"});

                }
                if(event.keyCode == 40) {
                    room.send({ dir: "down"});

                }
                if(event.keyCode == 32) {
                    room.send({ dir: "rotate"});

                }
            } else if (that.output.gameState == "gameover") {
                if(event.keyCode == 32) {
                    that.output.gameState = "intro";
                }
            }
        };
    },

    Screen = function() {
        this.partita = false;
        this.gameState = "intro";
        this.processFrame = function() {
            if (this.gameState == "intro") { this.drawTitle(); }
            if (this.gameState == "partita") {  this.drawFrame();  }
            if (this.gameState == "gameover") { this.drawGameOver(); }
        };
        this.clearScreen = function() {
            context.fillStyle = "black";
            context.fillRect(0,  0,  canvasWidth, canvasHeight);
        };
        this.drawTitle = function() {
            this.clearScreen();
            context.font = "140px Times";
            context.fillStyle = "white";
            context.fillText("Tetris", 80,  350);
        };
        this.drawGameOver = function() {
            // this.clearScreen();
            context.font = "130px Times";
            context.fillStyle = "red";
            context.fillText("Game Over", 100,  400);
        };
        this.setTetraminoFillStyle = function(i) {
            if (i == 1) { context.fillStyle = "#b3ffff"; }
            if (i == 2) { context.fillStyle = "#0073e6"; }
            if (i == 3) { context.fillStyle = "#ff9933"; }
            if (i == 4) { context.fillStyle = "#ffff00"; }
            if (i == 5) { context.fillStyle = "#66ff33"; }
            if (i == 6) { context.fillStyle = "#ff66ff"; }
            if (i == 7) { context.fillStyle = "#cc0000"; }
        };
        this.drawFrameTest = function(partita){
            this.clearScreen();
            for (var i=0; i<=24; i++){
                for (var j=0; j<=11; j++){
                    var x = j * blockSize, y = i * blockSize;

                    if (partita.schermata[i][j] == 0) {
                        context.fillStyle = "white";
                        context.fillRect(offsetX + x, offsetY + y, blockSize - 1, blockSize - 1);
                    }

                    if (partita.schermata[i][j] > 0) {
                        this.setTetraminoFillStyle(partita.schermata[i][j]);
                        if (partita.schermata[i][j] == 255) { context.fillStyle = "#FF0000"; }
                        context.fillRect(offsetX + x, offsetY + y, blockSize - 1, blockSize - 1);
                    }
                }
            }

            // Draw current
            for (var i=0; i<=3; i++) {
                for (var j=0; j<=3; j++) {
                    if (tetramini[partita.tetramino.corrente][partita.tetramino.rotazione][i][j] == 1) {
                        var
                            x = offsetX + ((partita.tetramino.x + j) * blockSize),
                            y = offsetY + ((partita.tetramino.y + i) * blockSize);
                        this.setTetraminoFillStyle(partita.tetramino.corrente + 1);
                        context.fillRect(x,  y, blockSize - 1, blockSize - 1);
                    }
                }
            }
        };
        this.drawFrame = function(){

            var partita = this.partita;

            this.clearScreen();

            context.strokeStyle = "white";
            context.beginPath();
            context.moveTo(offsetX + 13, offsetY - 5);
            context.lineTo(offsetX + 13, offsetY + blockSize * 24 + 10);
            context.moveTo(offsetX + 5 , offsetY + blockSize * 24 + 5);
            context.lineTo(offsetX + 10 + 11 * blockSize, offsetY + blockSize * 24 + 5);
            context.moveTo(offsetX + 5 + 11 * blockSize, offsetY - 5);
            context.lineTo(offsetX + 5 + 11 * blockSize, offsetY + blockSize * 24 + 10);
            context.stroke();

            if (partita.schermata) {


                for (var i = 0; i < 24; i++) {
                    for (var j = 1; j < 11; j++) {
                        var x = j * blockSize, y = i * blockSize;

                        if (partita.schermata[i][j] == 0) {
                            context.fillStyle = "white";
                            //context.fillRect(offsetX + x, offsetY + y, blockSize - 1, blockSize - 1);
                        }

                        if (partita.schermata[i][j] > 0) {
                            this.setTetraminoFillStyle(partita.schermata[i][j]);
                            if (partita.schermata[i][j] == 255) {
                                context.fillStyle = "#FF0000";
                            }
                            context.fillRect(offsetX + x, offsetY + y, blockSize - 1, blockSize - 1);
                        }
                    }
                }

                // Draw current
                for (var i = 0; i <= 3; i++) {
                    for (var j = 0; j <= 3; j++) {
                        if (tetramini[partita.tetramino.corrente][partita.tetramino.rotazione][i][j] == 1) {
                            var
                                x = offsetX + ((partita.tetramino.x + j) * blockSize),
                                y = offsetY + ((partita.tetramino.y + i) * blockSize);
                            this.setTetraminoFillStyle(partita.tetramino.corrente + 1);
                            context.fillRect(x, y, blockSize - 1, blockSize - 1);
                        }
                    }
                }

            }

        };
        this.setPartita = function(partita){
            this.partita = partita;
        };
    };

var system = new System();
document.addEventListener('keydown', system.input); // Motore Input
setInterval(function(){ system.output.processFrame(); }, 40);	// Motore grafico

var host = window.document.location.host.replace(/:.*/, '');

var client = new Colyseus.Client(location.protocol.replace("http", "ws") + host + (location.port ? ':'+location.port : ''));
var room = client.join("tetris");
room.onJoin.add(function () {
    console.log("joined");

});

room.onStateChange.addOnce(function(state) {
    //system.output.partita = state;
    console.log("initial room state:", state);
});

// new room state
room.onStateChange.add(function(state) {
    //system.output.partita = state;
    // this signal is triggered on each patch
    console.log("state: ", state);
});

// listen to patches coming from the server
room.onMessage.add(function(data) {
    console.log(data.state.gameOver);
    if (data.state.gameOver){ system.output.gameState = "gameover"; }

    if (data.state){
        //system.output.partita = data.state;
    }

});


room.listen("players/:uid", function(change)  {
    //alert();
    console.log(change.operation); // => "replace" (can be "add", "remove" or "replace")
    console.log(change.path["uid"]); // => "f98h3f"
    console.log(change.value); // => 1
    if (change.operation == "add"){
        system.output.partita = change.value;
    }
});
room.listen("players/:uid/gameOver", function(change)  {
    if (change.operation == "replace"){
        room.send({stop: true});
        system.output.gameState = "gameover";
    }
});
room.listen("players/:uid/schermata/:i/:j", function(change)  {
    if (change.operation == "replace"){
        system.output.partita.schermata[change.path["i"]][change.path["j"]] = change.value;
    }
});
room.listen("players/:uid:/tetramino/:t", function(change)  {
    //alert();
    console.log(change.operation); // => "replace" (can be "add", "remove" or "replace")
    console.log(change.path["t"]); // => "f98h3f"
    console.log(change.value); // => 1
    if (change.operation == "replace"){

        system.output.partita.tetramino[change.path["t"]] = change.value;
    }
});


// send message to room
// room.send({ message: input.value });