import Server from "./models/server";
const dotenv = require('dotenv');


dotenv.config({ path: '../.env' });

const server = new Server();

