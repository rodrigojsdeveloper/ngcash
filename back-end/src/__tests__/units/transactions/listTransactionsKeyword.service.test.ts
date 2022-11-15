import { listTransactionsKeywordService } from '../../../services/transactions/listTransactionsKeyword.service'
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

        const userNew = await createUserService(user)

        const result = await listTransactionsKeywordService(userNew.accountId, 'cash-in')

        expect(result).toHaveProperty('map')
    })
})
