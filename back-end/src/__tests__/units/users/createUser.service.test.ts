import { createUserService } from '../../../services/users/createUser.service'
import { AppDataSource } from '../../../data-source'
import { DataSource } from 'typeorm'
import { user } from '../../mocks'


describe('', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('', err))
    })

    afterAll(async () => await connection.destroy())

    test('', async () => {

        const result = await createUserService(user)

        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('username')
        expect(result).toHaveProperty('password')
        expect(result).toHaveProperty('accountId')
    })

    test('', async () => {

        user.username = 'ex'
        
        const result = await createUserService(user)

        expect(result).toHaveProperty('message')
    })

    test('', async () => {
        
        user.password = 'ex'
        
        const result = await createUserService(user)

        expect(result).toHaveProperty('message')
    })

    test('', async () => {
        
        user.password = 'example123'
        
        const result = await createUserService(user)

        expect(result).toHaveProperty('message')
    })

    test('', async () => {
        
        user.password = 'EXAMPLEexample'
        
        const result = await createUserService(user)

        expect(result).toHaveProperty('message')
    })
})
