import express from "express"
import userRouter from "./Routes/user_routes.js"

const servidor = express()

servidor.use( express.json() )
servidor.use(express.urlencoded( {extended: true} ))
servidor.use("/", userRouter)

servidor.listen(3000, servico)

function servico(){
    console.log("Servidor rodando ... \n")
}
