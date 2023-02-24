import { Router } from "express";
import { methods as usersController } from "../controllers/users.controller";

const router = Router();

router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUser);
export default router;
