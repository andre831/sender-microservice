import { ExpressServer } from "./services/serverService/ServerService";

const port = 3001;
const server = new ExpressServer(port);
server.start();

export { server };
