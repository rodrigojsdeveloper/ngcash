import { AppDataSource } from '../../data-source'
import { Account } from '../../entities/accounts'


const listTransactionsKeywordService = async (id: string, value: string) => {

    const accountRepository = AppDataSource.getRepository(Account)

    const account = await accountRepository.findOneBy({ id })

    if(value === 'cash-out') {

        return account!.debitedTransaction
    }

    if(value === 'cash-in') {

        return account!.creditedTransaction
    }
}

export { listTransactionsKeywordService }
