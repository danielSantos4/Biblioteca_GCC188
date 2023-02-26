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

export default {get_all_exemplar, create_exemplar, get_exemplar, del_exemplar}