import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
      post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
      },
      // ?You should also includes user here
      // user: {
      //       type: mongoose.Schema.Types.ObjectId,
      //       ref: "User",
      // },
      comment: {
            type: String,
            required: true,
            min: 1,
      },
});
export default mongoose.model("Comment", commentSchema);
