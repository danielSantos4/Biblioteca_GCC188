import express from "express"
import editora_controller from "../controllers/editora_controller.js"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const router = express.Router()
const __dirname = path.dirname(__filename);

// Editora

router.get("/TelaCadastroEditora/", function(req,res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "../views/TelaCadastroEditora.html"))
})
router.get("/", editora_controller.get_all_editora)
router.get("/:id", editora_controller.get_editora)
router.post("/", editora_controller.create_editora)
router.get("/delete/:id", editora_controller.del_editora)
export default router