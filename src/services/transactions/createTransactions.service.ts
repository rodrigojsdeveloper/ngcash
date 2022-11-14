import { AppDataSource } from "../../data-source"
import { Account } from "../../entities/accounts"
import { Transaction } from "../../entities/transactions"
import { AppError } from "../../errors"
import { ITransactionRequest } from "../../interfaces/transactions"


const createTransactionsService = async (debited_id: string, { value, credited_id }: ITransactionRequest): Promise<Transaction> => {

    const transactionsRepository = AppDataSource.getRepository(Transaction)

    const accountRepository = AppDataSource.getRepository(Account)

    const accountDebited = await accountRepository.findOneBy({ id: debited_id })

    const accountCredited_id = await accountRepository.findOneBy({ id: credited_id })

    if(Number(accountDebited?.balance) < value) {

        throw new AppError('insufficient debt')
    }

    Number(accountDebited?.balance) - value
    Number(accountCredited_id?.balance) + value

    const transaction = new Transaction()
    transaction.creditedAccountId = credited_id
    transaction.debitedAccountId = debited_id
    transaction.value = value
    transaction.createdAt = new Date()

    transactionsRepository.create(transaction)
    await transactionsRepository.save(transaction)

    return transaction
}

export { createTransactionsService }
