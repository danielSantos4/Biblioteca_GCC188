import express from "express"
import exemplar_controller from "../controllers/exemplar_controller.js"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const router = express.Router()
const __dirname = path.dirname(__filename);

// Exemplar

router.get("/TelaCadastroExemplar/", function(req,res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "../views/TelaCadastroExemplar.html"))
})
router.get("/", exemplar_controller.get_all_exemplar)
router.get("/:id", exemplar_controller.get_exemplar)
router.post("/", exemplar_controller.create_exemplar)
router.get("/delete/:id", exemplar_controller.del_exemplar)
export default router
