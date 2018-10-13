const
    blockSize = 22,
    offsetX = 110,
    offsetY = 40,
    enemyBlockSize = 13,
    enemyOffsetX = 500,
    enemyOffsetY = 250,

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
        key.timer = undefined;
        //The `downHandler`
        key.downHandler = event => {
            if (event.keyCode === key.code) {
                if (key.isUp && key.press) key.press();
                key.isDown = true;
                key.isUp = false;
                key.timer = setTimeout(()=>{
                    key.isDown = false;
                    key.isUp = true;
                }, 100);
            }
            event.preventDefault();
        };

        //The `upHandler`
        key.upHandler = event => {
            if (event.keyCode === key.code) {
                if (key.isDown && key.release) key.release();
                key.isDown = false;
                key.isUp = true;
                clearTimeout(key.timer);
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
    txtDesc = new PIXI.Text(),
    txtLinee = new PIXI.Text(),
    txtSfidante = new PIXI.Text(),


    scene, enemyScene,

    introScene = new PIXI.Container(),
    gameScene = new PIXI.Container(),
    gameOverScene = new PIXI.Container(),

    host = window.document.location.host.replace(/:.*/, ''),
    client = new Colyseus.Client(location.protocol.replace("http", "ws") + host + (location.port ? ':'+location.port : '')),
    room = client.join("tetris"),

    getTetraminoFillStyle = (i) => {
        if (i == 1) { return 0xb3ffff; }
        if (i == 2) { return 0x0073e6; }
        if (i == 3) { return 0xff9933; }
        if (i == 4) { return 0xffff00; }
        if (i == 5) { return 0x66ff33; }
        if (i == 6) { return 0xff66ff; }
        if (i == 7) { return 0xcc0000; }
    },

    // Scene functions
    gameLoop = (delta)  => {
        state(delta);
    },

    play = (delta) =>  {
        introScene.visible = false;
        gameOverScene.visible = false;
        gameScene.visible = true;


        gameScene.removeChild(scene);
        gameScene.removeChild(enemyScene);
        scene = drawGameScene();
        enemyScene = drawEnemyScene();
        gameScene.addChild(scene);
        gameScene.addChild(enemyScene);
    },

    intro = (delta) => {
        introScene.visible = true;
        gameOverScene.visible = false;
        gameScene.visible = false;
    },

    gameover = (delta) => {
        introScene.visible = false;
        gameOverScene.visible = true;
        gameScene.visible = true;
    },

    state = intro,

    winner = false,

    // Draw game loop functions
    drawGameScene = () => {
        const graphics = new PIXI.Graphics();

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
    },

    drawEnemyScene = () => {
        const enemyGraphics = new PIXI.Graphics();

        enemyGraphics.beginFill(0xffffff);
        enemyGraphics.lineStyle(2, 0xffffff, 1);

        enemyGraphics.moveTo(enemyOffsetX + 13, enemyOffsetY + enemyBlockSize * 4 - 5);
        enemyGraphics.lineTo(enemyOffsetX + 13, enemyOffsetY + enemyBlockSize * 24 + 10);
        enemyGraphics.moveTo(enemyOffsetX + 5 , enemyOffsetY + enemyBlockSize * 24 + 5);
        enemyGraphics.lineTo(enemyOffsetX + 10 + 11 * enemyBlockSize, enemyOffsetY + enemyBlockSize * 24 + 5);
        enemyGraphics.moveTo(enemyOffsetX + 5 + 11 * enemyBlockSize, enemyOffsetY + enemyBlockSize * 4 - 5);
        enemyGraphics.lineTo(enemyOffsetX + 5 + 11 * enemyBlockSize, enemyOffsetY + enemyBlockSize * 24 + 10);

        enemyGraphics.lineStyle(0, 0x000000, 0);

        if (nemico.partita && nemico.partita.schermata) {
            for (var i = 0; i < 24; i++) {
                for (var j = 1; j < 11; j++) {
                    var x = j * enemyBlockSize, y = i * enemyBlockSize;
                    if (nemico.partita.schermata[i][j] > 0) {
                        let c = getTetraminoFillStyle(nemico.partita.schermata[i][j]);
                        if (nemico.partita.schermata[i][j] == 255) {
                            c = 0xFF0000;
                        }
                        enemyGraphics.beginFill(c);
                        enemyGraphics.drawRect(enemyOffsetX + x, enemyOffsetY + y, enemyBlockSize - 1, enemyBlockSize - 1);
                    }
                }
            }
            // Draw current
            for (var i = 0; i <= 3; i++) {
                for (var j = 0; j <= 3; j++) {
                    if (tetramini[nemico.partita.tetramino.corrente][nemico.partita.tetramino.rotazione][i][j] == 1) {
                        const
                            x = enemyOffsetX + ((nemico.partita.tetramino.x + j) * enemyBlockSize),
                            y = enemyOffsetY + ((nemico.partita.tetramino.y + i) * enemyBlockSize),
                            c  = getTetraminoFillStyle(nemico.partita.tetramino.corrente + 1);
                        enemyGraphics.beginFill(c);
                        enemyGraphics.drawRect(x, y, enemyBlockSize - 1, enemyBlockSize - 1);
                    }
                }
            }
        }
        enemyGraphics.endFill();

        return enemyGraphics;
    },

    setUpTexts = () => {
        const
            style = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: 128,
                fontStyle: 'italic',
                // fontWeight: 'bold',
                fill: ['#ffffff'], // gradient
                stroke: '#eeeeee',
                strokeThickness: 2,
                dropShadow: true,
                dropShadowColor: '#448888',
                dropShadowBlur: 5,
                dropShadowAngle: Math.PI / 4,
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
        basicText.style = style;
        basicText.x = 100;
        basicText.y = 200;

        txtDesc.text = 'premi spazio ...';
        txtDesc.style = style2;
        txtDesc.x = 100;
        txtDesc.y = 340;


        txtGameOver.text = 'Game Over';
        txtGameOver.style = style;
        txtGameOver.x = 50;
        txtGameOver.y = 240;

        txtLinee.text = 'Linee fatte: 0';
        txtLinee.style = style2;
        txtLinee.x = 550;
        txtLinee.y = 100;

        txtSfidante.text = 'Attesa sfidante';
        txtSfidante.style = style2;
        txtSfidante.x = 50;
        txtSfidante.y = 200;


        introScene.addChild(basicText);
        introScene.addChild(txtDesc);
        app.stage.addChild(introScene);
        introScene.visible = true;

        gameOverScene.addChild(txtGameOver);
        app.stage.addChild(gameOverScene);
        gameOverScene.visible = false;

        gameScene.addChild(txtLinee);
        gameScene.addChild(txtSfidante);
        app.stage.addChild(gameScene);
        gameScene.visible = false;

    },

    setUpKeyboardEvents = () => {
        const
            left = keyboard(37),
            up = keyboard(38),
            right = keyboard(39),
            down = keyboard(40),
            space = keyboard(32);

        left.press = () => { if (state == play){ room.send({ dir: "left"}); } };
        left.release = () => { };
        up.press = () => { };
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
    },

    setupServerCallbacks = () => {
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

        room.listen("players/:uid/winner", (change) => {
            if (change.path["uid"] == client.id) {
                if ((change.operation == "replace") && (change.value == true)) {
                    winner = true;
                } else if ((change.operation == "replace") && (change.value == false)) {
                    winner = false;

                }
            }
        });

        room.listen("statoSfida", (change) => {
            console.log(change);
            if (change.operation == "replace") {
                if (change.value == "ready"){
                    txtSfidante.visible = false;
                };
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
    },

    start = () => {

        setUpTexts();
        setUpKeyboardEvents();
        setupServerCallbacks();
        //Setup gameloop
        document.body.appendChild(app.view);
        app.ticker.add(delta => gameLoop(delta));
    };

start();
