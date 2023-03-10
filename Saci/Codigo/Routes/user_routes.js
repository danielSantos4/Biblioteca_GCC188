import express from "express"
import user_controller from "../controllers/user_controller.js"

const router = express.Router()

// USUARIOS
router.get("/", user_controller.get_all_users)
router.get("/:email", user_controller.get_user)
//router.post("/create", user_controller.create_user)
router.post('/create_telacadastro', user_controller.create_telacadastro)
router.post('/create_telaCRUD', user_controller.create_telaCRUD)
//router.delete("/", user_controller.del_user)
//router.delete("/:email", user_controller.del_user)
router.get("/delete/:email", user_controller.del_user)
//router.put("/", user_controller.upt_user)
router.post("/update/", user_controller.upt_user)
router.post("/login/", user_controller.login_user)
router.post("/cadastrar", user_controller.telaCadastrar)

export default router
