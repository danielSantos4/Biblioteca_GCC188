import livro_persistence from "../Persistence/livro_persistence.js"

async function get_all_livros(req, res){    
    return await livro_persistence.get_all_livros();
}
async function get_livro(isbn){
    return await livro_persistence.get_livro(isbn)
}
async function create_livro(isbn, nome, ano, genero, autor, idEditora){
    const livro = await get_livro(isbn)
    if(livro.length == 0){
        return await livro_persistence.create_livro(isbn, nome, ano, genero, autor, idEditora)
    }else{
        return "Já existe livro com esse isbn"
    }
}

async function upt_livro(alterarCpf, cpf, nome, salario){
    const cliente = await getClient(alterarCpf)

    if(cliente.length > 0){
        return await livro_persistence.updateClient(alterarCpf, cpf, nome, salario)
    }else{
        return "Cliente não cadastrado"
    }
}

export default{get_all_livros, create_livro, upt_livro, get_livro}