import services from "../Services/user_service.js"

async function get_all_users(req, res)
{
    //res.send(await services.get_all_users())
    var row = await services.get_all_users()
    res.render('TelaCRUDUsuarioAdministrador', {table: row});
}


async function get_user(req, res)
{
    const email = req.params.email
    if(!email)
    {
        res.send("Email Inválido!")
    }
    else
    {
        res.send(await services.get_user(email))
    }
}

async function create_user(req, res)
{
    const email = req.body.email
    const nome = req.body.nome
    const dataNasc = req.body.dataNascimento
    const senha = req.body.senha
    const senhaConfirmacao = req.body.senhaConfirmacao
    console.log(email)

    if(!email|| !nome || !dataNasc || !senha || (senha != senhaConfirmacao))
    {
        res.send("Dados Inválidos!")
    }
    else
    {
        res.send(await services.create_user(nome, senha, dataNasc, email))
    }
}

async function del_user(req, res)
{
    /*
    const email = req.body.email
    const email = req.query.email
    */
   const email = req.params.email
    if(!email)
    {
        console.log("Email inválido!")
    }
    else
    {
        res.send(await services.del_user(email))
    }
}

async function upt_user(req, res)
{
    const email = req.body.email
    const nome = req.body.nome
    const dataNasc = req.body.dataNascimento
    const senha = req.body.senha

    if(!email || !nome)
    {
        console.log("Dados inválidos")
    }
    else
    {
        res.send(await services.upt_user(nome, senha, dataNasc, email))
    }
}

export default {get_all_users, get_user, del_user, upt_user, create_user}
