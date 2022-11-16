import { createUserService } from '../../../services/users/createUser.service'
import { AppDataSource } from '../../../data-source'
import { DataSource } from 'typeorm'
import { user } from '../../mocks'


describe('Tests for user service', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('Must be able to create a user', async () => {

        const result = await createUserService(user)

        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('username')
        expect(result).toHaveProperty('password')
        expect(result).toHaveProperty('accountId')
    })

    test('Must be able to prevent user creation for having less than 3 characters in username', async () => {

        user.username = 'ex'
        
        const result = await createUserService(user)

        expect(result).toHaveProperty('message')
    })

    test('Must be able to prevent user creation for having less than 8 characters in the password', async () => {
        
        user.password = 'ex'
        
        const result = await createUserService(user)

        expect(result).toHaveProperty('message')
    })

    test('Must be able to prevent user creation from not having capital letters in password', async () => {
        
        user.password = 'example123'
        
        const result = await createUserService(user)

        expect(result).toHaveProperty('message')
    })

    test('Must be able to prevent user creation from not having numbers in password', async () => {
        
        user.password = 'EXAMPLEexample'
        
        const result = await createUserService(user)

        expect(result).toHaveProperty('message')
    })
})
