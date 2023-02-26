import exemplar_persistence from "../Persistence/exemplar_persistence.js"
async function get_all_exemplar(){    
    return await exemplar_persistence.get_all_exemplar();
}

async function create_exemplar(isbn){    
    return await exemplar_persistence.create_exemplar(isbn);
}
async function get_exemplar(id){    

    return await exemplar_persistence.get_exemplar(id);
}

async function del_exemplar(id){    

    const exemplar = await get_exemplar(id)
    

    if(exemplar[0] != undefined)
    {
        return await exemplar_persistence.del_exemplar(id)
    }
    else
    {
        return "Exemplar nao encontrado"
    }
}

export default{get_all_exemplar, create_exemplar, get_exemplar, del_exemplar}