import { Router } from "express";
import { postController } from "./post.controller";
import { fileUploader } from "../../../helpars/fileUploader";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = Router();

// Add a new post
router.post(
  '/add-post',
  fileUploader.uploadPost,
  auth(),
  postController.addPost
);

// Get all posts
router.get('/posts', postController.getAllPosts);
router.get('/get-my-posts', postController.getAllPosts);

// Get a post by ID
router.get('/posts/:id', postController.getPostById);

// Update a post by ID
router.put(
  '/update-posts/:id',
  fileUploader.uploadPost,
  auth(),
  postController.updatePost
);

// Delete a post by ID
router.delete(
  '/posts/:id',
  auth(),
  postController.deletePost
);

export const PostRouter = router;
