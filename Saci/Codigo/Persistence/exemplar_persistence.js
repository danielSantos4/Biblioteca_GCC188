import bd from "./BD.js"
async function get_all_exemplar()
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query("SELECT * FROM exemplar NATURAL JOIN livro")
        console.log("Get all exemplar !!! ")
        console.log(consulta)
        return consulta.rows
    }
    catch(err)
    {
        console.log(err)
    }
    finally
    {
        conn.release()
    }
}

async function get_exemplar(id)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('SELECT * FROM exemplar WHERE id=$1', [id])
        console.log("getExemplar")
        console.log(consulta.rows)
        return consulta.rows
    }
    catch(err)
    {
        console.log(err)
    }
    finally
    {
        conn.release()
    }
}

async function create_exemplar(isbn)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query("INSERT INTO exemplar VALUES (DEFAULT, $1, 'false')  RETURNING *", [isbn])
        console.log(consulta.rows)
        return consulta.rows
    }
    catch(err)
    {
        console.log(err)
    }
    finally
    {
        conn.release()
    }
}

async function del_exemplar(id)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query("DELETE FROM exemplar WHERE id=$1 RETURNING *", [id])
        console.log('DELETED: ' + consulta.rows)
        return consulta.rows
    }
    catch(err)
    {
        console.log(err)
    }
    finally
    {
        conn.release()
    }
}

async function get_exemplare_disponivel(isbn) {
    var conn = await bd.conectar()

    try {
        var disponiveis = await conn.query("SELECT id FROM exemplar WHERE isbn = $1 AND emprestado = false", [isbn])
        return disponiveis.rows[0].id
    }
    catch(err) {
        console.log(err)
    }
    finally {
        conn.release()
    }
}

async function get_novo_exemplar(id) {
    var conn = await bd.conectar()

    try {
        var isbn = await conn.query("SELECT isbn FROM exemplar WHERE id = $1", [id])
        return await get_exemplare_disponivel(isbn.rows[0].isbn)
    }
    catch(err) {
        console.log(err)
    }
    finally {
        conn.release()
    }
}

async function atualiza_exemplar_emprestado(id, true_or_false) {
    var conn = await bd.conectar()

    try {
        if(true_or_false)
            await conn.query("UPDATE exemplar SET emprestado = true WHERE id = $1", [id])
        else
            await conn.query("UPDATE exemplar SET emprestado = false WHERE id = $1", [id])
    }
    catch(err) {
        console.log(err)
    }
    finally {false
        conn.release()
    }
}

async function confere_exemplar(id) {
    var conn = await bd.conectar()

    try {
        var conf = await conn.query("SELECT emprestado FROM exemplar WHERE id = $1", [id])
        if(conf.rows[0].emprestado == false) {
            return true
        }
        return false
    }
    catch(err) {
        console.log(err)
    }
    finally {
        conn.release()
    }
}



export default {get_all_exemplar, 
    create_exemplar, 
    get_exemplar, 
    del_exemplar, 
    get_exemplare_disponivel, 
    atualiza_exemplar_emprestado, 
    confere_exemplar,
    get_novo_exemplar}