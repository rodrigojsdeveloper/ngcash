import { Router } from "express"

import { createSessionController } from "../../controllers/session/createSession.controller"


const routes = Router()

const sessionRoutes = () => {

    routes.post('', createSessionController)

    return routes
}

export { sessionRoutes }
