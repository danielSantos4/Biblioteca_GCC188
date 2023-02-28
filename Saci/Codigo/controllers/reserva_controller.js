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
    const idreserva = req.body.idreserva
    const email = req.body.email
    const idexemplarvelho = req.body.idexemplarvelho
    const idexemplar = req.body.idexemplar
    const dataemprestimo = req.body.dataemprestimo
    const dataesperada = req.body.dataesperada
    const datareal = req.body.datareal
    console.log(idreserva + '\n' + email + '\n' + idexemplarvelho + '\n' + idexemplar + '\n' + dataemprestimo + '\n' + dataesperada + '\n' + datareal)
    
    var row = await reserva_service.get_reserva(idreserva)
    
    if(!idreserva || !email || !idexemplar || !dataemprestimo || !dataesperada) {
        console.log('Dados estao faltando')
        res.render('TelaUpdateReserva', {table: row, mensagem: 'Dados estao faltando'})
    }
    else {
        var update = await reserva_service.upt_reserva(idreserva, email, idexemplar, idexemplarvelho ,dataemprestimo, dataesperada, datareal)
        console.log(update)
        if(!update || update == undefined || update == false) {
            console.log('erro1')
            res.render('TelaUpdateReserva', {table: row, mensagem: 'Erro no update'})
        }
        else {
            res.redirect('/reserva/')
        }
    }
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

async function upt_pagina(req, res) {
    var id = req.params.id

    if(!id) {
        console.log("Dados invalidos")
    }
    else {
        var row = await reserva_service.get_reserva(id)
        console.log(row)
        res.render('TelaUpdateReserva', {table:row, mensagem: ''})
    }
}
export default {get_all_reservas, create_reserva, upt_reserva, del_reserva, upt_pagina}