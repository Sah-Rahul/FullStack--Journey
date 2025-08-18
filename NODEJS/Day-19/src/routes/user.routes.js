import { Router } from "express";
import { isAuthenticated, authorize } from "../middleware/auth.js";
import { me, listUsers, blockUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/me", isAuthenticated, me);
router.get("/", isAuthenticated, authorize("admin"), listUsers);
router.patch("/:id/block", isAuthenticated, authorize("admin"), blockUser);

export default router;
