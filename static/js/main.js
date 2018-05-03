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



let app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);





var bunny = PIXI.Sprite.fromImage('img/star.png')

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);







let
    left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40),
    space = keyboard(32);

left.press = () => { console.log('left press'); };
left.release = () => { console.log('left release');  };

up.press = () => { console.log('up press'); };
up.release = () => { };

right.press = () => { console.log('right press'); };
right.release = () => { };

down.press = () => { console.log('down press'); };
down.release = () => { };

space.press = () => { console.log('space press'); };
space.release = () => { };


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








state = play;
// Listen for animate update
app.ticker.add(delta => gameLoop(delta));
function gameLoop(delta) {
    state(delta);


}

function play(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.rotation += 0.1 * delta;
}


let host = window.document.location.host.replace(/:.*/, ''),
    client = new Colyseus.Client(location.protocol.replace("http", "ws") + host + (location.port ? ':'+location.port : '')),
    room = client.join("tetris");




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
        // system.output.partita = change.value;
    }
});
room.listen("players/:uid/gameOver", (change) => {
    if ((change.operation == "replace") && (change.value == true)){
        room.send({stop: true});
        // system.output.gameState = "gameover";
    }
});

room.listen("players/:uid/schermata/:i/:j", (change) => {
    if (change.operation == "replace"){
        // system.output.partita.schermata[change.path["i"]][change.path["j"]] = change.value;
    }
});
room.listen("players/:uid:/tetramino/:t", function(change)  {
    if (change.operation == "replace"){
        // system.output.partita.tetramino[change.path["t"]] = change.value;
    }
});