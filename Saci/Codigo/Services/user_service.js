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
    
    if(usere[0] == undefined)
    {
        return await persistence.create_user(nome, senha, dataNasc, email)
    }
    else
    {
        return false
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

    if(usere[0] != undefined)
    {
        return await persistence.upt_user(nome, senha, dataNasc, email)
    }
    else
    {
        return false
    }
    
}

async function login_user(email, senha) {
    //alterado antes estava user_persistence
    const user = await persistence.login_user(email,senha)
    if(user[0] != undefined){
        const ehUmAdm = user[0].adm_user
        console.log("aqui:" + ehUmAdm)
       if(ehUmAdm == true){
            return "adm"
        }else{
            return "naoEhAdm"
        }
    }else{
        return false
    }
}
export default {get_all_users, get_user, del_user, upt_user, create_user, login_user}
