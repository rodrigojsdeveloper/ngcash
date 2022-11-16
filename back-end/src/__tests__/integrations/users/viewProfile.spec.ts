import { AppDataSource } from '../../../data-source'
import { session, user } from '../../mocks'
import { DataSource } from 'typeorm'
import { app } from '../../../app'
import request from 'supertest'


describe('', () => {

    let connection: DataSource

    beforeAll(async () => {

        await AppDataSource.initialize()
        .then(res => connection = res)
        .catch(err => console.error('', err))

        await request(app).post('/users').send(user)
    })

    afterAll(async () => await connection.destroy())

    test('', async () => {

        const login = await request(app).post('/session').send(session)

        const token: string = login.body.token

        const response = await request(app).post('/users').set('Authorization', `Bearer ${ token }`)

        expect(response.status).toBe(200)

        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('username')
        expect(response.body).toHaveProperty('password')
        expect(response.body).toHaveProperty('accountId')
    })

    test('', async () => {

        const response = await request(app).post('/users')

        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })
})
