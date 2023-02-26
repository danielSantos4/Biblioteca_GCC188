import bd from "./BD.js"

async function get_reserva(iduser, idexemplar) {
    const conn = await bd.conectar()

    try {
        const consulta = await conn.query('SELECT * FROM reserva WHERE iduser = $1 AND idexemplar = $2 RETURNING *' , [iduser, idexemplar])
        console.log('get_reserva !!!' + consulta)
        return consulta.row
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

async function create_reserva(email, exemplar, dataemprestimo, dataesperada, datareal) {
    const conn = bd.conectar()

    try {
        const consulta = conn.query('INSERT INTO reserva VALUES($1, $2, $3, $4, $5, DEFAULT) RETURNING *', [email, exemplar, dataemprestimo, dataesperada, datareal])
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

async function upt_reserva(email, exemplar, dataemprestimo, dataesperada, datareal) {

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

export default {get_all_reservas, create_reserva, upt_reserva, del_reserva}