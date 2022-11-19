import { Request, Response } from 'express'
import SwaggerUi from 'swagger-ui-express'
import SwaggerDocs from './swagger.json'
import { appRoutes } from './routes'
import express from 'express'
const cors = require('cors')
import 'reflect-metadata'
import 'dotenv/config'


const app = express()

app.use(express.json())

app.use(cors())

appRoutes(app)

app.use('/docs', SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs))

app.get('/terms', (req: Request, res: Response) => res.json({ message: 'Terms and Services' }))

export { app }
