import editora_service from "../Services/editora_service.js"

async function get_all_editora(req, res){    
    var row = await editora_service.get_all_editora()
    res.render('TelaVisualizarEditora', {table: row});
}

async function get_editora(req, res){
    
    const ideditora = req.params.ideditora
    if(!ideditora)
    {
        res.send("ID inválido!")
    }
    else
    {
        res.send(await editora_service.get_editora(ideditora))
    }
}
async function create_editora(req, res){
    const nomeEditora = req.body.nomeEditora;
    const cidadeSede = req.body.cidadeSede;
        if(!nomeEditora || !cidadeSede){
            res.send("Dados invalidos!!!")
        }else{
            await editora_service.create_editora(nomeEditora, cidadeSede)
            res.redirect('/editora')
        }
}


async function del_editora(req, res){
    
    const ideditora = req.params.id
    console.log("id: "+ ideditora)
    if(!ideditora){
        res.send("Dados invalidos!!! DELETE Editora")
    }else{
        await editora_service.del_editora(ideditora)
        res.redirect('/editora')
    }
}

export default{get_all_editora, create_editora, get_editora, del_editora}