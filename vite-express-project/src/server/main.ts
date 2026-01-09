import express from "express";
import ViteExpress from "vite-express";
import { Server as SocketIOServer} from "socket.io";


const app = express();
const listen_port = 3000;

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});


// Update CORS settings to allow all origins during development
const io = new SocketIOServer({
  cors: {
    origin: (origin, callback) => {
      console.log(`CORS check for origin: ${origin}`);
      const allowedOrigins = [`http://localhost:${listen_port}`];
      if (!origin || allowedOrigins.includes(origin)) {
        // `Origin`が`undefined`または許可リストに含まれている場合は許可
        callback(null, true);
      } else {
        console.log(`CORS blocked origin: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true, // 認証情報を許可
  },
  transports: ["websocket", "polling"],
  path: "/socket.io",
});

// Log updated CORS settings
console.log("CORS settings updated to allow all origins during development.");


const socketNamespace = io.of("/ws")
socketNamespace.on("connection", (socket) => {
  console.log(`New client connected: ${socket.id}`);


  socket.on("message", (msg: string) => {
    console.log(`Received message from ${socket.id}: ${msg}`);
    // Broadcast the message to all connected clients
    socketNamespace.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});


const server = ViteExpress.listen(app, listen_port, () =>
  console.log(`Server is listening on port ${listen_port}...`),
);

io.attach(server);



