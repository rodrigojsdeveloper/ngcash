import { Router } from 'express'

import { viewProfileController } from '../../controllers/users/viewProfile.controller'
import { createUserController } from '../../controllers/users/createUser.controller'

import { tokenMiddleware } from '../../middlewares/token.middleware'


const routes = Router()

const usersRoutes = () => {

    routes.post('', createUserController)
    routes.get('/profile', tokenMiddleware, viewProfileController)

    return routes
}

export { usersRoutes }
