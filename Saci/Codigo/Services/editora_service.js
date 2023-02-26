import editora_persistence from "../Persistence/editora_persistence.js"
async function get_all_editora(){    
    return await editora_persistence.get_all_editora();
}

async function create_editora(nomeEditora, cidadeSede){    
    return await editora_persistence.create_editora(nomeEditora, cidadeSede);
}
async function get_editora(ideditora){    

    return await editora_persistence.get_editora(ideditora);
}

async function del_editora(ideditora){    

    const editora = await get_editora(ideditora)
    

    if(editora[0] != undefined)
    {
        return await editora_persistence.del_editora(ideditora)
    }
    else
    {
        return "editora nao encontrado"
    }
}

export default{get_all_editora, create_editora, get_editora, del_editora}