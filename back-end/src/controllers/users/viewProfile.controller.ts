import { viewProfileService } from '../../services/users/viewProfile.service'
import { AppError, handleError } from '../../errors'
import { Request, Response } from 'express'


const viewProfileController = async (req: Request, res: Response) => {

    try {

        const username: string = req.username

        const profile = await viewProfileService(username)

        return res.json(profile)

    } catch(err) {

        if(err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export { viewProfileController }
