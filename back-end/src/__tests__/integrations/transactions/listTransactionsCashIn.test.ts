import { session, transaction, user } from '../../../mocks'
import { AppDataSource } from '../../../data-source'
import { DataSource } from 'typeorm'
import { app } from '../../../app'
import request from 'supertest'


describe('Tests for transaction routes', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('Error during Data Source initialization', err))

        await request(app).post('/users').send(user)
    })

    afterAll(async () => await connection.destroy())

    test('Must be able to list transactions cash-in', async () => {

        const login = await request(app).post('/session').send(session)

        const token: string = login.body.token

        const response = await request(app).get('/transactions/cash-in').set('Authorization', `Bearer ${ token }`)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('map')
    })

    test('Must be able to prevent listing transactions cash-in without token', async () => {

        const response = await request(app).get('/transactions/cash-in').send(transaction)

        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })
})
