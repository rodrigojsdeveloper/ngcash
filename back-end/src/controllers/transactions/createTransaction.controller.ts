import { createTransactionService } from '../../services/transactions/createTransaction.service'
import { AppError, handleError } from '../../errors'
import { AppDataSource } from '../../data-source'
import { Account } from '../../entities/accounts'
import { Request, Response } from 'express'
import { User } from '../../entities/users'


const createTransactionController = async (req: Request, res: Response) => {

    try {

        const usernameDebt = req.username

        const { value, username } = req.body

        const userRepository = AppDataSource.getRepository(User)

        const accountRepository = AppDataSource.getRepository(Account)

        const user_debited_id = await userRepository.findOneBy({ username: usernameDebt })

        const user_credited_id = await userRepository.findOneBy({ username })

        const debited_id = await accountRepository.findOneBy({ id: user_debited_id?.accountId })

        const credited_id = await accountRepository.findOneBy({ id: user_credited_id?.accountId })

        const newTransaction = await createTransactionService(debited_id.id, { value, credited_id.id })

        return res.status(201).json(newTransaction)
    
    } catch(err) {

        if(err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export { createTransactionController }
