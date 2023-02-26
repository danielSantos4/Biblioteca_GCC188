import reserva_service from "../Services/reserva_service.js"

async function get_all_reservas(req, res) {
    var row = await reserva_service.get_all_reservas()

    res.render('TelaReserva', {table: row})
}

async function create_reserva(req, res) {
    const email = req.body.email
    const exemplar = req.body.idexemplar
    const dataemprestimo = req.body.dataemprestimo
    const dataesperada = req.body.dataesperada
    const datareal = req.body.datareal
    if(!email || !exemplar || !dataemprestimo || !dataesperada) {
        res.send("Dados invalidos!!")
    }
    else {
        const consulta = await reserva_service.create_reserva(email, exemplar, dataemprestimo, dataesperada, datareal)
        if(consulta == false) {
            console.log('Erro!! Usuario em posse de exemplares com o título a ser emprestado')
        }
        else {
            console.log("feito")
        }
    }
}

async function upt_reserva(req, res) {

}

async function del_reserva(req, res) {
    const idReserva = req.params.id

    if(!idReserva) {
        console.log("Dados incorretos")
    }
    else {
        const consulta = await reserva_service.del_reserva(idReserva)
        res.redirect('/reserva/')
    }
}

export default {get_all_reservas, create_reserva, upt_reserva, del_reserva}