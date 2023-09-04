import { ExpressServer } from "./services/serverService/ServerService";
import ProducerService from "./services/producerService/ProducerService";

const port = 3001;
const server = new ExpressServer(port);
const kafkaProducer = new ProducerService();

server.start();
kafkaProducer.start();

export { server };
