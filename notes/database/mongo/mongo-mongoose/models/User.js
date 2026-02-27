import mongoose from "mongoose";
import validator from "validator";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    minLength: 10,
    required: true,
    lowercase: true,
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  // Normalize email;
  if (user.email) {
    user.email = user.email.trim().toLowerCase();
  }

  // Validate email format
  if (!validator.isEmail(user.email)) {
    return next(new Error("invalid email format"));
  }
});

export default model("User", userSchema);
