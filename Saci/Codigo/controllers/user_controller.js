import services from "../Services/user_service.js"

async function get_all_users(req, res)
{
    res.send(await services.get_all_users())
}

async function get_user(req, res)
{
    const cpf = req.params.cpf
    if(!cpf)
    {
        res.send("CPF Inválido!")
    }
    else
    {
        res.send(await services.get_user(cpf))
    }
}

async function create_user(req, res)
{
    const cpf = req.body.cpf
    const nome = req.body.name
    const salario = parseFloat(req.body.salary)

    if(!cpf|| !nome || !salario)
    {
        res.send("Dados Inválidos!")
    }
    else
    {
        res.send(await services.create_user(cpf, nome, salario))
    }
}

async function del_user(req, res)
{
    const cpf = req.params.cpf

    if(!cpf)
    {
        console.log("CPF inválido!")
    }
    else
    {
        res.send(await services.del_user(cpf))
    }
}

async function upt_user(req, res)
{
    const cpf = req.params.cpf
    const nome = req.body.name
    const salario = parseFloat(req.body.salary)

    if(!cpf || !nome || !salario)
    {
        console.log("Dados inválidos")
    }
    else
    {
        res.send(await services.upt_user(cpf, nome, salario))
    }
}

export default {get_all_users, get_user, del_user, upt_user, create_user}
