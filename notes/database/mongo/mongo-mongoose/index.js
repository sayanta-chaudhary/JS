// https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose-get-started/

import mongoose from "mongoose";
import Blog from "./models/Blog.js";
import User from "./models/User.js";

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err.message));

// ➕ Creates a new blog post and inserts it into database
// const article = await Blog.create({
//   title: "Awesome Post!",
//   slug: "awesome-post",
//   published: true,
//   // author: "A.B. Cee",
//   content: "This is the best post ever",
//   tag: ["featured", "announcement"],
// });

// 🔍 Find Data
// const articleFound = await Blog.findById({ _id: "69236aca9c7745cff2b9a351" }).exec();

// Specify Document Fields
// const articleProject = await Blog.findById(
//   "69233dffe14e3fa8420ec630",
//   // Projection: select only fields that you need instead of fetching the entire document
//   "title slug content",
// ).exec();
// console.log("Projected Article:", articleProject);

// 📝 Update Data
// article.title = "The Most Awesomest Post!!";
// await article.save();
// // or
// await Blog.updateOne({ title: "The Most Awesomest Post!!" }); // Only the first match
// await Blog.updateMany(
//   { title: "Awesome Post!" },
//   { $set: { title: "The Most Awesomest Post!!" } },
// );
// await Blog.updateMany({}, { $set: { author: "Unknown" } });
// await Blog.updateMany({}, { $unset: { author: "" } });

// 🗑️ Delete Data
// const blogOne = await Blog.deleteOne({ _id: "6925956a353dad38cec79877" });
// const blogMany = await Blog.deleteMany({ slug: "awesome-post" });

// 🧩 Multiple schemas - Joins (implemented by Mongoose)
// const user = await User.create({
//   name: "John Doe",
//   email: "john@email.com",
// });

// const articleWithAuthor = await Blog.create({
//   // Creates a new blog post that references the user as the author
//   title: "Awesome Post!",
//   slug: "Awesome-Post",
//   author: user._id, // Set author value to the user._id
//   content: "This is the best post ever",
//   tags: ["featured", "announcement"],
// });

// const articlePopulate = await Blog.findOne({ title: "Awesome Post!" }).populate("author");
// console.log(articlePopulate);

// 🖕 Mongoose Middleware
// Functions that run before, or during, the execution of async functions at the schema level
// Validator

// Getters/Setters in Mongoose

// Build on this project with more complex queries or document validation
