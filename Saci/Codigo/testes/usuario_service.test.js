import user_service from "../Services/user_service"

test('get_user should return the correct data', async() => {
    let consulta = await user_service.get_user('root@root')
    consulta = consulta[0]
    expect(consulta.email).toBe('root@root                                         ')
    expect(consulta.nome).toBe('root                                              ')
    //expect(consulta).toHaveProperty('email')
})

test('create_user should not create a user that is already in the DB', async() => {
    let consulta = await user_service.create_user('root', 'root', '01/02/2003', 'root@root')
    expect(consulta).toBe(false)
})

test('create_user should create a user that is not already in the DB', async() => {
    let consulta = await user_service.create_user('thiago', '12345', '07/08/2002', 'thiago@thiago')
    consulta = consulta[0]
    expect(consulta.nome).toBe('thiago                                            ')
    expect(consulta.email).toBe('thiago@thiago                                     ')
})

test('update_user should update the data', async() => {
    let consulta = await user_service.upt_user('Thiago', '123', '07/08/2002', 'thiago@thiago')
    consulta = consulta[0]
    expect(consulta.nome).toBe('Thiago                                            ')
    expect(consulta.senha).toBe('123         ')

})

user_service.del_user('thiago@thiago')

/*
test('user_service aaa', async () => {
    let consulta = user_service.teste(5)
    let resposta = 5

    expect(consulta).toBe(resposta)
}

*/
