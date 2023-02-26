import exemplar_service from "../Services/exemplar_service.js"

async function get_all_exemplar(req, res){    
    var row = await exemplar_service.get_all_exemplar()
    res.render('TelaVisualizarExemplar', {table: row});
}

async function get_exemplar(req, res){
    
    const id = req.params.id
    if(!id)
    {
        res.send("ID inválido!")
    }
    else
    {
        res.send(await exemplar_service.get_exemplar(isbn))
    }
}
async function create_exemplar(req, res){
    const isbn = req.body.isbn;

        if(!isbn){
            res.send("Dados invalidos!!!")
        }else{
            await exemplar_service.create_exemplar(isbn)
            res.redirect('/exemplar')
        }
}


async function del_exemplar(req, res){
    
    const id = req.params.id;
    console.log("id: "+ id)
    if(!id){
        res.send("Dados invalidos!!! DELETE EXEMPLAR")
    }else{
        await exemplar_service.del_exemplar(id)
        res.redirect('/exemplar')
    }
}

export default{get_all_exemplar, create_exemplar, get_exemplar, del_exemplar}