import { ExpressServer } from "./services/serverService/ServerService";

const port = 3000;
const server = new ExpressServer(port);
server.start();
