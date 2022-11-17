import { appRoutes } from './routes'
import express from 'express'
const cors = require('cors')
import 'reflect-metadata'
import 'dotenv/config'


const app = express()

app.use(express.json())

app.use(cors())

appRoutes(app)

export { app }
