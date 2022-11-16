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

        const newUser = await request(app).post('/users').send(user)

        const login = await request(app).post('/session').send(session)

        const token: string = login.body.token

        const response = await request(app).post(`/accounts/${ newUser.body.accountId }`).set('Authorization', `Bearer ${ token }`)

        expect(response.status).toBe(200)

        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('balance')
        expect(response.body).toHaveProperty('creditedTransaction')
        expect(response.body).toHaveProperty('debitedTransaction')
    })

    test('', async () => {

        const newUser = await request(app).post('/users').send(user)

        const response = await request(app).post(`/accounts/${ newUser.body.accountId }`)

        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty('message')
    })
})
