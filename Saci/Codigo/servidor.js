import express from "express"
import path from "path"
import { fileURLToPath } from 'url';
import userRouter from "./Routes/user_routes.js"

const servidor = express()

servidor.use( express.json() )
servidor.use(express.urlencoded( {extended: true} ))
servidor.use("/user", userRouter)


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

servidor.listen(3000, servico)

servidor.set('views', path.join(__dirname, 'views'));
servidor.set('view engine', 'ejs')

function servico(){
    console.log("Servidor rodando ... \n")
}

