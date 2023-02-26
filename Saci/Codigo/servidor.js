import express from "express"
import path from "path"
import { fileURLToPath } from 'url';
import userRouter from "./Routes/user_routes.js"
import livroRouter from "./Routes/livro_router.js"
import exemplarRouter from "./Routes/exemplar_router.js"
const servidor = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

servidor.listen(3000, servico)

servidor.set('views', path.join(__dirname, 'views'));
servidor.set('view engine', 'ejs')

servidor.use( express.json() )
servidor.use(express.urlencoded( {extended: true} ))
servidor.use("/user", userRouter)
servidor.use("/livro", livroRouter)
servidor.use("/exemplar", exemplarRouter)
servidor.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "/views/TelaLogin.html"))
})

function servico(){
    console.log("Servidor rodando ... \n")
}

