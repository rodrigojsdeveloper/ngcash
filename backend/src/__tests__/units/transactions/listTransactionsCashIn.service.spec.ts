import { listTransactionsCashInService } from '../../../services/transactions/listTransactionsCashIn.service'
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

    it('Must be able to list transactions cash-in', async () => {

        const newUser = await createUserService(user)

        const result = await listTransactionsCashInService(newUser!.accountId)

        expect(result).toHaveProperty('map')
    })
})
