// The handling of environment variables
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URL
    : process.env.MONGODB_URL;

export default { MONGODB_URL, PORT };
