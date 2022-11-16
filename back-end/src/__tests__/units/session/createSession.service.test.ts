import { createSessionService } from '../../../services/session/createSession.service'
import { createUserService } from '../../../services/users/createUser.service'
import { AppDataSource } from '../../../data-source'
import { user, session } from '../../mocks'
import { DataSource } from 'typeorm'


describe('Tests for session service', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('Must be able to create a session', async () => {

        await createUserService(user)

        const result = await createSessionService(session)

        expect(result).toHaveProperty('token')
    })

    test('Must be able to prevent session', async () => {

        user.username = 'username'
        
        await createUserService(user)

        const result = await createSessionService(session)

        expect(result).toHaveProperty('message')
    })
})
