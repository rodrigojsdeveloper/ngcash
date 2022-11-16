import express from 'express'
import { appRoutes } from './routes'
import 'reflect-metadata'
import 'dotenv/config'


const app = express()

app.use(express.json())

appRoutes(app)

export { app }
