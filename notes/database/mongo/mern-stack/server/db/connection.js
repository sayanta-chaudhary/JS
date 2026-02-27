import { MongoClient } from "mongodb";

const connectionString = process.env.PROD_DB_URL || "";
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("🟢 Connected to MongoDB");
} catch (err) {
  console.log(err);
}

const db = conn.db("employees");

export default db;
