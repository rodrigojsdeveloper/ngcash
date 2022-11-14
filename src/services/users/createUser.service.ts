import { AppDataSource } from "../../data-source"
import { Account } from "../../entities/accounts"
import { User } from "../../entities/users"
import { IUserRequest } from "../../interfaces/users"
import { hash } from "bcrypt"


const createUserService = async ({ username, password }: IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    const accountRepository = AppDataSource.getRepository(Account)

    const account = new Account()
    account.balance = 'R$ 100,00'

    const newAccount = accountRepository.create(account)
    await accountRepository.save(newAccount)

    if(username.length < 3) {

        throw new Error('Username must contain at least 3 characters')
    }

    if(password.length < 8) {

        throw new Error('Password must contain at least 8 characters')
    }

    if(!password.includes("/^[0-9]+$/")) {

        throw new Error('Password must contain 1 number')
    }

    if(!password.includes("/[A-Z]/")) {

        throw new Error('Password must contain 1 uppercase letter')
    }

    const passwordHashed = await hash(password, 10)

    const user = new User()
    user.username = username
    user.password = passwordHashed
    user.accountId = newAccount

    userRepository.create(user)
    await userRepository.save(user)

    return user
}

export { createUserService }
