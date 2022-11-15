import { AppDataSource } from '../../data-source'
import { Account } from '../../entities/accounts'


const specificAccountService = async (id: string): Promise<String> => {

    const accountRepository = AppDataSource.getRepository(Account)

    const account = await accountRepository.findOneBy({ id })

    return account!.balance
}

export { specificAccountService }
