import { listTransactionsKeywordService } from '../../../services/transactions/listTransactionsKeyword.service'
import { createUserService } from '../../../services/users/createUser.service'
import { AppDataSource } from '../../../data-source'
import { DataSource } from 'typeorm'
import { user } from '../../../mocks'


describe('Tests for transaction service', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('Must be able to list transactions keyword', async () => {

        const newUser = await createUserService(user)

        const result = await listTransactionsKeywordService(newUser!.accountId, 'cash-in')

        expect(result).toHaveProperty('map')
    })
})
