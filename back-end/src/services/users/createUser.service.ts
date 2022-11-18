import { IUserRequest } from '../../interfaces/users'
import { AppDataSource } from '../../data-source'
import { Account } from '../../entities/accounts'
import { User } from '../../entities/users'
import { AppError } from '../../errors'
import { hash } from 'bcrypt'


const createUserService = async ({ username, password }: IUserRequest) => {

    const userRepository = AppDataSource.getRepository(User)

    const accountRepository = AppDataSource.getRepository(Account)

    const account = new Account()
    account.balance = 100

    const newAccount = accountRepository.create(account)
    await accountRepository.save(newAccount)

    if(await userRepository.findOneBy({ username })) {

        throw new AppError('Username already exists')
    }

    if(username.length < 3) {

        throw new AppError('Username must contain at least 3 characters')
    }

    if(password.length < 8) {

        throw new AppError('Password must contain at least 8 characters')
    }
    
    const regexUpperCase = /[A-Z]/

    if(!regexUpperCase.test(password)) {

        throw new AppError('Password must contain 1 uppercase letter')
    }

    const passwordHashed = await hash(password, 10)

    const user = new User()
    user.username = username
    user.password = passwordHashed
    user.accountId = newAccount

    userRepository.create(user)
    await userRepository.save(user)

    const newUser = {
        username: user.username,
        password: user.password,
        accountId: newAccount.id
    }

    return newUser
}

export { createUserService }
