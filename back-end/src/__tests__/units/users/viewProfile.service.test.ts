import { viewProfileService } from '../../../services/users/viewProfile.service'
import { createUserService } from '../../../services/users/createUser.service'
import { AppDataSource } from '../../../data-source'
import { DataSource } from 'typeorm'
import { user } from '../../../mocks'


describe('Tests for user service', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('Must be able to view a profile', async () => {

        await createUserService(user)

        const result = await viewProfileService(user.username)

        expect(result).toHaveProperty('username')
        expect(result).toHaveProperty('password')
        expect(result).toHaveProperty('accountId')
    })
})
