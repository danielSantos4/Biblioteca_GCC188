import pg from "pg"
import persistence from "../Persistence/user_persistence.js"

async function get_all_users()
{
    return await persistence.get_all_users()
}

async function get_user(email)
{
    return await persistence.get_user(email)
}

async function create_user(nome, senha, dataNasc, email)
{
    const usere = await get_user(email)
    console.log(usere[0] + JSON.stringify(usere))

    if(usere[0] == undefined)
    {
        return await persistence.create_user(nome, senha, dataNasc, email)
    }
    else
    {
        return "email já cadastrado!"
    }
}

async function del_user(email)
{
    const usere = await get_user(email)

    if(usere[0] != undefined)
    {
        return await persistence.del_user(email)
    }
    else
    {
        return "E-mail não cadastrado!"
    }
}

async function upt_user(nome, senha, dataNasc, email)
{
    const usere = await get_user(email)
    console.log(usere.JSON)
    console.log("op")

    if(usere[0] != undefined)
    {
        return await persistence.upt_user(nome, senha, dataNasc, email)
    }
    else
    {
        return "usuario não cadastrado!"
    }
    
}

export default {get_all_users, get_user, del_user, upt_user, create_user}
