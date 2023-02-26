import livro_service from "../Services/livro_service.js"

async function get_all_livros(req, res){    
    var row = await livro_service.get_all_livros()
    res.render('TelaVisualizarLivro', {table: row});
}

async function get_livro(req, res){
    
    const isbn = req.params.isbn
    if(!isbn)
    {
        res.send("ISBN Inválido!")
    }
    else
    {
        res.send(await livro_service.get_livro(isbn))
    }
}
async function create_livro(req, res){
    const isbn = req.body.isbn;
    const nome = req.body.nome;
    const ano = req.body.ano;
    const genero = req.body.genero;
    const autor = req.body.autor;
    const idEditora = req.body.ideditora;

        if(!isbn || !nome || !ano || !genero || !autor || !idEditora){
            res.send("Dados invalidos!!!")
        }else{
            await livro_service.create_livro(isbn, nome, ano, genero, autor, idEditora)
            res.redirect('/livro')
        }
}
async function upt_livro(req, res){
    
    const cpf = req.body.cpf;
    const nome = req.body.nome;
    const salario = parseFloat(req.body.salario);
    const alterarCpf = req.params.cpf;
    
    if(!cpf || !nome || !salario){
        res.send("CPF, nome ou salário invalidos!!!")
    }else{
        res.send(await livro_service.updateClient(alterarCpf, cpf, nome, salario)) 
    }
}

export default{get_all_livros, create_livro, upt_livro, get_livro}