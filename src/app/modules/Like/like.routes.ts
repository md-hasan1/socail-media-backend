
import { Router } from "express";
import { fileUploader } from "../../../helpars/fileUploader";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { likeController } from "./like.controller";

const router = Router();

router.post("/:id",auth(),likeController.toggleLike)
// get all my like id 

router.get("/my-likes", auth(),likeController.getAllMyLikeIds)


export const LikeRouter = router;
