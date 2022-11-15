import { specificAccountService } from '../../../services/accounts/specificAccount.service'
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

        const newUser = await createUserService(user)

        const result = await specificAccountService(newUser.accountId)

        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('balance')
        expect(result).toHaveProperty('creditedTransaction')
        expect(result).toHaveProperty('debitedTransaction')
    })
})
