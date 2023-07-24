import request from "supertest";
import { ExpressServer } from "../services/serverService/ServerService";

const appTest = new ExpressServer(3002);

describe("POST send email -> /email/send", () => {
  it("Return a object with data about send a valid email", async () => {
    const opts = {
      to: "python.sendemail0@gmail.com",
      subject: "JEST TEST MAIL",
      message: "test route OK!",
    };

    const sent = await request(appTest.app).post("/email/send").send(opts);

    expect(sent.status).toBe(200);
    expect(sent.body).toEqual({ data: "Rodou" });
  }, 10000);

  it("Return a object a invalid email", async () => {
    const opts = {
      to: "invalid@mail.com",
    };

    const sent = await request(appTest.app).post("/email/send").send(opts);

    expect(sent.status).toBe(500);
    expect(sent.body).toEqual({ msg: "Error to sent mail" });
  }, 10000);
});
