import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Each schema field has three parts: Type, Validation, Options
// Validators automatically run on only the create() and save() methods
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      minLength: 4, // validate formatting
    },
    published: {
      type: Boolean,
      default: false,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: String,
    tags: [String],
    comments: [
      {
        user: String,
        content: String,
        votes: Number,
      },
    ],
  },
  {
    timestamps: true,
  },
);

blogSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default model("Blog", blogSchema);
