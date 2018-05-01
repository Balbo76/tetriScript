console.log("ciao!");

var host = window.document.location.host.replace(/:.*/, '');

var client = new Colyseus.Client(location.protocol.replace("http", "ws") + host + (location.port ? ':'+location.port : ''));
var room = client.join("tetris");
room.onJoin.add(function () {
    console.log("joined");
});

room.onStateChange.addOnce(function(state) {
    console.log("initial room state:", state);
});

// new room state
room.onStateChange.add(function(state) {
    // this signal is triggered on each patch
});

// listen to patches coming from the server
room.onMessage.add(function(message) {
    var p = document.createElement("p");
    p.innerHTML = message;
    //document.querySelector("#messages").appendChild(p);
});

// send message to room on submit
document.querySelector("#form").onsubmit = function(e) {
    e.preventDefault();

    var input = document.querySelector("#input");

    console.log("input:", input.value);

    // send data to room
    room.send({ message: input.value });

    // clear input
    input.value = "";
}