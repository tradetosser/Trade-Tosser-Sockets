const io = require('socket.io-client');

var socket = io('https://tradetosser.com:5000?token=YOUR_API_KEY');
// Connection succeeded
socket.on('connect', () => {
    console.log("Connected to tradetosser.com");
    //console.log(socket);
});
// Connection lost
socket.on('disconnect', () => {
    console.log("Disconnected!");
});

socket.on('BTCUSD', function(data) {
    if(data.text == "CLOSE_DC"){ //If our data provider goes offline
        console.log("BTC/USD data provider offline");
    }else if(data.text == "CLOSE"){ //If the trade we are working with closes
        console.log("Trade has been closed");
    }else if(data.text == "OPEN"){ //If the trade signal is a new trade
        console.log("Trade has been opened");
    }
});

socket.on('pong', function(latency){
    //console.log("Latency: %d ms",latency); // Uncomment this to see the latency between client and server
});