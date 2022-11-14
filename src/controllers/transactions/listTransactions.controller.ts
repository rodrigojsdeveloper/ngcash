import { Request, Response } from "express"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users"
import { listTransactionsService } from "../../services/transactions/listTransactions.service"


const listTransactionsController = async (req: Request, res: Response) => {

    const username = req.username

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ username })

    const listKeyword = await listTransactionsService(user!.id)

    return res.json(listKeyword)
}

export { listTransactionsController }
