import { listTransactionsCreatedAtService } from '../../services/transactions/listTransactionsCreatedAt.service'
import { AppDataSource } from '../../data-source'
import { Request, Response } from 'express'
import { User } from '../../entities/users'


const listTransactionsCreatedAtController = async (req: Request, res: Response) => {
    
    const username: string = req.username

    const date: string = req.params.date
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ username })

    const listCashOut = await listTransactionsCreatedAtService(user!.accountId.id, date)

    return res.json(listCashOut)
}

export { listTransactionsCreatedAtController }
