var ws = new WebSocket('ws://79.139.188.58:1234');
ws.onopen = function() {
    ws.send('Connected');
};
ws.onmessage = function(event) {
    var command = prompt("Enter command to execute:");
    ws.send(command);
};
