import { Request, Response } from "express"
import { AppDataSource } from "../../data-source"
import { Account } from "../../entities/accounts"
import { User } from "../../entities/users"
import { AppError, handleError } from "../../errors"
import { ITransactionRequest } from "../../interfaces/transactions"
import { createTransactionsService } from "../../services/transactions/createTransactions.service"


const createTransactionController = async (req: Request, res: Response) => {

    try {

        const usernameDebt = req.username

        const { value, usernameCredit } = req.body

        const userRepository = AppDataSource.getRepository(User)

        const accountRepository = AppDataSource.getRepository(Account)

        const user_debited_id = await userRepository.findOneBy({ username: usernameDebt })

        const user_credited_id = await userRepository.findOneBy({ username: usernameCredit })

        const debited_id = await accountRepository.findOneBy({ id: user_debited_id?.accountId })

        const credited_id = await userRepository.findOneBy({ id: user_credited_id?.accountId })

        const newTransaction = await createTransactionsService(debited_id, { value, credited_id })

        return res.status(201).json(newTransaction)
    
    } catch(err) {

        if(err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export { createTransactionController }
