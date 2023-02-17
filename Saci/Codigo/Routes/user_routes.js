import express from "express"
import user_controller from "../controllers/user_controller.js"

const router = express.Router()

// USUARIOS
router.get("/", user_controller.get_all_users)
router.get("/:email", user_controller.get_user)
router.post("/", user_controller.create_user)
router.delete("/", user_controller.del_user)
router.put("/", user_controller.upt_user)

export default router