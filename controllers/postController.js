import Post from "../models/postModel.js";
export const createPost = async (req, res) => {
      try {
            // ?You should also includes user here
            const { title, body } = req.body;
            const newPost = new Post({
                  title,
                  body,
            });
            const savedPost = await newPost.save();
            res.status(201).json({
                  success: true,
                  data: savedPost,
                  message: "Post created",
            });
      } catch (error) {
            console.log(error.message);
            res.status(500).json({
                  success: false,
                  message: "Unable to create a Post",
            });
      }
};

export const getAllPosts = async (_, res) => {
      try {
            const allPosts = await Post.find().populate("comments").populate("likes");
            res.status(200).json({
                  success: true,
                  data: allPosts,
                  totalPosts: allPosts.length,
            });
      } catch (error) {
            console.error(error.message);
            res.status(500).json({
                  success: false,
                  message: "Unable to fetch all Post",
            });
      }
};
