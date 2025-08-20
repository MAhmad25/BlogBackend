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
      user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
      },
      comment: [
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
export default mongoose.model("Like", postSchema);
