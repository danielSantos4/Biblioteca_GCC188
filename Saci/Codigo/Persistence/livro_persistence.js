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
        console.log("getlivro")
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

async function upt_livro(isbn, nome, ano, genero, autor, idEditora)
{
    const conn = await bd.conectar()

    try{
        console.log("aqui persistence uptlivro")
        const consulta =   await conn.query('UPDATE "livro" SET nome = $2, ano = $3, ideditora = $4, genero = $5, autor = $6 WHERE isbn=$1 RETURNING *', [isbn, nome, ano, idEditora, genero, autor])
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

async function get_livro_isbn(nomeLivro) {
    var conn = await bd.conectar()

    try {
        var consulta = await conn.query('SELECT isbn FROM livro WHERE nome = $1', [nomeLivro])
        return consulta.rows[0].isbn
    }
    catch(err) {
        console.log(err)
    }
    finally {
        conn.release()
    }
}

export default {get_all_livros, create_livro, upt_livro, get_livro, get_livro_isbn}
