import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
  id: Number,
  title: String,
  content: String,
  date: Number,
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;