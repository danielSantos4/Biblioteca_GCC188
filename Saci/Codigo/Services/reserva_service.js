import reserva_persistence from "../Persistence/reserva_persistence.js"
import user_persistence from "../Persistence/user_persistence.js"
import livro_persistence from "../Persistence/livro_persistence.js"
import exemplar_persistence from "../Persistence/exemplar_persistence.js"

async function get_all_reservas() {
    return await reserva_persistence.get_all_reservas()
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
        return await reserva_persistence.create_reserva(id, idexemplar, dataemprestimo, dataesperada)
    }

}

async function upt_reserva() {

}

async function del_reserva(id) {
    return await reserva_persistence.del_reserva(id)
}


export default {get_all_reservas, create_reserva, upt_reserva, del_reserva}