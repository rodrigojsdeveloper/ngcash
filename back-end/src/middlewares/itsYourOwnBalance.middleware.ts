import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { Account } from '../entities/accounts'
import { User } from '../entities/users'
import { AppError } from '../errors'


const itsYourOwnBalanceMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id

    const username = req.username

    const userRepository = AppDataSource.getRepository(User)

    const accountRepository = AppDataSource.getRepository(Account)

    const user = await userRepository.findOneBy({ username })

    const account_token = await accountRepository.findOneBy({ id: user!.accountId.id })

    const account_id = await accountRepository.findOneBy({ id })

    if(account_token?.id != account_id?.id) {

        return res.status(403).json({ message: 'Only the user can see the balance' })
    }

    next()
}

export { itsYourOwnBalanceMiddleware }
