import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
      post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
      },
      // ?You should also includes user here
      // user: {
      //       type: mongoose.Schema.Types.ObjectId,
      //       ref: "User",
      // },
});
export default mongoose.model("Like", likeSchema);
