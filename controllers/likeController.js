import Post from "../models/postModel.js";
import Like from "../models/likeModel.js";
export const createLike = async (req, res) => {
      try {
            // ?You should also includes user here
            const { post } = req.body;
            const newLike = new Like({
                  post,
            });
            const savedLike = await newLike.save();
            const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true });
            res.status(201).json({
                  success: true,
                  data: updatedPost,
                  message: "Likes added: Post Updated",
            });
      } catch (error) {
            console.log(error.message);
            res.status(500).json({
                  success: false,
                  message: "Unable to make a Like",
            });
      }
};
