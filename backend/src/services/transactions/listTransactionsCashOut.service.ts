import { Transaction } from '../../entities/transactions'
import { AppDataSource } from '../../data-source'
import { Account } from '../../entities/accounts'


const listTransactionsCashOutService = async (id: string): Promise<Transaction[]> => {

    const accountRepository = AppDataSource.getRepository(Account)

    const account = await accountRepository.findOneBy({ id })

    return account!.debitedTransaction
}

export { listTransactionsCashOutService }
