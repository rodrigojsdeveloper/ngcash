import { AppDataSource } from '../../data-source'
import { Account } from '../../entities/accounts'


const listTransactionsService = async (id: string) => {

    const accountRepository = AppDataSource.getRepository(Account)

    const account = await accountRepository.findOneBy({ id })

    return [ ...account!.creditedTransaction, ...account!.debitedTransaction ]
}

export { listTransactionsService }
