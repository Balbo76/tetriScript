const
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
    ];

let
    game = {},
    app = new PIXI.Application(800, 600, {backgroundColor : 0x000000}),
    left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40),
    space = keyboard(32);

function setup(){
    document.body.appendChild(app.view);

    // Keyboard events
    left.press = () => { if (state == play){ room.send({ dir: "left"}); } };
    left.release = () => { console.log('left release');  };
    up.press = () => { console.log('up press'); };
    up.release = () => { };
    right.press = () => { if (state == play){ room.send({ dir: "right"}); } };
    right.release = () => { };
    down.press = () => { if (state == play){ room.send({ dir: "down"}); } };
    down.release = () => { };
    space.press = () => {
        if (state == play){
            room.send({dir: "rotate"});
        };
        if (state == intro){
            room.send({start: true});
            state = play;
        }
    }
    space.release = () => { };


    basicText.x = 50;
    basicText.y = 240;

    app.stage.addChild(basicText);
    basicText.visible = false;

    app.ticker.add(delta => gameLoop(delta));



    room.onJoin.add(function () {
        console.log("joined");

    });

    room.onStateChange.addOnce((state) => { });
// new room state
    room.onStateChange.add((state) => { });
// listen to patches coming from the server
    room.onMessage.add((data) => { });

    room.listen("players/:uid", (change) => {
        if (change.operation == "add"){
        game.partita = change.value;
    }
});

    room.listen("players/:uid/gameOver", (change) => {
        if ((change.operation == "replace") && (change.value == true)){
        room.send({stop: true});
        game.gameState = "gameover";
    }
});

    room.listen("players/:uid/schermata/:i/:j", (change) => {
        if (change.operation == "replace"){
        game.partita.schermata[change.path["i"]][change.path["j"]] = change.value;
    }
});

    room.listen("players/:uid:/tetramino/:t", function(change)  {
        if (change.operation == "replace"){
            game.partita.tetramino[change.path["t"]] = change.value;
        }
    });




}

function keyboard(keyCode) {
    let key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
        }
        event.preventDefault();
    };

    //The `upHandler`
    key.upHandler = event => {
        if (event.keyCode === key.code) {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
        }
        event.preventDefault();
    };

    //Attach event listeners
    window.addEventListener(
        "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
        "keyup", key.upHandler.bind(key), false
    );
    return key;
}

function setTetraminoFillStyle(i) {
    if (i == 1) { return 0xb3ffff; }
    if (i == 2) { return 0x0073e6; }
    if (i == 3) { return 0xff9933; }
    if (i == 4) { return 0xffff00; }
    if (i == 5) { return 0x66ff33; }
    if (i == 6) { return 0xff66ff; }
    if (i == 7) { return 0xcc0000; }
};

var style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 144,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#ffeeee'], // gradient
    stroke: '#4a1850',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowColor: '#eeeeee',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
});
var basicText = new PIXI.Text('tetriScript', style);




var state = intro;




function gameLoop(delta) {
    state(delta);
}
let scene, newScene;
function play(delta) {
    basicText.visible = false;

    newScene = drawGameScene();
    app.stage.removeChild(scene);
    scene = newScene;
    app.stage.addChild(scene);

}
function intro(delta){
    basicText.visible = true;
}
function gameover(delta){}

function drawGameScene(){
    var graphics = new PIXI.Graphics();

    graphics.beginFill(0xffffff);
    graphics.lineStyle(2, 0xffffff, 1);

    graphics.moveTo(offsetX + 13, offsetY - 5);
    graphics.lineTo(offsetX + 13, offsetY + blockSize * 24 + 10);
    graphics.moveTo(offsetX + 5 , offsetY + blockSize * 24 + 5);
    graphics.lineTo(offsetX + 10 + 11 * blockSize, offsetY + blockSize * 24 + 5);
    graphics.moveTo(offsetX + 5 + 11 * blockSize, offsetY - 5);
    graphics.lineTo(offsetX + 5 + 11 * blockSize, offsetY + blockSize * 24 + 10);

    graphics.lineStyle(0, 0x000000, 0);

    if (game.partita && game.partita.schermata) {
        for (var i = 0; i < 24; i++) {
            for (var j = 1; j < 11; j++) {
                var x = j * blockSize, y = i * blockSize;
                if (game.partita.schermata[i][j] == 0) {
                    // context.fillStyle = "white";
                    //context.fillRect(offsetX + x, offsetY + y, blockSize - 1, blockSize - 1);
                }
                if (game.partita.schermata[i][j] > 0) {
                    let c = setTetraminoFillStyle(game.partita.schermata[i][j]);
                    if (game.partita.schermata[i][j] == 255) {
                        c = 0xFF0000;
                    }
                    graphics.beginFill(c);
                    graphics.drawRect(offsetX + x, offsetY + y, blockSize - 1, blockSize - 1);
                }
            }
        }
        // Draw current
        for (var i = 0; i <= 3; i++) {
            for (var j = 0; j <= 3; j++) {
                if (tetramini[game.partita.tetramino.corrente][game.partita.tetramino.rotazione][i][j] == 1) {
                    const
                        x = offsetX + ((game.partita.tetramino.x + j) * blockSize),
                        y = offsetY + ((game.partita.tetramino.y + i) * blockSize),
                        c  = setTetraminoFillStyle(game.partita.tetramino.corrente + 1);
                    graphics.beginFill(c);
                    graphics.drawRect(x, y, blockSize - 1, blockSize - 1);
                }
            }
        }
    }
    graphics.endFill();

    return graphics;
}


let host = window.document.location.host.replace(/:.*/, ''),
    client = new Colyseus.Client(location.protocol.replace("http", "ws") + host + (location.port ? ':'+location.port : '')),
    room = client.join("tetris");




setup();