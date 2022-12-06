import { listTransactionsCashInService } from '../../services/transactions/listTransactionsCashIn.service'
import { AppError, handleError } from '../../errors'
import { AppDataSource } from '../../data-source'
import { Request, Response } from 'express'
import { User } from '../../entities/users'


const listTransactionsCashInController = async (req: Request, res: Response) => {

    try {

        const username: string = req.username
        
        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOneBy({ username })

        const listCashIn = await listTransactionsCashInService(user!.accountId.id)

        return res.json(listCashIn)

    } catch(err) {

        if(err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export { listTransactionsCashInController }
