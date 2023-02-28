import reserva_persistence from "../Persistence/reserva_persistence.js"
import user_persistence from "../Persistence/user_persistence.js"
import livro_persistence from "../Persistence/livro_persistence.js"
import exemplar_persistence from "../Persistence/exemplar_persistence.js"

async function get_all_reservas() {
    return await reserva_persistence.get_all_reservas()
}

async function get_reserva(id) {
    return await reserva_persistence.get_reserva(id)
}

async function create_reserva(email, nomeLivro, dataemprestimo, dataesperada) {
    var pegaIdUser = await user_persistence.get_user(email)
    var id = pegaIdUser[0].id

    var pegaExemplarDisponivel = await livro_persistence.get_livro_isbn(nomeLivro)
    var idexemplar = await exemplar_persistence.get_exemplare_disponivel(pegaExemplarDisponivel)

    if(id == undefined || pegaIdUser == undefined) {
        return false
    }
    else {
        var reserva = await reserva_persistence.create_reserva(id, idexemplar, dataemprestimo, dataesperada)
        if(!reserva) {
            return false
        }
        else {
            await exemplar_persistence.atualiza_exemplar_emprestado(idexemplar, false)
            return reserva
        }
    }

}

async function upt_reserva(idreserva, email, idexemplar, idexemplarvelho, dataemprestimo, dataesperada, datareal) {
    let IdUserRow = await user_persistence.get_user(email)
    let IdUser = IdUserRow[0].id
    console.log("idUser: " + IdUser)
    
    if(!idexemplar || idexemplar == undefined) {
        return false
    }

    let existeExemplar = true
    if(idexemplar != idexemplarvelho) {
        existeExemplar = await exemplar_persistence.confere_exemplar(idexemplar)
        console.log(existeExemplar)
    }

    if(existeExemplar) {
        var update = await reserva_persistence.upt_reserva(idreserva, IdUser, idexemplar, dataemprestimo, dataesperada, datareal)
        if(update[0] != undefined) {
            await exemplar_persistence.atualiza_exemplar_emprestado(idexemplarvelho, false)
            await exemplar_persistence.atualiza_exemplar_emprestado(idexemplar, true)
            return update
        }
    }
    return false
}

async function del_reserva(id) {
    return await reserva_persistence.del_reserva(id)
}


export default {get_all_reservas, get_reserva, create_reserva, upt_reserva, del_reserva}