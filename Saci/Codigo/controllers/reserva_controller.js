import reserva_service from "../Services/reserva_service.js"

async function get_all_reservas(req, res) {
    var row = await reserva_service.get_all_reservas()

    res.render('TelaReserva', {table: row})
}

async function create_reserva(req, res) {
    const email = req.body.email
    const nomeLivro = req.body.nomeLivro
    const dataemprestimo = req.body.dataemprestimo
    const dataesperada = req.body.dataesperada

    if(!email || !nomeLivro || !dataemprestimo || !dataesperada) {
        res.render('TelaCadastroReserva')
    }
    else {
        var consulta = await reserva_service.create_reserva(email, nomeLivro, dataemprestimo, dataesperada)
        if(consulta == false) {
            res.render('TelaCadastroReserva')
        }
        else {
            console.log('Create reserva realizado !!!')
            res.redirect('/reserva/')
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