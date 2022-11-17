import { specificAccountService } from '../../../services/accounts/specificAccount.service'
import { createUserService } from '../../../services/users/createUser.service'
import { AppDataSource } from '../../../data-source'
import { DataSource } from 'typeorm'
import { user } from '../../mocks'


describe('Tests for account service', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('Must be able to view a account', async () => {

        const newUser = await createUserService(user)

        const result = await specificAccountService(newUser.accountId)

        expect(result).toHaveProperty('balance')
    })
})
