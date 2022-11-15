import { listTransactionsKeywordService } from '../../services/transactions/listTransactionsKeyword.service'
import { AppError, handleError } from '../../errors'
import { AppDataSource } from '../../data-source'
import { Request, Response } from 'express'
import { User } from '../../entities/users'


const listTransactionsKeywordController = async (req: Request, res: Response) => {

    try {

        const value: string = req.params.value

        const username = req.username

        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOneBy({ username })

        const listKeyword = await listTransactionsKeywordService(user!.id, value)

        return res.json(listKeyword)

    } catch(err) {

        if(err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export { listTransactionsKeywordController }
