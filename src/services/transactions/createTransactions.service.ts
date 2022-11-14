import { AppDataSource } from "../../data-source"
import { Transaction } from "../../entities/transactions"
import { ITransactionRequest } from "../../interfaces/transactions"


const createTransactionsService = async (credited_id: string, debited_id: string, { value }: ITransactionRequest): Promise<Transaction> => {

    const transactionsRepository = AppDataSource.getRepository(Transaction)

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
