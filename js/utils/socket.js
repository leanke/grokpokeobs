// This file contains utility functions for managing WebSocket connections, enabling real-time data communication.

const socket = new WebSocket('ws://your-websocket-url');

socket.onopen = function(event) {
    console.log('WebSocket is open now.');
};

socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    handleIncomingData(data);
};

socket.onclose = function(event) {
    console.log('WebSocket is closed now.');
};

socket.onerror = function(error) {
    console.error('WebSocket error observed:', error);
};

function handleIncomingData(data) {
    // Process the incoming data and update the UI accordingly
    console.log('Received data:', data);
    // Add your logic to update the UI based on the received data
}

function sendData(data) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(data));
    } else {
        console.error('WebSocket is not open. Unable to send data.');
    }
}