import { createTransactionService } from '../../../services/transactions/createTransaction.service'
import { createUserService } from '../../../services/users/createUser.service'
import { user, user2, transaction } from '../../mocks'
import { AppDataSource } from '../../../data-source'
import { DataSource } from 'typeorm'


describe('Tests for transaction service', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('Must be able to create a transaction', async () => {

        const newUser = await createUserService(user)

        await createUserService(user2)

        const result = await createTransactionService(newUser!.accountId, transaction)

        expect(result).toHaveProperty('map')
    })
})
