import { specificAccountService } from '../../services/accounts/specificAccount.service'
import { AppError, handleError } from '../../errors'
import { Request, Response } from 'express'


const specificAccountController = async (req: Request, res: Response) => {

    try {

        const id: string = req.params.id

        const specificAccount = await specificAccountService(id)

        return res.json(specificAccount)
    
    } catch(err) {

        if(err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export { specificAccountController }
