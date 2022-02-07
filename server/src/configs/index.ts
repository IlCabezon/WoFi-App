//from modules
import dotenv from "dotenv";
dotenv.config();

const { HOST, PORT, MONGO_URI, SECRET } = process.env;

interface IConfig {
  authRequired: boolean;
  auth0Logout: boolean;
  secret: string;
  baseURL: string;
  clientID: string;
  issuerBaseURL: string;
}

const authConfig: IConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: `${SECRET}`,
  baseURL: `http://${HOST}:${PORT}/api`,
  clientID: "5MPmjMd9cvJPgaezqyJsADmOT7rA9vUw",
  issuerBaseURL: "https://workfine.us.auth0.com",
};

export default {
  MONGO_URI: `${MONGO_URI}`,
  PORT: PORT,
  authConfig,
};
