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
    nemico = {},
    app = new PIXI.Application(800, 600, {backgroundColor : 0x000000, antialias: true}),
    keyboard = function(keyCode){
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
    },


    basicText = new PIXI.Text(),
    txtGameOver = new PIXI.Text(),
    txtLinee = new PIXI.Text(),
    state = intro,
    scene, enemyScene,
    host = window.document.location.host.replace(/:.*/, ''),
    client = new Colyseus.Client(location.protocol.replace("http", "ws") + host + (location.port ? ':'+location.port : '')),
    room = client.join("tetris");

function getTetraminoFillStyle(i) {
    if (i == 1) { return 0xb3ffff; }
    if (i == 2) { return 0x0073e6; }
    if (i == 3) { return 0xff9933; }
    if (i == 4) { return 0xffff00; }
    if (i == 5) { return 0x66ff33; }
    if (i == 6) { return 0xff66ff; }
    if (i == 7) { return 0xcc0000; }
};

function gameLoop(delta) {
    state(delta);
}
function play(delta) {
    basicText.visible = false;
    txtLinee.visible = true;
    app.stage.removeChild(scene);
    app.stage.removeChild(enemyScene);
    scene = drawGameScene();
    enemyScene = drawEnemyScene();
    app.stage.addChild(scene);
    app.stage.addChild(enemyScene);
}
function intro(delta){
    basicText.visible = true;
    txtGameOver.visible = false;
}
function gameover(delta){ txtGameOver.visible = true; }

function drawGameScene(){
    var graphics = new PIXI.Graphics();

    graphics.beginFill(0xffffff);
    graphics.lineStyle(2, 0xffffff, 1);

    graphics.moveTo(offsetX + 13, offsetY + blockSize * 4 - 5);
    graphics.lineTo(offsetX + 13, offsetY + blockSize * 24 + 10);
    graphics.moveTo(offsetX + 5 , offsetY + blockSize * 24 + 5);
    graphics.lineTo(offsetX + 10 + 11 * blockSize, offsetY + blockSize * 24 + 5);
    graphics.moveTo(offsetX + 5 + 11 * blockSize, offsetY + blockSize * 4 - 5);
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
                    let c = getTetraminoFillStyle(game.partita.schermata[i][j]);
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
                        c  = getTetraminoFillStyle(game.partita.tetramino.corrente + 1);
                    graphics.beginFill(c);
                    graphics.drawRect(x, y, blockSize - 1, blockSize - 1);
                }
            }
        }

        // Draw next
        for (var i = 0; i <= 3; i++) {
            for (var j = 0; j <= 3; j++) {
                if (tetramini[game.partita.tetramino.prossimo][0][i][j] == 1) {
                    const
                        x = 500 +  j * blockSize,
                        y = 50 +  i * blockSize,
                        c  = getTetraminoFillStyle(game.partita.tetramino.prossimo + 1);
                    graphics.beginFill(c);
                    graphics.drawRect(x, y, blockSize - 1, blockSize - 1);
                }
            }
        }
    }
    graphics.endFill();

    return graphics;
}

function drawEnemyScene(){
    let graphics = new PIXI.Graphics();
    let offsetX = 500;
    let offsetY = 250;
    let blockSize = 13;

    graphics.beginFill(0xffffff);
    graphics.lineStyle(2, 0xffffff, 1);

    graphics.moveTo(offsetX + 13, offsetY + blockSize * 4 - 5);
    graphics.lineTo(offsetX + 13, offsetY + blockSize * 24 + 10);
    graphics.moveTo(offsetX + 5 , offsetY + blockSize * 24 + 5);
    graphics.lineTo(offsetX + 10 + 11 * blockSize, offsetY + blockSize * 24 + 5);
    graphics.moveTo(offsetX + 5 + 11 * blockSize, offsetY + blockSize * 4 - 5);
    graphics.lineTo(offsetX + 5 + 11 * blockSize, offsetY + blockSize * 24 + 10);

    graphics.lineStyle(0, 0x000000, 0);

    if (nemico.partita && nemico.partita.schermata) {
        for (var i = 0; i < 24; i++) {
            for (var j = 1; j < 11; j++) {
                var x = j * blockSize, y = i * blockSize;
                if (nemico.partita.schermata[i][j] == 0) {
                    // context.fillStyle = "white";
                    //context.fillRect(offsetX + x, offsetY + y, blockSize - 1, blockSize - 1);
                }
                if (nemico.partita.schermata[i][j] > 0) {
                    let c = getTetraminoFillStyle(nemico.partita.schermata[i][j]);
                    if (nemico.partita.schermata[i][j] == 255) {
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
                if (tetramini[nemico.partita.tetramino.corrente][nemico.partita.tetramino.rotazione][i][j] == 1) {
                    const
                        x = offsetX + ((nemico.partita.tetramino.x + j) * blockSize),
                        y = offsetY + ((nemico.partita.tetramino.y + i) * blockSize),
                        c  = getTetraminoFillStyle(nemico.partita.tetramino.corrente + 1);
                    graphics.beginFill(c);
                    graphics.drawRect(x, y, blockSize - 1, blockSize - 1);
                }
            }
        }










    }
    graphics.endFill();

    return graphics;
}

function setUpTexts() {
    const
        style = new PIXI.TextStyle({
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
        }),

        style2 = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#ffffff'], // gradient
            stroke: '#4a1850',
            strokeThickness: 0,
            dropShadow: false,
            dropShadowColor: '#eeeeee',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440
        });


    basicText.text = 'tetriScript';
    txtGameOver.text = 'Game Over';
    txtLinee.text = 'Linee fatte: 0';

    basicText.style = style;
    txtGameOver.style = style;
    txtLinee.style = style2;

    basicText.x = 50;
    basicText.y = 240;
    app.stage.addChild(basicText);
    basicText.visible = false;

    txtGameOver.x = 50;
    txtGameOver.y = 240;
    app.stage.addChild(txtGameOver);
    txtGameOver.visible = false;

    txtLinee.x = 550;
    txtLinee.y = 100;
    app.stage.addChild(txtLinee);
    txtLinee.visible = false;
}

function setUpKeyboardEvents() {
    let
        left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40),
        space = keyboard(32);

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
        if (state == gameover){
            state = intro;
            app.stage.removeChild(scene);
        };
    }
    space.release = () => { };
}

function setupServerCallbacks() {
    room.onJoin.add(function () { console.log("joined"); });
    room.onStateChange.addOnce((state) => { console.log(state); });
    room.onStateChange.add((state) => { console.log(state); }); // new room state
    room.onMessage.add((data) => { }); // listen to patches coming from the server

    room.listen("players/:uid", (change)=>{
        console.log(change.path["uid"]);
        console.log(client.id);

        if (change.path["uid"] == client.id){
            if (change.operation == "add"){
                game.partita = change.value;
            }
        } else {
            if (change.operation == "add"){
                nemico.partita = change.value;
            }
        }


    });

    room.listen("players/:uid/gameOver", (change) => {
        if (change.path["uid"] == client.id) {
            if ((change.operation == "replace") && (change.value == true)) {
                room.send({stop: true});
                game.gameState = "gameover";
                state = gameover;
            }
        }
    });

    room.listen("players/:uid/schermata/:i/:j", (change) => {
        if (change.path["uid"] == client.id) {
            if (change.operation == "replace") {
                game.partita.schermata[change.path["i"]][change.path["j"]] = change.value;
            }
        } else {
            if (change.operation == "replace") {
                nemico.partita.schermata[change.path["i"]][change.path["j"]] = change.value;
            }
        }
    });

    room.listen("players/:uid/tetramino/:t", function(change)  {
        if (change.path["uid"] == client.id) {

            if (change.operation == "replace") {
                game.partita.tetramino[change.path["t"]] = change.value;
            }
        } else {
            if (change.operation == "replace") {
                nemico.partita.tetramino[change.path["t"]] = change.value;
            }
        }
    });

    room.listen("players/:uid/lineeFatte", (change) => {
        if (change.path["uid"] == client.id) {
            if (change.operation == "replace") {
                txtLinee.text = "Fatte linee: " + change.value;
            }
        }
    });
}

function start(){

    setUpTexts();
    setUpKeyboardEvents();
    setupServerCallbacks();
    //Setup gameloop
    document.body.appendChild(app.view);
    app.ticker.add(delta => gameLoop(delta));
}

start();
