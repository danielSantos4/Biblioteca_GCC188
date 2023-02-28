import express from "express"
import reserva_controller from "../controllers/reserva_controller.js"

const router = express.Router()

// Reservas
router.get("/", reserva_controller.get_all_reservas)
router.post("/", reserva_controller.create_reserva)
router.get("/createPage", (req,res) => {
    res.render('TelaCadastroReserva')
})
router.get("/update/:id", reserva_controller.upt_pagina)
router.post("/upt", reserva_controller.upt_reserva)
router.get("/delete/:id", reserva_controller.del_reserva)

export default router