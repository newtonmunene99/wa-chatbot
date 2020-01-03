import { config } from "dotenv";
config();
import { AppServer } from "./AppServer";

const appServer = new AppServer();
appServer.start(3000);
