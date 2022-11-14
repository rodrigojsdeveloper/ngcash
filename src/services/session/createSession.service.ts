import { compare } from "bcrypt"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users"
import { ISessionRequest } from "../../interfaces/session"
import jwt from "jsonwebtoken"
import { AppError } from "../../errors"


const createSessionService = async ({ username, password }: ISessionRequest): Promise<object> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ username })

    if(!user) {

        throw new AppError('Invalid credentials', 401)
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {

        throw new AppError('Invalid credentials', 401)
    }

    const token = jwt.sign({ username }, process.env.SECRET_KEY as string, { expiresIn: '24h', subject: user.id })

    return { token }
}

export { createSessionService }
