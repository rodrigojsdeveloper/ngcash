import { listTransactionsCashOutService } from '../../services/transactions/listTransactionsCashOut.service'
import { AppError, handleError } from '../../errors'
import { AppDataSource } from '../../data-source'
import { Request, Response } from 'express'
import { User } from '../../entities/users'


const listTransactionsCashOutController = async (req: Request, res: Response) => {

    try {

        const username: string = req.username
        
        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOneBy({ username })

        const listCashOut = await listTransactionsCashOutService(user!.accountId.id)

        return res.json(listCashOut)

    } catch(err) {

        if(err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export { listTransactionsCashOutController }
