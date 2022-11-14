import express from 'express'
import 'dotenv/config'
import { appRoutes } from './routes'


const app = express()

app.use(express.json())

appRoutes(app)

export { app }
