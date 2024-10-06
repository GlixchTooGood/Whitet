const { Server } = require("socket.io");

const io = new Server();

io.on("connection", (socket) => {
  
});

io.listen(3000);