import { ITransactionRequest } from '../../interfaces/transactions'
import { Transaction } from '../../entities/transactions'
import { AppDataSource } from '../../data-source'
import { Account } from '../../entities/accounts'
import { User } from '../../entities/users'
import { AppError } from '../../errors'


const createTransactionService = async (debited_id: string, { value, username }: ITransactionRequest): Promise<Transaction> => {

    const transactionsRepository = AppDataSource.getRepository(Transaction)

    const accountRepository = AppDataSource.getRepository(Account)

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ username })

    const accountDebited = await accountRepository.findOneBy({ id: debited_id })

    const accountCredited = await accountRepository.findOneBy({ id: user!.accountId.id })

    if(Number(accountDebited?.balance) < value) {

        throw new AppError('insufficient debt')
    }

    const credit = accountCredited?.balance.split(' ')[1]
    const debt = accountDebited?.balance.split(' ')[1]

    Number(debt) - value
    Number(credit) + value

    const transaction = new Transaction()
    transaction.creditedAccountId = accountCredited!.id
    transaction.debitedAccountId = debited_id
    transaction.value = value
    transaction.createdAt = new Date()

    transactionsRepository.create(transaction)
    await transactionsRepository.save(transaction)

    return transaction
}

export { createTransactionService }
