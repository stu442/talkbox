// websocket 임시 서버 (로컬)
// ws://localhost:8080

import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("받음:", message.toString());
    ws.send(`Echo: ${message}`);
  });
});
