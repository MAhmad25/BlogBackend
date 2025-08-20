import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
      post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
      },
      user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
      },
      content: {
            type: String,
            required: true,
            min: 1,
      },
});
export default mongoose.model("Comment", commentSchema);
