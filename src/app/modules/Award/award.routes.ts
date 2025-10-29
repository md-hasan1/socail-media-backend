import express from "express";
import { awardController } from "./award.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { validate } from "node-cron";
import validateRequest from "../../middlewares/validateRequest";
import { createAwardSchema } from "./award.validation";

const router = express.Router();

// Create Award
router.post(
  "/create",
  validateRequest(createAwardSchema),
  auth(), // Only admins can create awards
  awardController.createAward
);

// Get All Awards
router.get("/:id", awardController.getAllAwardsController);

// Get Award by ID
router.get("/:awardId", awardController.getAwardById);

// Update Award
router.put(
  "/:awardId",
  auth(), // Only admins can update awards
  awardController.updateAward
);

// Delete Award
router.delete(
  "/:awardId",
  auth(), // Only admins can delete awards
  awardController.deleteAwardController
);

export const awardRoutes = router;
