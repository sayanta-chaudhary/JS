// https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose-get-started/
import mongoose from "mongoose";

// Cluster → Database → Collection → Document
// Schema → Model → Collection → Documents

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define a Schema (structure of documents)
// Must define each field and its data types
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  // timestamps: true,
});

// Create a Model (provides CRUD methods on the collection)
const User = mongoose.model("User", userSchema); // link schema to collection
// Mongoose automatically changes the collection name to the plural form
// Models take your schema and apply it to each document in its collection
// if the collection doesn't exist, create on first insert; if exists, reuse it

// Use the Model to Perform CRUD operations
await User.create({ name: "John", age: 25 });
const users = await User.find();
console.log(users);
