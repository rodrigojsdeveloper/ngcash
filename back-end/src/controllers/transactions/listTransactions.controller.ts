import { listTransactionsService } from '../../services/transactions/listTransactions.service'
import { AppError, handleError } from '../../errors'
import { AppDataSource } from '../../data-source'
import { Request, Response } from 'express'
import { User } from '../../entities/users'


const listTransactionsController = async (req: Request, res: Response) => {

    try {

        const username = req.username

        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOneBy({ username })

        const listKeyword = await listTransactionsService(user!.id)

        return res.json(listKeyword)
    
    } catch(err) {

        if(err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export { listTransactionsController }
