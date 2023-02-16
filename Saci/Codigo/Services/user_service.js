import pg from "pg"
import persistence from "../Persistence/user_persistence.js"

async function get_all_users()
{
    return await persistence.get_all_users()
}

async function get_user(cpf)
{
    return await persistence.get_user(cpf)
}

async function create_user(cpf, nome, salario)
{
    const usere = await get_user(cpf)
    console.log(usere[0] + JSON.stringify(usere))

    if(usere[0] == undefined)
    {
        return await persistence.create_user(cpf, nome, salario)
    }
    else
    {
        return "CPF já cadastrado!"
    }
}

async function del_user(cpf)
{
    const usere = await get_user(cpf)

    if(usere[0] != undefined)
    {
        return await persistence.del_user(cpf)
    }
    else
    {
        return "CPF não cadastrado!"
    }
}

async function upt_user(cpf, nome, salario)
{
    const usere = await get_user(cpf)

    if(usere[0] != undefined)
    {
        return await persistence.upt_user(cpf, nome, salario)
    }
    else
    {
        return "usuario não cadastrado!"
    }
    
}

export default {get_all_users, get_user, del_user, upt_user, create_user}
