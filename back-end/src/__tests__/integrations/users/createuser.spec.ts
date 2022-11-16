import { AppDataSource } from '../../../data-source'
import { DataSource } from 'typeorm'
import { user } from '../../mocks'
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

        const response = await request(app).post('/users').send(user)

        expect(response.status).toBe(201)

        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('username')
        expect(response.body).toHaveProperty('password')
        expect(response.body).toHaveProperty('accountId')
    })

    test('', async () => {

        user.username = 'ex'
        
        const response = await request(app).post('/users').send(user)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

    test('', async () => {
        
        user.password = 'ex'
        
        const response = await request(app).post('/users').send(user)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

    test('', async () => {
        
        user.password = 'example123'
        
        const response = await request(app).post('/users').send(user)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })

    test('', async () => {
        
        user.password = 'EXAMPLEexample'
        
        const response = await request(app).post('/users').send(user)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('message')
    })
})
