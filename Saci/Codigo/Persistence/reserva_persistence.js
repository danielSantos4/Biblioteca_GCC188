import bd from "./BD.js"

async function get_reserva(id) {
    const conn = await bd.conectar()

    try {
        const consulta = await conn.query("SELECT r.id, u.email, r.idexemplar, l.nome, to_char(r.dataemprestimo::date, 'dd/mm/yyyy') as dataemprestimo, to_char(r.dataesperada::date, 'dd/mm/yyyy')as dataesperada, to_char(r.datareal::date, 'dd/mm/yyyy') as datareal FROM reserva AS r INNER JOIN usuario AS u ON r.iduser=u.id INNER JOIN exemplar AS e ON e.id = r.idexemplar INNER JOIN livro AS l on l.isbn = e.isbn WHERE r.id = $1", [id])
        console.log('get_reserva !!!' + consulta)
        return consulta.rows
    }
    catch(err) {
        console.log(err) 
    }
    finally {
        conn.release()
    }
}


async function get_all_reservas() {
    const conn = await bd.conectar()

    try {
        const consulta = await conn.query("SELECT r.id, u.email, r.idexemplar, l.nome, to_char(r.dataemprestimo::date, 'dd/mm/yyyy') as dataemprestimo, to_char(r.dataesperada::date, 'dd/mm/yyyy')as dataesperada, to_char(r.datareal::date, 'dd/mm/yyyy') as datareal FROM reserva AS r INNER JOIN usuario AS u ON r.iduser=u.id INNER JOIN exemplar AS e ON e.id = r.idexemplar INNER JOIN livro AS l on l.isbn = e.isbn ORDER BY r.id")
        console.log(consulta)
        return consulta.rows
    }
    catch(err) {
        console.log("erro" + err)
    }
    finally {
        conn.release()
    }
}

async function create_reserva(iduser, idexemplar, dataemprestimo, dataesperada) {
    const conn = await bd.conectar()

    try {
        const consulta = await conn.query('INSERT INTO reserva VALUES($1, $2, $3, $4, null, DEFAULT) RETURNING *', [iduser, idexemplar, dataemprestimo, dataesperada])
        console.log(consulta)
        return consulta.rows
    }
    catch (err) {
        console.log(err)
    }
    finally {
        conn.release()
    }
}

async function upt_reserva(idreserva, iduser, idexemplar, dataemprestimo, dataesperada, datareal) {
    const conn = await bd.conectar() 

    try {
        let consulta = []
        console.log("DataREAL:   " + datareal)
        if(datareal == undefined || !datareal) {
            consulta = await conn.query('UPDATE reserva SET iduser = $1, idexemplar = $2, dataemprestimo = $3, dataesperada = $4 WHERE id = $5 RETURNING *', [iduser, idexemplar, dataemprestimo, dataesperada, idreserva])
        }
        else {
            consulta = await conn.query('UPDATE reserva SET iduser = $1, idexemplar = $2, dataemprestimo = $3, dataesperada = $4, datareal = $5 WHERE id = $6 RETURNING *', [iduser, idexemplar, dataemprestimo, dataesperada, datareal, idreserva])
        }
        return consulta.rows
    }
    catch(err) {
        console.log(err)
    }
    finally {
        conn.release()
    }
}

async function del_reserva (id) {
    const conn = await bd.conectar() 

    try {
        const consulta = conn.query('DELETE FROM reserva WHERE id = $1 RETURNING *', [id])
        console.log(consulta)
        return consulta.rows
    }
    catch(err) {
        console.log(err)
    }
    finally {
        conn.release()
    }
}

export default {get_all_reservas, get_reserva, create_reserva, upt_reserva, del_reserva}