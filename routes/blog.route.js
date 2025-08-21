import express from "express";
import { createComment } from "../controllers/commentController.js";
import { createLike } from "../controllers/likeController.js";
import { createPost, getAllPosts } from "../controllers/postController.js";
const routes = express.Router();

routes.get("/all-posts", getAllPosts);
routes.post("/create-post", createPost);
routes.post("/create-like", createLike);
routes.post("/create-comment", createComment);
export default routes;
