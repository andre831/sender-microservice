import { KafkaClient, ProduceRequest, Producer } from "kafka-node";

class ProducerService {
  private kafkaProducer: Producer;

  constructor() {
    const kafkaClient = new KafkaClient({ kafkaHost: "localhost:9092" });

    this.kafkaProducer = new Producer(kafkaClient);
  }

  public start(): void {
    this.kafkaProducer.on("ready", () => {
      console.log("Producer started");
    });

    this.kafkaProducer.on("error", (error) => {
      console.log("Producer not works ", error);
    });
  }

  public processMails(message: string, topic: string): void {
    const payload: ProduceRequest[] = [
      {
        topic,
        messages: message,
      },
    ];

    this.kafkaProducer.send(payload, (error, data) => {
      if (error) {
        console.error("Kafka producer send error:", error);
      } else {
        console.log("Message sent:", data);
      }
    });
  }
}

export default ProducerService;
