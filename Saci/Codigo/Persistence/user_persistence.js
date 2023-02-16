import bd from "./BD.js"
async function get_all_clients()
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('SELECT * FROM "Cliente"')
        console.log("Get all clients !!! ")
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

async function get_client(cpf)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('SELECT * FROM "Cliente" WHERE cpf=$1', [cpf])
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

async function create_client(cpf, nome, salario)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('INSERT INTO "Cliente" VALUES ($1, $2, $3) RETURNING *', [cpf, nome, salario])
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

async function del_client(cpf)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('DELETE FROM "Cliente" WHERE cpf=$1 RETURNING *', [cpf])
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

async function upt_client(cpf, nome, salario)
{
    const conn = await bd.conectar()

    try{
        const consulta =   await conn.query('UPDATE "Cliente" SET nome = $1, salario = $2  WHERE cpf = $3 RETURNING *', [nome, salario, cpf])
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

export default {get_all_clients, get_client, del_client, upt_client, create_client}
