import express from 'express'
import 'dotenv/config'
import { appRoutes } from './routes'
import 'reflect-metadata'


const app = express()

app.use(express.json())

appRoutes(app)

export { app }
