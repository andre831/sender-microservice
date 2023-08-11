import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;
const regionKey = process.env.REGION_KEY;
const apiKey = process.env.API_KEY;
const mailKey = process.env.MAIL_KEY;

export { secretKey, regionKey, mailKey, apiKey };
