import { createSessionService } from '../../services/session/createSession.service'
import { ISessionRequest } from '../../interfaces/session'
import { AppError, handleError } from '../../errors'
import { Request, Response } from 'express'


const createSessionController = async (req: Request, res: Response) => {

    try {

        const user: ISessionRequest = req.body

        const session = await createSessionService(user)

        return res.json(session)
    
    } catch(err) {

        if(err instanceof AppError) {
            
            handleError(err, res)
        }
    }
}

export { createSessionController }
