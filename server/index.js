const express = require('express');
const path = require("path");
const socketIo = require("socket.io");
const PORT = process.env.PORT || 4000;
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Add the origin of your frontend application
    methods: ["GET", "POST"]
  }
});


app.use(express.static(path.join(__dirname, '../build')));


io.on('connection', (socket) => {
  console.log('A user connected');
  // Handle events (e.g., socket.on('move', ...))
  socket.on('move', (moveData) => {
    // Broadcast the move to all connected clients
    console.log("Move data", moveData)
    io.emit('gameMove', moveData);
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "..", 'build', 'index.html'))
});



server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
