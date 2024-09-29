import { Server, Socket } from "socket.io";

class socketService {
  private _io: Server;

  constructor() {
    this._io = new Server({
      cors: {
        allowedHeaders:["*"],
        origin:"*"
      },
    });
    // console.log("init socket service");
  }
  public initListeners() {
    console.log("itializing listener");
    const io = this.io;

    io.on("connect", (socket) => {
      console.log("new socket connected",socket.id);
      socket.on("event:message", async ({ message }: { message: any }) => {
        console.log("new message recieved", message);
      });
    });
  }

  get io() {
    return this._io;
  }
}

export default socketService;
