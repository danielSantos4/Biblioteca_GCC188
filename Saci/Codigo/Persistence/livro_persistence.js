import bd from "./BD.js"
async function get_all_livros()
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('SELECT * FROM livro NATURAL JOIN editora')
        console.log("Get all livros !!! ")
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

async function get_livro(isbn)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('SELECT * FROM livro WHERE isbn=$1', [isbn])
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

async function create_livro(isbn, nome, ano, genero, autor, idEditora)
{
    const conn = await bd.conectar()

    try{
        const consulta = await conn.query('INSERT INTO livro VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [isbn, nome, ano, idEditora, genero, autor])
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

async function upt_livro(nome, senha, dataNasc, email)
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

export default {get_all_livros, create_livro, upt_livro, get_livro}
