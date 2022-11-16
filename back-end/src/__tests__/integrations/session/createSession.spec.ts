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
    })

    afterAll(async () => await connection.destroy())

    test('', async () => {

        await request(app).post('/users').send(user)

        const response = await request(app).post('/session').send(session)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('token')
    })

    test('', async () => {

        user.username = 'username'

        await request(app).post('/users').send(user)

        const response = await request(app).post('/session').send(user)

        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })
})
