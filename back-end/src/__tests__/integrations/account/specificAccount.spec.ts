import { AppDataSource } from '../../../data-source'
import { session, user } from '../../mocks'
import { DataSource } from 'typeorm'
import { app } from '../../../app'
import request from 'supertest'


describe('Tests for account routes', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))
    })

    afterAll(async () => await connection.destroy())

    test('Must be able to view a account', async () => {

        const newUser = await request(app).post('/users').send(user)

        const login = await request(app).post('/session').send(session)

        const token: string = login.body.token

        const response = await request(app).get(`/accounts/${ newUser.body.accountId }`).set('Authorization', `Bearer ${ token }`)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('balance')
    })

    test('Must be able to prevent create tokenless account', async () => {

        const newUser = await request(app).post('/users').send(user)

        const response = await request(app).get(`/accounts/${ newUser.body.accountId }`)

        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })
})
