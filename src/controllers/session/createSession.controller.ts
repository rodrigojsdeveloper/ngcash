import { Request, Response } from "express"
import { ISessionRequest } from "../../interfaces/session"
import { createSessionService } from "../../services/session/createSession.service"


const createSessionController = async (req: Request, res: Response) => {

    const user: ISessionRequest = req.body

    const session = await createSessionService(user)

    return res.json(session)
}

export { createSessionController }
