import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";

interface User {
  authorId: string;
  author: string;
}

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const CLIENT_PORT = Number(process.env.CLIENT_PORT) || 3001;

const users: User[] = [];
const app = express();

app.use(
  cors({
    origin: `http://localhost:${CLIENT_PORT}`,
    methods: ["GET", "POST"],
  })
);

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${CLIENT_PORT}`,
    methods: ["GET", "POST"],
  },
});

const updateUsers = () => {
  io.emit("users_list", users);
};

io.on("connection", (socket: Socket) => {
  console.log("Usuário conectado", socket.id);

  socket.on("set_username", (username) => {
    socket.data.username = username;
    users.push({ authorId: socket.id, author: username });
    updateUsers();
  });

  socket.on("users_list", () => {
    updateUsers();
  });

  socket.on("disconnect", (reason) => {
    console.log("User disconnected", socket.id);

    const userIndex = users.findIndex((user) => user.authorId === socket.id);
    if (userIndex >= 0) {
      users.splice(userIndex, 1);
      updateUsers();
    }
  });

  socket.on("message", (text) => {
    io.emit("received_message", {
      text,
      authorId: socket.id,
      author: socket.data.username,
    });
  });
});

server.listen(PORT, () => {
  console.log(`🔥Server running at http://localhost:${PORT}`);
});
