import axios, { AxiosError } from "axios";
import { ExpressServer } from "../services/serverService/ServerService";

const port = 3030;
const appTest = new ExpressServer(port);
appTest.start();

describe("POST send email -> /email/send", () => {
  it("Return a object with data about send a valid email", async () => {
    const opts = {
      to: "python.sendemail0@gmail.com",
      subject: "JEST TEST MAIL",
      message: "test route OK!",
    };

    const sent = await axios.post(`http://localhost:${port}/email/send`, opts);

    expect(sent.status).toBe(200);
    expect(sent.data).toEqual({ data: "Successful" });
  });

  it("Return a object with error for an invalid email", async () => {
    const opts = {
      to: "invalid_email",
      subject: "JEST TEST MAIL",
      message: "test route OK!",
    };

    try {
      const sent = await axios.post(
        `http://localhost:${port}/email/send`,
        opts
      );

      expect(sent.status).toBe(200);
    } catch (error) {
      const axiosError = error as AxiosError;

      expect(axiosError.response?.status).toBe(500);
      expect(axiosError.response?.data).toEqual({ msg: "Error to send mail" });
    }
  });
});

afterAll(() => {
  appTest.close();
});
