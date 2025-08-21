import Post from "../models/postModel.js";
import Comment from "../models/commentModel.js";
export const createComment = async (req, res) => {
      try {
            // ?You should also includes user here
            const { post, comment } = req.body;
            const newComment = new Comment({
                  post,
                  comment,
            });
            const savedComment = await newComment.save();
            const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true });
            res.status(201).json({
                  success: true,
                  data: updatedPost,
                  message: "Comment added: Post Updated",
            });
      } catch (error) {
            console.log(error.message);
            res.status(500).json({
                  success: false,
                  message: "Unable to make a comment",
            });
      }
};
