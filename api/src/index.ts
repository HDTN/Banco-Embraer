import { app } from "./app";
import { createServer } from "http";
import "reflect-metadata"

const server = createServer(app);

server.listen(3333,  () => {
  console.log(`API SERVER LISTENING AT PORT ${3333}`);
});

