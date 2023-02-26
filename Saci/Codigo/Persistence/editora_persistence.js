import bd from "./BD.js"
async function get_all_editora()
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query("SELECT * FROM editora")
        console.log("Get all EDITORA !!! ")
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

async function get_editora(ideditora)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('SELECT * FROM editora WHERE ideditora=$1', [ideditora])
        console.log("GETEDITORA")
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

async function create_editora(nomeEditora, cidadeSede)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query("INSERT INTO editora VALUES (DEFAULT, $1, $2)  RETURNING *", [nomeEditora, cidadeSede])
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

async function del_editora(ideditora)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query("DELETE FROM editora WHERE ideditora=$1 RETURNING *", [ideditora])
        console.log('DELETED EDITORA: ' + consulta.rows)
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

export default {get_all_editora, create_editora, get_editora, del_editora}