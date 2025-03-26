import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "localhost";
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });

    socket.on("request_admin", ({ email }) => {
      console.log(`${email} is requesting admin access`);

      // Notify all admins
      io.in("admin").emit("request_admin", `${email} whats to be an admin`);
    });

    // Add more socket event handlers here as needed
    socket.on("message", (msg) => {
      console.log("Message received:", msg);
      io.emit("message", msg); // Example: broadcast to all clients
    });
  });

  httpServer
    .once("error", (err) => {
      console.error("Server error:", err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Server running on http://${hostname}:${port}`);
    });
});
