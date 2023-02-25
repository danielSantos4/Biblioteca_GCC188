import services from "../Services/user_service.js"

async function get_all_users(req, res)
{
    //res.send(await services.get_all_users())
    var row = await services.get_all_users()
    res.render('TelaCRUDUsuarioAdministrador', {table: row, mensagem:''});
    //res.redirect("/user/login")
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

    if(!email|| !nome || !dataNasc || !senha || (senha != senhaConfirmacao))
    {
        var row = await services.get_all_users()
        res.render('TelaCRUDUsuarioAdministrador', {table: row, mensagem: 'Dados inválidos'})
    }
    else
    {
        const contaExistente = await services.create_user(nome, senha, dataNasc, email)
        var row = await services.get_all_users()
        console.log("log;", contaExistente)
        
        if(contaExistente != false){
            res.render('TelaCRUDUsuarioAdministrador', {table: row, mensagem: 'Cadastro feito com sucesso'})
        }else{
            res.render('TelaCRUDUsuarioAdministrador', {table: row, mensagem: 'Já existe uma conta com esse email'})
            //res.send("Conta conta de email " + email + " já existe")
        }
        //console.log(services.create_user(nome, senha, dataNasc, email))
        //res.redirect("/user")
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
        //res.redirect("/user")
        
        services.del_user(email)
        var row = await services.get_all_users()
        res.render('TelaCRUDUsuarioAdministrador', {table: row, mensagem: 'Usuário de email ' + email + ' foi excluido'})
    }
}

async function upt_user(req, res)
{
    const email = req.body.email
    const nome = req.body.nome
    const dataNasc = req.body.dataNascimento
    const senha = req.body.senha
    console.log(email, nome, dataNasc, senha)
    if(!email || !nome)
    {
        var row = await services.get_all_users()
        res.render('TelaCRUDUsuarioAdministrador', {table: row, mensagem: 'Dados inválidos'})
    }
    else
    {
        const contaFoiAtualizada = await services.upt_user(nome, senha, dataNasc, email)
        var row = await services.get_all_users()
        if(contaFoiAtualizada != false){
            res.render('TelaCRUDUsuarioAdministrador', {table: row, mensagem: 'Conta de email ' + email + ' foi atualizada'})
        }else{
            res.render('TelaCRUDUsuarioAdministrador', {table: row, mensagem: 'Não foi possível atualizar. Não existe conta com esse email'})

        }
    }
}
async function login_user(req, res) {

    const email = req.body.email
    const senha = req.body.senha

    if(!email || !senha){

    }else{
        const tipoDaConta = await services.login_user(email, senha)
        console.log(tipoDaConta)
        if(tipoDaConta != false){
            if(tipoDaConta == "adm"){
                res.redirect("/user")
            }else if(tipoDaConta == "naoEhAdm"){
                console.log("nao implementado")
            }
        }

    }
}
export default {get_all_users, get_user, del_user, upt_user, create_user, login_user}
