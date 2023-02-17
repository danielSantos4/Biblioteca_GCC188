import bd from "./BD.js"
async function get_all_users()
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('SELECT * FROM "usuario"')
        console.log("Get all users !!! ")
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

async function get_user(email)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('SELECT * FROM "usuario" WHERE email=$1', [email])
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

async function create_user(nome, senha, dataNasc, email)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('INSERT INTO usuario VALUES (DEFAULT, $1, $2, $3, $4, false) RETURNING *', [nome, dataNasc, email, senha])
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

async function del_user(email)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('DELETE FROM usuario WHERE email="carlosteles"', [email])
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

async function upt_user(nome, senha, dataNasc, email)
{
    const conn = await bd.conectar()

    try{
        const consulta =   await conn.query('UPDATE "usuario" SET nome = $1, senha = $2, data_nascimento = $3  WHERE email = $4 RETURNING *', [nome, senha, dataNasc, email])
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

export default {get_all_users, get_user, del_user, upt_user, create_user}
