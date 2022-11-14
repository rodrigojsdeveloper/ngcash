import { AppDataSource } from "../../data-source"
import { Account } from "../../entities/accounts"
import { Transaction } from "../../entities/transactions"


const listTransactionsKeywordService = async (id: string, value: string) => {

    const accountRepository = AppDataSource.getRepository(Account)

    const transactionsRepository = AppDataSource.getRepository(Transaction)

    const account = await accountRepository.findOneBy({ id })

    if(value === 'cash-out') {

        return account!.debitedTransaction
    }

    if(value === 'cash-in') {

        return account!.creditedTransaction
    }

    if(await transactionsRepository.findBy({ createdAt: new Date(value) })) {

        return await transactionsRepository.findBy({ createdAt: new Date(value) })
    }
}

export { listTransactionsKeywordService }
