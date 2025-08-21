import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true,
      },
      body: {
            type: String,
            required: true,
      },
      // ?You should also includes user here
      // ?user: {
      // ?      type: mongoose.Schema.Types.ObjectId,
      //  ?     ref: "User",
      // },
      comments: [
            {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "Comment",
            },
      ],
      likes: [
            {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "Like",
            },
      ],
});
export default mongoose.model("Post", postSchema);
