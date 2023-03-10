import express from "express"
import livro_controller from "../controllers/livro_controller.js"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const router = express.Router()
const __dirname = path.dirname(__filename);

// Livro
router.get("/TelaCadastroLivro/", function(req,res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "../views/TelaCadastroLivro.html"))
})

router.get("/TelaAlteracaoLivro/", function(req,res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "../views/TelaAlteracaoLivro.html"))
})
router.get("/", livro_controller.get_all_livros)
router.get("/:isbn", livro_controller.get_livro)
router.post("/", livro_controller.create_livro)
router.post("/update/", livro_controller.upt_livro)

export default router
