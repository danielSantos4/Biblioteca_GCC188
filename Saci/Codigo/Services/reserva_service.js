import reserva_persistence from "../Persistence/reserva_persistence.js"
import user_persistence from "../Persistence/user_persistence.js"

async function get_all_reservas() {
    return await reserva_persistence.get_all_reservas()
}

async function create_reserva(email, exemplar, dataemprestimo, dataesperada, datareal) {
    const confereUser = user_persistence.get_user(email)
    if(confereUser[0].datareal != 'null') {
        return await reserva_persistence.create_reserva(email, exemplar, dataemprestimo, dataesperada, datareal)
    }
    else {
        return false
    }
}

async function upt_reserva() {

}

async function del_reserva(id) {
    return await reserva_persistence.del_reserva(id)
}

export default {get_all_reservas, create_reserva, upt_reserva, del_reserva}