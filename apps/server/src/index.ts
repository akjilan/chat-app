// console.log("hello server");

import http from "http";
import socketService from "./services/socket";

async function init() {
  const mySocket = new socketService();
  const httpServer = http.createServer();
  const PORT = process.env.PORT ? process.env.PORT : 8000;

  mySocket.io.attach(httpServer);

  mySocket.initListeners();

  httpServer.listen(PORT, () =>
    console.log(`http server listening on port: ${PORT}`)
  );

}

init();
